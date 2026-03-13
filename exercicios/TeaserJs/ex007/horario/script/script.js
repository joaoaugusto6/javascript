function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom Dia
        img.src = 'imgs/Manhã.jpg'
        document.body.style.background = '#fffd9a'
    }
    else if (hora >=12 && hora < 18) {
        //Boa Tarde
        img.src = 'imgs/Tarde.jpg'
        document.body.style.background = '#ffc56d'
    }
    else {
        //Boa Noite
        img.src = 'imgs/Noite.jpg'
        document.body.style.background = '#31323b'
    }
}