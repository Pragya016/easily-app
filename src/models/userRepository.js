import bcrypt from 'bcrypt';
import User from '../../config/schema/user.schema.js';

export class UserRepository {
    static async registerUser(name, email, password) {
        try {
            const hashedPassword = await bcrypt.hash(password, 12);
            const newUser = new User({ name, email, password: hashedPassword });
            return await newUser.save();
        } catch (error) {
            console.error('Error registering user:', error);
            throw new Error('Failed to register user');
        }
    }

    static async verifyUser(email, password) {
        try {
            const user = await User.findOne({ email });
            if (!user) {
                return false;
            }

            const passwordMatch = await bcrypt.compare(password, user.password);
            return passwordMatch ? user : false; // Return user object if password matches, otherwise false
        } catch (error) {
            console.error('Error verifying user:', error);
            throw new Error('Failed to verify user');
        }
    }
}
