<script>
  import * as Svelte from 'svelte'

  export let context = null
  export let onCreate = null
  export let onMount = null
  export let beforeUpdate = null
  export let afterUpdate = null
  export let onDestroy = null

  if (context) {
    Object.keys(context).forEach((key) => {
      Svelte.setContext(key, context[key])
    })
  }

  if (onCreate) bind(onCreate)()

  if (onMount) Svelte.onMount(bind(onMount))
  if (beforeUpdate) Svelte.beforeUpdate(bind(beforeUpdate))
  if (afterUpdate) Svelte.afterUpdate(bind(afterUpdate))
  if (onDestroy) Svelte.onDestroy(bind(onDestroy))

  function bind(callback) {
    return () => callback({ props: $$restProps })
  }
</script>

<slot></slot>
