function darkmodeEnable() {
  let body = document.body

  let menu = document.getElementById("id-menu")
  
  let projects = document.getElementById("id-projects")
  //icones
  let downArrow = document.getElementById("arrow")
  let github = document.getElementById("github")
  let twitter = document.getElementById("twitter")
  let linkedin = document.getElementById("linkedin")
  let email = document.getElementById("email")

  body.classList.toggle("dark-mode")

  menu.classList.toggle("dark-menu")
  projects.classList.toggle("dark-projects")

  downArrow.classList.toggle("dark-icons")
  github.classList.toggle("dark-icons")
  twitter.classList.toggle("dark-icons")
  linkedin.classList.toggle("dark-icons")
  email.classList.toggle("dark-icons")
}