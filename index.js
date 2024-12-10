import express from "express";
import axios from "axios";


const app = express();
const port = 4000;
const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    
    try {
        const result = await axios.get(API_URL); 
        const cocktail = result.data.drinks[0]; 
        res.render("index",
         { 
            name : cocktail.strDrink,
            id : cocktail.idDrink,
            category : cocktail.strCategory,
            alcholic : cocktail.strAlcoholic,
            glass : cocktail.strGlass,
            instructions : cocktail.strInstructions,
            ingredients: [
                { name: cocktail.strIngredient1, measure: cocktail.strMeasure1 },
                { name: cocktail.strIngredient2, measure: cocktail.strMeasure2 },
                { name: cocktail.strIngredient3, measure: cocktail.strMeasure3 },
                { name: cocktail.strIngredient4, measure: cocktail.strMeasure4 },
                { name: cocktail.strIngredient5, measure: cocktail.strMeasure5 },
                { name: cocktail.strIngredient6, measure: cocktail.strMeasure6 },
                { name : cocktail.strIngredient7, measure: cocktail.strMeasure7}, 
                { name : cocktail.strIngredient8, measure: cocktail.strMeasure8}, 

            ].filter(ing => ing.name),
            strDrinkThumb: cocktail.strDrinkThumb,
         });  
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong while rendering the page.");
    }
});

app.get("/random-cocktail", async(req, res) => {
    try {
        const result = await axios.get(API_URL);
        const cocktail = result.data.drinks[0];

        res.json({
            name: cocktail.strDrink,
            id: cocktail.idDrink,
            category: cocktail.strCategory,
            alcoholic: cocktail.strAlcoholic,
            glass: cocktail.strGlass,
            instructions: cocktail.strInstructions,
            ingredients: [
                { name: cocktail.strIngredient1, measure: cocktail.strMeasure1 },
                { name: cocktail.strIngredient2, measure: cocktail.strMeasure2 },
                { name: cocktail.strIngredient3, measure: cocktail.strMeasure3 },
                { name: cocktail.strIngredient4, measure: cocktail.strMeasure4 },
                { name: cocktail.strIngredient5, measure: cocktail.strMeasure5 },
                { name: cocktail.strIngredient6, measure: cocktail.strMeasure6 },
                { name : cocktail.strIngredient7, measure: cocktail.strMeasure7}, 
                { name : cocktail.strIngredient8, measure: cocktail.strMeasure8}, 
            ].filter(ing => ing.name),
            strDrinkThumb: cocktail.strDrinkThumb,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong." });
    }
});

app.listen(port, () => {
    console.log(`Server is listening in port ${port} `)
});