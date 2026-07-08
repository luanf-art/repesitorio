document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SISTEMA DE CURTIDAS (INDIVIDUAL POR POST)
    const botoesCurtida = document.querySelectorAll('.btn-like');

    botoesCurtida.forEach(botao => {
        botao.addEventListener('click', () => {
            // Captura o elemento <span> dentro do botão clicado
            const contadorSpan = botao.querySelector('span');
            // Converte o texto atual em número e soma 1
            let curtidasAtuais = parseInt(contadorSpan.textContent, 10);
            curtidasAtuais++;
            // Atualiza a tela
            contadorSpan.textContent = curtidasAtuais;

            // Efeito visual rápido de pulo ao clicar
            botao.style.transform = 'scale(1.1)';
            setTimeout(() => {
                botao.style.transform = 'none';
            }, 150);
        });
    });

    // 2. ALTERNADOR DE TEMA (ESCURO / CLARO)
    const botaoTema = document.getElementById('toggle-theme');
    
    // Verifica se o usuário já tinha uma preferência salva anteriormente
    const temaSalvo = localStorage.getItem('theme');
    if (temaSalvo) {
        document.documentElement.setAttribute('data-theme', temaSalvo);
    }

    botaoTema.addEventListener('click', () => {
        // Verifica qual o tema atual do atributo de dados do HTML
        let temaAtual = document.documentElement.getAttribute('data-theme');
        
        if (temaAtual === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
});
