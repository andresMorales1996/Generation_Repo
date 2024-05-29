
function handleData(){
    const data = parseFloat(document.getElementById("temperature").value)
    const list = document.getElementById('list');

    if (isNaN(data)){
        alert('Ingrese un número');
        temperature.value = "";
        return;
    } else {
        const kelvin = data + 273.15;
        const kelvinData = document.createElement('li');
        kelvinData.textContent = (`°C a °Kelvin = ${kelvin}°`);
        list.appendChild(kelvinData);
    
        const farenheit = ((data * 9)/5)+32;
        const farenheitData = document.createElement('li');
        farenheitData.textContent = (`°C a °Farenheit = ${farenheit}°`);
        list.appendChild(farenheitData);
    }

}