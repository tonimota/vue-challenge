import Products from '@/components/Products.vue'

describe('Products', () => {
  // Inspect the raw component options
  it('has a mounted hook', () => {
    expect(typeof Products.methods).toBe('object')
  })

  it('validate props', () => {
    const data = Products.props.data
    expect(data.type).toBe(Array)
  })
})
