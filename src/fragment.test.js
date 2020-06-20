const { expect, test } = require('@jest/globals')
const { render } = require('@testing-library/svelte')

const WithChilds = require('./__fixtures__/with-childs.svelte')

test('renders all childs', () => {
  const { container } = render(WithChilds)

  expect(container.innerHTML).toMatch('<div>A<span>B</span>C</div>')
})
