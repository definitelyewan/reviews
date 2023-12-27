const data = {
    "reviews": [
      {
        "when": 2023,
        "mediaType": "T",
        "name": "Severance",
        "season": 1,
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
      }
    ]
  }

function mkPanel(obj) {
    
    let panel = "<div class=\"hero min-h-min bg-base-200\">";
    panel += "<div class=\"hero-content flex-col lg:flex-row\">";
    panel += "<img src=" + obj.cover + " class=\"max-w-sm max-h-[400px] object-cover rounded-lg shadow-2xl overflow-hidden\"/>";
    panel += "<div>";
    panel += "<h1 class=\"max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white\"><span class=\"text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400\">" + obj.name + "</span>";

    if(obj.mode === "T"){
        panel += obj.season;
    }else if(obj.mode === "G"){
        panel += obj.platform;
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

//     <div class="hero min-h-min bg-base-200">
//     <div class="hero-content flex-col lg:flex-row">
//       <img src="https://m.media-amazon.com/images/M/MV5BMjkwZjcwMGQtNDAzOC00YjJiLThiYTgtNWU3ZjRiZmY2YzEzXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg" class="max-w-sm max-h-[400px] object-cover rounded-lg shadow-2xl overflow-hidden" /><!--class="mx-auto max-w-full h-auto-->
//       <div>
//         <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Severance</span> Season 1</h1>
//         <h1 class="text-5xl font-bold">7/10</h1>
//         <h2 class="mt-5 text-3xl font-bold">Notes:</h2>
//         <ul class="ml-5 list-disc">
//             <li>the aesthetic 😳</li>
//             <li>Their all like “I bet my outie is so sick” but their all really depressed</li>
//             <li>All plot lines are good but some are not necessary (maybe build up for season 2?)</li>
//         </ul> 
//     </div>
//   </div>
}

data.reviews.forEach((review) => {
    mkPanel(review);    
});