function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res =window.document.querySelector("div#res")
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if( idade >=0 && idade <=11){
                //Criança
                img.setAttribute('src', 'bebe-homem.png')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-homem.png')
            }else if(idade <50){
                //Adulto
                img.setAttribute('src', 'homem.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if( idade >=0 && idade <=11){
                //Criança
                img.setAttribute('src', 'bebe-mulher.png')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-mulher.png')
            }else if(idade <50){
                //Adulta
                img.setAttribute('src', 'mulher.png')
            }else{
                //Idosa
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} com a idade de ${idade} anos !`
        res.appendChild(img)
    }
}
