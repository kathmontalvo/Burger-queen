const controllProds = {
  'delete': (arr, id) => arr.filter(p => p._id !== id),
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
      { _id: id, qty: 1 },
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
    return controllProds.delete(arr, id)
  },
  mix: (arrData, arrCant) => {
    const newArr = []
    arrData.forEach((el1) => arrCant.forEach((el2) => {
      if (el1._id === el2._id) {
        newArr.push({ ...el1, qty: el2.qty, total: el2.qty * el1.price })
      }
    })
    )
    return newArr;
  }
}

export default controllProds;