const { UserModel } = require("../models/userModel");


exports.userCtrl={
   myInfo: async(req,res) => {
        try{
            //,{name:1,email:1}
          let userInfo = await UserModel.findOne({_id:req.tokenData._id},{password:0});
          res.json(userInfo);
        }
        catch(err){
          console.log(err)
          res.status(500).json({msg:"err",err})
        }  
      },
      deleteUser: async(req,res) => {
        try{
          let delId = req.params.delId;
          let userInfo;
          
          if(req.tokenData.role == "admin"){
            userInfo = await UserModel.deleteOne({_id:delId});
          }
          else{
            //,{name:1,email:1}
            userInfo = await UserModel.deleteOne({_id:req.tokenData._id},{password:0});
          }
            res.json(userInfo);
        }
        catch(err){
          console.log(err)
          res.status(500).json({msg:"err",err})
        }  
      }
      ,userList:async(req,res) => {
        try{
          let data = await UserModel.find({},{password:0});
          res.json(data)
        }
        catch(err){
          console.log(err)
          res.status(500).json({msg:"err",err})
        }  
      }
}