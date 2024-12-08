import { generatePseudoToken, getCurrentUnixTime, hashPassword } from './validation';

export const validateField = (field, value, setError, setHelperText) => {
    if (!value) {
        setError(true);
        setHelperText(`${field} is required.`);
        return false;
    } else {
        if (field === "Email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                setError(true);
                setHelperText("Please enter a valid email address.");
                return false;
            }
        }
        if (field === "Password") {
            if (value.length < 8) {
                setError(true);
                setHelperText("Password must be at least 8 characters long.");
                return false;
            }

            const hasNumber = /\d/;
            if (!hasNumber.test(value)) {
                setError(true);
                setHelperText("Password must contain at least one number.");
                return false;
            }

            const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
            if (!hasSpecialChar.test(value)) {
                setError(true);
                setHelperText("Password must contain symbol (e.g., !, @, #, $, etc.).");
                return false;
            }
        }
        setError(false);
        setHelperText("");
        return true;
    }
};

export const createUserData = (name, email, password) => {
    const timeNow = getCurrentUnixTime();
    // const hashedPassword = hashPassword(password);
    return {
        name,
        email,
        password: password,
        registerDate: timeNow,
        lastLoginDate: timeNow,
    };
};

export const createUserLoginData = (email, password, rememberMe) => {
    const timeNow = getCurrentUnixTime();
    // const hashedPassword = hashPassword(password);
    const token = generatePseudoToken();

    const userData = {
        email,
        password: password,
        lastLoginDate: timeNow,
    };

    if (rememberMe) {
        userData.token = token;
    }

    return userData;
};