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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NlcnZpY2VzX2V4dGVuc2lvbnNMaXN0U2VydmljZV90c3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUE7QUFpQ0E7QUFXQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7O0FBT0E7O0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBOUJBO0FBZ0NBO0FBRUE7O0FBQ0E7QUFDQTtBQUVBO0FBVUE7QUFkQTs7QUFBQTtBQWdCQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFvQkE7QUE1QkE7O0FBQUE7QUE4QkE7O0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQWdDQTtBQUtBO0FBd0JBO0FBN0dBOztBQWlIQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUE0QkE7QUFDQTtBQW1CQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvaW5zcGVjdG9yLXYyL3NyYy9zZXJ2aWNlcy9leHRlbnNpb25zTGlzdFNlcnZpY2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgU2VsZWN0VGFiRGF0YSwgU2VsZWN0VGFiRXZlbnQgfSBmcm9tIFwiQGZsdWVudHVpL3JlYWN0LWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHR5cGUgeyBUcmlnZ2VyUHJvcHMgfSBmcm9tIFwiQGZsdWVudHVpL3JlYWN0LXV0aWxpdGllc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB0eXBlIHsgUGVyc29uTWV0YWRhdGEgfSBmcm9tIFwiLi4vZXh0ZW5zaWJpbGl0eS9leHRlbnNpb25GZWVkXCI7XHJcbmltcG9ydCB0eXBlIHsgSUV4dGVuc2lvbiB9IGZyb20gXCIuLi9leHRlbnNpYmlsaXR5L2V4dGVuc2lvbk1hbmFnZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBTZXJ2aWNlRGVmaW5pdGlvbiB9IGZyb20gXCIuLi9tb2R1bGFyaXR5L3NlcnZpY2VEZWZpbml0aW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgSVNoZWxsU2VydmljZSB9IGZyb20gXCIuL3NoZWxsU2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIEFjY29yZGlvbixcclxuICAgIEFjY29yZGlvbkhlYWRlcixcclxuICAgIEFjY29yZGlvbkl0ZW0sXHJcbiAgICBBY2NvcmRpb25QYW5lbCxcclxuICAgIEF2YXRhckdyb3VwLFxyXG4gICAgQXZhdGFyR3JvdXBJdGVtLFxyXG4gICAgQm9keTEsXHJcbiAgICBCb2R5MVN0cm9uZyxcclxuICAgIEJ1dHRvbixcclxuICAgIENhcHRpb24xLFxyXG4gICAgQ2FyZCxcclxuICAgIENhcmRGb290ZXIsXHJcbiAgICBDYXJkSGVhZGVyLFxyXG4gICAgQ2FyZFByZXZpZXcsXHJcbiAgICBEaWFsb2csXHJcbiAgICBEaWFsb2dCb2R5LFxyXG4gICAgRGlhbG9nQ29udGVudCxcclxuICAgIERpYWxvZ1N1cmZhY2UsXHJcbiAgICBEaWFsb2dUaXRsZSxcclxuICAgIERpYWxvZ1RyaWdnZXIsXHJcbiAgICBtYWtlU3R5bGVzLFxyXG4gICAgUGVyc29uYSxcclxuICAgIFBvcG92ZXIsXHJcbiAgICBQb3BvdmVyU3VyZmFjZSxcclxuICAgIFBvcG92ZXJUcmlnZ2VyLFxyXG4gICAgUHJlc2VuY2VCYWRnZSxcclxuICAgIFNwaW5uZXIsXHJcbiAgICBUYWIsXHJcbiAgICBUYWJMaXN0LFxyXG4gICAgdG9rZW5zLFxyXG4gICAgVG9vbHRpcCxcclxufSBmcm9tIFwiQGZsdWVudHVpL3JlYWN0LWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtcclxuICAgIEFwcHNBZGRJblJlZ3VsYXIsXHJcbiAgICBBcnJvd0Rvd25sb2FkUmVndWxhcixcclxuICAgIEJyYW5jaEZvcmtSZWd1bGFyLFxyXG4gICAgQnVnUmVndWxhcixcclxuICAgIERlbGV0ZVJlZ3VsYXIsXHJcbiAgICBEaXNtaXNzUmVndWxhcixcclxuICAgIExpbmtSZWd1bGFyLFxyXG4gICAgTWFpbFJlZ3VsYXIsXHJcbiAgICBQZW9wbGVDb21tdW5pdHlSZWd1bGFyLFxyXG59IGZyb20gXCJAZmx1ZW50dWkvcmVhY3QtaWNvbnNcIjtcclxuaW1wb3J0IHsgRmFkZSB9IGZyb20gXCJAZmx1ZW50dWkvcmVhY3QtbW90aW9uLWNvbXBvbmVudHMtcHJldmlld1wiO1xyXG5pbXBvcnQgeyBtZW1vLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcImNvcmUvTWlzYy9sb2dnZXJcIjtcclxuXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwic2hhcmVkLXVpLWNvbXBvbmVudHMvZmx1ZW50L3ByaW1pdGl2ZXMvbGlua1wiO1xyXG5pbXBvcnQgeyBUZWFjaGluZ01vbWVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3RlYWNoaW5nTW9tZW50XCI7XHJcbmltcG9ydCB7IHVzZUV4dGVuc2lvbk1hbmFnZXIgfSBmcm9tIFwiLi4vY29udGV4dHMvZXh0ZW5zaW9uTWFuYWdlckNvbnRleHRcIjtcclxuaW1wb3J0IHsgTWFrZVBvcG92ZXJUZWFjaGluZ01vbWVudCB9IGZyb20gXCIuLi9ob29rcy90ZWFjaGluZ01vbWVudEhvb2tzXCI7XHJcbmltcG9ydCB7IFNoZWxsU2VydmljZUlkZW50aXR5IH0gZnJvbSBcIi4vc2hlbGxTZXJ2aWNlXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGV4dGVuc2lvbkJ1dHRvbjoge30sXHJcbiAgICBleHRlbnNpb25zRGlhbG9nU3VyZmFjZToge1xyXG4gICAgICAgIGhlaWdodDogXCJhdXRvXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiNzB2d1wiLFxyXG4gICAgICAgIG1heFdpZHRoOiBcIjYwMHB4XCIsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiBcIjcwdmhcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRva2Vucy5jb2xvck5ldXRyYWxCYWNrZ3JvdW5kMixcclxuICAgIH0sXHJcbiAgICBleHRlbnNpb25EaWFsb2dCb2R5OiB7XHJcbiAgICAgICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIG1heEhlaWdodDogXCIxMDAlXCIsXHJcbiAgICB9LFxyXG4gICAgZXh0ZW5zaW9uRGlhbG9nQ29udGVudDoge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6IGBjYWxjKC0xICogJHt0b2tlbnMuc3BhY2luZ0hvcml6b250YWxNfSlgLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiBgY2FsYygtMSAqICR7dG9rZW5zLnNwYWNpbmdIb3Jpem9udGFsU30pYCxcclxuICAgIH0sXHJcbiAgICBleHRlbnNpb25IZWFkZXI6IHt9LFxyXG4gICAgZXh0ZW5zaW9uSXRlbToge30sXHJcbiAgICBleHRlbnNpb25DYXJkUHJldmlldzoge1xyXG4gICAgICAgIHBhZGRpbmc6IGAke3Rva2Vucy5zcGFjaW5nVmVydGljYWxNfSAke3Rva2Vucy5zcGFjaW5nSG9yaXpvbnRhbE19YCxcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIHJvd0dhcDogdG9rZW5zLnNwYWNpbmdWZXJ0aWNhbEwsXHJcbiAgICB9LFxyXG4gICAgZXh0ZW5zaW9uSW50cm86IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGNvbHVtbkdhcDogdG9rZW5zLnNwYWNpbmdIb3Jpem9udGFsTSxcclxuICAgIH0sXHJcbiAgICBleHRlbnNpb25EZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAgY29sdW1uR2FwOiB0b2tlbnMuc3BhY2luZ0hvcml6b250YWxTLFxyXG4gICAgfSxcclxuICAgIGV4dGVuc2lvbkJ1dHRvbkNvbnRhaW5lcjoge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxyXG4gICAgICAgIGFsaWduU2VsZjogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICB9LFxyXG4gICAgc3Bpbm5lcjoge1xyXG4gICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBcIjFzXCIsXHJcbiAgICAgICAgYW5pbWF0aW9uTmFtZToge1xyXG4gICAgICAgICAgICBmcm9tOiB7IG9wYWNpdHk6IDAgfSxcclxuICAgICAgICAgICAgdG86IHsgb3BhY2l0eTogMSB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgd2ViUmVzb3VyY2VEaXY6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgfSxcclxuICAgIHdlYlJlc291cmNlTGluazoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAgY29sdW1uR2FwOiB0b2tlbnMuc3BhY2luZ0hvcml6b250YWxTLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgcGVyc29uUG9wb3ZlclN1cmZhY2VEaXY6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIHJvd0dhcDogdG9rZW5zLnNwYWNpbmdWZXJ0aWNhbFMsXHJcbiAgICB9LFxyXG4gICAgYWNjb3JkaW9uSGVhZGVyRGl2OiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICBjb2x1bW5HYXA6IHRva2Vucy5zcGFjaW5nSG9yaXpvbnRhbFMsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgICByZXNvdXJjZURldGFpbHNEaXY6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIHJvd0dhcDogdG9rZW5zLnNwYWNpbmdWZXJ0aWNhbFMsXHJcbiAgICB9LFxyXG4gICAgcGVvcGxlRGV0YWlsc0Rpdjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAgY29sdW1uR2FwOiB0b2tlbnMuc3BhY2luZ0hvcml6b250YWxYTCxcclxuICAgIH0sXHJcbiAgICBhdmF0YXJHcm91cEl0ZW06IHtcclxuICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBBc1BlcnNvbk1ldGFkYXRhKHBlcnNvbjogc3RyaW5nIHwgUGVyc29uTWV0YWRhdGEpOiBQZXJzb25NZXRhZGF0YSB7XHJcbiAgICBpZiAodHlwZW9mIHBlcnNvbiA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHJldHVybiB7IG5hbWU6IHBlcnNvbiB9IHNhdGlzZmllcyBQZXJzb25NZXRhZGF0YTtcclxuICAgIH1cclxuICAgIHJldHVybiBwZXJzb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZVBlb3BsZU1ldGFkYXRhKHBlb3BsZT86IHJlYWRvbmx5IChzdHJpbmcgfCBQZXJzb25NZXRhZGF0YSB8IHVuZGVmaW5lZClbXSkge1xyXG4gICAgY29uc3QgZGVmaW5lZFBlb3BsZSA9IHVzZU1lbW8oKCkgPT4gKHBlb3BsZSA/IHBlb3BsZS5maWx0ZXIoKHBlcnNvbik6IHBlcnNvbiBpcyBzdHJpbmcgfCBQZXJzb25NZXRhZGF0YSA9PiAhIXBlcnNvbikgOiBbXSksIFtwZW9wbGVdKTtcclxuXHJcbiAgICAvL2NvbnN0IFtwZW9wbGVNZXRhZGF0YUV4LCBzZXRQZW9wbGVNZXRhZGF0YUV4XSA9IHVzZVN0YXRlPChQZXJzb25NZXRhZGF0YSAmIHsgYXZhdGFyVXJsPzogc3RyaW5nIH0pW10+KGRlZmluZWRQZW9wbGUubWFwKEFzUGVyc29uTWV0YWRhdGEpKTtcclxuICAgIGNvbnN0IFtwZW9wbGVNZXRhZGF0YUV4XSA9IHVzZVN0YXRlKGRlZmluZWRQZW9wbGUubWFwKEFzUGVyc29uTWV0YWRhdGEpKTtcclxuXHJcbiAgICAvLyBUT0RPOiBXb3VsZCBiZSBuaWNlIGlmIHdlIGNvdWxkIHB1bGwgYXV0aG9yL2NvbnRyaWJ1dG9yIHByb2ZpbGUgcGljdHVyZXMgZnJvbSB0aGUgZm9ydW0sIGJ1dCBuZWVkIHRvIHNlZSBpZiB0aGlzIGlzIG9rIGFuZCB3aGV0aGVyIHdlIHdhbnQgdG8gYWRqdXN0IENPUlMgdG8gYWxsb3cgaXQuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIGRlZmluZWRQZW9wbGUuZm9yRWFjaChhc3luYyAocGVyc29uLCBpbmRleCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBjb25zdCBwZXJzb25NZXRhZGF0YSA9IEFzUGVyc29uTWV0YWRhdGEocGVyc29uKTtcclxuICAgIC8vICAgICAgICAgaWYgKHBlcnNvbk1ldGFkYXRhLmZvcnVtVXNlck5hbWUpIHtcclxuICAgIC8vICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IChhd2FpdCBmZXRjaChgaHR0cHM6Ly9mb3J1bS5iYWJ5bG9uanMuY29tL3UvJHtwZXJzb25NZXRhZGF0YS5mb3J1bVVzZXJOYW1lfS5qc29uYCkpLmpzb24oKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCBhdmF0YXJSZWxhdGl2ZVVybCA9IGpzb24udXNlcj8uYXZhdGFyX3RlbXBsYXRlPy5yZXBsYWNlKFwie3NpemV9XCIsIFwiOTZcIik7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaWYgKGF2YXRhclJlbGF0aXZlVXJsKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF2YXRhclVybCA9IGBodHRwczovL2ZvcnVtLmJhYnlsb25qcy5jb20ke2F2YXRhclJlbGF0aXZlVXJsfWA7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHNldFBlb3BsZU1ldGFkYXRhRXgoKHByZXYpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld01ldGFkYXRhID0gWy4uLnByZXZdO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgbmV3TWV0YWRhdGFbaW5kZXhdID0geyAuLi5wZXJzb25NZXRhZGF0YSwgYXZhdGFyVXJsIH07XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3TWV0YWRhdGE7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIC8vIElnbm9yZSwgbm9uLWZhdGFsXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH0sIFtkZWZpbmVkUGVvcGxlXSk7XHJcblxyXG4gICAgcmV0dXJuIHBlb3BsZU1ldGFkYXRhRXguZmlsdGVyKEJvb2xlYW4pO1xyXG59XHJcblxyXG5jb25zdCB1c2VUZWFjaGluZ01vbWVudCA9IE1ha2VQb3BvdmVyVGVhY2hpbmdNb21lbnQoXCJFeHRlbnNpb25zXCIpO1xyXG5cclxuY29uc3QgV2ViUmVzb3VyY2U6IEZ1bmN0aW9uQ29tcG9uZW50PHsgdXJsOiBzdHJpbmc7IHVybERpc3BsYXk/OiBzdHJpbmc7IGljb246IEpTWC5FbGVtZW50OyBsYWJlbDogc3RyaW5nIH0+ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IHVybCwgdXJsRGlzcGxheSwgaWNvbiwgbGFiZWwgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud2ViUmVzb3VyY2VEaXZ9PlxyXG4gICAgICAgICAgICA8VG9vbHRpcCBjb250ZW50PXtsYWJlbH0gcmVsYXRpb25zaGlwPVwibGFiZWxcIiBwb3NpdGlvbmluZz1cImJlZm9yZVwiIHdpdGhBcnJvdz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndlYlJlc291cmNlTGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAge2ljb259XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdXJsPXt1cmx9IHZhbHVlPXt1cmxEaXNwbGF5IHx8IHVybH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgUGVyc29uRGV0YWlsc1BvcG92ZXI6IEZ1bmN0aW9uQ29tcG9uZW50PFRyaWdnZXJQcm9wcyAmIHsgcGVyc29uOiBQZXJzb25NZXRhZGF0YTsgdGl0bGU6IHN0cmluZzsgZGlzYWJsZWQ/OiBib29sZWFuIH0+ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IHBlcnNvbiwgdGl0bGUsIGRpc2FibGVkLCBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgaWYgKGRpc2FibGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIDw+e2NoaWxkcmVufTwvPjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQb3BvdmVyIHdpdGhBcnJvdz5cclxuICAgICAgICAgICAgPFBvcG92ZXJUcmlnZ2VyIGRpc2FibGVCdXR0b25FbmhhbmNlbWVudD57Y2hpbGRyZW59PC9Qb3BvdmVyVHJpZ2dlcj5cclxuICAgICAgICAgICAgPFBvcG92ZXJTdXJmYWNlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGVyc29uUG9wb3ZlclN1cmZhY2VEaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQZXJzb25hIG5hbWU9e3BlcnNvbi5uYW1lfSBzZWNvbmRhcnlUZXh0PXt0aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICB7cGVyc29uLmVtYWlsICYmIDxXZWJSZXNvdXJjZSB1cmw9e2BtYWlsdG86JHtwZXJzb24uZW1haWx9YH0gdXJsRGlzcGxheT17cGVyc29uLmVtYWlsfSBpY29uPXs8TWFpbFJlZ3VsYXIgLz59IGxhYmVsPVwiRW1haWxcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICB7cGVyc29uLnVybCAmJiA8V2ViUmVzb3VyY2UgdXJsPXtwZXJzb24udXJsfSB1cmxEaXNwbGF5PXtwZXJzb24udXJsfSBpY29uPXs8TGlua1JlZ3VsYXIgLz59IGxhYmVsPVwiV2Vic2l0ZVwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIHtwZXJzb24uZm9ydW1Vc2VyTmFtZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxXZWJSZXNvdXJjZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtgaHR0cHM6Ly9mb3J1bS5iYWJ5bG9uanMuY29tL3UvJHtwZXJzb24uZm9ydW1Vc2VyTmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsRGlzcGxheT17cGVyc29uLmZvcnVtVXNlck5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXs8UGVvcGxlQ29tbXVuaXR5UmVndWxhciAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRm9ydW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Qb3BvdmVyU3VyZmFjZT5cclxuICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgRXh0ZW5zaW9uRGV0YWlsczogRnVuY3Rpb25Db21wb25lbnQ8eyBleHRlbnNpb246IElFeHRlbnNpb24gfT4gPSBtZW1vKChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBleHRlbnNpb24gfSA9IHByb3BzO1xyXG4gICAgY29uc3QgeyBtZXRhZGF0YSB9ID0gZXh0ZW5zaW9uO1xyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCBbY2FuSW5zdGFsbCwgc2V0Q2FuSW5zdGFsbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY2FuVW5pbnN0YWxsLCBzZXRDYW5Vbmluc3RhbGxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzU3RhdGVDaGFuZ2luZywgc2V0SXNTdGF0ZUNoYW5naW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRDYW5JbnN0YWxsKCFleHRlbnNpb24uaXNJbnN0YWxsZWQgJiYgIWV4dGVuc2lvbi5pc1N0YXRlQ2hhbmdpbmcpO1xyXG4gICAgICAgICAgICBzZXRDYW5Vbmluc3RhbGwoZXh0ZW5zaW9uLmlzSW5zdGFsbGVkICYmICFleHRlbnNpb24uaXNTdGF0ZUNoYW5naW5nKTtcclxuICAgICAgICAgICAgc2V0SXNTdGF0ZUNoYW5naW5nKGV4dGVuc2lvbi5pc1N0YXRlQ2hhbmdpbmcpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHN0YXRlQ2hhbmdlZEhhbmRsZXJSZWdpc3RyYXRpb24gPSBleHRlbnNpb24uYWRkU3RhdGVDaGFuZ2VkSGFuZGxlcih1cGRhdGVTdGF0ZSk7XHJcbiAgICAgICAgdXBkYXRlU3RhdGUoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0YXRlQ2hhbmdlZEhhbmRsZXJSZWdpc3RyYXRpb24uZGlzcG9zZTtcclxuICAgIH0sIFtleHRlbnNpb25dKTtcclxuXHJcbiAgICBjb25zdCBbYXV0aG9yXSA9IHVzZVBlb3BsZU1ldGFkYXRhKHVzZU1lbW8oKCkgPT4gW21ldGFkYXRhLmF1dGhvcl0sIFttZXRhZGF0YS5hdXRob3JdKSk7XHJcbiAgICBjb25zdCBjb250cmlidXRvcnMgPSB1c2VQZW9wbGVNZXRhZGF0YShtZXRhZGF0YS5jb250cmlidXRvcnMpO1xyXG5cclxuICAgIGNvbnN0IGhhc1Jlc291cmNlRGV0YWlscyA9IG1ldGFkYXRhLmhvbWVwYWdlIHx8IG1ldGFkYXRhLnJlcG9zaXRvcnkgfHwgbWV0YWRhdGEuYnVncztcclxuICAgIGNvbnN0IGhhc1Blb3BsZURldGFpbHMgPSBhdXRob3IgfHwgY29udHJpYnV0b3JzLmxlbmd0aCA+IDA7XHJcbiAgICBjb25zdCBoYXNQcmV2aWV3RGV0YWlscyA9IGhhc1Jlc291cmNlRGV0YWlscyB8fCBoYXNQZW9wbGVEZXRhaWxzO1xyXG4gICAgY29uc3QgaGFzQXV0aG9yRGV0YWlscyA9IGF1dGhvcj8uZW1haWwgfHwgYXV0aG9yPy51cmwgfHwgYXV0aG9yPy5mb3J1bVVzZXJOYW1lO1xyXG4gICAgY29uc3Qgc3ViSGVhZGVyID0gW21ldGFkYXRhLnZlcnNpb24gPyBgJHttZXRhZGF0YS52ZXJzaW9ufWAgOiBudWxsLCBtZXRhZGF0YS5saWNlbnNlID8gYCR7bWV0YWRhdGEubGljZW5zZX1gIDogbnVsbF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgfCBcIik7XHJcblxyXG4gICAgY29uc3QgaW5zdGFsbCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBleHRlbnNpb24uaW5zdGFsbEFzeW5jKCk7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIC8vIElnbm9yZSBlcnJvcnMuIE90aGVyIHBhcnRzIG9mIHRoZSBpbmZyYXN0cnVjdHVyZSBoYW5kbGUgdGhlbSBhbmQgY29tbXVuaWNhdGUgdGhlbSB0byB0aGUgdXNlci5cclxuICAgICAgICB9XHJcbiAgICB9LCBbZXh0ZW5zaW9uXSk7XHJcblxyXG4gICAgY29uc3QgdW5pbnN0YWxsID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGV4dGVuc2lvbi51bmluc3RhbGxBc3luYygpO1xyXG4gICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAvLyBJZ25vcmUgZXJyb3JzLiBPdGhlciBwYXJ0cyBvZiB0aGUgaW5mcmFzdHJ1Y3R1cmUgaGFuZGxlIHRoZW0gYW5kIGNvbW11bmljYXRlIHRoZW0gdG8gdGhlIHVzZXIuXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2V4dGVuc2lvbl0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFjY29yZGlvbkl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmV4dGVuc2lvbkl0ZW19IHZhbHVlPXtleHRlbnNpb24ubWV0YWRhdGEubmFtZX0+XHJcbiAgICAgICAgICAgIDxBY2NvcmRpb25IZWFkZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmV4dGVuc2lvbkhlYWRlcn0gZXhwYW5kSWNvblBvc2l0aW9uPVwiZW5kXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY2NvcmRpb25IZWFkZXJEaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb2R5MVN0cm9uZz57ZXh0ZW5zaW9uLm1ldGFkYXRhLm5hbWV9PC9Cb2R5MVN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8RmFkZSB2aXNpYmxlPXtleHRlbnNpb24uaXNJbnN0YWxsZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJlc2VuY2VCYWRnZSBzaXplPVwic21hbGxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0FjY29yZGlvbkhlYWRlcj5cclxuICAgICAgICAgICAgPEFjY29yZGlvblBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRIZWFkZXIgaGVhZGVyPXs8Qm9keTE+e21ldGFkYXRhLmRlc2NyaXB0aW9ufTwvQm9keTE+fSBkZXNjcmlwdGlvbj17PENhcHRpb24xIGl0YWxpYz57c3ViSGVhZGVyfTwvQ2FwdGlvbjE+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtoYXNQcmV2aWV3RGV0YWlscyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkUHJldmlldyBjbGFzc05hbWU9e2NsYXNzZXMuZXh0ZW5zaW9uQ2FyZFByZXZpZXd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2hhc1Jlc291cmNlRGV0YWlscyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVzb3VyY2VEZXRhaWxzRGl2fSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21ldGFkYXRhLmhvbWVwYWdlICYmIDxXZWJSZXNvdXJjZSB1cmw9e21ldGFkYXRhLmhvbWVwYWdlfSBpY29uPXs8TGlua1JlZ3VsYXIgLz59IGxhYmVsPVwiV2Vic2l0ZVwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWV0YWRhdGEucmVwb3NpdG9yeSAmJiA8V2ViUmVzb3VyY2UgdXJsPXttZXRhZGF0YS5yZXBvc2l0b3J5fSBpY29uPXs8QnJhbmNoRm9ya1JlZ3VsYXIgLz59IGxhYmVsPVwiUmVwb3NpdG9yeVwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWV0YWRhdGEuYnVncyAmJiA8V2ViUmVzb3VyY2UgdXJsPXttZXRhZGF0YS5idWdzfSBpY29uPXs8QnVnUmVndWxhciAvPn0gbGFiZWw9XCJSZXBvcnQgSXNzdWVzXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2hhc1Blb3BsZURldGFpbHMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBlb3BsZURldGFpbHNEaXZ9IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXV0aG9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJzb25EZXRhaWxzUG9wb3ZlciBwZXJzb249e2F1dGhvcn0gdGl0bGU9XCJBdXRob3JcIiBkaXNhYmxlZD17IWhhc0F1dGhvckRldGFpbHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJzb25hIG5hbWU9e2F1dGhvci5uYW1lfSBzZWNvbmRhcnlUZXh0PVwiQXV0aG9yXCIgc3R5bGU9e3sgY3Vyc29yOiBoYXNBdXRob3JEZXRhaWxzID8gXCJwb2ludGVyXCIgOiBcImRlZmF1bHRcIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QZXJzb25EZXRhaWxzUG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRyaWJ1dG9ycy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXJHcm91cCBsYXlvdXQ9XCJzdGFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb250cmlidXRvcnMubWFwKChjb250cmlidXRvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcnNvbkRldGFpbHNQb3BvdmVyIGtleT17Y29udHJpYnV0b3IubmFtZX0gcGVyc29uPXtjb250cmlidXRvcn0gdGl0bGU9XCJDb250cmlidXRvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXJHcm91cEl0ZW0gbmFtZT17Y29udHJpYnV0b3IubmFtZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhckdyb3VwSXRlbX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGVyc29uRGV0YWlsc1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F2YXRhckdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkUHJldmlldz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2FuSW5zdGFsbCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGFwcGVhcmFuY2U9XCJwcmltYXJ5XCIgc2l6ZT1cInNtYWxsXCIgaWNvbj17PEFycm93RG93bmxvYWRSZWd1bGFyIC8+fSBvbkNsaWNrPXtpbnN0YWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2FuVW5pbnN0YWxsICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYXBwZWFyYW5jZT1cInNlY29uZGFyeVwiIHNpemU9XCJzbWFsbFwiIGljb249ezxEZWxldGVSZWd1bGFyIC8+fSBvbkNsaWNrPXt1bmluc3RhbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlbW92ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc1N0YXRlQ2hhbmdpbmcgJiYgPFNwaW5uZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnNwaW5uZXJ9IHNpemU9XCJleHRyYS1zbWFsbFwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEZvb3Rlcj5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9BY2NvcmRpb25QYW5lbD5cclxuICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XHJcbiAgICApO1xyXG59KTtcclxuXHJcbnR5cGUgVGFiVmFsdWUgPSBcImF2YWlsYWJsZVwiIHwgXCJpbnN0YWxsZWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBFeHRlbnNpb25MaXN0U2VydmljZURlZmluaXRpb246IFNlcnZpY2VEZWZpbml0aW9uPFtdLCBbSVNoZWxsU2VydmljZV0+ID0ge1xyXG4gICAgZnJpZW5kbHlOYW1lOiBcIkV4dGVuc2lvbkxpc3RcIixcclxuICAgIGNvbnN1bWVzOiBbU2hlbGxTZXJ2aWNlSWRlbnRpdHldLFxyXG4gICAgZmFjdG9yeTogKHNoZWxsU2VydmljZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlZ2lzdHJhdGlvbiA9IHNoZWxsU2VydmljZS5hZGRUb29sYmFySXRlbSh7XHJcbiAgICAgICAgICAgIGtleTogXCJFeHRlbnNpb25MaXN0XCIsXHJcbiAgICAgICAgICAgIGhvcml6b250YWxMb2NhdGlvbjogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbExvY2F0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICBzdXBwcmVzc1RlYWNoaW5nTW9tZW50OiB0cnVlLFxyXG4gICAgICAgICAgICBvcmRlcjogLTIwMCxcclxuICAgICAgICAgICAgY29tcG9uZW50OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgW3NlbGVjdGVkVGFiLCBzZXRTZWxlY3RlZFRhYl0gPSB1c2VTdGF0ZTxUYWJWYWx1ZT4oXCJhdmFpbGFibGVcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBleHRlbnNpb25NYW5hZ2VyID0gdXNlRXh0ZW5zaW9uTWFuYWdlcigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW2V4dGVuc2lvbnMsIHNldEV4dGVuc2lvbnNdID0gdXNlU3RhdGU8SUV4dGVuc2lvbltdPihbXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXh0ZW5zaW9uTWFuYWdlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3B1bGF0ZUV4dGVuc2lvbnNBc3luYyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gYXdhaXQgZXh0ZW5zaW9uTWFuYWdlci5xdWVyeUV4dGVuc2lvbnNBc3luYyh1bmRlZmluZWQsIHVuZGVmaW5lZCwgc2VsZWN0ZWRUYWIgPT09IFwiaW5zdGFsbGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9ucyA9IGF3YWl0IHF1ZXJ5LmdldEV4dGVuc2lvbnNBc3luYygwLCBxdWVyeS50b3RhbENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEV4dGVuc2lvbnMoZXh0ZW5zaW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVFeHRlbnNpb25zQXN5bmMoKS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKGBGYWlsZWQgdG8gcG9wdWxhdGUgZXh0ZW5zaW9uczogJHtlcnJvcn1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgW2V4dGVuc2lvbk1hbmFnZXIsIHNlbGVjdGVkVGFiXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGVhY2hpbmdNb21lbnQgPSB1c2VUZWFjaGluZ01vbWVudCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRlYWNoaW5nTW9tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4udGVhY2hpbmdNb21lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkV4dGVuc2lvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJFeHRlbnNpb25zIHByb3ZpZGUgbmV3IG9wdGlvbmFsIGZlYXR1cmVzIHRoYXQgY2FuIGJlIHVzZWZ1bCB0byB5b3VyIHNwZWNpZmljIHRhc2sgb3Igd29ya2Zsb3cuIENsaWNrIHRoaXMgYnV0dG9uIHRvIG1hbmFnZSBleHRlbnNpb25zLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaWFsb2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nVHJpZ2dlciBkaXNhYmxlQnV0dG9uRW5oYW5jZW1lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgY29udGVudD1cIk1hbmFnZSBFeHRlbnNpb25zXCIgcmVsYXRpb25zaGlwPVwibGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiByZWY9e3RlYWNoaW5nTW9tZW50LnRhcmdldFJlZn0gY2xhc3NOYW1lPXtjbGFzc2VzLmV4dGVuc2lvbkJ1dHRvbn0gYXBwZWFyYW5jZT1cInN1YnRsZVwiIGljb249ezxBcHBzQWRkSW5SZWd1bGFyIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nVHJpZ2dlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaWFsb2dTdXJmYWNlIGNsYXNzTmFtZT17Y2xhc3Nlcy5leHRlbnNpb25zRGlhbG9nU3VyZmFjZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0JvZHkgY2xhc3NOYW1lPXtjbGFzc2VzLmV4dGVuc2lvbkRpYWxvZ0JvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nVGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZ1RyaWdnZXIgYWN0aW9uPVwiY2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBhcHBlYXJhbmNlPVwic3VidGxlXCIgYXJpYS1sYWJlbD1cImNsb3NlXCIgaWNvbj17PERpc21pc3NSZWd1bGFyIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nVHJpZ2dlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHRlbnNpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYkxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmV4dGVuc2lvbkRpYWxvZ0NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFsdWU9e3NlbGVjdGVkVGFifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRhYlNlbGVjdD17KGV2ZW50OiBTZWxlY3RUYWJFdmVudCwgZGF0YTogU2VsZWN0VGFiRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRUYWIoZGF0YS52YWx1ZSBhcyBUYWJWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiIHZhbHVlPXtcImF2YWlsYWJsZVwiIHNhdGlzZmllcyBUYWJWYWx1ZX0+QXZhaWxhYmxlPC9UYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgdmFsdWU9e1wiaW5zdGFsbGVkXCIgc2F0aXNmaWVzIFRhYlZhbHVlfT5JbnN0YWxsZWQ8L1RhYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYkxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnQgY2xhc3NOYW1lPXtjbGFzc2VzLmV4dGVuc2lvbkRpYWxvZ0NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbiBjb2xsYXBzaWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXh0ZW5zaW9ucy5tYXAoKGV4dGVuc2lvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXh0ZW5zaW9uRGV0YWlscyBrZXk9e2V4dGVuc2lvbi5tZXRhZGF0YS5uYW1lfSBleHRlbnNpb249e2V4dGVuc2lvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dTdXJmYWNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRpc3Bvc2U6ICgpID0+IHJlZ2lzdHJhdGlvbi5kaXNwb3NlKCksXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbn07XHJcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=