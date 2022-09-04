<script>
  import Preloader from '../../components/Preloader.svelte'
  import Search from './Search.svelte'
  import useFetch from '../../custom_hooks/useFetch'
  import storage from '../../storage'
  import getUser from '../../functions/getUser'
  import {Link} from 'svelte-navigator'
  import {onMount} from 'svelte'

  var userId = $storage.info._id
  var url = 'https://heroku-messenger-api'

  var [fetchLastMessage,status] = useFetch(
    `${url}.herokuapp.com/message`,
    (result) => console.log(result)
  )

  var [searchByFirstName,props] = useFetch(
    `${url}.herokuapp.com/user`,
    (result) => console.log(result)
  )

  onMount(() => fetchLastMessage(
    `/last?_id=${userId}`
  ))

   
</script>

<div class="absolute h-full w-full flex flex-col">
  <Search
    searchByFirstName = {
      searchByFirstName
    }
    userId = {
      userId
    }
    keyword = {
      ''
    }
    props = {
      props
    }
  />

  {#if $status.pending || $props.pending}
    <Preloader />
  {/if}

  

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
    {#each $props.data as data}
      <Link to="/message" state={{info:data}}>
        {data.profile.firstName}
      </Link>
    {/each}
  {/if}
</div>

