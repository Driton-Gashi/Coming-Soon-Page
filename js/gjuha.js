let select = document.querySelector("#gjuha");
let cvText = document.querySelector(".right p");
let sherbimetTitle = document.querySelector("#services .title");
let sherbimetCard = document.querySelectorAll("#services .box p");
let aftesitTitle = document.querySelector("#skills .container .title");
let aftesitText = document.querySelector(".skills-content .column p");
let projectTitle = document.querySelector("#teams .title");
let euroDekorTExt = document.querySelector(".euroDekor");
let moesText = document.querySelector(".moesBar");
let dgMovies = document.querySelector(".dgMovies");
let thisSite = document.querySelector(".thisSite");
let contactTitle = document.querySelector("#contact .title");
let aboutTitle = document.querySelector("#about .title");
let btnCallMe = document.querySelector(".home-content a");
let tekst1 = document.querySelector(".text-1");
let tekst3 = document.querySelector(".text-31");

function ndryshoGjuhen() {
  if (select.value == "English") {
    li[0].textContent = "Home";
    li[1].textContent = "About Me";
    li[2].textContent = "Services";
    li[3].textContent = "Skills";
    li[4].textContent = "Projects";
    li[5].textContent = "Contact";
    tekst1.textContent = "Hi, my name is";
    tekst3.textContent = "and i'm a ";
    btnCallMe.textContent = "Call Me";
    aboutTitle.textContent = "About Me";
    cvText.textContent =
      "I am a young Developer and very excited to start my career as a Web Developer. Very skilled and hardworking in what I do but above all adaptable to new technologies, making progress every day and more. These are the technologies that I use: HTML, CSS, JS, Bootstrap, SCSS, Jquery, Git.";
    sherbimetTitle.textContent = "Services";
    sherbimetCard[0].textContent =
      "I offer Websites that are unique, attractive and the most importantly responsive";
    sherbimetCard[1].textContent =
      "I do not just offer a website for your company Im offering an opportunity to advertise and digitize your company or bussines!";
    sherbimetCard[2].textContent =
      "I also do the Hosting and maintaining of your website";
    aftesitTitle.textContent = "My Skills";
    aftesitText.innerHTML =
      '<p>I am a junior Front End Developer with 1+ years in this field. I also have two Certificates in the same field one from the company <a href="http://www.comingpe.com/">Com-ing</a> (50+ Hours of training) in Peja and the other from <a href="https://e.ictkosovo.eu/">ICT Kosova</a> (300+ Hours of training) in Prishtina</p>';
    projectTitle.textContent = "My Projects";
    euroDekorTExt.textContent =
      "Euro Dekor is a furniture company in the city of Peja which ...";
    moesText.textContent =
      "Moes Bar is a new bottle bar in the city of Peja, in which ...";
    dgMovies.textContent =
      "DG Movies is a free movie streaming website where ...";
    thisSite.textContent =
      "This is my portfolio where it also serves as one of my projects ...";
    contactTitle.textContent = "Contact";
  } else {
    li[0].textContent = "Ballina";
    li[1].textContent = "Rreth Meje";
    li[2].textContent = "Sherbimet";
    li[3].textContent = "Aftesit";
    li[4].textContent = "Projektet";
    li[5].textContent = "Kontakti";

    aboutTitle.textContent = "Rreth Meje";

    cvText.textContent =
      "Une jam nje Developer i ri dhe shum i entuziazmuar te filloj karrieren si nje Web Developer. Shum i afte dhe Punetor ne ate qe bej por mbi te gjitha i adaptueshem me teknologjit e rej, duke bere progres gjdo dite e me shum. Kto jan teknologjit qe une i perdor HTML, CSS, JS, Bootstrap, SCSS, Jquery, Git.";
    sherbimetTitle.textContent = "Sherbimet";
    sherbimetCard[0].textContent =
      "Une ofroj Website me dizajne gjithmon unike,atraktive dhe me e rendesishmja responsive per gjdo pajisje";
    sherbimetCard[1].textContent =
      "Une nuk ofroj thjesht nje faqe per kompanin tuaj une ofroj nje mundesi reklamimi dhe digjitalizimi te kompanis apo firmes tuaj!";
    sherbimetCard[2].textContent =
      "Une po ashtu bej Hostimin dhe mirëmbajtjen e faqes tuaj!";
    aftesitTitle.textContent = "Aftesit e mija";
    aftesitText.innerHTML =
      '<p>Une jam nje junior Front End Developer me 1+ vjet ne kete fushë. Une po ashtu kam dy Certifikata ne po te njejten fush njeren nga kompania <a href="http://www.comingpe.com/">Com-ing</a> (50+ Hours of training) ne Pejë dhe tjetren nga <a href="https://e.ictkosovo.eu/">ICT Kosova</a> (300+ Hours of training) ne Prishtinë</p>';
    projectTitle.textContent = "Projektet e mija";
    euroDekorTExt.textContent =
      "Euro Dekor eshte nje kompani e mobileve ne qytetin e Pejes e cila...";
    moesText.textContent =
      "Moes Bar is a new hookah bar in the city of Peja, in which ...";
    dgMovies.textContent =
      "DG Movies eshte nje free movie streaming website ku  gjenden...";
    thisSite.textContent =
      "Kjo eshte portofolio ime ku edhe sherben si nje nga projektet e mia...";
    contactTitle.textContent = "Kontakti";
  }
}
