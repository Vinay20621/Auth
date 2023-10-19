const User=require('../model/user')
async function home(req,res)
{
    try {
      

        const user=await User.findOne({_id:req.id})

      
        if(!user)
        {
            return res.json({"status":"error","message":""});
        }
        return res.json({"status":"ok","message":user});
    } catch (error) {
        console.log(error)
    }
}
module.exports=home