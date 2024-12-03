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
            i1 : cocktail.strIngredient1,
            i2 : cocktail.strIngredient2,
            i3 : cocktail.strIngredient3,
            i4 : cocktail.strIngredient4,
            i5 : cocktail.strIngredient5,
            i6: cocktail.strIngredient6,
            strDrinkThumb: cocktail.strDrinkThumb,
            measure1 : cocktail.strMeasure1,
            measure2 : cocktail.strMeasure2,
            measure3 : cocktail.strMeasure3,
            measure4 : cocktail.strMeasure4,
            measure5 : cocktail.strMeasure5,
            measure6 : cocktail.strMeasure6 ,
         });  
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong while rendering the page.");
    }
});

app.listen(port, () => {
    console.log(`Server is listening in port ${port} `)
});