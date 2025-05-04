/**
 * Converts a string to a URL-friendly slug
 * @param {string} text - The text to convert to a slug
 * @returns {string} The slugified text
 */
export function slugify(text) {
    return text
        // Convert to lowercase
        .toLowerCase()
        // Replace special characters with their simple equivalents
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        // Replace spaces and special characters with hyphens
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_]+/g, '-')
        // Remove leading/trailing hyphens
        .replace(/^-+|-+$/g, '');
}

/**
 * Unslugify a string (convert slug back to readable text)
 * @param {string} slug - The slug to convert back to text
 * @returns {string} The unslugified text
 */
export function unslugify(slug) {
    return slug
        // Replace hyphens with spaces
        .replace(/-/g, ' ')
        // Capitalize first letter of each word
        .replace(/(^\w|\s\w)/g, letter => letter.toUpperCase());
}