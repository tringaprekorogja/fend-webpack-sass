function handleSubmit(event) {
    event.preventDefault()
    
    let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
    let zip = 10019;
    let apiKey = '&appid=14e5fab081a0a0e66ac8bde37f7ec984&units=metric';
    // check what text was put into the form field
    
    console.log("::: Form Submitted :::")
    fetch(baseURL + zip + apiKey)
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.main.temp
    })
}

export { handleSubmit }
