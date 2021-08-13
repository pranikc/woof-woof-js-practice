
renderAllDogs()

function createOneDog(dog){
    const span = document.createElement('span')
   
    const bar = document.querySelector("div#dog-bar")
    span.innerHTML = dog.name
    bar.append(span) 

    span.addEventListener('click', () =>{
        // const bar = document.querySelector("div#dog-bar")
        const img = document.createElement('img')
        const h2 = document.createElement('h2')
        const button = document.createElement('button')
        const info = document.querySelector('#dog-info')
        img.src = dog.image
        h2.innerHTML = dog.name
        if(dog.isGoodDog == true){
            button.innerHTML = "Good Dog!"
        }
        else{
            button.innerHTML = "Bad Dog!"
        }

        info.append(img)
        info.append(h2)
        info.append(button)

        button.addEventListener('click', ()=>{
            if(dog.isGoodDog == true){
                dog.isGoodDog = false
                button.innerHTML = "Bad Dog!"

            }
            else{
                dog.isGoodDog = true
                button.innerHTML = "Good Dog!"
            }
        })
        
        const newGoodness = !dog.isGoodDog
        fetch(`http://localhost:3000/pups/${dog.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ isGoodDog: newGoodness })
        })
            .then(r => r.json())
            .then(data => console.log(data))
         
    })
}

function renderAllDogs(){
    fetch('http://localhost:3000/pups')
        .then(r => r.json())
        .then(dogArray => {
            dogArray.forEach(createOneDog)
        })
}

    







