<script>
    import Header from "$lib/UI/Header.svelte";
    import Footer from "$lib/UI/Footer.svelte";
    
</script>


<Header />


<main class="container">
    <slot></slot> 
</main>

<Footer></Footer>