function  carregar() {
    var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12) {
    // BOM DIA !
    img.src = 'fotomanha.png'
    document.body.style.background ='#ffead2'
} else if (hora >= 12 && hora <=18 ) {
    //BOA TARDE !
    img.src = 'fototarde.png'
    saldação.innerHTML = 'BOA TARDE!'
    document.body.style.background ='#f09465'
} else {
    // BOA NOITE !
    img.src = 'fotonoite.png'
    document.body.style.background ='#030313'
    saldação.innerHTML = 'BOA NOITE!'
}
}

