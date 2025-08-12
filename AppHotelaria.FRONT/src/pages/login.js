import LoginForm from "../components/LoginForm.js";
 
export default function renderLoginPage() {
    const divRoot = document.getElementById('root');

    divRoot.innerHTML = '';

    const titulo = document.createElement('h1')
    titulo.textContent = 'Faça o login ou crie uma conta';
    titulo.className = 'titulo';


    //Dentro da divRoot tera uma div chamadad container e em container estara o formulario
    const container = document.createElement('div'); 
    container.className = 'card p-4 shadow-lg'; //Classe do Bootstrap para criar um card
    container.style.width = '100%';//Aplicada a largura de 100% na div container pra ocupar a tela
    container.style.maxWidth = '400px';
     //Até que atinja o maximo de 400px
    divRoot.appendChild(container); //divRoot contém a nova div

    const formulario = LoginForm();

    container.appendChild(titulo);
    container.appendChild(formulario); //Nova div container, já dentro de divRoot, contém o form
    
}