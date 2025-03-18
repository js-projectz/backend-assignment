
import jwt from 'jsonwebtoken';


const protect = (req, res, next) => {

    let token = req.headers.authorization;

    // Validation for token
    if (!token || !token.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Not authorized / Token is not Provided" });
    }

    try {
        token = token.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (err) {
        res.status(401).json({ message: "Invalid Token" });
    }

};

export default protect;