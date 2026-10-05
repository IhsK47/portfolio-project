// import data

const projectsGrid = document.querySelector(".projectsGrid");
const skillsGrid = document.querySelector(".skillsGrid");

const exB = document.querySelector(".projectsGrid__button")
console.log(exB);


let projects = [
  {
    name: "shareCart",
    tech: "Full stack",
    info: "shared shopping list",
    viewLink: "link",
    code: "link",
    img: "images/sc ss",
    altText: "cartShare ss",
    view: "in progress",
  },
	  {
    name: "shareCart",
    tech: "Full stack",
    info: "shared shopping list",
    view: "link",
    code: "link",
    img: "images/sc ss",
    altText: "cartShare ss",
    view: "in progress",
  },
];

projects.forEach((proj) => {
  let card = document.createElement("div");
  card.classList.add("projectCard");

  projectsGrid.append(card);

	//img

  let cardInfo = document.createElement("div");
  card.classList.add("cardInfo");
  let name = document.createElement("h3");
  let tech = document.createElement("h4");
  let para = document.createElement("p");
  name.innerText = proj.name;
  tech.innerText = proj.tech;
  para.innerText = proj.info;
  

	let buttons = document.createElement("div");
	buttons.classList.add("projectsGrid__projectButtons");

	let view = document.createElement("a")
	
	console.log(view);

	view.href=proj.viewLink

	let viewB=document.createElement("button")
	console.log(viewB);
	

	view.innerText= proj.view + " </>"


	//        <a href="https://ihsk47.github.io/">
  //      <button class="projectsGrid__button">Preview &lt;/&gt; </button>
  //      </a>

	cardInfo.append(tech, name, para, view);
	card.append(cardInfo) //img, info
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

        div buttons
            view   <a href> target blank button </a>
            code   <a href> target blank button </a>


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
