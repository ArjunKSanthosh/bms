const url=window.location.href;
const urlParams=new URLSearchParams(url.split("?")[1]);
const id=urlParams.get("id");
let picture;
let banner;
async function getMovie() {
    const res=await fetch(`http://localhost:3000/api/getmovie/${id}`);
    const movie=await res.json();
    console.log(movie.releasedate);
    
    picture=movie.picture;
    banner=movie.banner;
    document.getElementById("frm").innerHTML=`
      <h1>Add Movie</h1>
        <form id="movie-form">
            <div class="left1">
            <div class="form-group">

                <label for="title">Movie Title:</label>
                <input type="text" id="title" name="title" value="${movie.title}">
            </div>
            <div class="form-group">
                <label for="duration">Duration (in minutes):</label>
                <input type="number" id="duration" name="duration" value="${movie.duration}">
            </div>
            <div class="form-group">
                <label for="genre">Genre:</label>
                <input type="text" id="genre" name="genre"value="${movie.genre}" >
            </div>
            <div class="form-group">
                <label for="release-date">Release Date:</label>
                <input type="date" id="release-date" name="release-date" value="${movie.releasedate}">
            </div>
            <div class="form-group">
                <label for="language">Language:</label>
                <input type="text" id="language" name="language" value="${movie.language}">
            </div>
            <div class="form-group">
                <label for="format">Format:</label>
                <input type="text" id="format" name="format"value="${movie.format}">
            </div>
            <div class="form-group">
                <label for="certification">Certification:</label>
                <select id="certification" name="certification" value="${movie.certification}">
                    <option value="U">U</option>
                    <option value="UA">UA</option>
                    <option value="A">A</option>
                    <option value="S">S</option>
                </select>            
            </div>
        </div>
        <div class="right1">
            <div class="formr-group">
                <label for="picture">Image:</label>
                <input type="file" id="picture" name="picture" accept="image/*" onchange="pic()" >
                <div id="pic">
                    <img src="${movie.picture}" alt="" id="pic4">
                </div>
            </div>
            <div class="formr-group">
                <label for="banner">Banner:</label>
                <input type="file" id="banner" name="banner" accept="image/*" onchange="ban()">
                <div id="ban">
                    <img src="${movie.banner}" alt="" id="pic5">
                </div>
            </div>
            <button type="submit">Add Movie</button>
        </div>
          
        </form>
    `
}
getMovie();

document.getElementById("frm").addEventListener("submit",async(e)=>{
    e.preventDefault();
    try {
        const title=document.getElementById("title").value;
    const duration=document.getElementById("duration").value;
    const genre=document.getElementById("genre").value;
    const releasedate=document.getElementById("release-date").value;
    const language=document.getElementById("language").value;
    const format=document.getElementById("format").value;
    const certification=document.getElementById("certification").value;
    const res=await fetch(`http://localhost:3000/api/editmovie/${id}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({title,duration,genre,releasedate,language,format,certification,picture,banner})
    })
    if(res.status==201){
        alert("Updated")
        window.location.href="../index.html"
    }else{
        alert("error")
    }
    } catch (error) {
        console.log(error);
        
    }
})

async function pic(){
    console.log(document.getElementById("picture").files[0]);
    picture=await convertToBase64(document.getElementById("picture").files[0]);
    document.getElementById("pic4").src=picture;
}
function convertToBase64(file) {
    return new Promise((resolve,reject)=>{
        const fileReader=new FileReader();
        fileReader.readAsDataURL(file);   
        fileReader.onload=()=>{
            resolve(fileReader.result)
        }
        fileReader.onerror= (error)=>{
            reject(error)
        }
    })
}


async function ban(){
    console.log(document.getElementById("banner").files[0]);
    banner=await convertToBase64(document.getElementById("banner").files[0]);
    document.getElementById("pic5").src=banner;
}
