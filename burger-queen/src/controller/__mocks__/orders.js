export default jest.fn((client, products, token, userId) => new Promise((resolve, reject) => {
    if (!userId || !products) {
        reject({ message: 'Ingrese productos a la orden' });
    } else if(!token){
        reject({ message: 'No existe token válido' });
    }else{
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
