import CryptoJS from "crypto-js";

export function validatePassword(password) {
    const hasNumber = /\d/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!isLongEnough) {
        return "Password must be at least 6 characters long.";
    }
    if (!hasNumber) {
        return "Password must contain at least one number.";
    }
    if (!hasLetter) {
        return "Password must contain at least one letter.";
    }
    if (!hasSymbol) {
        return "Password must contain at least one symbol.";
    }
    return "";
};

export function validateEmail (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Invalid email format.";
    }
    return "";
  };

export function hashPassword(password) {
    const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
    return hashedPassword;
}

// unix time now
export function getCurrentUnixTime() {
    return Math.floor(Date.now() / 1000);
}

export function getCurrentFullUnixTime() {
    return Math.floor(Date.now());
}

export function unixTimeToDate(unixTime) {
    const date = new Date(unixTime * 1000);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
}

// token
export function generatePseudoToken() {
    const timestamp = getCurrentUnixTime();
    const randomBytes = Array.from({ length: 16 }, () => Math.floor(Math.random() * 256));
    const randomHex = randomBytes.map(byte => ('0' + byte.toString(16)).slice(-2)).join('');
    const pseudoToken = `${timestamp}${randomHex}`;
    return pseudoToken;
}