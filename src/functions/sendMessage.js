export default function(fn,data){
  return fn('/new',{
    method:'post',
    data:data
  })
}