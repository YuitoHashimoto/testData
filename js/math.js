window.onload = () => {
    const num = document.querySelectorAll('.num'),
          input = document.querySelector('.inputArea'),
          answer = document.querySelector('.answer');

    let formula = "";
    
    num.forEach(element => {
        element.onclick = () => {
            input.value += `${element.dataset.indexnum}`
        }
    });

    answer.onclick = () => {
        console.log(input.value);
    }

    console.log(aaa);
}