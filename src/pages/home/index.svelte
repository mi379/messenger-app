 <script>
   import useFetch from '../../custom_hooks/useFetch'
   import storage from '../../storage'
   import getUser from '../../functions/getUser'
   import {Link} from 'svelte-navigator'
   import {onMount} from 'svelte'

   var userId = $storage.info._id
   var url = 'http://localhost:8000'

   var [fetchLastMessage,status] = useFetch(
     `${url}/message`
   )

   onMount(() => fetchLastMessage(
     `/last?_id=${userId}`
   ))

   
 </script>


{#if $status.pending}
  Loading...
{/if}

{#if $status.data}
  {#each $status.data as data}
     <Link to="/message" state={{info:getUser(data,userId)}}>
      {data.sender.profile.firstName} :  {data.content.value}
    </Link>
  {/each}
{/if}

{#if $status.err}
  {JSON.stringify(
  	$status
  	.err
  	.message
  )}
{/if}

