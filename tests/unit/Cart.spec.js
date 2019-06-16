import Cart from '@/views/Cart.vue'

describe('Cart', () => {
  // Inspect the raw component options
  it('has a mounted hook', () => {
    expect(typeof Cart.mounted).toBe('function')
  })

  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    const defaultData = Cart.data()
    expect(typeof Cart.data).toBe('function')
    expect(typeof defaultData.itens).toBe('object')
    expect(typeof defaultData.cart).toBe('object')
  })
})
