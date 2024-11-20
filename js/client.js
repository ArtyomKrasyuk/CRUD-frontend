'use strict'

document.querySelector('#create').onclick = createFunc;
document.querySelector('#read').onclick = readFunc;
document.querySelector('#update').onclick = updateFunc;
document.querySelector('#delete').onclick = deleteFunc;

async function createFunc(){
    let address = document.querySelector('#address-create').value;
    let phone = document.querySelector('#tel-create').value;
    let name = document.querySelector('#name-create').value;
    let url = 'http://127.0.0.1:8080/tables/client';
    let info = {'address': address, 'phone': phone, 'name': name};
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(info)
    });
    if(response.ok){
        document.querySelector('#address-create').value = '';
        document.querySelector('#tel-create').value = '';
        document.querySelector('#name-create').value = '';
    }
}

async function readFunc(){
    let clientId = parseInt(document.querySelector('#id').value, 10);
    let response = await fetch(`http://127.0.0.1:8080/tables/client/${clientId}`, {method: 'GET'});
    if(response.ok) {
        let result = await response.json();
        alert(`Адрес: ${result['address']}\nТелефон: ${result['phone']}\nИмя: ${result['name']}`);
        document.querySelector('#id').value = ''
    }
}

async function updateFunc(){
    let address = document.querySelector('#address-update').value;
    let phone = document.querySelector('#tel-update').value;
    let name = document.querySelector('#name-update').value;
    let clientId = parseInt(document.querySelector('#id-update').value, 10);
    let url = `http://127.0.0.1:8080/tables/client/${clientId}`;
    let info = {'address': address, 'phone': phone, 'name': name};
    let response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(info)
    });
    if(response.ok){
        document.querySelector('#address-update').value = '';
        document.querySelector('#tel-update').value = '';
        document.querySelector('#name-update').value = '';
        document.querySelector('#id-update').value = '';
    }
}

async function deleteFunc(){
    let clientId = parseInt(document.querySelector('#id').value, 10);
    let response = await fetch(`http://127.0.0.1:8080/tables/client/${clientId}`, {method: 'DELETE'});
    if(response.ok) document.querySelector('#id').value = ''
}