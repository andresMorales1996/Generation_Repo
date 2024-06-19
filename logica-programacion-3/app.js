function handleData(){
    
    //Captura del valor ingresado en el input
    const data = parseFloat(document.getElementById('inputNum').value);

    //Captura del elemento contenedor
    const container = document.getElementById('my-container');

    //Limpia el dom cada vez que se oprime el boton
    container.innerHTML = "";

    //Verificación de que el valor sea numérico
    if (isNaN(data)) {
        alert("Ingrese un valor válido");
        inputNum.value = "";
    } else {

        //Creación y adición al dom del título de la respuesta
        const title = document.createElement('p');
        title.classList.add('title-text')
        title.textContent = `El Factorial de ${data} es:`
        container.appendChild(title);

        //Bucle para calcular factorial
        let fact = 1;
        for (let i = 1; i <= data; i++) {
            fact *= i;
        }

        //Creación y adición al dom de la respuesta
        const result = document.createElement('p');
        result.classList.add("result-text")
        result.textContent = fact;
        container.appendChild(result);
    }

}