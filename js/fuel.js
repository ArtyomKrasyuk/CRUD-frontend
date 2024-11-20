'use strict'

document.querySelector('#create').onclick = createFunc;
document.querySelector('#read').onclick = readFunc;
document.querySelector('#update').onclick = updateFunc;
document.querySelector('#delete').onclick = deleteFunc;

async function createFunc(){
    let type = document.querySelector('#type-create').value;
    let unitOfMeasurement = document.querySelector('#unit-of-measurement-create').value;
    let price = parseFloat(document.querySelector('#price-create').value);
    let url = 'http://127.0.0.1:8080/tables/fuel';
    let info = {'type': type, 'unitOfMeasurement': unitOfMeasurement, 'price': price};
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(info)
    });
    if(response.ok){
        document.querySelector('#type-create').value = '';
        document.querySelector('#unit-of-measurement-create').value = '';
        document.querySelector('#price-create').value = '';
    }
}

async function readFunc(){
    let fuelId = parseInt(document.querySelector('#id').value, 10);
    let response = await fetch(`http://127.0.0.1:8080/tables/fuel/${fuelId}`, {method: 'GET'});
    if(response.ok) {
        let result = await response.json();
        alert(`Тип: ${result['type']}\nЕдиница измерения: ${result['unitOfMeasurement']}\nЦена: ${result['price']}`);
        document.querySelector('#id').value = ''
    }
}

async function updateFunc(){
    let type = document.querySelector('#type-update').value;
    let unitOfMeasurement = document.querySelector('#unit-of-measurement-update').value;
    let price = parseFloat(document.querySelector('#price-update').value);
    let fuelId = parseInt(document.querySelector('#id-update').value, 10);
    let url = `http://127.0.0.1:8080/tables/fuel/${fuelId}`;
    let info = {'type': type, 'unitOfMeasurement': unitOfMeasurement, 'price': price};
    let response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(info)
    });
    if(response.ok){
        document.querySelector('#type-update').value = '';
        document.querySelector('#unit-of-measurement-update').value = '';
        document.querySelector('#price-update').value = '';
        document.querySelector('#id-update').value = '';
    }
}

async function deleteFunc(){
    let fuelId = parseInt(document.querySelector('#id').value, 10);
    let response = await fetch(`http://127.0.0.1:8080/tables/fuel/${fuelId}`, {method: 'DELETE'});
    if(response.ok) document.querySelector('#id').value = ''
}