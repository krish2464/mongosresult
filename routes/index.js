var express = require('express');
var router = express.Router();
let list = require("../model/list.js");

/* GET home page. */
router.get('/', async function(req, res, next) {
  let alldata = await list.find();
 
  if (req.query.id) 
  {
    await list.findByIdAndDelete(req.query.id);
    return res.redirect("/")
  }


  let  editdata = await list.findById(req.query.eid);
  let id = req.query.eid;

  if (id)
  {
    res.render('index',{data:alldata,edata:editdata,editid:id}) 
  }
  else
  {
    res.render('index',{data:alldata,edata:editdata,editid:id})
  }

});
router.post('/create',async function(req, res, next){
  try{
    let id = req.query.id;
    if(id)
    {
      await list.findByIdAndUpdate(id, req.body);
    }
    else 
    {
      await list.create(req.body)
    }
   res.redirect('/');
  }
  catch (error){
    res.send(err.message)
  }
})

module.exports = router;
