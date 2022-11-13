window.onload = function(){
    let message = document.getElementById('result');
    const countryBtn = document.getElementById('lookup');
    const cityBtn = document.getElementById("cities")
    countryBtn.addEventListener('click',function(element){
        element.preventDefault();
        let countryReq = document.getElementById("country").value;
        fetch("world.php" + "?country=" + countryReq)
        .then(response =>{
            if (response.ok){
                return response.text()
            }else{
                return Promise.reject("There was an issue with the request.")
            }
        })
        .then(data => {
            message.innerHTML = data;
        })
    });
    cityBtn.addEventListener('click',function(element){
        element.preventDefault();
        let cityReq = document.getElementById("country").value;
        fetch("world.php" + "?country=" + cityReq + "&context=cities")
        .then(response =>{
            if (response.ok){
                return response.text()
            } else{
                return Promise.reject("There was issue with the request.")
            }
        })
        .then(data => {
            message.innerHTML = data;
        })
    });
}