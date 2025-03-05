<script lang="ts">
  import type { ValidFields } from "../../types/ValidFields";
  import CardServizio from "./CardServizio.svelte";

    export let catalog:ValidFields[];
</script>

<section>
    <div class="container d-flex flex-wrap p-3 gap-4">
        {#each catalog as service}
            <CardServizio {service}/>
        {/each}
    </div>
</section>