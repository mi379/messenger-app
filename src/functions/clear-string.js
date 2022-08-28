export default function(params){
  var split = params.split('')

  var stringToInt = split.map(
    (char) => parseInt(char)
  )

  return stringToInt.filter(
    x => x == 0 || x > 0
  )
  .join(
    ""
  )
}