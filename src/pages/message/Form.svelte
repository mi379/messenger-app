<script>
  import {ObjectId} from "bson"
  import preSend from '../../functions/preSend'

  export let 
    sender, 
    accept, 
    uniqueId,
    sendFn,
    status,
    current,
    data
  ;

  var content = {
    type:'txt',
    value:''
  }

  $ : sendObj = {
    content,
    sender,
    accept,
    uniqueId,
    read:false,
  }

  $: fetchObj = [
    sendObj,
    sendFn,
    status,
    current,
    data
  ]

</script>


<form on:submit|preventDefault={() => preSend([...fetchObj,ObjectId()])}>
  <input 
    type="text"
    placeholder="send"
    bind:value={content.value}
  />
  <button type="submit">
    send
  </button>
</form>