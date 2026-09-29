// import data

const projectsGrid = document.querySelector(".projectsGrid");
const skillsGrid = document.querySelector(".skillsGrid");

let projects = [ {
  name: "shareCart",
  tech: "full stack",
  info: "shared shopping list",
  view: "link",
  code: "link",
  img: "images/sc ss",
  altText: "cartShare ss",
  game: "no",
} ];

projects.forEach((proj) => {
  let card1 = document.createElement("div");
  card1.classList.add("projectCard");

  projectsGrid.append(card1);

  console.log("hola workd");


  const name = document.createElement("h3");
  name.innerText = proj.name;

  const tech = document.createElement("h4");
  tech.innerText = proj.tech;

  card1.append(tech, name);
});

/*
loop thru table
   
create project card under projectsGrid
    img tag > 
    div info
        stack h4
        name h3
        info p 

        div buttons
            view   <a href> target blank button </a>
            code   <a href> target blank button </a>



/*
<div class="skillsGrid">
    <div>
        <img src="images/html icon.png" alt="html5" class="icon">
                HTML
    </div>
</>

projectsGrid
    projectCard
        img
        info    = h4,3 + p
        buttons = demo + code


<div class="projectCard">
            
    <img src="images/gambit ss.png" alt="gambit game" class="projectsGrid__picture">
    
    <div class="cardInfo">
            <h4>PyGame</h4>
            <h3>Barries Gambit</h3>
            <p>..ppppppppp..</p>

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



*/
