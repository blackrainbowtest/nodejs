export function truncateName(name) {
    if (name.length > 12) {
        return name.substring(0, 9) + "...";
    }
    return name;
};