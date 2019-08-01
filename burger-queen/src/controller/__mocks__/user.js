export default jest.fn(() => new Promise((resolve, reject) => {
    if (!email || !password) {
        reject({ message: 'Error desde mock' });
    } else {
        resolve({ token: '' });
    }
}));
