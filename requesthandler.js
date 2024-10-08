import movieSchema from "./models/movie.model.js"
export async function getMovies(req,res){
    try {
        const movie=await movieSchema.find();
        res.status(200).send(movie)
    } catch (error) {
        res.status(404).send({msg:error})
        
    }
}
export async function addMovie(req,res){
    try {
    
      const{...movie}=req.body;
      const {title,duration,genre,releaseDate,language,format,certification,picture,banner}=req.body;
      if(!(title&&duration&&genre&&releaseDate&&language&&format&&certification&&picture&&banner))
        return res.status(404).send({msg:"Fields are empty"})
      const data=await movieSchema.create({...movie});
      return res.status(201).send({msg:data})  
    } catch (error) {
        return res.status(404).send({msg:error})
    }
}
export async function getMovie(req,res) {
    try {
        const {id}=req.params;
        const data=await movieSchema.findOne({_id:id});
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send(error)
    }
}
export async function editMovie(req,res) {
    try {
        const {_id}=req.params;
    const {...movie}=req.body;
    const data=await movieSchema.updateOne({_id},{$set:{...movie}});
    res.status(201).send(data);
    } catch (error) {
        res.status(404).send(error)
    }
    
}

export async function deleteMovie(req,res) {
    try {
        const {_id}=req.params;
        console.log(_id);
        const data=await movieSchema.deleteOne({_id});
        res.status(201).send(data);
    } catch (error) {
        res.status(404).send(error)
    }   
}