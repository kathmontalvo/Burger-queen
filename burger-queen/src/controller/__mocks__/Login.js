export default jest.fn((email, password, cbOk, cbErr) => {
    if (!email || !password) {
        cbErr({ message: 'Error desde mock' })
    }
});
