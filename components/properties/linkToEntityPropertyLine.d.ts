import type { FunctionComponent } from "react";
import type { PropertyLineProps } from "shared-ui-components/fluent/hoc/propertyLines/propertyLine";
import type { ISelectionService } from "../../services/selectionService";
import type { Nullable } from "core/types";
type LinkToEntityProps = {
    entity: Nullable<{
        name: string;
        reservedDataStore?: Record<PropertyKey, unknown>;
    }>;
    selectionService: ISelectionService;
};
/**
 * A property line that links to a specific entity in the scene.
 * @param props an entity and a selection service
 * @returns A link property line component.
 */
export declare const LinkToEntityPropertyLine: FunctionComponent<PropertyLineProps<string> & LinkToEntityProps>;
export {};
