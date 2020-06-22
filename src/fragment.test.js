const { render, act } = require('@testing-library/svelte')
const { getContext } = require('svelte')

const WithChilds = require('./__fixtures__/with-childs.svelte')
const Fragment = require('./fragment.svelte')

test('renders all childs', () => {
  const { container } = render(WithChilds)

  expect(container.innerHTML).toMatch('<div>A<span>B</span>C</div>')
})

test('calls onCreate', () => {
  const onCreate = jest.fn()

  render(Fragment, { props: { onCreate, a: 1 } })

  expect(onCreate).toHaveBeenCalledWith({ props: { a: 1 } })
})

test('calls onMount', () => {
  const onMount = jest.fn()

  render(Fragment, { props: { onMount, a: 1 } })

  expect(onMount).toHaveBeenCalledWith({ props: { a: 1 } })
})

test('calls beforeUpdate', async () => {
  const beforeUpdate = jest.fn()

  const { component } = render(Fragment, { props: { beforeUpdate, a: 1 } })

  expect(beforeUpdate).toHaveBeenCalledWith({ props: { a: 1 } })

  await act(() => component.$set({ b: 2 }))

  expect(beforeUpdate).toHaveBeenCalledWith({ props: { a: 1, b: 2 } })
})

test('calls afterUpdate', async () => {
  const afterUpdate = jest.fn()

  const { component } = render(Fragment, { props: { afterUpdate, a: 1 } })

  expect(afterUpdate).toHaveBeenCalledWith({ props: { a: 1 } })

  await act(() => component.$set({ b: 2 }))

  expect(afterUpdate).toHaveBeenCalledWith({ props: { a: 1, b: 2 } })
})

test('calls onDestroy', async () => {
  const onDestroy = jest.fn()

  const { component } = render(Fragment, { props: { onDestroy, a: 1 } })

  await act(() => component.$destroy())

  expect(onDestroy).toHaveBeenCalledWith({ props: { a: 1 } })
})

test('create context', () => {
  let a
  let b

  render(Fragment, {
    props: {
      context: { a: 1, b: 2 },
      onMount: () => {
        a = getContext('a')
        b = getContext('b')
      },
    },
  })

  expect(a).toBe(1)
  expect(b).toBe(2)
})
