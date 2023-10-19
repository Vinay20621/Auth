const {signToken,verifyToken}=require('../jwtToken/index');


function auth(req,res,next)
{
    try {
        const token=req.headers['token']
        const verify=verifyToken(token);
       
        if(!verify)
        {
            return res.json({"status":"error","message":"User not verify"});
        }
        
        req.id=verify.id
        next()
    } catch (error) {
        console.log(error)
    }
}
module.exports=auth