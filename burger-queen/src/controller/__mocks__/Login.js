export default jest.fn((email, password) => {
    if (!email || !password) {
        throw new Error('Error')
    }
});
