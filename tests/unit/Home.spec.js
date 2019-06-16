import Home from '@/views/Home.vue'

describe('Home', () => {
  // Inspect the raw component options
  it('has a mounted hook', () => {
    expect(typeof Home.mounted).toBe('function')
  })

  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    const defaultData = Home.data()
    expect(typeof Home.data).toBe('function')
    expect(defaultData.products).toBe(null)
    expect(typeof defaultData.newList).toBe('object')
    expect(defaultData.visible).toBe(false)
  })

  it('sets the correct default data', () => {
    expect(typeof Home.data).toBe('function')
    const defaultData = Home.data()
    expect(defaultData.messageErro).toBe('Not found Products, service temporarily down. Sorry for inconvenience')
  })
})
