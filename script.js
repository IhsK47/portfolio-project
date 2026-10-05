// import data?

const projectsGrid = document.querySelector(".projectsGrid");
const skillsGrid = document.querySelector(".skillsGrid");

let projects = [
  {
    name: "Barries Gambit",
    tech: "PyGame",
    info: "During my Computer Science studies, I created a shooter game as part of my coursework.",
    viewLink: "https://ihsk47.github.io/",
    codeLink: "https://github.com/IhsK47/A-level-CS-Project",
    img: "images/gambit ss.png",
    altText: "gambit game",
    view: "In Progress",
  },
  {
    name: "Porfolio",
    tech: "FRONTEND",
    info: "This is my portfolio porject where I host a website with my details and showcase my previous/ongoing project and talents.",
    viewLink: "https://ihsk47.github.io/portfolio-project/",
    codeLink: "https://github.com/IhsK47/portfolio-project",
    img: "images/portfolio.png",
    altText: "portfolio ss",
    imgId: "portfolioImg"
  },
  {
    name: "Trivia Game",
    tech: "JavaScript",
    info: "This was a project for me to solidify my javaScript. Players select a difficuluty and are given multiple choice questions with a timer to answer them all. It's GUI-based and contains a sheet of data in the JSON format.",
    viewLink: "https://ihsk47.github.io/Islamic-Trivia/",
    codeLink: "https://github.com/IhsK47/Islamic-Trivia",
    img: "images/trivia.png",
    altText: "trivia ss",
    view: "Play",
  },
  {
    name: "Snap Game",
    tech: "Java",
    info: "My first java project; a game of snap. Players make their input using the CLI. xxx Stuff about java,. timer, classes, enums, interfaces",
    viewLink: "https://ihsk47.github.io//",
    codeLink: "https://ihsk47.github.io/java-snap",
    img: "images/snap.png",
    altText: "xxxxx ss",
    view: "In Progress",
  },
  {
    name: "shareCart",
    tech: "Full stack",
    info: "shared shopping list",
    viewLink: "https://www.sharecart.com",
    codeLink: "link",
    img: null,
    altText: "cartShare screenshot",
    view: "in progress",
  },
];

projects.forEach((proj) => {
  let card = document.createElement("div");
  card.classList.add("projectCard");

  let img = document.createElement("img");
  img.src = proj.img || "images/pending.jpeg";
  img.alt = proj.altText;
  img.classList.add("projectsGrid__picture");

  if (proj.imgId) img.id = proj.imgId //only for portfolio pic tbh

  let cardInfo = document.createElement("div");

  let name = document.createElement("h3");
  let tech = document.createElement("h4");
  let para = document.createElement("p");
  name.innerHTML = proj.name;
  tech.innerHTML = proj.tech;
  para.innerHTML = proj.info;
  cardInfo.classList.add("cardInfo");

  let buttons = document.createElement("form");
  buttons.classList.add("projectsGrid__projectButtons");

  let viewB = document.createElement("button");
  viewB.innerText = (proj.view || "View") + " </>";
  viewB.onclick = () => {
    window.open(proj.viewLink);
  };
  viewB.type = "button";
  viewB.formTarget = "_blank";
  viewB.classList.add("projectsGrid__button");

  let codeB = document.createElement("button");
  codeB.innerText = "Code </>";
  codeB.onclick = () => {
    window.open(proj.codeLink);
  };
  codeB.type = "button";
  codeB.formTarget = "_blank";
  codeB.classList.add("projectsGrid__button");

  buttons.append(viewB, codeB);

  cardInfo.append(tech, name, para, buttons);
  card.append(img, cardInfo); //img, info
  projectsGrid.append(card);
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

            
<div class="projectCard"> <!-- barrie -->
            
      <img src="images/gambit ss.png" alt="gambit game" class="projectsGrid__picture">
    	<div class="cardInfo">
        <h4>PyGame</h4>
        <h3>Barries Gambit</h3>
        <p>During my Computer Science studies, I created a shooter game as part of my coursework.</p>

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
</div>


*/
