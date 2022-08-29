export default function(params){
  var [from,to] = params.map(
    (x) => parseInt(x)
  )

  return IntToString(
    from + to
  )
}

function IntToString(parameter){
  return parameter.toString()
}
