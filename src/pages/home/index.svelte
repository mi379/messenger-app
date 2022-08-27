 <script>
   import * as svelte from 'svelte'
   import useFetch from '../../custom_hooks/useFetch'
   import writableStore from '../../storage'
   import * as Navigator from 'svelte-navigator'

   var {_id,profile} = $writableStore.info
   var [Fetch,fetchProperties] = useFetch(
     'http://localhost:8000/message'
   )

   function getUser(detail,info){
   	 if(detail.sender._id == info._id){
       return {
       	 info: detail.accept
       }
   	 }
   	 else{
   	   return {
         info: detail.sender
   	   }
   	 }
   }

   svelte.onMount(() => Fetch(
     `/last?_id=${_id}`
   ))

   
 </script>


{#if $fetchProperties.pending}
  Loading...
{/if}

{#if $fetchProperties.data}
  {#each $fetchProperties.data as data}
     <Navigator.Link to="/message" state={{...getUser(data,$writableStore.info)}}>
        Message
    </Navigator.Link>
  {/each}
{/if}

{#if $fetchProperties.err}
  {JSON.stringify(
  	$fetchProperties
  	.err
  	.message
  )}
{/if}

