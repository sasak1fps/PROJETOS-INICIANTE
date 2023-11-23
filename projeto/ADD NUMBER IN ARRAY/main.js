    
    var num = document.querySelector('input#num');
    var select = document.querySelector('select#select');
    var res = document.querySelector('div#res');
    var valores = []

function isnumero(n){
    if(Number(n) >=1 && Number(n)<=100){
        return true
    }else{
        return false
    }

}
function inlista(n,l){
    if( l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}


function clicar() {
    if(isnumero(num.value) &&  !inlista(num.value, valores)){
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `valor  ${num.value} adicionado`;
        select.appendChild(item);
        res.innerHTML = '';
    }else{
        alert('numerp invalido ou ja encontrado na lista');
    }
    num.value = ''
    num.focus()
}


function finalizar(){

if ( valores.length == 0 ){
    alert('adicione valores antes de finalizar');

}else{
    let tot = valores.length ; 
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;

    for(let pos in valores){
        soma += valores[pos]
        if(valores[pos] > maior)
        maior  = valores[pos]
        if(valores[pos]< menor)
        menor = valores[pos]
    }
    media = soma / tot
    res.innerHTML = '';
    res.innerHTML += `<p>Ao todo temos ${tot} numeros cadastrados </p>`;
    res.innerHTML += `<p>O maior valor é ${maior} </p>`;
    res.innerHTML += `<p>O menor valor é ${menor} </p>`;
    res.innerHTML +=  `<p>A soma dos valores é ${soma}</p>`
    res.innerHTML +=  `<p>A media é ${media}</p>`
}
}