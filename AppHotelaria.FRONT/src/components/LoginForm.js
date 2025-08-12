export default function LoginForm() {

    const formulario = document.createElement('form');
    formulario.className = 'd-flex flex-column';
 
    const email = document.createElement('input');
    email.type = 'email';
    email.placeholder = "Digite seu email";
    email.className = ''
    formulario.appendChild(email);


    const senha = document.createElement('input');
    senha.type = 'password';
    senha.placeholder = "Digite a sua senha";
    formulario.appendChild(senha);

    
    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'Entrar';
    formulario.appendChild(button);
    button.className= 'button btn-primary'
    
 
    return formulario;
}