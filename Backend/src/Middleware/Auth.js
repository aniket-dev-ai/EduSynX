import UserModel from "../models/UserModel.js";


export const auth = async (req, res, next) => {
    try {
        const token = req.headers["authorization"]?.split(" ")[1] || req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        const decoded = UserModel.verifyAuthToken(token);
        if (!decoded) {
            return res.status(401).json({ message: "Invalid token" });
        }

        const user = await UserModel.findById(decoded.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log("Error in auth middleware:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
    }

export const isAdmin = (req, res, next) => {
    if (req.user.Role !== "Admin") {
        return res.status(403).json({ message: "Access denied" });
    }
    next();
}

export const isInstitute = (req, res, next) => {
    if (req.user.Role !== "Institute") {
        return res.status(403).json({ message: "Access denied" });
    }
    next();
}

export const isStudent = (req, res, next) => {
    if (req.user.Role !== "Student") {
        return res.status(403).json({ message: "Access denied" });
    }
    next();
}

export const isParent = (req, res, next) => {
    if (req.user.Role !== "Parents") {
        return res.status(403).json({ message: "Access denied" });
    }
    next();
}

export const isKYCVerified = (req, res, next) => {
    if (!req.user.KYCVerified) {
        return res.status(403).json({ message: "KYC not verified" });
    }
    next();
}

