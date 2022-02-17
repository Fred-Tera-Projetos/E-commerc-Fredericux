console.log("Olá mundo!");

let botao = document.getElementById("botao-topo");

window.onscroll = function scrollFunction () {
  if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
    botao.style.display = "block";
  } else {
    botao.style.display = "none";
  }
}

const cep = document.querySelector("#cep");

const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

const showData = (result) => {
    for (const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo];
        }
    }
}

cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-", "");
    console.log(search);
    
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response => {
        response.json()
        .then(data => {
            console.log(data)
            showData(data)
        })
    })
    .catch(e => {
        console.log("ERRO: "+e)
    })
 })



function voltarParaTopo () {
  document.documentElement.scrollTop = 0;
}