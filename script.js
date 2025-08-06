async function getAdvice() {
    const id = document.querySelector("span")
    const advice = document.querySelector("p")

    const response = await fetch("https://api.adviceslip.com/advice")
    const data = response.json()
    data.then(function(res){
        id.textContent = res.slip.id
        advice.textContent = res.slip.advice
    })
    .catch(function(err){
        alert(err)
    }) 
}




