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