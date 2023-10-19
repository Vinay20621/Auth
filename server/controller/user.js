const User=require('../model/user')
const {signToken,verifyToken}=require('../jwtToken/index');
const bcrypt=require('bcrypt')

async function signUp(req,res)
{
    try {
        const {name,email,password,rePassword}=req.body;
       
        if(!name || !email || !password || !rePassword)
        {
            return res.json({'status':'error','message':'feild required'})
        }
        else if(password!==rePassword)
        {
            return res.json({'status':'error','message':'password not match'})

        }
        const findUser=await User.findOne({email:email});
        
        if(findUser)
        {
            return res.json({'status':'error','message':"Enter another email"})
        }
        const hashedPassword = await bcrypt.hash(password, 10);
       
        const user=await User.create({
            name,email,password:hashedPassword
        })
       
      return res.json({'status':'ok','message':"User is created"})

    } catch (error) {
        console.log(error)
    }
}
async function login(req,res)
{
    try {
        const {email,password}=req.body;
      
        if(!email || !password)
        {
            return res.json({"status":"error","message":"required field"});
        }
        
        let user=await User.findOne({email:email})
        
        
        if(!user)
        {
            return res.json({"status":"error","message":"User not exit"});

        }
        const match = await bcrypt.compare(password, user.password);
        if(!match)
        {
            return res.json({"status":"error","message":"Wrong Password"});

        }
       
        const token=signToken({id:user._id},'30m');
      

            return res.json({"status":"ok","message":"User login success","token":token});
            
    } catch (error) {
        console.log(error)
    }
}

module.exports={signUp,login}