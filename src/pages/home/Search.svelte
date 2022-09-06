<script>
  import searchValidator from '../../functions/searchValidator' 

  export let searchByFirstName,props,userId,searchKeyword

  $ : path = `/search?query=${searchKeyword}&id=${userId}`

  $ : searchKeyword, searchValidator(
    searchByFirstName,path,props,
    searchKeyword
  )

</script>

<div class="flex-1 flex">
  <input 
    type="text" 
    bind:value={searchKeyword}
    placeholder="search by first name"
    class="flex-1 focus:outline-none"
  />
</div>

