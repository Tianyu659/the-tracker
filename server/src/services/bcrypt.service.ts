import bcrypt from 'bcrypt';

const saltRounds = 10;

/**
 * Hashes password and returns hashed password
 * @param {string} password
 * @returns hashed password
 */
export const hashPassword = async (password: string): Promise<string> => {
    return await bcrypt.hash(password, saltRounds)
}

/**
 * Checks if password is correct
 * @param {string} password
 * @param {string} hashedPassword
 * @returns true if password is correct, false otherwise
 */
export const checkPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    return await bcrypt.compare(password, hashedPassword)
}