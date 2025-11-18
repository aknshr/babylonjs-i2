"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["src_services_extensionsListService_tsx"],{

/***/ "./src/services/extensionsListService.tsx":
/*!************************************************!*\
  !*** ./src/services/extensionsListService.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtensionListServiceDefinition: () => (/* binding */ ExtensionListServiceDefinition)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../../node_modules/react/jsx-runtime.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react-components */ "../../../node_modules/@fluentui/react-components/lib/index.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-icons */ "../../../node_modules/@fluentui/react-icons/lib/index.js");
/* harmony import */ var _fluentui_react_motion_components_preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-motion-components-preview */ "../../../node_modules/@fluentui/react-motion-components-preview/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_Misc_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/Misc/logger */ "../core/dist/Misc/logger.js");
/* harmony import */ var shared_ui_components_fluent_primitives_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared-ui-components/fluent/primitives/link */ "../sharedUiComponents/src/fluent/primitives/link.tsx");
/* harmony import */ var _components_teachingMoment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/teachingMoment */ "./src/components/teachingMoment.tsx");
/* harmony import */ var _contexts_extensionManagerContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contexts/extensionManagerContext */ "./src/contexts/extensionManagerContext.ts");
/* harmony import */ var _hooks_teachingMomentHooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/teachingMomentHooks */ "./src/hooks/teachingMomentHooks.ts");
/* harmony import */ var _shellService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shellService */ "./src/services/shellService.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1, _react_refresh_temp_2, _react_refresh_temp_3, _react_refresh_temp_4;
var _react_refresh_temp_5, _react_refresh_temp_6, _react_refresh_temp_7, _react_refresh_temp_8;
_react_refresh_temp_5 = __webpack_require__.$Refresh$.signature();
_react_refresh_temp_6 = __webpack_require__.$Refresh$.signature();
_react_refresh_temp_7 = __webpack_require__.$Refresh$.signature();
_react_refresh_temp_8 = __webpack_require__.$Refresh$.signature();











