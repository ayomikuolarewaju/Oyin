<script>
  import { Mic} from 'lucide-svelte';
  
</script>



<div class=" p-2 rounded-md mb-2 flex w-full justify-center items-center bg-white" >
  <form action="/?/button" method="POST">
    <input type="text" name="button" class="focus:border-none h-[30px] w-[250px] p-3">
      <button><Mic class="w-[20px] h-[20px]"/></button>
  </form>
</div>