console.log('load');

function loadData() {
    fetch('http://192.168.1.83:3000/get')
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err) => console.log(err))
}

function postdata() {
    fetch('http://192.168.1.83:3000/save', {
        method: 'POST',
        body: JSON.stringify({
            sid: 'C007',
            name: 'Kusumalatha',
            age: 45,
            mark: 65,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err) => console.log(err))
}