// eslint-disable-next-line @typescript-eslint/naming-convention
const useStyles = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.makeStyles)({
    extensionButton: {},
    extensionsDialogSurface: {
        height: "auto",
        width: "70vw",
        maxWidth: "600px",
        maxHeight: "70vh",
        backgroundColor: _fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.tokens.colorNeutralBackground2,
    },
    extensionDialogBody: {
        maxWidth: "100%",
        maxHeight: "100%",
    },
    extensionDialogContent: {
        marginLeft: `calc(-1 * ${_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.tokens.spacingHorizontalM})`,
        marginRight: `calc(-1 * ${_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.tokens.spacingHorizontalS})`,
    },
    extensionHeader: {},
    extensionItem: {},
    extensionCardPreview: {
        padding: `${_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.tokens.spacingVerticalM} ${_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.tokens.spacingHorizontalM}`,
        display: "flex",
        flexDirection: "column",
        rowGap: _fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.tokens.spacingVerticalL,
    },
    extensionIntro: {
        display: "flex",
        alignItems: "center",
        columnGap: _fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.tokens.spacingHorizontalM,
    },
    extensionDescription: {
        display: "flex",
        flexDirection: "row",
        columnGap: _fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.tokens.spacingHorizontalS,
    },
    extensionButtonContainer: {
        marginLeft: "auto",
        alignSelf: "flex-start",
    },
    spinner: {
        animationDuration: "1s",
        animationName: {
            from: { opacity: 0 },
            to: { opacity: 1 },
        },
    },
    webResourceDiv: {
        display: "flex",
        flexDirection: "column",
    },
    webResourceLink: {
        display: "flex",
        flexDirection: "row",
        columnGap: _fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.tokens.spacingHorizontalS,
        alignItems: "center",
    },
    personPopoverSurfaceDiv: {
        display: "flex",
        flexDirection: "column",
        rowGap: _fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.tokens.spacingVerticalS,
    },
    accordionHeaderDiv: {
        display: "flex",
        flexDirection: "row",
        columnGap: _fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.tokens.spacingHorizontalS,
        alignItems: "center",
    },
    resourceDetailsDiv: {
        display: "flex",
        flexDirection: "column",
        rowGap: _fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.tokens.spacingVerticalS,
    },
    peopleDetailsDiv: {
        display: "flex",
        flexDirection: "row",
        columnGap: _fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.tokens.spacingHorizontalXL,
    },
    avatarGroupItem: {
        cursor: "pointer",
    },
});
function AsPersonMetadata(person) {
    if (typeof person === "string") {
        return { name: person };
    }
    return person;
}
_react_refresh_temp_1 = AsPersonMetadata;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "AsPersonMetadata");
function usePeopleMetadata(people) {
    _react_refresh_temp_5();
    const definedPeople = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => (people ? people.filter((person) => !!person) : []), [people]);
    //const [peopleMetadataEx, setPeopleMetadataEx] = useState<(PersonMetadata & { avatarUrl?: string })[]>(definedPeople.map(AsPersonMetadata));
    const [peopleMetadataEx] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(definedPeople.map(AsPersonMetadata));
    // TODO: Would be nice if we could pull author/contributor profile pictures from the forum, but need to see if this is ok and whether we want to adjust CORS to allow it.
    // useEffect(() => {
    //     definedPeople.forEach(async (person, index) => {
    //         const personMetadata = AsPersonMetadata(person);
    //         if (personMetadata.forumUserName) {
    //             try {
    //                 const json = await (await fetch(`https://forum.babylonjs.com/u/${personMetadata.forumUserName}.json`)).json();
    //                 const avatarRelativeUrl = json.user?.avatar_template?.replace("{size}", "96");
    //                 if (avatarRelativeUrl) {
    //                     const avatarUrl = `https://forum.babylonjs.com${avatarRelativeUrl}`;
    //                     setPeopleMetadataEx((prev) => {
    //                         const newMetadata = [...prev];
    //                         newMetadata[index] = { ...personMetadata, avatarUrl };
    //                         return newMetadata;
    //                     });
    //                 }
    //             } catch {
    //                 // Ignore, non-fatal
    //             }
    //         }
    //     });
    // }, [definedPeople]);
    return peopleMetadataEx.filter(Boolean);
}
_react_refresh_temp_5(usePeopleMetadata, "7gl6aAfEAGemU9hcHOSPEGgOaso=");
// eslint-disable-next-line @typescript-eslint/naming-convention
const useTeachingMoment = (0,_hooks_teachingMomentHooks__WEBPACK_IMPORTED_MODULE_9__.MakePopoverTeachingMoment)("Extensions");
const WebResource = (props) => {
    _react_refresh_temp_6();
    const { url, urlDisplay, icon, label } = props;
    const classes = useStyles();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: classes.webResourceDiv, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.Tooltip, { content: label, relationship: "label", positioning: "before", withArrow: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classes.webResourceLink, children: [icon, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_link__WEBPACK_IMPORTED_MODULE_6__.Link, { url: url, value: urlDisplay || url })] }) }) }));
};
_react_refresh_temp_2 = WebResource;
__webpack_require__.$Refresh$.register(_react_refresh_temp_2, "WebResource");
_react_refresh_temp_6(WebResource, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, () => [useStyles]);
const PersonDetailsPopover = (props) => {
    _react_refresh_temp_7();
    const { person, title, disabled, children } = props;
    const classes = useStyles();
    if (disabled) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: children });
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.Popover, { withArrow: true, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.PopoverTrigger, { disableButtonEnhancement: true, children: children }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.PopoverSurface, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classes.personPopoverSurfaceDiv, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.Persona, { name: person.name, secondaryText: title }), person.email && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WebResource, { url: `mailto:${person.email}`, urlDisplay: person.email, icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_2__.MailRegular, {}), label: "Email" }), person.url && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WebResource, { url: person.url, urlDisplay: person.url, icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_2__.LinkRegular, {}), label: "Website" }), person.forumUserName && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WebResource, { url: `https://forum.babylonjs.com/u/${person.forumUserName}`, urlDisplay: person.forumUserName, icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_2__.PeopleCommunityRegular, {}), label: "Forum" }))] }) })] }));
};
_react_refresh_temp_3 = PersonDetailsPopover;
__webpack_require__.$Refresh$.register(_react_refresh_temp_3, "PersonDetailsPopover");
_react_refresh_temp_7(PersonDetailsPopover, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, () => [useStyles]);
const ExtensionDetails = (0,react__WEBPACK_IMPORTED_MODULE_4__.memo)((props) => {
    _react_refresh_temp_8();
    const { extension } = props;
    const { metadata } = extension;
    const classes = useStyles();
    const [canInstall, setCanInstall] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [canUninstall, setCanUninstall] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [isStateChanging, setIsStateChanging] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
        const updateState = () => {
            setCanInstall(!extension.isInstalled && !extension.isStateChanging);
            setCanUninstall(extension.isInstalled && !extension.isStateChanging);
            setIsStateChanging(extension.isStateChanging);
        };
        const stateChangedHandlerRegistration = extension.addStateChangedHandler(updateState);
        updateState();
        return stateChangedHandlerRegistration.dispose;
    }, [extension]);
    const [author] = usePeopleMetadata((0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => [metadata.author], [metadata.author]));
    const contributors = usePeopleMetadata(metadata.contributors);
    const hasResourceDetails = metadata.homepage || metadata.repository || metadata.bugs;
    const hasPeopleDetails = author || contributors.length > 0;
    const hasPreviewDetails = hasResourceDetails || hasPeopleDetails;
    const hasAuthorDetails = author?.email || author?.url || author?.forumUserName;
    const subHeader = [metadata.version ? `${metadata.version}` : null, metadata.license ? `${metadata.license}` : null].filter(Boolean).join(" | ");
    const install = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(async () => {
        try {
            await extension.installAsync();
        }
        catch {
        }
    }, [extension]);
    const uninstall = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(async () => {
        try {
            await extension.uninstallAsync();
        }
        catch {
        }
    }, [extension]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.AccordionItem, { className: classes.extensionItem, value: extension.metadata.name, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.AccordionHeader, { className: classes.extensionHeader, expandIconPosition: "end", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classes.accordionHeaderDiv, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.Body1Strong, { children: extension.metadata.name }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_motion_components_preview__WEBPACK_IMPORTED_MODULE_3__.Fade, { visible: extension.isInstalled, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.PresenceBadge, { size: "small" }) })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.AccordionPanel, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.Card, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.CardHeader, { header: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.Body1, { children: metadata.description }), description: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.Caption1, { italic: true, children: subHeader }) }), hasPreviewDetails && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.CardPreview, { className: classes.extensionCardPreview, children: [hasResourceDetails && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classes.resourceDetailsDiv, style: { display: "flex" }, children: [metadata.homepage && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WebResource, { url: metadata.homepage, icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_2__.LinkRegular, {}), label: "Website" }), metadata.repository && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WebResource, { url: metadata.repository, icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_2__.BranchForkRegular, {}), label: "Repository" }), metadata.bugs && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WebResource, { url: metadata.bugs, icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_2__.BugRegular, {}), label: "Report Issues" })] })), hasPeopleDetails && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classes.peopleDetailsDiv, style: { display: "flex" }, children: [author && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PersonDetailsPopover, { person: author, title: "Author", disabled: !hasAuthorDetails, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.Persona, { name: author.name, secondaryText: "Author", style: { cursor: hasAuthorDetails ? "pointer" : "default" } }) })), contributors.length > 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.AvatarGroup, { layout: "stack", children: contributors.map((contributor) => {
                                                return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PersonDetailsPopover, { person: contributor, title: "Contributor", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.AvatarGroupItem, { name: contributor.name, className: classes.avatarGroupItem }) }, contributor.name));
                                            }) }))] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.CardFooter, { children: [canInstall && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.Button, { appearance: "primary", size: "small", icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_2__.ArrowDownloadRegular, {}), onClick: install, children: "Get" })), canUninstall && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.Button, { appearance: "secondary", size: "small", icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_2__.DeleteRegular, {}), onClick: uninstall, children: "Remove" })), isStateChanging && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, { className: classes.spinner, size: "extra-small" })] })] }) })] }));
});
_react_refresh_temp_4 = ExtensionDetails;
__webpack_require__.$Refresh$.register(_react_refresh_temp_4, "ExtensionDetails");
const ExtensionListServiceDefinition = {
    friendlyName: "ExtensionList",
    consumes: [_shellService__WEBPACK_IMPORTED_MODULE_10__.ShellServiceIdentity],
    factory: (shellService) => {
        var _react_refresh_temp_9;
        _react_refresh_temp_9 = __webpack_require__.$Refresh$.signature();
        const registration = shellService.addToolbarItem({
            key: "ExtensionList",
            horizontalLocation: "right",
            verticalLocation: "top",
            suppressTeachingMoment: true,
            order: -200,
            component: _react_refresh_temp_9(() => {
                _react_refresh_temp_9();
                const classes = useStyles();
                const [selectedTab, setSelectedTab] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("available");
                const extensionManager = (0,_contexts_extensionManagerContext__WEBPACK_IMPORTED_MODULE_8__.useExtensionManager)();
                const [extensions, setExtensions] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
                (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
                    if (extensionManager) {
                        const populateExtensionsAsync = async () => {
                            const query = await extensionManager.queryExtensionsAsync(undefined, undefined, selectedTab === "installed");
                            const extensions = await query.getExtensionsAsync(0, query.totalCount);
                            setExtensions(extensions);
                        };
                        // eslint-disable-next-line github/no-then
                        populateExtensionsAsync().catch((error) => {
                            core_Misc_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.Warn(`Failed to populate extensions: ${error}`);
                        });
                    }
                }, [extensionManager, selectedTab]);
                const teachingMoment = useTeachingMoment();
                return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_teachingMoment__WEBPACK_IMPORTED_MODULE_7__.TeachingMoment, { ...teachingMoment, title: "Extensions", description: "Extensions provide new optional features that can be useful to your specific task or workflow. Click this button to manage extensions." }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.Dialog, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.DialogTrigger, { disableButtonEnhancement: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.Tooltip, { content: "Manage Extensions", relationship: "label", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.Button, { ref: teachingMoment.targetRef, className: classes.extensionButton, appearance: "subtle", icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_2__.AppsAddInRegular, {}) }) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.DialogSurface, { className: classes.extensionsDialogSurface, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.DialogBody, { className: classes.extensionDialogBody, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.DialogTitle, { action: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.DialogTrigger, { action: "close", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.Button, { appearance: "subtle", "aria-label": "close", icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_2__.DismissRegular, {}) }) }), children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: ["Extensions", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.TabList, { className: classes.extensionDialogContent, selectedValue: selectedTab, onTabSelect: (event, data) => {
                                                                setSelectedTab(data.value);
                                                            }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.Tab, { value: "available", children: "Available" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.Tab, { value: "installed", children: "Installed" })] })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.DialogContent, { className: classes.extensionDialogContent, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.Accordion, { collapsible: true, children: extensions.map((extension) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ExtensionDetails, { extension: extension }, extension.metadata.name))) }) })] }) })] })] }));
            }, "xD6N5gjlxWN/iuVAkD9rINQUrjs=", false, () => [useStyles, _contexts_extensionManagerContext__WEBPACK_IMPORTED_MODULE_8__.useExtensionManager, useTeachingMoment]),
        });
        return {
            dispose: () => registration.dispose(),
        };
    },
};


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) // removed by dead control flow
{}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NlcnZpY2VzX2V4dGVuc2lvbnNMaXN0U2VydmljZV90c3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUE7QUFpQ0E7QUFXQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTs7QUFPQTs7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUE5QkE7QUFnQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFFQTtBQVVBO0FBZEE7O0FBQUE7QUFnQkE7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBb0JBO0FBNUJBOztBQUFBO0FBOEJBOztBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFnQ0E7QUFLQTtBQXdCQTtBQTdHQTs7QUFpSEE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBNEJBO0FBQ0E7QUFtQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2luc3BlY3Rvci12Mi9zcmMvc2VydmljZXMvZXh0ZW5zaW9uc0xpc3RTZXJ2aWNlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFNlbGVjdFRhYkRhdGEsIFNlbGVjdFRhYkV2ZW50IH0gZnJvbSBcIkBmbHVlbnR1aS9yZWFjdC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB0eXBlIHsgVHJpZ2dlclByb3BzIH0gZnJvbSBcIkBmbHVlbnR1aS9yZWFjdC11dGlsaXRpZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdHlwZSB7IFBlcnNvbk1ldGFkYXRhIH0gZnJvbSBcIi4uL2V4dGVuc2liaWxpdHkvZXh0ZW5zaW9uRmVlZFwiO1xyXG5pbXBvcnQgdHlwZSB7IElFeHRlbnNpb24gfSBmcm9tIFwiLi4vZXh0ZW5zaWJpbGl0eS9leHRlbnNpb25NYW5hZ2VyXCI7XHJcbmltcG9ydCB0eXBlIHsgU2VydmljZURlZmluaXRpb24gfSBmcm9tIFwiLi4vbW9kdWxhcml0eS9zZXJ2aWNlRGVmaW5pdGlvblwiO1xyXG5pbXBvcnQgdHlwZSB7IElTaGVsbFNlcnZpY2UgfSBmcm9tIFwiLi9zaGVsbFNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBBY2NvcmRpb24sXHJcbiAgICBBY2NvcmRpb25IZWFkZXIsXHJcbiAgICBBY2NvcmRpb25JdGVtLFxyXG4gICAgQWNjb3JkaW9uUGFuZWwsXHJcbiAgICBBdmF0YXJHcm91cCxcclxuICAgIEF2YXRhckdyb3VwSXRlbSxcclxuICAgIEJvZHkxLFxyXG4gICAgQm9keTFTdHJvbmcsXHJcbiAgICBCdXR0b24sXHJcbiAgICBDYXB0aW9uMSxcclxuICAgIENhcmQsXHJcbiAgICBDYXJkRm9vdGVyLFxyXG4gICAgQ2FyZEhlYWRlcixcclxuICAgIENhcmRQcmV2aWV3LFxyXG4gICAgRGlhbG9nLFxyXG4gICAgRGlhbG9nQm9keSxcclxuICAgIERpYWxvZ0NvbnRlbnQsXHJcbiAgICBEaWFsb2dTdXJmYWNlLFxyXG4gICAgRGlhbG9nVGl0bGUsXHJcbiAgICBEaWFsb2dUcmlnZ2VyLFxyXG4gICAgbWFrZVN0eWxlcyxcclxuICAgIFBlcnNvbmEsXHJcbiAgICBQb3BvdmVyLFxyXG4gICAgUG9wb3ZlclN1cmZhY2UsXHJcbiAgICBQb3BvdmVyVHJpZ2dlcixcclxuICAgIFByZXNlbmNlQmFkZ2UsXHJcbiAgICBTcGlubmVyLFxyXG4gICAgVGFiLFxyXG4gICAgVGFiTGlzdCxcclxuICAgIHRva2VucyxcclxuICAgIFRvb2x0aXAsXHJcbn0gZnJvbSBcIkBmbHVlbnR1aS9yZWFjdC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBBcHBzQWRkSW5SZWd1bGFyLFxyXG4gICAgQXJyb3dEb3dubG9hZFJlZ3VsYXIsXHJcbiAgICBCcmFuY2hGb3JrUmVndWxhcixcclxuICAgIEJ1Z1JlZ3VsYXIsXHJcbiAgICBEZWxldGVSZWd1bGFyLFxyXG4gICAgRGlzbWlzc1JlZ3VsYXIsXHJcbiAgICBMaW5rUmVndWxhcixcclxuICAgIE1haWxSZWd1bGFyLFxyXG4gICAgUGVvcGxlQ29tbXVuaXR5UmVndWxhcixcclxufSBmcm9tIFwiQGZsdWVudHVpL3JlYWN0LWljb25zXCI7XHJcbmltcG9ydCB7IEZhZGUgfSBmcm9tIFwiQGZsdWVudHVpL3JlYWN0LW1vdGlvbi1jb21wb25lbnRzLXByZXZpZXdcIjtcclxuaW1wb3J0IHsgbWVtbywgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCJjb3JlL01pc2MvbG9nZ2VyXCI7XHJcblxyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInNoYXJlZC11aS1jb21wb25lbnRzL2ZsdWVudC9wcmltaXRpdmVzL2xpbmtcIjtcclxuaW1wb3J0IHsgVGVhY2hpbmdNb21lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy90ZWFjaGluZ01vbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VFeHRlbnNpb25NYW5hZ2VyIH0gZnJvbSBcIi4uL2NvbnRleHRzL2V4dGVuc2lvbk1hbmFnZXJDb250ZXh0XCI7XHJcbmltcG9ydCB7IE1ha2VQb3BvdmVyVGVhY2hpbmdNb21lbnQgfSBmcm9tIFwiLi4vaG9va3MvdGVhY2hpbmdNb21lbnRIb29rc1wiO1xyXG5pbXBvcnQgeyBTaGVsbFNlcnZpY2VJZGVudGl0eSB9IGZyb20gXCIuL3NoZWxsU2VydmljZVwiO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGV4dGVuc2lvbkJ1dHRvbjoge30sXHJcbiAgICBleHRlbnNpb25zRGlhbG9nU3VyZmFjZToge1xyXG4gICAgICAgIGhlaWdodDogXCJhdXRvXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiNzB2d1wiLFxyXG4gICAgICAgIG1heFdpZHRoOiBcIjYwMHB4XCIsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiBcIjcwdmhcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRva2Vucy5jb2xvck5ldXRyYWxCYWNrZ3JvdW5kMixcclxuICAgIH0sXHJcbiAgICBleHRlbnNpb25EaWFsb2dCb2R5OiB7XHJcbiAgICAgICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIG1heEhlaWdodDogXCIxMDAlXCIsXHJcbiAgICB9LFxyXG4gICAgZXh0ZW5zaW9uRGlhbG9nQ29udGVudDoge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6IGBjYWxjKC0xICogJHt0b2tlbnMuc3BhY2luZ0hvcml6b250YWxNfSlgLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiBgY2FsYygtMSAqICR7dG9rZW5zLnNwYWNpbmdIb3Jpem9udGFsU30pYCxcclxuICAgIH0sXHJcbiAgICBleHRlbnNpb25IZWFkZXI6IHt9LFxyXG4gICAgZXh0ZW5zaW9uSXRlbToge30sXHJcbiAgICBleHRlbnNpb25DYXJkUHJldmlldzoge1xyXG4gICAgICAgIHBhZGRpbmc6IGAke3Rva2Vucy5zcGFjaW5nVmVydGljYWxNfSAke3Rva2Vucy5zcGFjaW5nSG9yaXpvbnRhbE19YCxcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIHJvd0dhcDogdG9rZW5zLnNwYWNpbmdWZXJ0aWNhbEwsXHJcbiAgICB9LFxyXG4gICAgZXh0ZW5zaW9uSW50cm86IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGNvbHVtbkdhcDogdG9rZW5zLnNwYWNpbmdIb3Jpem9udGFsTSxcclxuICAgIH0sXHJcbiAgICBleHRlbnNpb25EZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAgY29sdW1uR2FwOiB0b2tlbnMuc3BhY2luZ0hvcml6b250YWxTLFxyXG4gICAgfSxcclxuICAgIGV4dGVuc2lvbkJ1dHRvbkNvbnRhaW5lcjoge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxyXG4gICAgICAgIGFsaWduU2VsZjogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICB9LFxyXG4gICAgc3Bpbm5lcjoge1xyXG4gICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBcIjFzXCIsXHJcbiAgICAgICAgYW5pbWF0aW9uTmFtZToge1xyXG4gICAgICAgICAgICBmcm9tOiB7IG9wYWNpdHk6IDAgfSxcclxuICAgICAgICAgICAgdG86IHsgb3BhY2l0eTogMSB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgd2ViUmVzb3VyY2VEaXY6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgfSxcclxuICAgIHdlYlJlc291cmNlTGluazoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAgY29sdW1uR2FwOiB0b2tlbnMuc3BhY2luZ0hvcml6b250YWxTLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgcGVyc29uUG9wb3ZlclN1cmZhY2VEaXY6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIHJvd0dhcDogdG9rZW5zLnNwYWNpbmdWZXJ0aWNhbFMsXHJcbiAgICB9LFxyXG4gICAgYWNjb3JkaW9uSGVhZGVyRGl2OiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICBjb2x1bW5HYXA6IHRva2Vucy5zcGFjaW5nSG9yaXpvbnRhbFMsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgICByZXNvdXJjZURldGFpbHNEaXY6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIHJvd0dhcDogdG9rZW5zLnNwYWNpbmdWZXJ0aWNhbFMsXHJcbiAgICB9LFxyXG4gICAgcGVvcGxlRGV0YWlsc0Rpdjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAgY29sdW1uR2FwOiB0b2tlbnMuc3BhY2luZ0hvcml6b250YWxYTCxcclxuICAgIH0sXHJcbiAgICBhdmF0YXJHcm91cEl0ZW06IHtcclxuICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBBc1BlcnNvbk1ldGFkYXRhKHBlcnNvbjogc3RyaW5nIHwgUGVyc29uTWV0YWRhdGEpOiBQZXJzb25NZXRhZGF0YSB7XHJcbiAgICBpZiAodHlwZW9mIHBlcnNvbiA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHJldHVybiB7IG5hbWU6IHBlcnNvbiB9IHNhdGlzZmllcyBQZXJzb25NZXRhZGF0YTtcclxuICAgIH1cclxuICAgIHJldHVybiBwZXJzb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZVBlb3BsZU1ldGFkYXRhKHBlb3BsZT86IHJlYWRvbmx5IChzdHJpbmcgfCBQZXJzb25NZXRhZGF0YSB8IHVuZGVmaW5lZClbXSkge1xyXG4gICAgY29uc3QgZGVmaW5lZFBlb3BsZSA9IHVzZU1lbW8oKCkgPT4gKHBlb3BsZSA/IHBlb3BsZS5maWx0ZXIoKHBlcnNvbik6IHBlcnNvbiBpcyBzdHJpbmcgfCBQZXJzb25NZXRhZGF0YSA9PiAhIXBlcnNvbikgOiBbXSksIFtwZW9wbGVdKTtcclxuXHJcbiAgICAvL2NvbnN0IFtwZW9wbGVNZXRhZGF0YUV4LCBzZXRQZW9wbGVNZXRhZGF0YUV4XSA9IHVzZVN0YXRlPChQZXJzb25NZXRhZGF0YSAmIHsgYXZhdGFyVXJsPzogc3RyaW5nIH0pW10+KGRlZmluZWRQZW9wbGUubWFwKEFzUGVyc29uTWV0YWRhdGEpKTtcclxuICAgIGNvbnN0IFtwZW9wbGVNZXRhZGF0YUV4XSA9IHVzZVN0YXRlKGRlZmluZWRQZW9wbGUubWFwKEFzUGVyc29uTWV0YWRhdGEpKTtcclxuXHJcbiAgICAvLyBUT0RPOiBXb3VsZCBiZSBuaWNlIGlmIHdlIGNvdWxkIHB1bGwgYXV0aG9yL2NvbnRyaWJ1dG9yIHByb2ZpbGUgcGljdHVyZXMgZnJvbSB0aGUgZm9ydW0sIGJ1dCBuZWVkIHRvIHNlZSBpZiB0aGlzIGlzIG9rIGFuZCB3aGV0aGVyIHdlIHdhbnQgdG8gYWRqdXN0IENPUlMgdG8gYWxsb3cgaXQuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIGRlZmluZWRQZW9wbGUuZm9yRWFjaChhc3luYyAocGVyc29uLCBpbmRleCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBjb25zdCBwZXJzb25NZXRhZGF0YSA9IEFzUGVyc29uTWV0YWRhdGEocGVyc29uKTtcclxuICAgIC8vICAgICAgICAgaWYgKHBlcnNvbk1ldGFkYXRhLmZvcnVtVXNlck5hbWUpIHtcclxuICAgIC8vICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IChhd2FpdCBmZXRjaChgaHR0cHM6Ly9mb3J1bS5iYWJ5bG9uanMuY29tL3UvJHtwZXJzb25NZXRhZGF0YS5mb3J1bVVzZXJOYW1lfS5qc29uYCkpLmpzb24oKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCBhdmF0YXJSZWxhdGl2ZVVybCA9IGpzb24udXNlcj8uYXZhdGFyX3RlbXBsYXRlPy5yZXBsYWNlKFwie3NpemV9XCIsIFwiOTZcIik7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaWYgKGF2YXRhclJlbGF0aXZlVXJsKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF2YXRhclVybCA9IGBodHRwczovL2ZvcnVtLmJhYnlsb25qcy5jb20ke2F2YXRhclJlbGF0aXZlVXJsfWA7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHNldFBlb3BsZU1ldGFkYXRhRXgoKHByZXYpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld01ldGFkYXRhID0gWy4uLnByZXZdO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgbmV3TWV0YWRhdGFbaW5kZXhdID0geyAuLi5wZXJzb25NZXRhZGF0YSwgYXZhdGFyVXJsIH07XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3TWV0YWRhdGE7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIC8vIElnbm9yZSwgbm9uLWZhdGFsXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH0sIFtkZWZpbmVkUGVvcGxlXSk7XHJcblxyXG4gICAgcmV0dXJuIHBlb3BsZU1ldGFkYXRhRXguZmlsdGVyKEJvb2xlYW4pO1xyXG59XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmNvbnN0IHVzZVRlYWNoaW5nTW9tZW50ID0gTWFrZVBvcG92ZXJUZWFjaGluZ01vbWVudChcIkV4dGVuc2lvbnNcIik7XHJcblxyXG5jb25zdCBXZWJSZXNvdXJjZTogRnVuY3Rpb25Db21wb25lbnQ8eyB1cmw6IHN0cmluZzsgdXJsRGlzcGxheT86IHN0cmluZzsgaWNvbjogSlNYLkVsZW1lbnQ7IGxhYmVsOiBzdHJpbmcgfT4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgdXJsLCB1cmxEaXNwbGF5LCBpY29uLCBsYWJlbCB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53ZWJSZXNvdXJjZURpdn0+XHJcbiAgICAgICAgICAgIDxUb29sdGlwIGNvbnRlbnQ9e2xhYmVsfSByZWxhdGlvbnNoaXA9XCJsYWJlbFwiIHBvc2l0aW9uaW5nPVwiYmVmb3JlXCIgd2l0aEFycm93PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud2ViUmVzb3VyY2VMaW5rfT5cclxuICAgICAgICAgICAgICAgICAgICB7aWNvbn1cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB1cmw9e3VybH0gdmFsdWU9e3VybERpc3BsYXkgfHwgdXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBQZXJzb25EZXRhaWxzUG9wb3ZlcjogRnVuY3Rpb25Db21wb25lbnQ8VHJpZ2dlclByb3BzICYgeyBwZXJzb246IFBlcnNvbk1ldGFkYXRhOyB0aXRsZTogc3RyaW5nOyBkaXNhYmxlZD86IGJvb2xlYW4gfT4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgcGVyc29uLCB0aXRsZSwgZGlzYWJsZWQsIGNoaWxkcmVuIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBpZiAoZGlzYWJsZWQpIHtcclxuICAgICAgICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFBvcG92ZXIgd2l0aEFycm93PlxyXG4gICAgICAgICAgICA8UG9wb3ZlclRyaWdnZXIgZGlzYWJsZUJ1dHRvbkVuaGFuY2VtZW50PntjaGlsZHJlbn08L1BvcG92ZXJUcmlnZ2VyPlxyXG4gICAgICAgICAgICA8UG9wb3ZlclN1cmZhY2U+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wZXJzb25Qb3BvdmVyU3VyZmFjZURpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBlcnNvbmEgbmFtZT17cGVyc29uLm5hbWV9IHNlY29uZGFyeVRleHQ9e3RpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwZXJzb24uZW1haWwgJiYgPFdlYlJlc291cmNlIHVybD17YG1haWx0bzoke3BlcnNvbi5lbWFpbH1gfSB1cmxEaXNwbGF5PXtwZXJzb24uZW1haWx9IGljb249ezxNYWlsUmVndWxhciAvPn0gbGFiZWw9XCJFbWFpbFwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIHtwZXJzb24udXJsICYmIDxXZWJSZXNvdXJjZSB1cmw9e3BlcnNvbi51cmx9IHVybERpc3BsYXk9e3BlcnNvbi51cmx9IGljb249ezxMaW5rUmVndWxhciAvPn0gbGFiZWw9XCJXZWJzaXRlXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAge3BlcnNvbi5mb3J1bVVzZXJOYW1lICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFdlYlJlc291cmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e2BodHRwczovL2ZvcnVtLmJhYnlsb25qcy5jb20vdS8ke3BlcnNvbi5mb3J1bVVzZXJOYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxEaXNwbGF5PXtwZXJzb24uZm9ydW1Vc2VyTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249ezxQZW9wbGVDb21tdW5pdHlSZWd1bGFyIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGb3J1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1BvcG92ZXJTdXJmYWNlPlxyXG4gICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBFeHRlbnNpb25EZXRhaWxzOiBGdW5jdGlvbkNvbXBvbmVudDx7IGV4dGVuc2lvbjogSUV4dGVuc2lvbiB9PiA9IG1lbW8oKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGV4dGVuc2lvbiB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCB7IG1ldGFkYXRhIH0gPSBleHRlbnNpb247XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IFtjYW5JbnN0YWxsLCBzZXRDYW5JbnN0YWxsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjYW5Vbmluc3RhbGwsIHNldENhblVuaW5zdGFsbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNTdGF0ZUNoYW5naW5nLCBzZXRJc1N0YXRlQ2hhbmdpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlU3RhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENhbkluc3RhbGwoIWV4dGVuc2lvbi5pc0luc3RhbGxlZCAmJiAhZXh0ZW5zaW9uLmlzU3RhdGVDaGFuZ2luZyk7XHJcbiAgICAgICAgICAgIHNldENhblVuaW5zdGFsbChleHRlbnNpb24uaXNJbnN0YWxsZWQgJiYgIWV4dGVuc2lvbi5pc1N0YXRlQ2hhbmdpbmcpO1xyXG4gICAgICAgICAgICBzZXRJc1N0YXRlQ2hhbmdpbmcoZXh0ZW5zaW9uLmlzU3RhdGVDaGFuZ2luZyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhdGVDaGFuZ2VkSGFuZGxlclJlZ2lzdHJhdGlvbiA9IGV4dGVuc2lvbi5hZGRTdGF0ZUNoYW5nZWRIYW5kbGVyKHVwZGF0ZVN0YXRlKTtcclxuICAgICAgICB1cGRhdGVTdGF0ZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gc3RhdGVDaGFuZ2VkSGFuZGxlclJlZ2lzdHJhdGlvbi5kaXNwb3NlO1xyXG4gICAgfSwgW2V4dGVuc2lvbl0pO1xyXG5cclxuICAgIGNvbnN0IFthdXRob3JdID0gdXNlUGVvcGxlTWV0YWRhdGEodXNlTWVtbygoKSA9PiBbbWV0YWRhdGEuYXV0aG9yXSwgW21ldGFkYXRhLmF1dGhvcl0pKTtcclxuICAgIGNvbnN0IGNvbnRyaWJ1dG9ycyA9IHVzZVBlb3BsZU1ldGFkYXRhKG1ldGFkYXRhLmNvbnRyaWJ1dG9ycyk7XHJcblxyXG4gICAgY29uc3QgaGFzUmVzb3VyY2VEZXRhaWxzID0gbWV0YWRhdGEuaG9tZXBhZ2UgfHwgbWV0YWRhdGEucmVwb3NpdG9yeSB8fCBtZXRhZGF0YS5idWdzO1xyXG4gICAgY29uc3QgaGFzUGVvcGxlRGV0YWlscyA9IGF1dGhvciB8fCBjb250cmlidXRvcnMubGVuZ3RoID4gMDtcclxuICAgIGNvbnN0IGhhc1ByZXZpZXdEZXRhaWxzID0gaGFzUmVzb3VyY2VEZXRhaWxzIHx8IGhhc1Blb3BsZURldGFpbHM7XHJcbiAgICBjb25zdCBoYXNBdXRob3JEZXRhaWxzID0gYXV0aG9yPy5lbWFpbCB8fCBhdXRob3I/LnVybCB8fCBhdXRob3I/LmZvcnVtVXNlck5hbWU7XHJcbiAgICBjb25zdCBzdWJIZWFkZXIgPSBbbWV0YWRhdGEudmVyc2lvbiA/IGAke21ldGFkYXRhLnZlcnNpb259YCA6IG51bGwsIG1ldGFkYXRhLmxpY2Vuc2UgPyBgJHttZXRhZGF0YS5saWNlbnNlfWAgOiBudWxsXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiB8IFwiKTtcclxuXHJcbiAgICBjb25zdCBpbnN0YWxsID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGV4dGVuc2lvbi5pbnN0YWxsQXN5bmMoKTtcclxuICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgLy8gSWdub3JlIGVycm9ycy4gT3RoZXIgcGFydHMgb2YgdGhlIGluZnJhc3RydWN0dXJlIGhhbmRsZSB0aGVtIGFuZCBjb21tdW5pY2F0ZSB0aGVtIHRvIHRoZSB1c2VyLlxyXG4gICAgICAgIH1cclxuICAgIH0sIFtleHRlbnNpb25dKTtcclxuXHJcbiAgICBjb25zdCB1bmluc3RhbGwgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgZXh0ZW5zaW9uLnVuaW5zdGFsbEFzeW5jKCk7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIC8vIElnbm9yZSBlcnJvcnMuIE90aGVyIHBhcnRzIG9mIHRoZSBpbmZyYXN0cnVjdHVyZSBoYW5kbGUgdGhlbSBhbmQgY29tbXVuaWNhdGUgdGhlbSB0byB0aGUgdXNlci5cclxuICAgICAgICB9XHJcbiAgICB9LCBbZXh0ZW5zaW9uXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QWNjb3JkaW9uSXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuZXh0ZW5zaW9uSXRlbX0gdmFsdWU9e2V4dGVuc2lvbi5tZXRhZGF0YS5uYW1lfT5cclxuICAgICAgICAgICAgPEFjY29yZGlvbkhlYWRlciBjbGFzc05hbWU9e2NsYXNzZXMuZXh0ZW5zaW9uSGVhZGVyfSBleHBhbmRJY29uUG9zaXRpb249XCJlbmRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjY29yZGlvbkhlYWRlckRpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJvZHkxU3Ryb25nPntleHRlbnNpb24ubWV0YWRhdGEubmFtZX08L0JvZHkxU3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGYWRlIHZpc2libGU9e2V4dGVuc2lvbi5pc0luc3RhbGxlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcmVzZW5jZUJhZGdlIHNpemU9XCJzbWFsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQWNjb3JkaW9uSGVhZGVyPlxyXG4gICAgICAgICAgICA8QWNjb3JkaW9uUGFuZWw+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBoZWFkZXI9ezxCb2R5MT57bWV0YWRhdGEuZGVzY3JpcHRpb259PC9Cb2R5MT59IGRlc2NyaXB0aW9uPXs8Q2FwdGlvbjEgaXRhbGljPntzdWJIZWFkZXJ9PC9DYXB0aW9uMT59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2hhc1ByZXZpZXdEZXRhaWxzICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRQcmV2aWV3IGNsYXNzTmFtZT17Y2xhc3Nlcy5leHRlbnNpb25DYXJkUHJldmlld30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGFzUmVzb3VyY2VEZXRhaWxzICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yZXNvdXJjZURldGFpbHNEaXZ9IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWV0YWRhdGEuaG9tZXBhZ2UgJiYgPFdlYlJlc291cmNlIHVybD17bWV0YWRhdGEuaG9tZXBhZ2V9IGljb249ezxMaW5rUmVndWxhciAvPn0gbGFiZWw9XCJXZWJzaXRlXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXRhZGF0YS5yZXBvc2l0b3J5ICYmIDxXZWJSZXNvdXJjZSB1cmw9e21ldGFkYXRhLnJlcG9zaXRvcnl9IGljb249ezxCcmFuY2hGb3JrUmVndWxhciAvPn0gbGFiZWw9XCJSZXBvc2l0b3J5XCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXRhZGF0YS5idWdzICYmIDxXZWJSZXNvdXJjZSB1cmw9e21ldGFkYXRhLmJ1Z3N9IGljb249ezxCdWdSZWd1bGFyIC8+fSBsYWJlbD1cIlJlcG9ydCBJc3N1ZXNcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGFzUGVvcGxlRGV0YWlscyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGVvcGxlRGV0YWlsc0Rpdn0gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthdXRob3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcnNvbkRldGFpbHNQb3BvdmVyIHBlcnNvbj17YXV0aG9yfSB0aXRsZT1cIkF1dGhvclwiIGRpc2FibGVkPXshaGFzQXV0aG9yRGV0YWlsc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcnNvbmEgbmFtZT17YXV0aG9yLm5hbWV9IHNlY29uZGFyeVRleHQ9XCJBdXRob3JcIiBzdHlsZT17eyBjdXJzb3I6IGhhc0F1dGhvckRldGFpbHMgPyBcInBvaW50ZXJcIiA6IFwiZGVmYXVsdFwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BlcnNvbkRldGFpbHNQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udHJpYnV0b3JzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhckdyb3VwIGxheW91dD1cInN0YWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRyaWJ1dG9ycy5tYXAoKGNvbnRyaWJ1dG9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyc29uRGV0YWlsc1BvcG92ZXIga2V5PXtjb250cmlidXRvci5uYW1lfSBwZXJzb249e2NvbnRyaWJ1dG9yfSB0aXRsZT1cIkNvbnRyaWJ1dG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhckdyb3VwSXRlbSBuYW1lPXtjb250cmlidXRvci5uYW1lfSBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyR3JvdXBJdGVtfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QZXJzb25EZXRhaWxzUG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRQcmV2aWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRGb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYW5JbnN0YWxsICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYXBwZWFyYW5jZT1cInByaW1hcnlcIiBzaXplPVwic21hbGxcIiBpY29uPXs8QXJyb3dEb3dubG9hZFJlZ3VsYXIgLz59IG9uQ2xpY2s9e2luc3RhbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYW5Vbmluc3RhbGwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBhcHBlYXJhbmNlPVwic2Vjb25kYXJ5XCIgc2l6ZT1cInNtYWxsXCIgaWNvbj17PERlbGV0ZVJlZ3VsYXIgLz59IG9uQ2xpY2s9e3VuaW5zdGFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVtb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2lzU3RhdGVDaGFuZ2luZyAmJiA8U3Bpbm5lciBjbGFzc05hbWU9e2NsYXNzZXMuc3Bpbm5lcn0gc2l6ZT1cImV4dHJhLXNtYWxsXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0FjY29yZGlvblBhbmVsPlxyXG4gICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cclxuICAgICk7XHJcbn0pO1xyXG5cclxudHlwZSBUYWJWYWx1ZSA9IFwiYXZhaWxhYmxlXCIgfCBcImluc3RhbGxlZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEV4dGVuc2lvbkxpc3RTZXJ2aWNlRGVmaW5pdGlvbjogU2VydmljZURlZmluaXRpb248W10sIFtJU2hlbGxTZXJ2aWNlXT4gPSB7XHJcbiAgICBmcmllbmRseU5hbWU6IFwiRXh0ZW5zaW9uTGlzdFwiLFxyXG4gICAgY29uc3VtZXM6IFtTaGVsbFNlcnZpY2VJZGVudGl0eV0sXHJcbiAgICBmYWN0b3J5OiAoc2hlbGxTZXJ2aWNlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVnaXN0cmF0aW9uID0gc2hlbGxTZXJ2aWNlLmFkZFRvb2xiYXJJdGVtKHtcclxuICAgICAgICAgICAga2V5OiBcIkV4dGVuc2lvbkxpc3RcIixcclxuICAgICAgICAgICAgaG9yaXpvbnRhbExvY2F0aW9uOiBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgIHZlcnRpY2FsTG9jYXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgIHN1cHByZXNzVGVhY2hpbmdNb21lbnQ6IHRydWUsXHJcbiAgICAgICAgICAgIG9yZGVyOiAtMjAwLFxyXG4gICAgICAgICAgICBjb21wb25lbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBbc2VsZWN0ZWRUYWIsIHNldFNlbGVjdGVkVGFiXSA9IHVzZVN0YXRlPFRhYlZhbHVlPihcImF2YWlsYWJsZVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbk1hbmFnZXIgPSB1c2VFeHRlbnNpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbZXh0ZW5zaW9ucywgc2V0RXh0ZW5zaW9uc10gPSB1c2VTdGF0ZTxJRXh0ZW5zaW9uW10+KFtdKTtcclxuXHJcbiAgICAgICAgICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChleHRlbnNpb25NYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVsYXRlRXh0ZW5zaW9uc0FzeW5jID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBhd2FpdCBleHRlbnNpb25NYW5hZ2VyLnF1ZXJ5RXh0ZW5zaW9uc0FzeW5jKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBzZWxlY3RlZFRhYiA9PT0gXCJpbnN0YWxsZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleHRlbnNpb25zID0gYXdhaXQgcXVlcnkuZ2V0RXh0ZW5zaW9uc0FzeW5jKDAsIHF1ZXJ5LnRvdGFsQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXh0ZW5zaW9ucyhleHRlbnNpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZUV4dGVuc2lvbnNBc3luYygpLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYEZhaWxlZCB0byBwb3B1bGF0ZSBleHRlbnNpb25zOiAke2Vycm9yfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCBbZXh0ZW5zaW9uTWFuYWdlciwgc2VsZWN0ZWRUYWJdKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZWFjaGluZ01vbWVudCA9IHVzZVRlYWNoaW5nTW9tZW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGVhY2hpbmdNb21lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50ZWFjaGluZ01vbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRXh0ZW5zaW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkV4dGVuc2lvbnMgcHJvdmlkZSBuZXcgb3B0aW9uYWwgZmVhdHVyZXMgdGhhdCBjYW4gYmUgdXNlZnVsIHRvIHlvdXIgc3BlY2lmaWMgdGFzayBvciB3b3JrZmxvdy4gQ2xpY2sgdGhpcyBidXR0b24gdG8gbWFuYWdlIGV4dGVuc2lvbnMuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaWFsb2dUcmlnZ2VyIGRpc2FibGVCdXR0b25FbmhhbmNlbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBjb250ZW50PVwiTWFuYWdlIEV4dGVuc2lvbnNcIiByZWxhdGlvbnNoaXA9XCJsYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHJlZj17dGVhY2hpbmdNb21lbnQudGFyZ2V0UmVmfSBjbGFzc05hbWU9e2NsYXNzZXMuZXh0ZW5zaW9uQnV0dG9ufSBhcHBlYXJhbmNlPVwic3VidGxlXCIgaWNvbj17PEFwcHNBZGRJblJlZ3VsYXIgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dUcmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZ1N1cmZhY2UgY2xhc3NOYW1lPXtjbGFzc2VzLmV4dGVuc2lvbnNEaWFsb2dTdXJmYWNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nQm9keSBjbGFzc05hbWU9e2NsYXNzZXMuZXh0ZW5zaW9uRGlhbG9nQm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaWFsb2dUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nVHJpZ2dlciBhY3Rpb249XCJjbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGFwcGVhcmFuY2U9XCJzdWJ0bGVcIiBhcmlhLWxhYmVsPVwiY2xvc2VcIiBpY29uPXs8RGlzbWlzc1JlZ3VsYXIgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dUcmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4dGVuc2lvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZXh0ZW5zaW9uRGlhbG9nQ29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZT17c2VsZWN0ZWRUYWJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVGFiU2VsZWN0PXsoZXZlbnQ6IFNlbGVjdFRhYkV2ZW50LCBkYXRhOiBTZWxlY3RUYWJEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRhYihkYXRhLnZhbHVlIGFzIFRhYlZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgdmFsdWU9e1wiYXZhaWxhYmxlXCIgc2F0aXNmaWVzIFRhYlZhbHVlfT5BdmFpbGFibGU8L1RhYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiB2YWx1ZT17XCJpbnN0YWxsZWRcIiBzYXRpc2ZpZXMgVGFiVmFsdWV9Pkluc3RhbGxlZDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudCBjbGFzc05hbWU9e2NsYXNzZXMuZXh0ZW5zaW9uRGlhbG9nQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uIGNvbGxhcHNpYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtleHRlbnNpb25zLm1hcCgoZXh0ZW5zaW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFeHRlbnNpb25EZXRhaWxzIGtleT17ZXh0ZW5zaW9uLm1ldGFkYXRhLm5hbWV9IGV4dGVuc2lvbj17ZXh0ZW5zaW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZ0JvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZ1N1cmZhY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGlzcG9zZTogKCkgPT4gcmVnaXN0cmF0aW9uLmRpc3Bvc2UoKSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9