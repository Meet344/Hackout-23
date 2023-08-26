const jwt = require('jsonwebtoken')
const JWT_SECRET = 'ThisAsecretThread';
const User = require('../models/User')
const Medicine = require('../models/medicine.js')
const admin = (req, res, next) => {
    try {
        const token = req.header("auth-token");
        if (!token) {
            res.status(401).json({ msg: "No auth token,access denied" });
        }

        const verified = jwt.verify(token,JWT_SECRET);
        if (!verified) {
            return res.status(401).json({ msg: "Token verification failed,authorization denied." });
        }
        const user = User.findById(verified.id);
        if (user.type == 'user' || user.type == 'seller') {
            return res.status(401).json({ msg: "You are not an admin." });
        }
        req.user = verified.id;
        req.token = token;
        next();
    } catch {
        res.status(500).json({ error: err.message });
    }
};

module.exports = admin;