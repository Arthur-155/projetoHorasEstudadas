

export function LoginUsuario() {
    document.addEventListener('DOMContentLoaded', function() {
        let armazenandoLogin = document.getElementById('nome-usuario');
        let validacaoBtn = document.getElementById('submit-button');

        if (validacaoBtn) {
            validacaoBtn.addEventListener('click', function () {
                let valorLogin = armazenandoLogin.value.trim();

                if (valorLogin === "") {
                    alert("Insira o nome de usuário");
                    return;
                }
                localStorage.setItem('login', valorLogin);
                window.location.href = '../html/projeto.html';

            });
        }
    });
}
LoginUsuario();

