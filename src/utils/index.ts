import jwt from 'jsonwebtoken'
import { encryptPassword, comparePassword } from './passwordUtils';

const generateToken = (userId) => {
    const token = jwt.sign({userId}, "SECRET_KEY", {expiresIn: '1d'});
    return token;
}



export {
    generateToken,
    encryptPassword,
    comparePassword,
}