<script>
  import {Router,Route,Link} from 'svelte-navigator'
  import {writable} from 'svelte/store'

  var verified = writable(false)
</script>

{#if !$verified}
  <Router>
    <Route path="/">
      <button on:click={() => verified.set(true)}>
        Login
      </button>
    </Route>
  </Router>
{/if}

{#if $verified}
  <Router>
    <Route path="/">
      <button on:click={() => verified.set(false)}>
        Logout
      </button>
    </Route>
  </Router>
{/if}




<!-- <script>
  import useSocketIo from './custom_hooks/useSocketIo'

  var joinId = '69048554435991260'
  var url = 'http://192.168.43.225'
  var config = {autoConnect:false}
  var [socketClient] = useSocketIo(
    `${url}:8000`,config,joinId
  )

  socketClient.on('insert',(doc) => {
    console.log(
      doc
    )
  })

  socketClient.on('update',(chg) => {
    console.log(
      chg
    )
  })
</script> -->


<!-- <script>
  import style from './app.css'
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

 -->