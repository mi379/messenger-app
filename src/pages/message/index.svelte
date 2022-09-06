<script>
  import store from '../../storage'
  import Form from './Form.svelte'
  import onUpdate from '../../functions/onUpdate'
  import onNewMessage from '../../functions/onNewMessage'
  import clearString from '../../functions/clearString'
  import createUniqueId from '../../functions/createUniqueId'
  import useFetch from '../../custom_hooks/useFetch'
  import useSocketIo from '../../custom_hooks/useSocketIo' 
  import {useLocation} from 'svelte-navigator'
  import {onMount} from 'svelte'

  var config = {autoConnect:false}
  var location = useLocation()
  var state = $location.state
  var _Id = $store.info._id
  var _id = state.info._id

  var url = import.meta.env.VITE_API_URL
  var [fetchAllMessage,status] = useFetch(
    `${url}/message`,r => console.log(r)
  )

  var [sendMessage,sendStatus] = useFetch(
    `${url}/message`,r => console.log(r)
  )

  var [runUpdate,updateStatus] = useFetch(
    `${url}/message`,r => console.log(r)
  )

  var uniqueId = createUniqueId([
    clearString(
      _Id,
    ),
    clearString(
      _id
    )
  ])

  var [socketConn] = useSocketIo(
    url,config,uniqueId
  )

  socketConn.on('insert',(docs) => {   
    var data = {
      _id:docs._id,
      read:true
    }

    if(docs.sender != _Id){
      runUpdate('/new',{
        method:'put',
        data:data
      })
    }

    return onNewMessage(
      docs,
      _Id,
      status,
      $status,
      $status.data
    )
  })

  socketConn.on('update',(docs) => {
    return onUpdate([
       ...docs,
       status,
       $status,
       $status.data
    ])
  })

  onMount(() => fetchAllMessage(
    `/all?s=${_Id}&a=${_id}`
  ))
</script>

{#if $status.pending}
  Loading...
{/if}

{#if $status.data}
  {#each $status.data as n}
    {JSON.stringify(n)}
  {/each}

  <Form
    sender = {
      _Id
    }
    accept = {
      _id
    }
    status = {
      status
    }
    current = {
      $status
    }
    uniqueId = {
      uniqueId
    }
    sendFn = {
      sendMessage
    }
    data = {
      $status.data
    }
  />

  {#if $sendStatus.pending}
    Loading...
  {/if}
{/if}