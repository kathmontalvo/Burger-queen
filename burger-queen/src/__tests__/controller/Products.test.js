import prodControls from '../../controller/Products.js';

describe('testing increase function', () => {
	it('deberia retornar un incremento de 1 en la qty', () => {
    const products = [{_id: '1', qty: 1}];
    const productsRes = [{_id: '1', qty: 2}];
    expect(prodControls.increase(products, '1')).toEqual(productsRes);
	})
	it('deberia añadir un nuevo elemento con el id ingresado', () => {
    const products2 = [{_id: '1', qty: 1}, {_id: '2', qty: 1}, {_id: '3', qty: 1}]
    expect(prodControls.increase(products, '1')).toEqual(productsRes);    

	})
	it('', () => {

	})
})