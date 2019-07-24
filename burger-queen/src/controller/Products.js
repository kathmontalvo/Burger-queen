const controllProds = {
  deleteProd: (arr, id) => arr.filter(p => p._id !== id),
  increase: (arr, id) => {
    if (arr.map(p => p._id).includes(id)) {
      return arr.map((el) => {
        if (el._id === id) {
          return { _id: id, qty: el.qty + 1 }
        }
        return el
      })
    }
    return [
      ...arr,
      { _id: id, qty: 1},
    ]
  },
  decrease: (arr, id) => {
    if (arr.filter(p => p.qty > 1).map(p => p._id).includes(id)) {
      return arr.map((el) => {
        if (el._id === id) {
          return { _id: id, qty: el.qty - 1 }
        }
        return el
      })
    }
    return controllProds.deleteProd(arr, id)
  }
}

export default controllProds;