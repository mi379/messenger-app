export default function(fn,query,props,params){
  if(params.length < 1){
  	return reset(
      props
    )
  }
  else{
  	return fn(
      query
    )
  }
}

function reset(props){
  return props.set({
    err:null,
    data:null,
    pending:false 
  })
}