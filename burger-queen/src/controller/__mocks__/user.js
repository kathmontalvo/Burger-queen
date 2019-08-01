export default jest.fn((uid) => new Promise((resolve, reject) => {
    if (!uid) {
        reject({ message: 'Forbidden' });
    } else {
        resolve([{
            "_id":"1",
            "email": "amy@gmail.com",
            "roles":{
                        "admin": false
                    }
                    
        }
        ]);
    }
}));
