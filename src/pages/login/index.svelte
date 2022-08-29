<script>
  import store from '../../storage'
  import signedIn from '../../functions/onSignedIn'
  import useFetch from '../../custom_hooks/useFetch'

  var data = {username:'', password: ''}

  $ : cfg = {method: 'post', data: data}

  var [submit,submitStatus] = useFetch(
    'http://localhost:8000/signIn',
    (info) => signedIn(info,$store)
  )

</script>


<form on:submit|preventDefault={() => submit('/',cfg)}>
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

  {#if $submitStatus.pending}
    Loading...
  {/if}
  
</form>
