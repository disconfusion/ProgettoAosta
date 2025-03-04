
<script lang="ts">
  import { ValidFields } from "../../types/validFields";
  import catalog from "../../stores/catalog";

    let validFields= new ValidFields();
    let counter = 0;
    
    function addToCatalog(){
      counter++;
      validFields.id = counter;
      catalog.addService(validFields);
    }


</script>


<div class="container shadow-lg mt-2 mb-2 p-5 border border-danger border-1 rounded d-flex flex-column justify-content-center">
    <h3>Configurazione Servizio</h3>
    <div>
        <div class="form-check d-flex align-items-center">
          <input id="idService" type="checkbox" bind:checked={validFields.idService}>
          <label for="idService">Identificativi del Servizio</label>
        </div>

    </div>

    <div>
        <div class="form-check d-flex align-items-center">
          <input id="genInfo" type="checkbox" bind:checked={validFields.genInfo}>
          <label for="genInfo">Informazioni generali</label>
        </div>
    </div>
    <div>
        <div class="form-check d-flex align-items-center">
          <input id="serviceDetail" type="checkbox" bind:checked={validFields.serviceDetail}>
          <label for="serviceDetail">Dettagli servizio</label>
        </div>
    </div>
    <div>
        <div class="form-check d-flex align-items-center">
          <input id="serviceAccess" type="checkbox" bind:checked={validFields.serviceAccess}>
          <label for="serviceAccess">Accesso al servizio</label>
        </div>
    </div>
    <div>
        <div class="form-check d-flex align-items-center">
          <input id="ContactsSupport" type="checkbox" bind:checked={validFields.contactsSupport}>
          <label for="ContactsSupport">Contatti e supporto</label>
        </div>
    </div>
    <div>
        <div class="form-check d-flex align-items-center">
          <input id="materials" type="checkbox">
          <label for="materials">Materiale utile</label>
        </div>
    </div>

    <button type="button" class="btn btn-primary" on:click={addToCatalog}>Configura Servizo</button>

    <div class="container shadow-lg mt-2 mb-2 p-5 border border-danger border-1 rounded d-flex flex-column justify-content-center">
      <ul>
      {#each $catalog as service}
        <li>
          Servizio: {service.id}
        </li>
      {/each}
    </ul>
    </div>
</div>
    