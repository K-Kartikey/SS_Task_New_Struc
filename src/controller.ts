import { Request,Response } from "express";
import Book from "./dbmodel";

class bookLinks {
   getAll(req:Request,res:Response){
    Book.findAll()
    .then((data)=>{
        console.log("Hello from newStruc");
        res.send(data);
     })
     .catch((err)=>{
        console.log(err);
        res.send(err);
     }) 
    }

    getId(req:Request,res:Response){
    const id=req.params.id;
    Book.findByPk(id)
     .then((data)=>{
        console.log("Hello from newStruc");
        res.send(data);
     })
     .catch((err)=>{
        console.log(err);
        res.send(err);
     })
    }

    newBook(req:Request,res:Response){
    if(!req.body.bookName){
        res.json({error:"Content cannot be empty."});
    }
    else{
        const response=req.body;
        Book.create(response)
         .then(()=>{
            // console.log("Hello from newStruc");
            return res.send({msg:"Created New Record",err:"No"});
         })
         .catch((err)=>{
            return res.send({err:"yes"});
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
         .then((num)=>{
            if(Number(num)===1){
                console.log("Hello from newStruc");
                res.send("Record updated Sucessfully.")
            }
            else{
                res.send("Already updated the record or no record found for that id.")
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
        if(+num===1){
            console.log("Hello from newStruc");
            res.send("Record deleted Sucessfully.")
        }
        else{
            res.send("Already deleted the record or no record found for that id.")
        }
     })
     .catch((err)=>{
        res.send(err);
     });
    }

}

export default new bookLinks();