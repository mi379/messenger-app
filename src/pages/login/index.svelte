<script>
  import useFetch from '../../custom_hooks/useFetch'
  import writableStore from '../../storage'

  var data = {username:'',password:''}

  var [_fetch,properties] = useFetch(
    'http://localhost:8000/signIn',
    (result) => _onSignedIn(result)
  )

  function _onSignedIn(userInfo){
    return writableStore.set({
      ...$writableStore,
      info:userInfo,
      login:true,
    })
  }

  function onSubmit(method){
    return _fetch('/',{
      method,data
    })
  }



 
</script>


<form on:submit|preventDefault={() => onSubmit('post')}>
  <input 
    type="text"
    placeholder="username...."
    bind:value={data.username}
  />
  <input 
    type="password"
    placeholder="password...."
    bind:value={data.password}
  />
  <button type="submit">
    submit
  </button>

  {#if $properties.pending}
    Loading...
  {/if}
  
</form>
