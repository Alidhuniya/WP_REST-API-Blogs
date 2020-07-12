// Menus

export const allPosts = async () => {
	const url = "http://localhost/wordpress/wp-json/wp/v2/posts?per_page=100";
	const data = await fetch(url);
	const res = await data.json();
	const result = res;
	// console.log(result);

	let output = "";

	for (let i in result) {
		output += `

        <div class="post">

        <a href="${result[i].link}">
        <div class="title">
        <h1>${result[i].title.rendered}</h1>
        </div>
    
        <div class="desc">
        <p>${result[i].excerpt.rendered}</p>
        </div>
    
        <div class="date">
        <p>${result[i].date}</p>
        </div>
    
        <div class="readMore">
        <a href="${result[i].link}">Continue Reading</a>
        </div>
    
        </a>
    
    </div>

	    `;
	}

 
    document.querySelector(".main__allPosts").innerHTML = output;
};

// document.querySelector(".home").addEventListener("click", allPosts);
