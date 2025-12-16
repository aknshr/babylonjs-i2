import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Body1Strong, makeStyles, tokens } from "@fluentui/react-components";
import { ExtensibleAccordion } from "../extensibleAccordion";
import { TextPropertyLine } from "shared-ui-components/fluent/hoc/propertyLines/textPropertyLine";
// eslint-disable-next-line @typescript-eslint/naming-convention
const useStyles = makeStyles({
    placeholderDiv: {
        padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalM}`,
    },
});
export const PropertiesPane = (props) => {
    const classes = useStyles();
    const entity = props.context;
    return entity != null ? (_jsxs(_Fragment, { children: [_jsx(TextPropertyLine, { label: "Line Outside Accordion", description: "A propertyLine outside Accordion", value: "👍" }, "Test"), _jsx(ExtensibleAccordion, { ...props })] })) : (_jsx("div", { className: classes.placeholderDiv, children: _jsx(Body1Strong, { italic: true, children: "No entity selected." }) }));
};
//# sourceMappingURL=propertiesPane.js.map