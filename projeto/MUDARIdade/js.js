function verificar(){
    var data = new Date();
    var anos = data.getFullYear();
    var fano = document.getElementById('ano');
    var res = document.querySelector('div#res');
    var img = document.createElement('img');
    img.setAttribute('id','foto');


    if(fano.value.length == 0 || fano.value >= anos){
        alert('erro nos dados');

    }else{
        var fsex = document.getElementsByName('sexo');
        var idade = anos - Number(fano.value)
        res.innerHTML = idade;
        var gen = '';
      
      
        if (fsex[0].checked){
            gen = 'homem';
            if(idade >= 0 && idade <10){
                img.src = 'https://i.pinimg.com/236x/55/ca/4d/55ca4d9a1a700a2823f3d87ef900480d.jpg';

            }else if (idade >=10 && idade < 21){
                img.src ='https://conteudo.senacrs.com.br/wp-content/uploads/2020/12/Jovem-Aprendiz-Senac.jpg'
            } else if ( idade < 50 ) {
                img.src='https://img.freepik.com/fotos-gratis/homem-adulto-atraente-cruzando-os-bracos-e-sorrindo_176420-18744.jpg'
            }else{
                img.src='https://static.vecteezy.com/ti/fotos-gratis/p1/797478-retrato-de-um-velho-foto.jpg'
            }


        }else if (fsex[1].checked){
            gen  = 'mulher';
            
            if(idade >= 0 && idade <10){
                img.src='https://eyekids.med.br/wp-content/uploads/2020/02/como-convencer-a-crianca-usar-oculos.jpg'
            }else if (idade >=10 && idade < 21){
                img.src='https://media.istockphoto.com/id/1311107708/pt/foto/focused-cute-stylish-african-american-female-student-with-afro-dreadlocks-studying-remotely.jpg?s=612x612&w=0&k=20&c=-9mmKvJhsafcMsrY3ypiFyv1npdORkoJcdEOpwHWaDk='
            } else if ( idade < 50 ) {
                img.src='https://www.psitto.com.br/wp-content/uploads/2022/12/autismo-adulto.jpg'
            }else{
                img.src='https://selesnafes.com/wp-content/uploads/2023/07/idoso-1.jpg'
            }
        }
        res.style.textAlign ='center'
        res.innerHTML= `VOCE È ${gen} COM ${idade} ANOS`
        res.appendChild(img)
    }
}   