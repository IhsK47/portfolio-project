// import data?

const projectsGrid = document.querySelector(".projectsGrid");
const skillsGrid = document.querySelector(".skillsGrid");

let projects = [
  {
    name: "shareCart",
    tech: "Full stack",
    info: "shared shopping list",
    viewLink: "https://www.sharecart.com",
    codeLink: "link",
    img: "images/trivia.png",
    altText: "cartShare ss",
    view: "in progress",
  },
	  {
    name: "shareCart",
    tech: "Stack.io",
    info: "shared shopping list",
    viewLink: "https://www.sharecart.com",
    code: "link",
    img: "images/sc ss",
    altText: "cartShare ss"
  },
];

projects.forEach((proj) => {
  let card = document.createElement("div");
  card.classList.add("projectCard");

  projectsGrid.append(card);

	//<img = class="projectsGrid__picture">
                

	let img = document.createElement("img")
	img.src = proj.img
	img.alt = proj.altText
	img.classList.add("projectsGrid__picture")
	


  let cardInfo = document.createElement("div");
  card.classList.add("cardInfo");
  let name = document.createElement("h3");
  let tech = document.createElement("h4");
  let para = document.createElement("p");
  name.innerText = proj.name;
  tech.innerText = proj.tech;
  para.innerText = proj.info;
  

	let buttons = document.createElement("form");
	buttons.classList.add("projectsGrid__projectButtons");

	let viewB=document.createElement("button")
	viewB.innerText= (proj.view || "View") + " </>"
	viewB.onclick= () => {window.open(proj.viewLink)}
	viewB.type= "button"
	viewB.formTarget= "_blank"
	viewB.classList.add("projectsGrid__button")


	let codeB=document.createElement("button")
	codeB.innerText= "Code </>"
	codeB.onclick= () => {window.open(proj.codeLink)}
	codeB.type= "button"
	codeB.formTarget= "_blank"
	codeB.classList.add("projectsGrid__button")
	

	
	buttons.append(viewB, codeB)

    // <form>
    //   <button type="reset" onclick="location.href='https://sentry.io/answers/'">
    //     Answers by Sentry
    //   </button>
    // </form>

	cardInfo.append(tech, name, para, buttons);
	card.append(img, cardInfo) //img, info
	console.log("hola");

});

/*
loop thru table
   
create project card under projectsGrid
    img tag > 
    div card info
        stack h4
        name h3
        info p 

        form buttons
            view   <button> target blank
            code   <button> target blank


<div class="projectCard">
            
    <img src="images/gambit ss.png" alt="gambit game" class="projectsGrid__picture">
    
    <div class="cardInfo">


    <div class="projectsGrid__projectButtons">
                        
        <a href="https://ihsk47.github.io/">
        <button class="projectsGrid__button">Preview &lt;/&gt; </button>
        </a>

        <a href="https://github.com/IhsK47/A-level-CS-Project">
        <button class="projectsGrid__button">Code &lt;/&gt;</button>
        </a>

                    </div>
                </div>
            </div>


/*
<div class="skillsGrid">
    <div>
        <img src="images/html icon.png" alt="html5" class="icon">
                HTML
    </div>
</>


*/
