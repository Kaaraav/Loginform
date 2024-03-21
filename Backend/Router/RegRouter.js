import express from 'express'
import regModel from "../model/regModel.js";

const router = express.Router()
// console.log("fire")
router.route('/register')
.post(async(req,res)=>{
    console.log("fire")
    const data={
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }
    await regModel.create(data)
    .then(()=>{
        res.status(200).send("created")
    })
    .catch((err)=>{
        console.log(err)
        res.status(404).send("something went wrong")
    })
})
router.route('/login')
.post(async(req,res)=>{
    const{email,password}=req.body
    await regModel.findOne({email:email})
    .then((result)=>{
        if(result){
            if(result.password===password){
                res.send("success")
            }
            else{
                res.send("invalid password")
            }
        }
        else{
            res.send("invalid email")
        }
    })
    .catch((err)=>{
        console.log(err)
        res.status(404).send("something went wrong")
    })
})
export default router