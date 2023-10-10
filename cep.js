function BuscaCep () {
    let cep= document.getElementById('cep').value;
    if(cep !== ""){
        let url= "https://brasilapi.com.br/api/cep/v1/" + cep;

        let req = new XMLHttpRequest(); 
        req.open("GET", url);
        req.send();

        req.onload = function () {
            if(req.status === 200) {
                let endereco = json.parse(req.response);
                document.getElementById('rua').value = endereco.street;
                document.getElementById('bairro').value = endereco.neighborhood;
                document.getElementById('cidade').value = endereco.city;
                document.getElementById('estado').value = endereco.state;


            }
            else if (req.status === 404){
                alert("CEP INVÁLIDO");
            }
            else {
                alert ("Erro na requisição");
            }

        }
    }

}

window.onload = function() {
    let cep = document.getElementById ("cep");
    cep.addEventListener("blur",BuscaCep)
}