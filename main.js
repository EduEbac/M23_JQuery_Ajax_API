// Código sem o jquery
// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('btn-buscar-cep').addEventListener('click', function() {
//         // AJAX - Asynchronous JavaScript and XML
//         const xhttp = new XMLHttpRequest(); // <-- aqui estava "xttp"
//         const cep = document.getElementById('cep').value;
//         const endpoint = `https://viacep.com.br/ws/${cep}/json/`; // <-- faltou a barra final

//         xhttp.open('GET', endpoint);
//         xhttp.send();

//         // https://viacep.com.br/ws/123123132/json/
//     });
// });


// Código completo com jquery
$(document).ready(function() {
    $('#cep').mask('00000-000');

    $('#btn-buscar-cep').click(function() {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
        const botao = $(this);
        botao.find('i').addClass('d-none');
        botao.find('span').removeClass('d-none');


        $.ajax(endpoint).done(function(resposta){
            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
            $(`#endereco`).val(endereco);

            botao.find('i').removeClass('d-none');
            botao.find('span').addClass('d-none');

            // setTimeout(function(){ // apenas para ver o efeito atraso 4s
            //     botao.find('i').removeClass('d-none');
            //     botao.find('span').addClass('d-none');
            // }, 4000);
        })
    })
})
