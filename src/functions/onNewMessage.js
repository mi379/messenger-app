export default function(docs,_id,status,current,data){
  var newData = [
    ...data,
    docs
  ]

  if(docs.sender != _id){
    return status.set({
  	  ...current,
  	  data:newData
    })
  }
}