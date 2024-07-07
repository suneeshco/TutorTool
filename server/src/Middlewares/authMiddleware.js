import jwt from 'jsonwebtoken';


export const authenticateUser = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer')) {
            return res.status(401).json({ error: 'No token found' });
        }

        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ error: 'No token found' });
        }

        const decoded= jwt.verify(token, process.env.TOKEN_SECRET);
            const user = await findUserById(decoded._id);
            if (!user) {
                return res.status(401).json({ error: 'User not found' });
            }
            next()
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};