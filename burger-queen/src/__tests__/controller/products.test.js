import prodControls from '../../controller/products.js';

describe('testing increase function', () => {
  it('deberia retornar un incremento de 1 en la qty', () => {
    const products = [{ _id: '1', qty: 1 }];
    const productsRes = [{ _id: '1', qty: 2 }];
    const products2 = [{ _id: '1', qty: 1 }, { _id: '2', qty: 1 }, { _id: '3', qty: 1 }];
    const productsRes2 = [{ _id: '1', qty: 1 }, { _id: '2', qty: 2 }, { _id: '3', qty: 1 }];

    expect(prodControls.increase(products, '1')).toEqual(productsRes);
    expect(prodControls.increase(products2, '2')).toEqual(productsRes2);
  });
  it('deberia añadir un nuevo elemento con el id ingresado', () => {
    const products = [{ _id: '1', qty: 2 }, { _id: '2', qty: 1 }];
    const productsRes = [{ _id: '1', qty: 2 }, { _id: '2', qty: 1 }, { _id: '4', qty: 1 }];
    const products2 = [];
    const productsRes2 = [{ _id: '3', qty: 1 }];

    expect(prodControls.increase(products, '4')).toEqual(productsRes);
    expect(prodControls.increase(products2, '3')).toEqual(productsRes2);
  })
});

describe('testing decrease function', () => {
  it('deberia retornar un decrease de 1 en la qty', () => {
    const products = [{ _id: '1', qty: 3 }];
    const productsRes = [{ _id: '1', qty: 2 }];
    const products2 = [{ _id: '1', qty: 1 }, { _id: '2', qty: 2 }, { _id: '3', qty: 1 }];
    const productsRes2 = [{ _id: '1', qty: 1 }, { _id: '2', qty: 1 }, { _id: '3', qty: 1 }];

    expect(prodControls.decrease(products, '1')).toEqual(productsRes);
    expect(prodControls.decrease(products2, '2')).toEqual(productsRes2);
  });
  it('deberia eliminar el elem si su qty es 1', () => {
    const products = [{ _id: '1', qty: 2 }, { _id: '2', qty: 1 }, { _id: '4', qty: 1 }];
    const productsRes = [{ _id: '1', qty: 2 }, { _id: '2', qty: 1 }];
    const products2 = [{ _id: '3', qty: 1 }];
    const productsRes2 = [];

    expect(prodControls.decrease(products, '4')).toEqual(productsRes);
    expect(prodControls.decrease(products2, '3')).toEqual(productsRes2);
  })
})

describe('testing delete function', () => {
  it('deberia eliminar el elem con id ingresado', () => {
    const products = [{ _id: '1', qty: 1 }];
    const productsRes = [];
    const products2 = [{ _id: '1', qty: 1 }, { _id: '2', qty: 1 }, { _id: '3', qty: 1 }];
    const productsRes2 = [{ _id: '1', qty: 1 }, { _id: '3', qty: 1 }];

    expect(prodControls.delete(products, '1')).toEqual(productsRes);
    expect(prodControls.delete(products2, '2')).toEqual(productsRes2);
  });
})

describe('testing mix function', () => {
  it('deberia combinar los elem de los arr ingresado', () => {
    const arrData = [
      {
        "_id": "1",
        "name": "Café americano",
        "price": "5",
        "image": "https://i.ibb.co/Yfbp5kY/cafe-americano.png",
        "type": "Desayuno",
        "dateEntry": "December 17, 1995 03:24:00"
      },
      {
        "_id": "2",
        "name": "Café con leche",
        "price": "7",
        "image": "https://i.ibb.co/rGMbTtB/cafe-leche.png",
        "type": "Desayuno",
        "dateEntry": "December 17, 1995 03:24:00"
      }
    ];
    const arrCant = [
      { "_id": "1", "qty": 1 },
      { "_id": "2", "qty": 2 }
    ]
    const arrCant2=[
      { "_id": "5", "qty": 1 },
      { "_id": "8", "qty": 3 }
    ];
    const result = [
      {
        "_id": "1",
        "name": "Café americano",
        "price": "5",
        "image": "https://i.ibb.co/Yfbp5kY/cafe-americano.png",
        "type": "Desayuno",
        "dateEntry": "December 17, 1995 03:24:00",
        "qty": 1,
        "total": 5
      },
      {
        "_id": "2",
        "name": "Café con leche",
        "price": "7",
        "image": "https://i.ibb.co/rGMbTtB/cafe-leche.png",
        "type": "Desayuno",
        "dateEntry": "December 17, 1995 03:24:00",
        "qty": 2,
        "total": 14
      }
    ];

    expect(prodControls.mix(arrData, arrCant)).toEqual(result);
    expect(prodControls.mix(arrData, arrCant2)).toEqual([]);
  });
})