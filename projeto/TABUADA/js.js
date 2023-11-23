function gerar(){
  var num =  document.getElementById('num');
  var select =  document.getElementById('select');
if( num.value.length == 0 ){
      alert("erro, digite os dados novamente...");
}else{
    var n = Number(num.value);
    var c = 1
    select.innerHTML=''
    while (c<=10){
        let item = document.createElement('option');
        item.text = `${n} x ${c}  = ${n * c }`;
        item.value = `select${c}`
        select.appendChild(item)
        c++
    }

  }
}