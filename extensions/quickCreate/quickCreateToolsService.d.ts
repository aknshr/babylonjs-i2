import type { ServiceDefinition } from "../../modularity/serviceDefinition";
import type { ISceneContext } from "../../services/sceneContext";
import type { IShellService } from "../../services/shellService";
import "core/Particles/webgl2ParticleSystem";
export declare const CreateToolsServiceDefinition: ServiceDefinition<[], [IShellService, ISceneContext]>;
declare const _default: {
    readonly serviceDefinitions: readonly [ServiceDefinition<[], [IShellService, ISceneContext]>];
};
export default _default;
