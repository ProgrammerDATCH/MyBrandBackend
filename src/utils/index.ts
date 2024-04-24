import jwt from 'jsonwebtoken'
import { encryptPassword, comparePassword } from './passwordUtils';

const JWT_KEY = process.env.JWT_KEY || 'SECRET';

const generateToken = (userId: string) => {
    const token = jwt.sign({userId}, JWT_KEY, {expiresIn: '1d'});
    return token;
}


function convertToHumanFriendlyDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    });
  }


export {
    generateToken,
    encryptPassword,
    comparePassword,
    convertToHumanFriendlyDate,
}