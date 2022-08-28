<script>
  import {ObjectId} from "bson"

  export let 
    sender, 
    accept, 
    uniqueId,
    sendMessage
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
    read:false
  }
</script>


<form on:submit|preventDefault={() => sendMessage(sendObj,ObjectId())}>
  <input 
    type="text"
    placeholder="send"
    bind:value={content.text}
  />
  <button type="submit">
    send
  </button>
</form>