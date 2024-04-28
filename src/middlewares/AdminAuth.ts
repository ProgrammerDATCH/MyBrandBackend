import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const JWT_KEY_ADMIN = process.env.JWT_KEY_ADMIN || 'SECRETADMIN';

export const AdminAuth = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({status: false, message: "You are not logged in as Admin."});
    }

    jwt.verify(token, JWT_KEY_ADMIN, (err, decoded) => {
        if (err) {
            return res.status(401).json({status: false, message: "You are not logged in as Admin. Invalid Token."});
        }
        (req as any).adminId = (decoded as any).adminId;
        next();
    });
};