let button = window.document.getElementById("search");

//As DUAS forma de registrar um EVENTO utilizado pelo livro do Rinoceronte para demonstrar.

button.addEventListener("click", function() {
    alert('Continuar comprando.');
    //button.onclick = function() { alert('Continuar comprando')};
});


let itemDoCarrinho = window.document.getElementById("listaDoCarrinho");

itemDoCarrinho.addEventListener("click", function() {
    alert('Item adicionado ao carrinho.');
});


let addAoCarrinho = window.document.getElementById('addItem');
//let addAoCarrinho = window.document.getElementsByName("addItem")[0];
//let addAoCarrinho = window.document.querySelector('span>button');

addAoCarrinho.addEventListener("click", function() {
    alert('É quase seu!');
});

let addAoCarrinho1 = window.document.getElementById('addItem1');

addAoCarrinho1.addEventListener("click", function() {
    alert('É quase seu!');
});

let addAoCarrinho2 = window.document.getElementById('addItem2');

addAoCarrinho2.addEventListener("click", function() {
    alert('É quase seu!');
});

let addAoCarrinho3 = window.document.getElementById('addItem3');

addAoCarrinho3.addEventListener("click", function() {
    alert('É quase seu!');
});

let addAoCarrinho4 = window.document.getElementById('addItem4');

addAoCarrinho4.addEventListener("click", function() {
    alert('É quase seu!');
});

let addAoCarrinho5 = window.document.getElementById('addItem5');

addAoCarrinho5.addEventListener("click", function() {
    alert('É quase seu!');
});

//imagem.addEventListener('mouseover', function() {})