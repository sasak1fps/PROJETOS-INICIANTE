function contar(){
    var inicio = document.querySelector('input#inicio');
    var fim  = document.querySelector('input#fim');
    var passos =document.querySelector('input#passo');
    var res = document.querySelector('div#res');
    if (inicio.value.length == 0 || fim.value.length== 0 || passo.value.length==0){
        alert("erro");

    }else{ 
     res.innerHTML = `contando: <br>`;
     var i = Number(inicio.value);
     var f = Number(fim.value);
     var p = Number(passos.value);
    if(p<= 0){
        alert('passo invalid') 
        p = 1 ;
    }
     if(i < f){      
      
        for(let c = i; c <= f; c = c + p){
             res.innerHTML += ` ${ c } `
         }
    }else{
        
        for(let c = i; c>= f ; c = c - p){
           
            res.innerHTML += `  ${ c }  \u{1f449} `
        }
    }
           res.innerHTML += `\u{1f3c1}`
    }

}   