import jwt from 'jsonwebtoken'

const generateToken = (userId) => {
    const token = jwt.sign({userId}, "SECRET_KEY", {expiresIn: '1d'});
    return token;
}

export {
    generateToken,
}