<script>
  import writableStore from './storage'
  import Home from './pages/home/index.svelte'
  import Login from './pages/login/index.svelte'
  import Message from './pages/message/index.svelte'
  import {Router,Route} from 'svelte-navigator'

  writableStore.subscribe((store) => {
    return localStorage.setItem(
      'state',JSON.stringify({
        ...store
      })
    )
  })
  
</script>

{#if $writableStore.login}
  <Router>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/message">
      <Message />
    </Route>
    <Route path="**">
      Not found
    </Route>
  </Router>
{/if}

{#if !$writableStore.login}
  <Router>
    <Route path="/">
      <Login />
    </Route>
  </Router>
{/if}

