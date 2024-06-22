function handleData(){
    const num = parseInt(document.getElementById('input').value)
    console.log(num);

    const screen = document.getElementById('screen')

    screen.innerHTML = "";

    if(isNaN(num)){
        alert("Ingrese un valor válido");
        input.value = "";
    } else {

        const title = document.createElement('p');
        title.classList.add('title-text');
        title.textContent = `Los primeros ${num} números de la sucesión de Fibonacci son:`;
        screen.appendChild(title);

        //Cálculo de la secuencia de Fibonacci
        const fibonacci = [];
        let a = 0;
        let b = 1;

        for (let i = 0; i < num; i++){
            fibonacci.push(a);
            const nextNum = a + b;
            a = b;
            b = nextNum
        }

        console.log(fibonacci);

        const result = document.createElement('p');
        result.classList.add('res-text');
        result.textContent = fibonacci;
        screen.appendChild(result);

        input.value = "";

    }

}