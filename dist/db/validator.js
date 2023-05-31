export function validatePhone(phone) {
    // Check if the phone number is a string.
    if (typeof phone !== "string") {
        return false;
    }
    // Check if the phone number is at least 10 digits long.
    if (phone.length < 10) {
        return false;
    }
    // Check if the phone number is a valid format.
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
}
export function validateEmail(email) {
    //check if the email is a string
    if (typeof email !== "string") {
        return false;
    }
    // Check if the email address has a valid format.
    const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
}
export function validatePassword(password) {
    // Check if the password is at least 8 characters long.
    if (password.length < 8) {
        return false;
    }
    // Check if the password contains a mix of uppercase and lowercase letters, numbers, and symbols.
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[!@#$%^&*()_+]/.test(password);
    if (!hasUppercase || !hasLowercase || !hasNumbers || !hasSymbols) {
        return false;
    }
    // The password is valid.
    return true;
}
//# sourceMappingURL=validator.js.map