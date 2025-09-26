export const config = {
    baseUrl: "https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC",
    defaultPassword: "Pass@123",
    timeout: 30000,
    headless: false,
    testData: {
        validUser: {
            username: "john",
            password: "demo",
            firstName: "John",
            lastName: "Smith",
            address: "1431 Main St",
            city: "Beverly Hills",
            state: "CA",
            zipCode: "90210",
            phone: "310-447-4121",
            ssn: "123-45-6789"
        },
        newUser: {
            firstName: "Ayushi",
            lastName: "Sakwar",
            address: "123 Street",
            city: "Bangalore",
            state: "KA",
            zipCode: "560001",
            phone: "9876543210",
            ssn: "12345"
        }
    }
};
