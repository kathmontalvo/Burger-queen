export default jest.fn((token) => new Promise((resolve, reject) => {
  if (!token) {
    reject({ message: 'Propiedad inválidad a modificar' });
  } else {
    resolve(
      [
        {
          client: "Alice"
          dateEntry: "2019-08-05T23:21:36.612Z"
          products: [
            {
              qty: 2,
              product: {
                name: "Café americano"
                price: 5
                productId: "5d4217946e893a00121fdda7"
              }
            },
            {
              qty: 1, product: {
                name: "Jugo de frutas naturales"
                price: 7
                productId: "5d4219806e893a00121fddab"
              }
            }
          ]
          status: "delivering"
          userId: "5d4203b7e96305001250ea9d"
          _id: "5d48ba00e6fb5300123e6ffb"
        }
      ])
  }
}));