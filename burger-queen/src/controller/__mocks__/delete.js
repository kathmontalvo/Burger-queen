export default jest.fn((token, id) => new Promise((resolve, reject) => {
    if (!id) {
      reject({ message: 'Orden inválida' });
    } else if (!token) {
      reject({ message: 'No existe token válido' });
    } else {
      resolve(
        [
          {
            "_id": "1",
            "userId": "1",
            "client": "Laura",
            "products": [
              {
                "product": "Café americano",
                "qty": "5"
              }
            ],
            "status": "pending",
            "dateEntry": "December 17, 1995 03:24:00",
            "dateProcessed": "December 17, 1995 03:24:00"
          }
        ])
    }
  }));