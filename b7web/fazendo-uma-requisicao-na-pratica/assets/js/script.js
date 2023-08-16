//https://jsonplaceholder.typicode.com/posts

//entendo promise = promessa

function clicou(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        alert(`titulo do primeiro post ${json[0].title}`)
    })
    .catch(() => {
        //catch executa se a requisição der erro
        alert('deu problema na requisição')        
    })
    .finally(() => {
        //executa por ultimo sempre
        alert('opa acabou tudo')
    })
}


document.querySelector('#botao').addEventListener('click', clicou)

