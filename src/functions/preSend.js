import sendNewMessage from './sendMessage'

export default function([obj,fn,status,current,data,_id]){
  
  var params = {
  	_id,...obj
  }

  var newData = [
    ...data,
    params
  ]

  sendNewMessage(
    fn,params
  )

  return status.set({
  	...current,
  	data:newData
  })
}
