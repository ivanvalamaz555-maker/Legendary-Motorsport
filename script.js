function find_name(){
         const surname_node = document.getElementById("surname")
    console.log(surname_node.innerText)
    surname_node.innerHTML="<b>Surname: Zaytsev"
         const name_node = document.getElementById("name")
    console.log(name_node.innerText)
    name_node.innerHTML="<b>Name: Ivan"
         const year_node = document.getElementById("year")
    console.log(year_node.innerText)
    year_node.innerHTML="<b>Date of birth: 2006"
}


const node_for_click = document.getElementById("for_click")
node_for_click.addEventListener("click",find_name)
