export const locators = {
    login: {
        username: 'input[name="username"]',
        password: 'input[name="password"]',
        loginButton: 'input[value="Log In"]',
        errorMessage: '#rightPanel .error'
    },
    signup: {
        firstName: 'input[name="customer.firstName"]',
        lastName: 'input[name="customer.lastName"]',
        address: 'input[name="customer.address.street"]',
        city: 'input[name="customer.address.city"]',
        state: 'input[name="customer.address.state"]',
        zipCode: 'input[name="customer.address.zipCode"]',
        phone: 'input[name="customer.phoneNumber"]',
        ssn: 'input[name="customer.ssn"]',
        username: 'input[name="customer.username"]',
        password: 'input[name="customer.password"]',
        confirmPassword: 'input[name="repeatedPassword"]',
        registerButton: 'input[value="Register"]',
        errorMessages: '.error'
    },
    account: {
        accountTable: '#accountTable',
        balanceCell: '#accountTable tr:first-child td:nth-child(2)',
        accountServices: '#leftPanel h2'
    },
    common: {
        registerLink: 'text=Register',
        form: 'form'
    }
};
