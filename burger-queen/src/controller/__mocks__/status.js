export default jest.fn((client, products, token, userId, status, id) => new Promise((resolve, reject) => {
    if (!status) {
      reject({ message: 'Propiedad inválidad a modificar' });
    } else if (!token) {
      reject({ message: 'No existe token válido' });
    } else if  (!id){
        reject({message : 'Orden inválida'});
    }
    else {
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