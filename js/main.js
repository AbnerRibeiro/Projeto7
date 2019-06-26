// Função para gerar elementos no DOM
var totalPizzas = [];

function gerarPizza() {
	var contadorPizzas = document.querySelector('#total-Pizzas')
	var containerPizzas = document.querySelector("#container-pizzas");
	var pizza = document.createElement("li");

// Adicionando classe do bootstrap inline
	pizza.className = "list-inline-item";
	var pizzaImg = document.createElement("img");
	pizzaImg.setAttribute("src", "https://source.unsplash.com/100x100/?pizza"); 
	pizzaImg.className = "borda-redonda";
	pizza.appendChild(pizzaImg);
	containerPizzas.appendChild(pizza);
// Adicionando pizza no array
	totalPizzas.push(pizza);

	var numeroPizzas = totalPizzas.length;
	contadorPizzas.innerHTML = numeroPizzas;
}

// Coletando o botão
var botao = document.querySelector("button");

// Gerando pizzas no evento onclick
botao.onclick = function(){
	gerarPizza();
}
