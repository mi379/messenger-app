<script>
  import * as svelte from 'svelte'
  import * as navigator from 'svelte-navigator'
  import Form from './Form.svelte'
  import writableStore from '../../storage'
  import useFetch from '../../custom_hooks/useFetch'
  import clearString from '../../functions/clear-string'
  import createUniqueId from '../../functions/createUniqueId'

  var config = {autoConnect: false}
  var _Id = $writableStore.info._id
  var location = navigator.useLocation()
  var {_id,profile} = $location.state.info
  var [_fetch,fetchProperties] = useFetch(
    'http://localhost:8000/message'
  )

  var [fetchForSend,sendProps] = useFetch(
    'http://localhost:8000/message'
  )

  
  function sendMessage(params,documentId){
    
    var data = {
      _id:documentId,
      ...params
    }

    fetchForSend('/new',{
      method:'post',
      data:data
    })

    fetchProperties.update(c => Object({
      ...$fetchProperties, data : [
        ...$fetchProperties.data,
        data
      ]
    }))
  }

  var uniqueId = createUniqueId([
    clearString(
      _Id
    ),
    clearString(
      _id
    )
  ])

  svelte.onMount(() => _fetch(
    `/all?s=${_Id}&a=${_id}`
  ))

</script>

{#if $fetchProperties.pending}
  Loading...
{/if}

{#if $fetchProperties.data}
  {#each $fetchProperties.data as data}
    {JSON.stringify(data)}
  {/each}
{/if}

{#if $fetchProperties.err}
  {JSON.stringify(
    $fetchProperties
    .err
  )}
{/if}

<Form

  sender = {
    _Id
  }
  accept = {
    _id
  }
  uniqueId = {
    uniqueId
  }
  sendMessage = {
    sendMessage
  }

/>

