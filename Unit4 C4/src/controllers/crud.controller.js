

 const post = (model) => async(req,res)=>{
     try {
         const item = await model.create(req.body);
         return res.status(201).send(item)
     } catch (error) {
         return res.status(500).send({message: error.message})
     }
 };

 const deleteOne = (model) => async (req,res)=>{
     try {
         
        const item = await model.findByAndDelete(req.params.id).lean().exec();
     } catch (error) {
         
        return res.status(500).send({ message: error.message})
     }
 };

 module.exports = {post,deleteOne}