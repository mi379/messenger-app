<script>
  import writableStore from './storage'
  import Home from './pages/home/index.svelte'
  import Login from './pages/login/index.svelte'
  import Message from './pages/message/index.svelte'
  import * as Navigator from 'svelte-navigator'


  writableStore.subscribe((store) => {
    return localStorage.setItem(
      'state',JSON.stringify({
        ...store
      })
    )
  })
</script>

{#if $writableStore.login}
  <Navigator.Router>
    <Navigator.Route path="/">
      <Home />
    </Navigator.Route>
    <Navigator.Route path="/message">
      <Message />
    </Navigator.Route>
    <Navigator.Route path="**">
      404: Not found
    </Navigator.Route>
  </Navigator.Router>
{/if}

{#if !$writableStore.login}
  <Navigator.Router>
    <Navigator.Route path="/">
      <Login 
        message="login first..."
      />
    </Navigator.Route>
  </Navigator.Router>
{/if}

