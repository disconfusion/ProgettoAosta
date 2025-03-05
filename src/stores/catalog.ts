import { writable } from 'svelte/store';
import type { ValidFields } from '../types/validFields';



function createCatalog(){
    const catalog = writable<ValidFields[]>([]);

    return {
        subscribe: catalog.subscribe,
        addService: (service:ValidFields) => {
            catalog.update((services) => {
                services.push(service);
                console.log(services);
                return [...services];
            });
        }
    }
}


export default createCatalog();