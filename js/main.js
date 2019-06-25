function gerarPizza() {

	var containerPizzas = document.querySelector("#container-pizzas");

	var pizza = document.createElement("li");
	var pizzaImg = document.createElement("img");

	pizzaImg.setAttribute("src", "https://source.unsplash.com/100x100/?pizza"); 
	pizzaImg.className = "borda-redonda";
	pizza.appendChild(pizzaImg);
	containerPizzas.appendChild(pizza);
}

var botao = document.querySelector("button");

botao.onclick = function(){
	gerarPizza();
}
