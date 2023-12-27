const data = {
    "reviews": [
      {
        "when": 2023,
        "mediaType": "T",
        "name": "Severance",
        "sub": "Season 1",
        "score": "7/10",
        "bullets": [
          "the aesthetic 😳",
          "Their all like “I bet my outie is so sick” but their all really depressed",
          "All plot lines are good but some are not necessary (maybe build up for season 2?)"
        ],
        "cover": "https://m.media-amazon.com/images/M/MV5BMjkwZjcwMGQtNDAzOC00YjJiLThiYTgtNWU3ZjRiZmY2YzEzXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg"
      },
      {
        "when": 2023,
        "mediaType": "M",
        "name": "Godzilla minus 1",
        "score": "7/10",
        "bullets": [
          "Theres some mobile game ad looking cgi in this",
          "Pretty good monster movie not going to lie",
          "Converts a good wartime story into a godzilla takedown movie",
          "Godzilla looks like a toy"
        ],
        "cover": "https://m.media-amazon.com/images/M/MV5BYTZkNWQyMDEtMmRhNi00Nzc5LWFhNjQtMWRiOTllYmEzOWE5XkEyXkFqcGdeQXVyMTMwNzYxMTUx._V1_.jpg"
      },
      {
        "when": 2023,
        "mediaType": "M",
        "name": "Lamb",
        "score": "2/10",
        "bullets": [
          "Kinda a snoose fest not going to lie",
          "Theres like 1 line of dialogue for every 15 minutes of run time",
          "Converts a good wartime story into a godzilla takedown movie",
          "90% of this movie is just icelandic mountains"
        ],
        "cover": "https://m.media-amazon.com/images/M/MV5BNTkyNDEzNGUtODEzYS00ZDNiLWJmMzctOWZlNjhmY2RlOGNkXkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg"
      },
      {
        "when": 2023,
        "mediaType": "M",
        "name": "The Handmaiden",
        "score": "10/10",
        "bullets": [
          "This must have been a hard movie to film",
          "On god this shit is stunning tho",
          "Story is pretty goated",
          "Has the same plot structure as a Nier game"
        ],
        "cover": "https://m.media-amazon.com/images/M/MV5BNDJhYTk2MTctZmVmOS00OTViLTgxNjQtMzQxOTRiMDdmNGRjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
      },
      {
        "when": 2023,
        "mediaType": "M",
        "name": "Sid and Nancy",
        "score": "5/10",
        "bullets": [
          "The true story is way way wilder so this movie doesnt really do it justice",
          "Pretty good at showing heroin addiction but 90% of this movie is just 2 characters shooting up heroin and boozing"
        ],
        "cover": "https://m.media-amazon.com/images/M/MV5BYzRiODJiYjMtN2RiNy00NGVhLWJlN2MtODc4ZThiMGJmYzk0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
      }
    ]
  }

// function mkPanel(obj) {
    
//     let panel = "<div class=\"hero min-h-min bg-base-200\">";
//     panel += "<div class=\"hero-content flex-col lg:flex-row\">";
//     panel += "<img src=" + obj.cover + " class=\"max-w-sm max-h-[400px] object-cover rounded-lg shadow-2xl overflow-hidden\"/>";
//     panel += "<div>";
//     panel += "<h1 class=\"max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white\"><span class=\"text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400\">" + obj.name + "</span>";

//     if(obj.mediaType === "T" || obj.mediaType === "G"){
//         panel += " " + obj.sub;
//     }

//     panel += "</h1>";
//     panel += "<h1 class=\"text-5xl font-bold\">" + obj.score + "</h1>";
//     panel += "<h2 class=\"mt-5 text-3xl font-bold\">Notes:</h2>";

//     //list stuff
//     panel += "<ul class=\"ml-5 list-disc\">";

//     obj.bullets.forEach((bullet) => {
//         panel += "<li class=\"whitespace-normal\">" + bullet + "</li>";   
//     });

//     panel += "</ul></div></div>";

//     document.getElementById("reviews").innerHTML += panel;
//}
function mkPanel(obj) {
    let panel = "<div class=\"hero min-h-min bg-base-200 flex justify-start items-start\">";
    panel += "<div class=\"hero-content flex-col lg:flex-row\">";
    panel += "<img src=" + obj.cover + " class=\"max-w-sm max-h-[400px] object-cover rounded-lg shadow-2xl overflow-hidden\"/>";
    panel += "<div>";
    panel += "<h1 class=\"max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white\"><span class=\"text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400\">" + obj.name + "</span>";

    if(obj.mediaType === "T" || obj.mediaType === "G"){
        panel += " " + obj.sub;
    }

    panel += "</h1>";
    panel += "<h1 class=\"text-5xl font-bold\">" + obj.score + "</h1>";
    panel += "<h2 class=\"mt-5 text-3xl font-bold\">Notes:</h2>";

    //list stuff
    panel += "<ul class=\"ml-5 list-disc\">";

    obj.bullets.forEach((bullet) => {
        panel += "<li class=\"whitespace-normal\">" + bullet + "</li>"; 
    });

    panel += "</ul></div></div>";

    document.getElementById("reviews").innerHTML += panel;
}


data.reviews.forEach((review) => {
    mkPanel(review);    
});