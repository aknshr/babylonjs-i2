import type { ComponentType, PropsWithChildren, Ref } from "react";
export type DynamicAccordionSection = Readonly<{
    /**
     * A unique identity for the section, which can be referenced by section content.
     */
    identity: string;
    /**
     * An optional order for the section, relative to other sections.
     * Defaults to 0.
     */
    order?: number;
    /**
     * An optional flag indicating whether the section should be collapsed by default.
     * Defaults to false.
     */
    collapseByDefault?: boolean;
}>;
export type DynamicAccordionSectionContent<ContextT> = Readonly<{
    /**
     * A unique key for the the content.
     */
    key: string;
    /**
     * The section this content belongs to.
     */
    section: string;
    /**
     * An optional order for the content within the section.
     * Defaults to 0.
     */
    order?: number;
    /**
     * The React component that will be rendered for this content.
     */
    component: ComponentType<{
        context: ContextT;
    }>;
}>;
export type SectionsImperativeRef = {
    highlightSections: (sections: readonly string[]) => void;
};
export declare function ExtensibleAccordion<ContextT = unknown>(props: PropsWithChildren<{
    accordionId?: string;
    sections: readonly DynamicAccordionSection[];
    sectionContent: readonly DynamicAccordionSectionContent<ContextT>[];
    context: ContextT;
    sectionsRef?: Ref<SectionsImperativeRef>;
}>): import("react/jsx-runtime").JSX.Element;
