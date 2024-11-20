'use strict'

document.querySelector('#create').onclick = createFunc;
document.querySelector('#read').onclick = readFunc;
document.querySelector('#update').onclick = updateFunc;
document.querySelector('#delete').onclick = deleteFunc;

async function createFunc(){
    let firmId = parseInt(document.querySelector('#firm-id-create').value, 10);
    let address = document.querySelector('#address-create').value;
    let url = 'http://127.0.0.1:8080/tables/gasStation';
    let info = {'firmId': firmId, 'address': address};
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(info)
    });
    if(response.ok){
        document.querySelector('#address-create').value = '';
        document.querySelector('#firm-id-create').value = '';
    }
}

async function readFunc(){
    let gasStationId = parseInt(document.querySelector('#id').value, 10);
    let response = await fetch(`http://127.0.0.1:8080/tables/gasStation/${gasStationId}`, {method: 'GET'});
    if(response.ok) {
        let result = await response.json();
        alert(`Id фирмы: ${result['firmId']}\nАдрес: ${result['address']}`);
        document.querySelector('#id').value = ''
    }
}

async function updateFunc(){
    let gasStationId = parseInt(document.querySelector('#id-update').value, 10);
    let firmId = parseInt(document.querySelector('#firm-id-update').value, 10);
    let address = document.querySelector('#address-update').value;
    let url = `http://127.0.0.1:8080/tables/gasStation/${gasStationId}`;
    let info = {'firmId': firmId, 'address': address};
    let response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(info)
    });
    if(response.ok){
        document.querySelector('#address-update').value = '';
        document.querySelector('#firm-id-update').value = '';
        document.querySelector('#id-update').value = '';
    }
}

async function deleteFunc(){
    let gasStationId = parseInt(document.querySelector('#id').value, 10);
    let response = await fetch(`http://127.0.0.1:8080/tables/gasStation/${gasStationId}`, {method: 'DELETE'});
    if(response.ok) document.querySelector('#id').value = ''
}