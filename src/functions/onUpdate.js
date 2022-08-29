export default function([_id,field,status,current,data]){
  var newData = data.map((doc) => doc)

  var [doc] = newData.filter(doc => {
  	return doc._id == _id
  })

  var indexOfDoc = newData.findIndex(
    Doc => Doc == doc
  )


  newData[indexOfDoc] = {
  	...doc,...field
  }

  return status.set({
    ...current,
    data:newData
  })
}