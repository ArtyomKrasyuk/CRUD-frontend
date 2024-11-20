'use strict'

document.querySelector('#create').onclick = createFunc;
document.querySelector('#read').onclick = readFunc;
document.querySelector('#update').onclick = updateFunc;
document.querySelector('#delete').onclick = deleteFunc;

async function createFunc(){
    let clientId = parseInt(document.querySelector('#client-id-create').value, 10);
    let gasStationId = parseInt(document.querySelector('#gas-station-id-create').value, 10);
    let firmId = parseInt(document.querySelector('#firm-id-create').value, 10);
    let fuelId = parseInt(document.querySelector('#fuel-id-create').value, 10);
    let saleDate = document.querySelector('#sale-date-create').value;
    let liters = parseFloat(document.querySelector('#liters-create').value);
    let url = 'http://127.0.0.1:8080/tables/sale';
    let info = {'cardId': clientId, 'gasStationId': gasStationId, 'firmId': firmId, 'fuelId': fuelId, 'saleDate': saleDate, 'liters': liters};
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(info)
    });
    if(response.ok){
        document.querySelector('#client-id-create').value = '';
        document.querySelector('#gas-station-id-create').value = '';
        document.querySelector('#firm-id-create').value = '';
        document.querySelector('#fuel-id-create').value = '';
        document.querySelector('#sale-date-create').value = '';
        document.querySelector('#liters-create').value = '';
    }
}

async function readFunc(){
    let saleId = parseInt(document.querySelector('#id').value, 10);
    let response = await fetch(`http://127.0.0.1:8080/tables/sale/${saleId}`, {method: 'GET'});
    if(response.ok) {
        let result = await response.json();
        alert(`Id клиента: ${result['cardId']}\nId заправки: ${result['gasStationId']}\nId фирмы: ${result['firmId']}\n`+
            `Id топлива: ${result['fuelId']}\nДата продажи: ${result['saleDate']}\nЛитры: ${result['liters']}`);
        document.querySelector('#id').value = ''
    }
}

async function updateFunc(){
    let saleId = parseInt(document.querySelector('#id-update').value, 10);
    let clientId = parseInt(document.querySelector('#client-id-update').value, 10);
    let gasStationId = parseInt(document.querySelector('#gas-station-id-update').value, 10);
    let firmId = parseInt(document.querySelector('#firm-id-update').value, 10);
    let fuelId = parseInt(document.querySelector('#fuel-id-update').value, 10);
    let saleDate = document.querySelector('#sale-date-update').value;
    let liters = parseFloat(document.querySelector('#liters-update').value);
    let url = `http://127.0.0.1:8080/tables/sale/${saleId}`;
    let info = {'cardId': clientId, 'gasStationId': gasStationId, 'firmId': firmId, 'fuelId': fuelId, 'saleDate': saleDate, 'liters': liters};
    let response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(info)
    });
    if(response.ok){
        document.querySelector('#id-update').value = '';
        document.querySelector('#client-id-update').value = '';
        document.querySelector('#gas-station-id-update').value = '';
        document.querySelector('#firm-id-update').value = '';
        document.querySelector('#fuel-id-update').value = '';
        document.querySelector('#sale-date-update').value = '';
        document.querySelector('#liters-update').value = '';
    }
}

async function deleteFunc(){
    let saleId = parseInt(document.querySelector('#id').value, 10);
    let response = await fetch(`http://127.0.0.1:8080/tables/sale/${saleId}`, {method: 'DELETE'});
    if(response.ok) document.querySelector('#id').value = ''
}