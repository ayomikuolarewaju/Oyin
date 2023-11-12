<script>
	import Header from '$lib/Header.svelte';
  import "../app.css";
	import Footer from '$lib/Footer.svelte';
  </script>

    <div class="sticky top-0 mt-5 z-50" >
      <Header/>
    </div>
  <main class="relative flex flex-col gap-5 w-[100%] md:w-[80%] justify-center mx-auto items-center">
    <div>
      <slot />
    </div>
  </main>
  <div class="sticky z-50 bottom-0 mb-2">
    <Footer />
  </div>