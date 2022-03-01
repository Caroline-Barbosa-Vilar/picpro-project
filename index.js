const optionsList = document.querySelector(".accountDetailsSection__transactionOptions")

optionsList.addEventListener("click", identifyOptions)

function identifyOptions(event){
    
    const element  = event.target

    if(element.tagName == "LI"){

        const id = element.id
        
        const choiceSection  = document.querySelector(`div[data-id="${id}"]`)

        removeClassShow()
        
        choiceSection.classList.add("show")
    }
}

function removeClassShow(){
    const divs = document.querySelectorAll(".transactionSection .container div")
    
    for(let i = 0; i < divs.length; i++){

        divs[i].classList.remove("show")

    }
}