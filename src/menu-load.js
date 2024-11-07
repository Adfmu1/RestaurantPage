const contentDiv = document.querySelector("#content")

export function menuPageLoad(){
    const mainHeader1 = document.createElement("h1")
    mainHeader1.textContent = "Menu";
    contentDiv.appendChild(mainHeader1);

    const pizzasDiv = document.createElement("div");
    pizzasDiv.id = "hours-div";

    const pizzasHeader = document.createElement("h3");
    pizzasHeader.textContent = "Pizzas";
    pizzasHeader.id = "pizzas-header";
    pizzasDiv.appendChild(pizzasHeader);

    const pizzas = ["Margherita", "Capriciosa", "Vesovio"];
    const prices = [10, 13, 15];
    const descriptions = ["Good ol' cheesy pizza", "Margherita but with shrooms and ham", "DOUBLE HAM!"];

    for (let i = 0; i < pizzas.length; i++) {
        const pizzaDiv = document.createElement("div")
        pizzaDiv.id = pizzas[i].toLowerCase();
        
        const pizzaName = document.createElement("h4");
        pizzaName.textContent = pizzas[i];

        const pizzaPrice = document.createElement("p");
        pizzaPrice.textContent = prices[i];

        const pizzaDescription = document.createElement("p");
        pizzaDescription.textContent = descriptions[i];        

        pizzaDiv.appendChild(pizzaName);
        pizzaDiv.appendChild(pizzaPrice);
        pizzaDiv.appendChild(pizzaDescription);

        pizzasDiv.appendChild(pizzaDiv);
    }

    contentDiv.appendChild(pizzasDiv);

}
