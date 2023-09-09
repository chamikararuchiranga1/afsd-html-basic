console.log("run");

let store = [];

const onWindowLoad = () => {
    let data = ""
    for (let i = 0; i < store.length; i++) {
        data += `<div class="card p-2 m-2" style="width: 18rem;">
        <h6 class="card-subtitle m-1 text-body-secondary">First Name : ${store[i].fName}</h6>
        <h6 class="card-subtitle m-1 text-body-secondary">Last Name : ${store[i].lName}</h6>
        <h6 class="card-subtitle m-1 text-body-secondary">Age : ${store[i].age}</h6>
        <h6 class="card-subtitle m-1 text-body-secondary">Address : ${store[i].address}</h6>
        <button onclick="deleteUser(${i})" type="button" class="btn btn-danger m-1">Delete</button>
    </div>`

    }

    document.getElementById('display').innerHTML = data
}

function deleteUser(val) {
    store.splice(val, 1);
    onWindowLoad();
}


const clear = () => {
    document.getElementById('f-name').value = ''
    document.getElementById('l-name').value = ''
    document.getElementById('age').value = ''
    document.getElementById('address').value = ''
}

const saveUser = () => {
    const f_name = document.getElementById('f-name').value
    const l_name = document.getElementById('l-name').value
    const age = document.getElementById('age').value
    const address = document.getElementById('address').value

    if (f_name !== '' && l_name !== '' && age !== '' && address !== '') {
        store.push({
            fName: f_name,
            lName: l_name,
            age: age,
            address: address
        })
        clear();
        onWindowLoad();
    } else {
        alert('please fil text..!')
    }
}