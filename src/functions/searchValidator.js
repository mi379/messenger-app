export default function(fn,params,query,props){
  if(params.length < 1){
  	return props.set({
      err:null,
      data:null,
      pending:false
  	})
  }
  else{
  	return fn(
      query
  	)
  }
}