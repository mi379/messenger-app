import {io} from 'socket.io-client'
import {onMount,onDestroy} from 'svelte'

function useSocketIo(address,config){
  
  var socketIo = io(address,config)

  onMount(() => socketIo.connect())

  onDestroy(() => socketIo.close())

  return [
    socketIo
  ]
}

export default useSocketIo