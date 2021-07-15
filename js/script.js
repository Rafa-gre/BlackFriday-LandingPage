const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);
    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content')
    let carregando = `<p>Preparando as melhores ofertas pra você . . . </p>`
    let pronto = `<p>Você receberá ofertas com até 70% de desconto</p>`
    content.innerHTML = carregando

    setTimeout(() => {
        content.innerHTML = pronto
    }, 1000)

})

function countdown() {
    var now = new Date();
    // Altere a data do seu evento aqui
    var eventDate = new Date("Nov 24, 2021 00:00:00");
    var currentTiime = now.getTime();
    var eventTime = eventDate.getTime();
    var remTime = eventTime - currentTiime;
    // calculando o dia, hora, minuto e segundo
    var d = Math.floor(remTime / (1000 * 60 * 60 * 24));
    var h = Math.floor((remTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((remTime % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((remTime % (1000 * 60)) / 1000);
    document.getElementById("days").textContent = d;
    document.getElementById("days").innerText = d;
    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;
    setTimeout(countdown, 1000);

    // Verifica se acabou o período do evento
    if (remTime < 0) {
        clearInterval(countdown);
        //document.getElementById("demogrande").innerHTML = "FIM";
        document.getElementById("days").innerHTML = " ";
        document.getElementById("hours").innerHTML = " ";
        document.getElementById("minutes").innerHTML = " ";
        document.getElementById("seconds").innerHTML = "<small>FIM</small>";
    }
}
countdown();