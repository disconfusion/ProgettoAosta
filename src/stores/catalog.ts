import { writable } from 'svelte/store';
import type { ValidFields } from '../types/ValidFields';



function createCatalog(){
    const catalog = writable<ValidFields[]>([]);

    return {
        subscribe: catalog.subscribe,
        addService: (service:ValidFields) => {
            catalog.update((services) => {
                services.push(service);
                return [...services];
            });
        }
    }
}


export default createCatalog();