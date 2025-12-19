import type { IDisposable } from "core/index";
import type { IService, ServiceDefinition } from "./serviceDefinition";
export type WeaklyTypedServiceDefinition = Omit<ServiceDefinition<IService<symbol>[] | [], IService<symbol>[] | []>, "factory"> & {
    /**
     * A factory function responsible for creating a service instance.
     */
    factory: (...args: any) => ReturnType<ServiceDefinition<IService<symbol>[] | [], IService<symbol>[] | []>["factory"]>;
};
/**
 * A service container manages the lifetimes of a set of services.
 * It takes care of instantiating the services in the correct order based on their dependencies,
 * passing dependencies through to services, and disposing of services when the container is disposed.
 */
export declare class ServiceContainer implements IDisposable {
    private readonly _friendlyName;
    private _isDisposed;
    private readonly _serviceDefinitions;
    private readonly _serviceDependents;
    private readonly _serviceInstances;
    constructor(_friendlyName: string);
    /**
     * Adds a set of service definitions in the service container.
     * The services are sorted based on their dependencies.
     * @param args The service definitions to register, and optionally an abort signal.
     * @returns A disposable that will remove the service definition from the service container.
     */
    addServicesAsync(...args: WeaklyTypedServiceDefinition[] | [...serviceDefinitions: WeaklyTypedServiceDefinition[], abortSignal: AbortSignal]): Promise<IDisposable>;
    /**
     * Registers a service definition in the service container.
     * @param serviceDefinition The service definition to register.
     * @param abortSignal An optional abort signal.
     * @returns A disposable that will remove the service definition from the service container.
     */
    addServiceAsync<Produces extends IService<symbol>[] = [], Consumes extends IService<symbol>[] = []>(serviceDefinition: ServiceDefinition<Produces, Consumes>, abortSignal?: AbortSignal): Promise<IDisposable>;
    private _addServiceAsync;
    private _removeService;
    /**
     * Disposes the service container and all contained services.
     */
    dispose(): void;
}
