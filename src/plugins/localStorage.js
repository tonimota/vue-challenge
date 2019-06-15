const updateLocalStorage = (list) => {
  localStorage.setItem('cart', JSON.stringify(list))
}

const getLocalStorage = () => {
  let cart = JSON.parse(localStorage.getItem('cart'))
  return cart
}

export {
  updateLocalStorage,
  getLocalStorage
}
