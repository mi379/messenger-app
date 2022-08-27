import {writable} from 'svelte/store'
import {onDestroy} from 'svelte'
import axios from 'axios'

function useFetch(address,successFn,failedFn){

  var fetchProps = writable({
    err:null,
    data:null,
    pending:false
  })

  function preFetch(path,requestObject){
    fetchProps.update((current) => {
      return {
        ...current,
        pending:true
      }
    })

    return fetch(
      requestObject,
      path
    )
  }

  async function fetch(requestObj,path){
    var url = `${address}${path}`
    var method = getRequestMethod(
      requestObj
    )

    try{
      var {data} = await axios({
        ...requestObj,
        method:method,
        url:url
      })
      fetchProps.update((c) => {
        return {...c,data}
      })

      if(successFn){
        return successFn(
          data
        )
      }
    }
    catch(err){
      fetchProps.update((c) => {
        return {...c,err}
      })

      if(failedFn){
        return failedFn(
          err.message
        )
      }
    }
    finally{
      fetchProps.update((c) => {
        return {
          ...c,pending:false
        }
      })
    }
  }

  function getRequestMethod(requestObj){
    if(requestObj){
      if(requestObj.method){
        return requestObj.method
      }
      else{
        return 'get'
      }
    }
    else{
      return 'get'
    }
  }

  onDestroy(() => {
    alert('destroyed')
  })

  return [
    preFetch,
    fetchProps
  ]
}

export default useFetch

