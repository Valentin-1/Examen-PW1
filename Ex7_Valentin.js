Input = document.getElementById('input');

Input.addEventListener('focus', (event) => {
    if(typeof Number(Input.value) == 'number'){
        Input.value = "0";
    }  
});