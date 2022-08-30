<script>
  import Preloader from '../../components/Preloader.svelte'
  import Search from './Search.svelte'
  import useFetch from '../../custom_hooks/useFetch'
  import storage from '../../storage'
  import getUser from '../../functions/getUser'
  import {Link} from 'svelte-navigator'
  import {onMount} from 'svelte'

  var userId = $storage.info._id
  var url = 'http://localhost:8000'

  var [fetchLastMessage,status] = useFetch(
    `${url}/message`,r => console.log(r)
  )

  var [searchByFirstName,props] = useFetch(
    `${url}/user`,r => console.log(r)
  )

  onMount(() => fetchLastMessage(
    `/last?_id=${userId}`
  ))

   
</script>

<div class="absolute h-full w-full flex flex-col">
  {#if $status.pending || $props.pending}
    <Preloader />
  {/if}

  <Search
    searchByFirstName = {
      searchByFirstName
    }
    keyword = {
      ''
    }
    props = {
      props
    }
  />

  {#if $status.data && (!$props.data || $props.pending)}
    {#each $status.data as data}
      <div>
        <Link to="/message" state={{info:getUser(data,userId)}}>
          {data.sender.profile.firstName} :  {data.content.value}
        </Link>
      </div>
    {/each}
  {/if}

  {#if $status.err}
    <Preloader 
      err = {
        $status.err
      }
    />
  {/if}

  {#if $props.err}
    <Preloader 
      err = {
        $props.err
      }
    />
  {/if}

  {#if $props.data && $props.data.length < 1}
    <Preloader 
      err = {{
        message: 'No result'
      }}
    />
  {/if}

  {#if $props.data && $props.data.length > 0}
    {#each $status.data as data}
      {JSON.stringify(data)}
    {/each}
  {/if}
</div>

