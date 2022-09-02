<script> 
  import searchValidator from '../../functions/searchValidator' 
 
  export let searchByFirstName,keyword,props,userId

  $ : query = `/search?query=${keyword}&id=${userId}`
  
  $ : keyword, searchValidator(
    searchByFirstName,
    keyword,query,
    props
  )
</script>

<form class="z-10">
  <input
    type="search"
    bind:value={keyword}
    placeholder="search"
    class="p-3 w-full border-2"
  />
</form>
