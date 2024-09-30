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
      console.log(movie);
      
      const data=await movieSchema.create({...movie});
      return res.status(201).snd({msg:data})  
    } catch (error) {
        res.status(404).send({msg:error})
    }
}