export default jest.fn((email, password) => new Promise((resolve, reject) => {
    if (!email || !password) {
        reject({ message: 'Error desde mock' });
    } else {
        resolve({ token: '' });
    }
}));
