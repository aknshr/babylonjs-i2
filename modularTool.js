import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Body1, Button, Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTitle, List, ListItem, makeStyles, Spinner, tokens, } from "@fluentui/react-components";
import { ErrorCircleRegular } from "@fluentui/react-icons";
import { createElement, Suspense, useCallback, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Deferred } from "core/Misc/deferred";
import { Logger } from "core/Misc/logger";
import { Theme } from "./components/theme";
import { ExtensionManagerContext } from "./contexts/extensionManagerContext";
import { ExtensionManager } from "./extensibility/extensionManager";
import { SetThemeMode } from "./hooks/themeHooks";
import { ServiceContainer } from "./modularity/serviceContainer";
import { MakeShellServiceDefinition, RootComponentServiceIdentity } from "./services/shellService";
import { ThemeSelectorServiceDefinition } from "./services/themeSelectorService";
// eslint-disable-next-line @typescript-eslint/naming-convention
const useStyles = makeStyles({
    app: {
        colorScheme: "light dark",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
    },
    spinner: {
        flexGrow: 1,
        animationDuration: "1s",
        animationName: {
            from: { opacity: 0 },
            to: { opacity: 1 },
        },
    },
    extensionErrorTitleDiv: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: tokens.spacingHorizontalS,
    },
    extensionErrorIcon: {
        color: tokens.colorPaletteRedForeground1,
    },
});
/**
 * Creates a modular tool with a base set of common tool services, including the toolbar/side pane basic UI layout.
 * @param options The options for the tool.
 * @returns A token that can be used to dispose of the tool.
 */
