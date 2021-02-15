export default class User {
    constructor(username, firstName, lastName, afm, email, employmentStatus, phoneNumber, password) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.afm = afm;
        this.email = email;
        this.employmentStatus = employmentStatus;
        this.phoneNumber = phoneNumber;
        this.password = password;
    }
}