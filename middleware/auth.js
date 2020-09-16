module.exports = async function(req, res, next){
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).json({
        'message': 'Access denied. No token provided'
    });
    if(token == process.env.TOKEN){
        next();
    } else {
        return res.status(400).json({
            'message': 'Invalid Token'
        })
    }
}