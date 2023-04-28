function login(){
var log = 2;
var gin = 1;
if (log > gin) {
alert("Login feito com sucesso!");
}
}
//Aparentemente a caixa de notificações não suporta caracteres especiais ou acentuação...

function search(){
    var log = 2;
    var gin = 1;
    var nome = document.getElementById("search").value;
    if (log > gin) {
    alert("Retornando pequisas sobre..." + nome);

    }
}
//Basicamenente clonei a primeira função, usei as mesmas variaveis, etc... 
// Funçao aprimorada. Agora retorna uma notifiação sobre algo pesquisado.
//Todavia terei que fazer um teste de mesa posteriormente...