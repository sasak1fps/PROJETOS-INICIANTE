function carregar() {
    var msg = document.querySelector('div#msg');
    var foto = document.querySelector('img#imagem');
    var data = new Date();
    var hora =  data.getHours();
    
    msg.innerHTML = `agora sao ${hora} horas`;

    if (hora >= 0 && hora < 12) {
        foto.src = "manha.avif";
        document.body.style.background = 'yellow'
        document.querySelector('footer').style.background = 'yellow'
    } else if (hora >= 12 && hora <= 18) {

        foto.src = "tarde.webp";
        document.body.style.background = 'orange'
        document.querySelector('footer').style.background = 'orange'
        
    } else {

        foto.src = "noite.avif";
    
    }
}
