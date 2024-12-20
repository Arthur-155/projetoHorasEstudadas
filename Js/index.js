import { LoginUsuario } from './validacao.js';

document.addEventListener('DOMContentLoaded', function () {
    LoginUsuario();

    let botaoSoma = document.getElementById('btn-adicionar');
    let botaoSubtrair = document.getElementById('btn-subtrair');
    let textoAlterado = document.getElementsByClassName('qtd-horas')[0];

    let valorAtual = parseInt(localStorage.getItem('contador')) || 0;
    textoAlterado.innerHTML = `<span class = valor3> ${valorAtual} Horas Estudadas</span>`

    if (botaoSoma) {
        botaoSoma.addEventListener('click', function () {
            valorAtual++;
            textoAlterado.innerHTML = `<span class = valor>${valorAtual} Horas estudadas`;
            localStorage.setItem('contador', valorAtual);
        });
    }

    if (botaoSubtrair) {
        botaoSubtrair.addEventListener('click', function () {
            valorAtual--;
            textoAlterado.innerHTML = `<span class = valor2> ${valorAtual} Horas estudadas`;
            localStorage.setItem('contador', valorAtual);
        });
    }


    let zerarContador = document.getElementsByClassName('fa-sync')[0];

    if (zerarContador) {
        zerarContador.addEventListener('click', function () {
            valorAtual = 0;
            localStorage.setItem('contador', valorAtual);
            textoAlterado.innerHTML = `<span class = valor3> ${valorAtual} Horas Estudadas</span>`;
        });
    }


    let modoSalvo = localStorage.getItem('modo');

    if (!modoSalvo) {
        document.body.classList.add('light-mode');
        localStorage.setItem('modo', 'light')
    } else {
        document.body.classList.add(modoSalvo === 'dark' ? 'dark-mode' : 'light-mode');
    }

    let botaoDarkMode = document.getElementsByClassName('fa-moon')[0];
    if (botaoDarkMode) {
        botaoDarkMode.addEventListener('click', function () {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            localStorage.setItem('modo', 'dark');
        });
    }


    let botaoLightMode = document.getElementsByClassName('fa-sun')[0];
    if (botaoLightMode) {
        botaoLightMode.addEventListener('click', function () {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            localStorage.setItem('modo', 'light');

        });
    }

    let alterandoNomeUsuario = document.getElementById('usuario');
    if (alterandoNomeUsuario) {
            let valorLogin = localStorage.getItem('login') || "Visitante"
            if (!alterandoNomeUsuario.innerHTML.includes(valorLogin)) {
                alterandoNomeUsuario.innerHTML += ` ${valorLogin}`
            }
        
    }
});