export function MakeModularTool(options) {
    const { containerElement, serviceDefinitions, themeMode, showThemeSelector = true, extensionFeeds = [] } = options;
    if (themeMode) {
        SetThemeMode(themeMode);
    }
    const modularToolRootComponent = () => {
        const classes = useStyles();
        const [extensionManagerContext, setExtensionManagerContext] = useState();
        const [requiredExtensions, setRequiredExtensions] = useState();
        const [requiredExtensionsDeferred, setRequiredExtensionsDeferred] = useState();
        const [extensionInstallError, setExtensionInstallError] = useState();
        const [rootComponent, setRootComponent] = useState();
        // This is the main async initialization.
        useEffect(() => {
            const initializeExtensionManagerAsync = async () => {
                const serviceContainer = new ServiceContainer("ModularToolContainer");
                // Register the shell service (top level toolbar/side pane UI layout).
                await serviceContainer.addServiceAsync(MakeShellServiceDefinition(options));
                // Register a service that simply consumes the IRootComponentService and sets the root component as state so it can be rendered.
                await serviceContainer.addServiceAsync({
                    friendlyName: "Root Component Bootstrapper",
                    consumes: [RootComponentServiceIdentity],
                    factory: (rootComponentService) => {
                        // Use function syntax for the state setter since the root component may be a function component.
                        setRootComponent(() => rootComponentService.rootComponent);
                        return {
                            dispose: () => setRootComponent(undefined),
                        };
                    },
                });
                // Register the extension list service (for browsing/installing extensions) if extension feeds are provided.
                if (extensionFeeds.length > 0) {
                    const { ExtensionListServiceDefinition } = await import("./services/extensionsListService");
                    await serviceContainer.addServiceAsync(ExtensionListServiceDefinition);
                }
                // Register the theme selector service (for selecting the theme) if theming is configured.
                if (showThemeSelector) {
                    await serviceContainer.addServiceAsync(ThemeSelectorServiceDefinition);
                }
                // Register all external services (that make up a unique tool).
                await serviceContainer.addServicesAsync(...serviceDefinitions);
                // Create the extension manager, passing along the registry for runtime changes to the registered services.
                const extensionManager = await ExtensionManager.CreateAsync(serviceContainer, extensionFeeds, setExtensionInstallError);
                // Check query params for required extensions. This lets users share links with sets of extensions.
                const queryParams = new URLSearchParams(window.location.search);
                const requiredExtensions = queryParams.getAll("babylon.requiredExtension");
                const uninstalledExtensions = [];
                for (const requiredExtension of requiredExtensions) {
                    // These could possibly be parallelized to speed things up, but it's more complex so let's wait and see if we need it.
                    // eslint-disable-next-line no-await-in-loop
                    const query = await extensionManager.queryExtensionsAsync(requiredExtension);
                    // eslint-disable-next-line no-await-in-loop
                    const extensions = await query.getExtensionsAsync(0, query.totalCount);
                    for (const extension of extensions) {
                        if (!extension.isInstalled) {
                            uninstalledExtensions.push(extension);
                        }
                    }
                }
                // Check if any required extensions are uninstalled or disabled. If so, show a dialog to the user.
                if (uninstalledExtensions.length > 0) {
                    setRequiredExtensions(uninstalledExtensions.map((extension) => extension.metadata.name));
                    const deferred = new Deferred();
                    setRequiredExtensionsDeferred(deferred);
                    if (await deferred.promise) {
                        for (const extension of uninstalledExtensions) {
                            // This could possibly be parallelized to speed things up, but it's more complex so let's wait and see if we need it.
                            // eslint-disable-next-line no-await-in-loop
                            await extension.installAsync();
                        }
                    }
                }
                // Set the contexts.
                setExtensionManagerContext({ extensionManager });
                return () => {
                    extensionManager.dispose();
                    serviceContainer.dispose();
                    serviceContainer.dispose();
                };
            };
            const disposePromise = initializeExtensionManagerAsync();
            return () => {
                disposePromise
                    // eslint-disable-next-line github/no-then
                    .then((dispose) => dispose())
                    // eslint-disable-next-line github/no-then
                    .catch((error) => {
                    Logger.Error(`Failed to dispose of the modular tool: ${error}`);
                });
            };
        }, []);
        const onAcceptRequiredExtensions = useCallback(() => {
            setRequiredExtensions(undefined);
            requiredExtensionsDeferred?.resolve(true);
        }, [setRequiredExtensions, requiredExtensionsDeferred]);
        const onRejectRequiredExtensions = useCallback(() => {
            setRequiredExtensions(undefined);
            requiredExtensionsDeferred?.resolve(false);
        }, [setRequiredExtensions, requiredExtensionsDeferred]);
        const onAcknowledgedExtensionInstallError = useCallback(() => {
            setExtensionInstallError(undefined);
        }, [setExtensionInstallError]);
        // Show a spinner until a main view has been set.
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const Content = rootComponent ?? (() => _jsx(Spinner, { className: classes.spinner }));
        return (_jsx(ExtensionManagerContext.Provider, { value: extensionManagerContext, children: _jsx(Theme, { className: classes.app, children: _jsxs(_Fragment, { children: [_jsx(Dialog, { open: !!requiredExtensions, modalType: "alert", children: _jsx(DialogSurface, { children: _jsxs(DialogBody, { children: [_jsx(DialogTitle, { children: "Required Extensions" }), _jsxs(DialogContent, { children: ["Opening this URL requires the following extensions to be installed and enabled:", _jsx("ul", { children: requiredExtensions?.map((name) => _jsx("li", { children: name }, name)) })] }), _jsxs(DialogActions, { children: [_jsx(Button, { appearance: "primary", onClick: onAcceptRequiredExtensions, children: "Install & Enable" }), _jsx(Button, { appearance: "secondary", onClick: onRejectRequiredExtensions, children: "No Thanks" })] })] }) }) }), _jsx(Dialog, { open: !!extensionInstallError, modalType: "alert", children: _jsx(DialogSurface, { children: _jsxs(DialogBody, { children: [_jsx(DialogTitle, { children: _jsxs("div", { className: classes.extensionErrorTitleDiv, children: ["Extension Install Error", _jsx(ErrorCircleRegular, { className: classes.extensionErrorIcon })] }) }), _jsx(DialogContent, { children: _jsxs(List, { children: [_jsx(ListItem, { children: _jsx(Body1, { children: `Extension "${extensionInstallError?.extension.name}" failed to install and was removed.` }) }), _jsx(ListItem, { children: _jsx(Body1, { children: `${extensionInstallError?.error}` }) })] }) }), _jsx(DialogActions, { children: _jsx(Button, { appearance: "primary", onClick: onAcknowledgedExtensionInstallError, children: "Close" }) })] }) }) }), _jsx(Suspense, { fallback: _jsx(Spinner, { className: classes.spinner }), children: _jsx(Content, {}) })] }) }) }));
    };
    // Set the container element to be a flex container so that the tool can be displayed properly.
    const originalContainerElementDisplay = containerElement.style.display;
    containerElement.style.display = "flex";
    // Create and render the react root component.
    const reactRoot = createRoot(containerElement);
    reactRoot.render(createElement(modularToolRootComponent));
    let disposed = false;
    return {
        dispose: () => {
            // Unmount and restore the original container element display.
            if (!disposed) {
                disposed = true;
                reactRoot.unmount();
                containerElement.style.display = originalContainerElementDisplay;
            }
        },
    };
}
//# sourceMappingURL=modularTool.js.map