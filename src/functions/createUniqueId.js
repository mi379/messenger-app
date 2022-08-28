function intToString(intParams){
  return intParams.toString()
}

export default function(params){
  var [from,to] = params.map(
    x => parseInt(x)
  )

  return intToString(
    from + to
  )
}
