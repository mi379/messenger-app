<script>
  import store from '../../storage'
  import signedIn from '../../functions/onSignedIn'
  import useFetch from '../../custom_hooks/useFetch'

  var data = {username:'', password: ''}

  $ : cfg = {method: 'post', data: data}

  var url = import.meta.env.VITE_API_URL
  
  var [submit,submitStatus] = useFetch(
    `${url}/signin`,
    info => signedIn(info,$store)
  )

  console.log(
    import.meta.env
  )

</script>


<form on:submit|preventDefault={() => submit('/',cfg)}>
  <input 
    type="text"
    placeholder="username...."
    bind:value={data.username}
    class="border-black" 
  />
  <input 
    type="password"
    placeholder="password...."
    bind:value={data.password}
    class="p-3"
  />
  <button type="submit">
    submit
  </button>

  {#if $submitStatus.pending}
    Loading...
  {/if}
  
</form>
