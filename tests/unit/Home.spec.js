import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Home from '@/views/Home.vue'

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
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

  // Inspect the component instance on mount
  // it('correctly sets the message when created', () => {
  //   const vm = new Vue(Home).$mount()
  //   expect(vm.message).toBe('bye!')
  // })
})
