window.onload = () => {
    const btn = document.getElementById('test');
    let name = "fuumi"
    let address = "dada"
    let password = "fuumi"
    btn.addEventListener('click', () => {
        console.log("on");

        fetch(`http://click.ecc.ac.jp/ecc/yhasimoto/API/userRegi.php?name=${name}&address=${address}&password=${password}`)
            .then(response => {
                console.log(response);
            });
    })
}