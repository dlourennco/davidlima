function darkmodeEnable() {
  let body = document.body
  let header = document.body.header
  let section = document.body.section

  body.classList.toggle("dark-mode")
  header.classList.toggle("dark-header")
  section.classList.toggle("dark-section")
}