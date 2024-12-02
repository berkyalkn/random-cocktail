import express from "express";
import axios from "axios";


const app = express();
const port = 3000;
const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL); 
        const cocktail = result.data.drinks[0]; 
        res.render("index.ejs",
         { 
            name : cocktail.strDrink,
            id : cocktail.idDrink,
            category : cocktail.strCategory,
            alcholic : cocktail.strAlcoholic,
            glass : cocktail.strGlass,
            instructions : cocktail.strInstructions,
            i1 : cocktail.strIngredient1,
            i2 : cocktail.strIngredient2,
            i3 : cocktail.strIngredient3,
            i4 : cocktail.strIngredient4,
            i5 : cocktail.strIngredient5,
            i6: cocktail.strIngredient6,
            strDrinkThumb: cocktail.strDrinkThumb
         });  
    } catch (error) {
        console.log(error.response ? error.response.data : error.message);
        res.status(500).send("Something went wrong with the API call.");
    }
});

app.listen(port, () => {
    console.log(`Server is listening in port ${port} `)
});