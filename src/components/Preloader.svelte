<script>export let err</script>

<div class="absolute h-full w-full flex items-center justify-center">
  {#if !err}
    Loading...
  {/if}

  {#if err}
    {err.message}
  {/if}
</div>