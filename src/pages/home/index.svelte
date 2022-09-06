<script>
  import User from './User.svelte'
  import Search from './Search.svelte'
  import Navbar from './Navbar.svelte'
  import Message from './Message.svelte'
  import Preloader from '../../components/Preloader.svelte'
  import useFetch from '../../custom_hooks/useFetch'
  import storage from '../../storage'
  import getUser from '../../functions/getUser'
  import {Link} from 'svelte-navigator'
  import {onMount} from 'svelte'

  var searchKeyword = ''
  var userId = $storage.info._id
  var url = import.meta.env.VITE_API_URL

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

<div class="absolute h-full w-full flex flex-col overflow-scroll">
  <Navbar profile={$storage.info.profile}>
    <Search 
      {searchByFirstName}
      {searchKeyword}
      {userId}
      {props}    
    />
  </Navbar>
  

  {#if $status.pending || $props.pending}
    <Preloader />
  {/if}

  

  {#if $status.data && (!$props.data || $props.pending)}
    <div class="flex-1">
      {#each $status.data as data}
        <Link to="/message" state={{info:getUser(data,userId)}}>
          <Message 
            {data} 
            {userId}
          />
        </Link>
      {/each}
    </div>
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
    {#each $props.data as data}
      <Link to="/message" state={{info:data}}>
        <User {data} />
      </Link>
    {/each}
  {/if}
</div>

