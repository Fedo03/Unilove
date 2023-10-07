var multer = require('multer')

var storage = multer.diskStorage({
    destination : function(req,file,cb){
       cb(null,'public/img/')
    },
    filename :function(req,file,cb){
       cb(null, Date.now()+ '-'+ file.originalname)
    },
 })

 var uploads = multer({ storage })

 module.exports = uploads