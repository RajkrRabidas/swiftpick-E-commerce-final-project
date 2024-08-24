const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Get token from 'Bearer <token>'

    if (!token) {
        return res.status(401).json({ success: false, message: "Not authorized, please login again" });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decodedToken.id; // This should match the payload key in your JWT
        console.log('Decoded User ID:', req.userId);
        next();
    } catch (error) {
        console.error("Token verification failed:", error);
        res.status(401).json({ success: false, message: "Not authorized" });
    }
};

module.exports = authMiddleware;
