<script lang="ts">
    import CatalogoServizi from "$lib/UI/CatalogoServizi.svelte";
    import catalog from "../../stores/catalog";

</script>

<CatalogoServizi catalog={$catalog}/>