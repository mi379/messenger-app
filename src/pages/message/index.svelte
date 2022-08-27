<script>
  import * as navigator from 'svelte-navigator'
  import writableStore from '../../storage'
  import useFetch from '../../custom_hooks/useFetch'
  import * as svelte from 'svelte'

  var _Id = $writableStore.info._id
  var location = navigator.useLocation()
  var {_id,profile} = $location.state.info
  var [_fetch,fetchProperties] = useFetch(
    'http://localhost:8000/message'
  )

  svelte.onMount(() => _fetch(
    `/all?s=${_Id}&a=${_id}`
  ))

</script>

{#if $fetchProperties.pending}
  Loading...
{/if}

{#if $fetchProperties.data}
  {#each $fetchProperties.data as data}
    {JSON.stringify(data)}
  {/each}
{/if}

{#if $fetchProperties.err}
  {JSON.stringify(
    $fetchProperties
    .err
  )}
{/if}

