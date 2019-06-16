import List from '@/components/List.vue'

describe('List', () => {
  // Inspect the raw component options
  it('has a mounted hook', () => {
    expect(typeof List.methods).toBe('object')
  })

  it('validate props', () => {
    const data = List.props.data
    expect(data.required).toBeTruthy()
    expect(data.type).toBe(Array)

    const cart = List.props.cart
    expect(cart.required).toBeTruthy()
    expect(cart.type).toBe(Object)
  })
})
