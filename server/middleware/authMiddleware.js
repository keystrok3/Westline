
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).json({ success: false, msg: "Authorization header missing" });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, secretKey);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Invalid or expired token' });
    }
};

module.exports = { authMiddleware };