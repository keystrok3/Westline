
/**
 * User management controllers
 * */
const User = require('../models/user.js')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;
 

const register_user = async (req, res, next) => {
    const { email, password, user_id, firstName, lastName } = req.body;
    try {

        const salt = await bcrypt.genSalt(10);
        const password_hash = await bcrypt.hash(password, salt);

        const user = await User.create({
            email: email,
            password: password_hash,
            user_id: user_id,
            firstName: firstName,
            lastName: lastName
        })
        console.log(user)
        res.status(201).json({ success: true, msg: user })
    } catch (error) {
        console.error(`Error adding to user_table: ${error}`)
        res.status(500).json({ success: false, msg: error})
    }
};


const login = async (req, res, next) => {
    const { user_id, password } = req.body;

    try {
        const foundUser = await User.findOne({ user_id: user_id });

        if(!foundUser) {
            return res.status(401).json({ success: false, msg: "Invalid credentials" });
        }

        const isPassword = await bcrypt.compare(password, foundUser.password);

        if(!isPassword) {
            return res.status(401).json({ success: false, msg: "Invalid credentials" });
        }

        // Generate JWT
        const token = jwt.sign({ userId: user_id }, secretKey, { expiresIn: '1hr' });
        
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: 'Strict'
        })

        res.status(201).json({ success: true });

    } catch (error) {
        console.error(`Could not log in: ${error}`);
        res.status(500).json({
            success: false, msg: "Server Error"
        });
    }
};


/**
 * Verify jwt token
*/
const verify_jwt = (req, res) => {
    const token = req.cookies.token;

    if(!token) {
        return res.json({ valid: false, message: 'No token found' });
    }

    // verify token
    jwt.verify(token, secretKey, (err, decoded) => {
        if(err) {
            // token is invalid or expired
            return res.json({ valid: false, message: 'Token is invalid or expired' });
        }

        // Token is valid
        res.json({ valid: true, userId: decoded.userId})
    })
}

module.exports = { register_user, login, verify_jwt }