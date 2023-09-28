document.addEventListener('DOMContentLoaded', function() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');

    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });

    // Função para redirecionar para a página inicial.html
    function redirectToInitialPage() {
        window.location.href = 'inicial.html';
    }

    // Manipulador de evento para o botão de login
    document.getElementById('loginButton').addEventListener('click', function(event) {
        var email = document.querySelector('.form-container.sign-in-container input[type="email"]').value;
        var password = document.querySelector('.form-container.sign-in-container input[type="password"]').value;

        // Verifica se os campos de email e senha estão preenchidos
        if (!email || !password) {
            event.preventDefault(); // Impede o envio do formulário se os campos não estiverem preenchidos
        } else {
            redirectToInitialPage(); // Redireciona se os campos estiverem preenchidos
        }
    });

    // Manipulador de evento para o botão de cadastro
    document.getElementById('registerButton').addEventListener('click', function(event) {
        var name = document.querySelector('.form-container.sign-up-container input[type="text"]').value;
        var email = document.querySelector('.form-container.sign-up-container input[type="email"]').value;
        var password = document.querySelector('.form-container.sign-up-container input[type="password"]').value;

        // Verifica se os campos de nome, email e senha estão preenchidos
        if (!name || !email || !password) {
            event.preventDefault(); // Impede o envio do formulário se os campos não estiverem preenchidos
        } else {
            redirectToInitialPage(); // Redireciona se os campos estiverem preenchidos
        }
    });
});
