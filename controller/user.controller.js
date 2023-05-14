const user = require("../models/userModel");



exports.getUser =  async(req, res) => {
  res.setHeader('Content-Type', 'application/json');
    try {
      const showAllUser = await user.find();
      return res.status(201).json(showAllUser);
     } catch (error) {
     console.log(error)
      return res.status(400).send({error:error.message})
     }
 
  };


  //*create user
  exports.createUser = async (req, res) => {
   
    const {name,email,age}=req.body
      // const name= req.body.name
      // const email= req.body.email
      // const age= req.body.age
   
   try {
    
    const userData = await user.create({
    name:name,
      email:email,
      age:age
    });
    
    return res.status(201).json(userData)
   } catch (error) {
   console.log(error);
    return res.status(404).send({error:error.message})
   }
  }

  //* singleUser

  exports.singleUser =  async(req, res) => {
    const id = req.params.id;
    res.setHeader('Content-Type', 'application/json');
    try {
      const showAllUser = await user.findById({_id:id});
      return res.status(201).json(showAllUser);
     } catch (error) {
     console.log(error)
      return res.status(400).json({error:error.message})
     }
    
  };

  
  //* deleteUser

  exports.deleteUser =  async(req, res) => {
    const id = req.params.id;
    try {
      const showAllUser = await user.findByIdAndDelete({_id:id});
      return res.status(201).json(showAllUser);
     } catch (error) {
     console.log(error)
      return res.status(400).json({error:error.message})
     }
   
  };

    
  //* updateUser

  exports.updateUser =  async(req, res) => {
 
    const {id} = req.params;
  
    // const name= req.body.name
    // const email= req.body.email
    // const age= req.body.age
     
   
    try {
      const showAllUser = await user.findByIdAndUpdate(id,req.body,{new:true});
      return res.status(201).json(showAllUser);

     } catch (error) {
     console.log(error)
      return res.status(400).json({error:error.message})
     }
   
  };