import app from "./app";
import sequelize from "./dbconfig";


sequelize
 .sync()
 .then((result)=>{
    console.log(result);
 }).catch((err)=>{
    console.log(err);
});


app.listen(2000,()=>{
    console.log("The application is listening on port 2000!");
})
