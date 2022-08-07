let suggestions=[
    "pizza",
    "facebook",
    "social mdedia",
    "freelancer",
    "css",
    "html",
    "How to make pizza",
    "js",
    "what",
    "how",
    "which",
    "why",
    "school",
    "cake",
    "fast food",
    "learn",
    "How to learn css",
    "bake",
    "app",
    "application",
    "driving",
    "biking",
    "cooking",
    "cat",
    "dog",
    "life",
    "what is the meaning of life",
    "beauty",
    "man",
    "woman",
    "best",
    "worst"

]
let sortedNames = suggestions.sort()
let input = document.getElementById("search-input")

input.addEventListener("keyup",(e)=>{
    for(let i of sortedNames ){
        if (i.toLocaleLowerCase().startsWith(input.value.toLocaleLowerCase())&&
        input.value !=""){
            let listItem = document.createElement("li")
            listItem.classList.add("list-items")
            listItem.style.cursor = "pointer"
            listItem.setAttribute("onclick","displayNames('" + i + "')")
            let word = "<b>" + i.substr(0,input.value.length) +"</b>"
            word += i.substr(input.value.length)
            listItem.innerHTML=word
            document.querySelector(".outcome-box").appendChild(listItem)
        }
    }
})
function displayNames(value){
    input.value = value
    removeElements()
    

}

function removeElements(){

let items = document.querySelectorAll(".list-items");
items.forEach((item)=>{
    item.remove()
})
}
    
