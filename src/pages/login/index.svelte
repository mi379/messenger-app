<script>
  import store from '../../storage'
  import signedIn from '../../functions/onSignedIn'
  import useFetch from '../../custom_hooks/useFetch'

  var data = {username:'', password: ''}

  $ : cfg = {method: 'post', data: data}

  var url = 'https://heroku-messenger-'
  var [submit,submitStatus] = useFetch(
    `${url}api.herokuapp.com/signin`,
    (info) => signedIn(info,$store)
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
