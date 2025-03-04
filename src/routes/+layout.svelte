<script>
    import Header from "$lib/UI/Header.svelte";
    import Footer from "$lib/UI/Footer.svelte";
</script>


<Header />


<main>
    <slot></slot> <!-- Qui verranno iniettate le pagine specifiche -->
  </main>

  <Footer></Footer>