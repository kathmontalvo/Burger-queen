export default jest.fn((email, password, cbErr) => {
    if (!email || !password) {
        cbErr({ message: 'Error desde mock' })
    }
});
