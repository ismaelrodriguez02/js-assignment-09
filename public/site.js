(async()=>{
    const h2 = document.getElementById('h2')
    const h3 = document.getElementById('h3')
    const but = document.getElementById('button')
 

    but.addEventListener('click',async()=>{
        const result = await fetch('/api/v1/random-joke')
        const joke = await result.json()
        h2.textContent = joke.joke
        h3.textContent = joke.punchline
    })

    
})()

