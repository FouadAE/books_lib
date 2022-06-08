const path = require('path');
const multer = require('multer');



  var storage = multer.diskStorage({
    destination:function(req,file,cd){
      cb(null,'../public/pdfs')
    },
    filename:function(req,file,cb){
      let ext = path.extname(file.originalname)
      cb(null,Date.now()+ext)
    }
  })
 var upload = multer({
   storage: storage,
   fileFilter: function(req,file,callback){
     if(file.mimetype == "file/pdf"){callback(null,true)}
     else{
       console.log('only pdfs')
       callback(null,false)
      }
   },
   
   limits:{
    fileSiz:1024*1024*2
  }
 })

 module.exports = upload;