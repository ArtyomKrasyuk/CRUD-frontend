'use strict'

document.querySelector('#create').onclick = createFunc;
document.querySelector('#update').onclick = updateFunc;
document.querySelector('#delete').onclick = deleteFunc;

async function createFunc(){
    let firmId = parseInt(document.querySelector('#firm-id-create').value, 10);
    let fuelId = parseInt(document.querySelector('#fuel-id-create').value, 10);
    let url = 'http://127.0.0.1:8080/tables/firmHasFuel';
    let info = {'firmId': firmId, 'fuelId': fuelId};
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(info)
    });
    if(response.ok){
        document.querySelector('#firm-id-create').value = '';
        document.querySelector('#fuel-id-create').value = '';
    }
}

async function updateFunc(){
    let firmId = parseInt(document.querySelector('#firm-id-update').value, 10);
    let fuelId = parseInt(document.querySelector('#fuel-id-update').value, 10);
    let newFirmId = parseInt(document.querySelector('#new-firm-id-update').value, 10);
    let newFuelId = parseInt(document.querySelector('#new-fuel-id-update').value, 10);
    let url = `http://127.0.0.1:8080/tables/firmHasFuel?firmId=${firmId}&fuelId=${fuelId}`;
    let info = {'firmId': newFirmId, 'fuelId': newFuelId};
    let response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(info)
    });
    if(response.ok){
        document.querySelector('#firm-id-update').value = '';
        document.querySelector('#fuel-id-update').value = '';
        document.querySelector('#new-firm-id-update').value = '';
        document.querySelector('#new-fuel-id-update').value = '';
    }
}

async function deleteFunc(){
    let firmId = parseInt(document.querySelector('#firm-id-delete').value, 10);
    let fuelId = parseInt(document.querySelector('#fuel-id-delete').value, 10);
    let response = await fetch(`http://127.0.0.1:8080/tables/firmHasFuel?firmId=${firmId}&fuelId=${fuelId}`, {method: 'DELETE'});
    if(response.ok) {
        document.querySelector('#firm-id-delete').value = ''
        document.querySelector('#fuel-id-delete').value = ''
    }
}