const weatherForm = document.querySelector('form')
const search = document.querySelector("input")

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const location = search.value

    console.log(location)

fetch('http://api.weatherstack.com/current?access_key=52d0e4628db67c7290c87e1e4f309e84&query='+ location). then((response) => {
    response.json().then((data) => {
        if(data.error){
            console.log(data.error.info)
        }else{
            console.log(data.request.query)
        }
    })
})

})