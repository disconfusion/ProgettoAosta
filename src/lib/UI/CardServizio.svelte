<script lang="ts">
  import type { ValidFields } from "../../types/ValidFields";

    export let service:ValidFields; 

    let serviceFields = Object.keys(service);

</script>

<div id="cardServizio" class="container flex-fill shadow-lg mt-2 mb-2 p-4 border border-danger border-1 rounded">
    <h4>Servizio: {service.id}</h4>
    <div>
        <h6>Campi Obbligatori</h6>
        {#each serviceFields as serviceField}
            <p>{service[serviceField as keyof ValidFields]?serviceField:""}</p>
        {/each}
    </div>
</div>

<style>
 #cardServizio{
    max-width: 30%;
 }
</style>