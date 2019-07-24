const controllProds = {
  increase: (arr, id) => {
    const newArr = arr.map((el) => {
      if (el._id === id) {
        return { _id: id, qty: el.qty + 1 }
      } else {
        return [...arr, { _id: id, qty: 1 }]
      }
    })
    return newArr
  },
  decrease: (arr, id) => {
    const newArr = arr.map((el) => {
      if (el._id === id) {
        if (el.qty > 0) {
          return { _id: id, qty: el.qty - 1 }
        } else {
          delete (arr, id);
        }
      }
      return el

    })
    return newArr
  },
  delete: (arr, id) => {
    const newArr = arr.map((el) => {
      if (el._id === id) {
      }
    })
  }
}
