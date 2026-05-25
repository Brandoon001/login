const passwordInput = document.getElementById('password');
const togglePasswordIcon = document.getElementById('toggle-password');

togglePasswordIcon.addEventListener('click', function () {
    const isPassword = passwordInput.type === 'password';
    
    passwordInput.type = isPassword ? 'text' : 'password';
    
    if (isPassword) {
        togglePasswordIcon.classList.remove('ph-eye-slash');
        togglePasswordIcon.classList.add('ph-eye');
    } else {
        togglePasswordIcon.classList.remove('ph-eye');
        togglePasswordIcon.classList.add('ph-eye-slash');
    }
});

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const usuario = document.querySelector('input[placeholder="Usuário"]').value;
    const senha = passwordInput.value;
    if (usuario.trim() === "" || senha.trim() === "") {
        alert("Por favor, preencha todos os campos antes de enviar!");
        return;
    }

    alert(`Olá, ${usuario}! Obrigado por testar o sistema.`);
    
    loginForm.reset();
    
    passwordInput.type = 'password';
    togglePasswordIcon.classList.remove('ph-eye');
    togglePasswordIcon.classList.add('ph-eye-slash');
});