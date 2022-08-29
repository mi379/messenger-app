import {io} from 'socket.io-client'
import {onMount,onDestroy} from 'svelte'

export default function(address,config,id){
  var socketClient = io(address,config)
  
  onMount(() => socketClient.connect())

  onDestroy(() => socketClient.close())

  socketClient.on('connect',() => {
  	return id ? createRoom() : ''
  })

  function createRoom(){
  	socketClient.emit(
      'join',id
  	)
  }

  return [
    socketClient
  ]
}
