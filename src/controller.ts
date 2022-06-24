import { Request,Response } from "express";
import Book from "./dbmodel";

class bookLinks {
   getAll(req:Request,res:Response){
    Book.findAll()
    .then((data)=>{
        res.send(data);
     })
     .catch((err)=>{
        res.send(err);
     }) 
    }

    getId(req:Request,res:Response){
    const id=req.params.id;
    Book.findByPk(id)
     .then((data)=>{
        
        res.send(data);
     })
     .catch((err)=>{
        console.log(err);
        res.send(err);
     })
    }

    newBook(req:Request,res:Response){
    if(!req.body.bookName){
        console.log("1st if in newbook from newStruc");

        res.json({error:"Content cannot be empty."});
    }
    else{
        const response=req.body;
        Book.create(response)
         .then(()=>{
            res.send({msg:"Created New Record",err:"No"});
         })
         .catch((err)=>{
            res.send({err:"error in creating"});
         });
    }
    }

    updateBook(req:Request,res:Response){
    if(!req.body){
        res.send("Content cannot be empty.");
    }
    else{
        const id=req.params.id;
        const response=req.body;
        Book.update(response,{
            where: {id:id}
        })
         .then((num:[affectedCount:number])=>{
            if(Number(num)=== 1 ){
                res.send({status:"Record updated Sucessfully."})
            }
            else{
                res.send({status:"Already updated the record or no record found for that id."})
            }
         })
         .catch((err)=>{
            res.send(err);
         });
    }
    }

    deleteBook(req:Request,res:Response){
    const id=req.params.id;
    Book.destroy({
        where: {id:id}
    })
     .then((num)=>{
        if(num===1){
            res.send({status:"Record deleted Sucessfully."})
        }
        else{
            res.send({status:"Already deleted the record or no record found for that id."})
        }
     })
     .catch((err)=>{
        res.send(err);
     });
    }

}

export default new bookLinks();