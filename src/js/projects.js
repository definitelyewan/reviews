const projectData = {
    "projects":[
        {
            "name" : "ByteStream",
            "info" : "A C library for manipulating an array data structure like you would a file with support for unicode.",
            "source": "https://github.com/definitelyewan/ByteStream",
            "logo" : "./images/bytestreamlogo.png"
        },
        {
            "name" : "id3dev",
            "info" : "A C library for parsing, manipulating, reading, and writing any version of ID3 metadata commonly found in MP3 files.",
            "source" : "https://github.com/definitelyewan/id3dev",
            "logo" : "./images/id3devlogo.png"
        },
        {
            "name" : "Review Doc",
            "info" : "A simple website for logging all of the TV shows, movies, and video games I've seen or played",
            "source" : "reviews/index.html",
            "logo" : "./images/reviewdoclogo.png"
        }
    ]
}


function projectCarousel(){


    projectData.projects.forEach(project => {
        let card = document.createElement("div");

        card.classList.add("mt-2", "mb-2", "mr-2", "ml-2", "bg-white", "border", "border-gray-200", "rounded-lg", "shadow", "dark:bg-gray-800", "dark:border-gray-700");
        

        let logo = document.createElement("img");
        logo.classList.add("ml-3", "mt-2", "rounded-t-lg");
        logo.src = project.logo;

        card.appendChild(logo)

        let body = document.createElement("div");
        body.classList.add("p-5");

        let title = document.createElement("h5");
        title.classList.add("mb-2", "text-2xl", "font-bold", "tracking-tight", "text-gray-900", "dark:text-white");
        title.innerHTML = project.name;
        body.appendChild(title);

        let text = document.createElement("p");
        text.classList.add("mb-3", "font-normal", "text-gray-700", "dark:text-gray-400");
        text.innerHTML = project.info;
        body.appendChild(text);

        let btn = document.createElement("a");
        btn.classList.add("inline-flex", "items-center", "px-3", "py-2", "text-sm", "font-medium", "text-center", "text-white", "bg-blue-700", "rounded-lg", "hover:bg-blue-800", "focus:ring-4", "focus:outline-none", "focus:ring-blue-300", "dark:bg-blue-600", "dark:hover:bg-blue-700", "dark:focus:ring-blue-800");
        btn.href = project.source;
        btn.innerHTML = "View Project";

        btn.innerHTML += "<svg class=\"rtl:rotate-180 w-3.5 h-3.5 ms-2\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 14 10\" style=\"vertical-align: text-bottom;\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M1 5h12m0 0L9 1m4 4L9 9\"/></svg>"

        body.appendChild(btn);

        card.appendChild(body);
        document.getElementById("projectCards").appendChild(card);
    });
}


//Initialize page numbers when the window loads
window.onload = function() {
    projectCarousel();
};