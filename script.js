console.log('Script Attached')

getData = () => {
    fetch("https://api.chucknorris.io/jokes/random")
    .then(res => {
        console.log(res)
        return res.json()
    })
    .then(data => {
        console.log(data)
        console.log(typeof(data))
        fetchedObject = data;
        document.getElementById('content').innerHTML = fetchedObject['value'];
        // document.getElementById("myImg").src = "";
    })
}

getData()
