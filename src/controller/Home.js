//imort labari

let getHomePage =(req,res)=>{
        return res.render('HomePage.ejs');
}
let postCRUD=(req,res)=>{
    console.log(req.body);
    return res.render('hello luan ne');

}
module.exports ={
    getHomePage:getHomePage,
    postCRUD:postCRUD
}