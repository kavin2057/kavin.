    var overlay = document.querySelector(".overlay")
    var popupbox = document.querySelector(".popupbox")
    var addpopup = document.getElementById("addpopup")
    addpopup.addEventListener("click",function(){
        popupbox.style.display="block"
        overlay.style.display="block"
    })


    var closebtn = document.getElementById("closebtn")
    closebtn.addEventListener("click",function(event){
    event.preventDefault()   
    popupbox.style.display="none"
    overlay.style.display="none"
    })

    
    var container = document.querySelector(".container")
    var addbtn = document.getElementById("addbtn")
    var booktitle = document.getElementById("booktitle")
    var author = document.getElementById("author")
    var description = document.getElementById("description")

    addbtn.addEventListener("click",function(event){
        event.preventDefault()
        var div=document.createElement("div")
        div.setAttribute("class","book-container")
        div.innerHTML = ` <h1>${booktitle.value}</h1>
            <h5>${author.value}</h5>
            <p>${description.value}</p>
            <button>Delete</button>`
        container.appendChild(div) 
        booktitle.value = ""
        author.value = ""
        description.value = ""
        popupbox.style.display="none"
        overlay.style.display="none"
    })

    function dlt(event){
        event.target.parentNode.remove()
    }