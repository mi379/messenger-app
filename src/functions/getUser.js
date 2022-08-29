export default function(param,_id){
  return param.sender._id == _id
  ? param.accept : param.sender
}
