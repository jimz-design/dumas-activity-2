const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// 1. Protect routes (Authentication)
exports.protect = async (req, res, next) => {
    let token;

    // Check if Authorization header exists and starts with Bearer
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {

            // Extract token from header
            token = req.headers.authorization.split(' ')[1];

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Get user from database and attach to request
            req.user = await User.findById(decoded.id).select('-password');

            // Continue to next middleware/controller
            return next();

        } catch (error) {
            return res.status(401).json({
                message: 'Not authorized, token failed'
            });
        }
    }

    // If token is missing
    return res.status(401).json({
        message: 'Not authorized, no token'
    });
};


// 2. Role-based access control (Authorization)
exports.authorize = (...roles) => {
    return (req, res, next) => {

        // Check if user's role is allowed
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                message: `User role ${req.user.role} is not authorized to access this route`
            });
        }

        next();
    };
};