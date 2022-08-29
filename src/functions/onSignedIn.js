import storage from '../storage'

export default function(info,store){
  return storage.set({
    ...store,
    login:true,
    info:info
  })
}