// posso usar o id no lugar do 'form'
const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  // const today = "01/01"
  const dayExits = nlwSetup.dayExists(today)

  if (dayExits == true) {
    alert("Dia já existe!")
  } else {
    nlwSetup.addDay(today)
  }
}

function save() {
  localStorage.setItem("nlwsetup@habits", JSON.stringify(nlwSetup.data))
}

// const data = {
//   run: ["01-01", "01-02"],
//   water: ["01-01", "01-02"],
//   food: ["01-01", "01-02"],
// }

const data = JSON.parse(localStorage.getItem("nlwsetup@habits")) || {}

nlwSetup.setData(data)
nlwSetup.load()
