async function getMovies(){
    const res=await fetch("http://localhost:3000/api/getmovie")
    const movies=awaitres.json();
    console.log(movies);
    str=``;
    movies.map((movie)=>{
        str+=`
         <div class="cd">
        <div class="imag">
            <div class="im">
             <a href="../clientside/pages/film.html">
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
}
getMovies();