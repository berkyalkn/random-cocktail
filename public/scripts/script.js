const button = document.querySelector(".custom-btn");
const container = document.querySelector(".container");

button.addEventListener("click", async () => {

    button.disabled = true;
    button.textContent = "Loading...";


    try {
        const response = await fetch("/random-cocktail");
        const data = await response.json();

        const info1 = `
            <div class="info1">
                <h1>INFORMATIONS:</h1>
                <p>Name: ${data.name}</p>
                <p>Drink ID: ${data.id}</p>
                <p>Category: ${data.category}</p>
                <p>Alcoholic: ${data.alcoholic}</p>
                <p>Glass: ${data.glass}</p>
            </div>
        `;

        const info2 = `
            <div class="info2">
                <h1>INSTRUCTIONS:</h1>
                <p>${data.instructions}</p>
                <h1 style="padding-top: 20px;">INGREDIENTS:</h1>
                <ul>
                    ${data.ingredients
                        .map(ingredient => 
                            `<li>${ingredient.name} ${ingredient.measure ? ": " + ingredient.measure : ""}</li>`
                        )
                        .join("")}
                </ul>
            </div>
        `;

        const card = `
            <div class="card" style="background-image: url('${data.strDrinkThumb}');">
                <p>${data.name}</p>
            </div>
        `;

        container.innerHTML = `${info1}${card}${info2}`;
    } catch (error) {
        console.error("Error fetching new cocktail:", error);
        alert("Failed to fetch a new cocktail. Please try again.");
    } finally {
        button.disabled = false;
        button.textContent = "RANDOM COCKTAIL";
    }
});