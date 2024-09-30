async function getMovies(){
    const res=await fetch("http://localhost:3000/api/getmovies")
    const movies=await res.json();
    console.log(movies);
    str=``;
    movies.map((movie)=>{
        str+=`
         <div class="cd">
        <div class="imag">
            <div class="im">
             <a href="./film.html?id=${movie._id}">
                <img src="${movie.picture}"></a>   
            </div>
            <div class="cont">
              <h3>${movie.title}</h3>
                <p style="margin-top: 8px;opacity:0.7;font-weight:bold;">${movie.certification}</p>
                <p style="margin-top: 8px;opacity:0.7;font-weight:bold;">${movie.language}</p>
            </div>
        </div>
    </div>
        `
    })
    document.getElementById("forr").innerHTML=str;
    console.log("yfytftfffftf");
    
}
getMovies();



document.getElementById("filter").addEventListener('keyup',async(e)=>{
    try {
        const res=await fetch("http://localhost:3000/api/getmovies");
    const donors=await res.json();
    console.log(movie);
    str=``;
    donors.filter((i)=>i.name.toLowerCase().includes(e.target.value.toLowerCase())).map((movie)=>{
        str+=`
         <tr>
                    <td>${donor.name}</td>
                    <td>${donor.age}</td>
                    <td>${donor.dob}</td>
                    <td>${donor.place}</td>
                    <td>${donor.phone}</td>
                    <td>${donor.blood_group}</td>
                    <td class="actions">
                    <a href="./pages/edit.html?id=${donor._id}"><button>Edit</button></a>
                    <button onclick="deleteDonor('${donor._id}')">Delete</button>
                    </td>
                </tr> 
        `
    })
    document.getElementById("tbody").innerHTML=str;
    } catch (error) {
        console.log(error);
        
    }
}


)