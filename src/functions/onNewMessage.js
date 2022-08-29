export default function(docs,_id,status,current,data){

  var _data = {
    ...docs,
    read:true
  }

  var newData = [
    ...data,
    _data
  ]

  if(docs.sender != _id){
    return status.set({
  	  ...current,
  	  data:newData
    })
  }
}