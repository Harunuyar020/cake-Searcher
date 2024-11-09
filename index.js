'use strict';

const cakeRecipes = require("./cake-recipes.json");

// Question 1: Create a function that returns all authors of a given recipe list. Use the .forEach method. The function takes recipes, such as cakeRecipes, as arguments and returns a list of unique authors. This means that each author can only be found once in the returned list. 

function getUniqueAuthors(recipes) {
const uniqueAuthors = [];

recipes.forEach(recipe => {
const author = recipe.author;
      
if (!uniqueAuthors.includes(author)) {
uniqueAuthors.push(author);
 }
});
 return uniqueAuthors;
}

// Question 2 : Log this list to the console
console.log(getUniqueAuthors(cakeRecipes));


// Question 3: Create a function that logs the name of each recipe. As input, it takes in a list of recipes with the same format as cakeRecipes. Use object destructuring in this function. If there are no recipes found in the input, then log that there are no recipes found.

function logRecipeNames(recipes) {

if (recipes.length === 0) {
console.log("No recipes found");
return;
}

recipes.forEach(({ name }) => {
 console.log(name);
});
}

logRecipeNames(cakeRecipes);


// Question 4 : Now, create a function that returns all recipes of a given author. Use the .filter method. The function takes recipes and author (string) as arguments and returns all recipes from the given author. 

function getRecipesByAuthor(recipes, author) {
 return recipes.filter(recipe => recipe.author === author);
}


const authorRecipes = getRecipesByAuthor(cakeRecipes, "Author Name");

console.log(authorRecipes);

// Question 5 : Log the names of these recipes to the console using the print function you just created.

function logRecipeNames(recipes) {
if (recipes.length === 0) {
        
console.log("No recipes found");
 return;
}

recipes.forEach(({ name }) => {
 console.log(name);
 });
}

function getRecipesByAuthor(recipes, author) {
    return recipes.filter(recipe => recipe.author === author);
}

// Question 6 : Create a function that returns a list of recipes that contain a given ingredient. The function takes a list of recipes as input and an ingredient as a string. Use the .filter() method to filter the recipes and the .some() method to check if the ingredient list contains the given ingredient (input). 

function getRecipesByIngredient(recipes, ingredient) {
return recipes.filter(recipe => 
 recipe.ingredients.some(ing => ing.toLowerCase() === ingredient.toLowerCase())
);
}


const ingredientRecipes = getRecipesByIngredient(cakeRecipes, "ingredientName");

logRecipeNames(ingredientRecipes);

// Question 7 : Log the names of the found recipes that contain a specific ingredient using your print function. For example, when you give the cakeRecipes list as input and “140g caster sugar” it should return: Christmas pud cupcakes, Baby buttermilk pancakes with sticky bananas & Brazils, Fruit-filled clementine cake. 


function logRecipeNames(recipes) {
if (recipes.length === 0) {

console.log("No recipes found");
return;
}

recipes.forEach(({ name }) => {

  console.log(name);
});
}

function getRecipesByAuthor(recipes, author) {
 
return recipes.filter(recipe => recipe.author === author);
}

function getRecipesByIngredient(recipes, ingredient) {
    
return recipes.filter(recipe => 
recipe.ingredients.some(ing => ing.toLowerCase() === ingredient.toLowerCase())
);
}

// Question 8 : Now, create a function that takes a list of recipes and a name (string) as input. The function returns a single recipe that matches the given name. Use the .find() and .includes() method. 


function logRecipeNames(recipes) {
if (recipes.length === 0) {
     
console.log("No recipes found");
return;
}

recipes.forEach(({ name }) => {
console.log(name);
});
}

function getRecipesByAuthor(recipes, author) {

return recipes.filter(recipe => recipe.author === author);

}

function getRecipesByIngredient(recipes, ingredient) {

return recipes.filter(recipe => 
recipe.ingredients.some(ing => ing.toLowerCase() === ingredient.toLowerCase())
);
}

function getRecipeByName(recipes, name) {

return recipes.find(recipe => recipe.name.toLowerCase().includes(name.toLowerCase()));
}


// Question 9 : Log the recipe into the console.

const recipeName = "Christmas cake"; 
const foundRecipe = getRecipeByName(cakeRecipes, recipeName);

if (foundRecipe) {
    console.log(`Found recipe:`, foundRecipe);
} else {
    console.log("No recipe found with that name.");
}

// Question 10 : Finally, create a function that returns all ingredients of a given recipe list into a single array. You can use this function, for example, when you want to create a grocery list. Use the .reduce() method to flatten the recipe array. 

function logRecipeNames(recipes) {
if (recipes.length === 0) {
      
console.log("No recipes found");
return;
}

recipes.forEach(({ name }) => {
    
console.log(name);
});
}


function getRecipesByAuthor(recipes, author) {

return recipes.filter(recipe => recipe.author === author);

}

function getRecipesByIngredient(recipes, ingredient) {

return recipes.filter(recipe => 
recipe.ingredients.some(ing => ing.toLowerCase() === ingredient.toLowerCase())

);
}

function getRecipeByName(recipes, name) {

return recipes.find(recipe => recipe.name.toLowerCase().includes(name.toLowerCase()));
}

function getAllIngredients(recipes) 
{

return recipes.reduce((acc, recipe) => 
{
return acc.concat(recipe.ingredients);
    }, 
[]); 
}


// Question 11 : Also log the output of the above function into the console. As input, we recommend using a shorter array than cakeRecipes. For example, you can use the list of recipes of a given author from one of the previous made functions.

function logRecipeNames(recipes) {

if (recipes.length === 0) {

console.log("No recipes found");
return;
}

recipes.forEach(({ name }) => 
{

console.log(name);
});

}

function getRecipesByAuthor(recipes, author) {
    
return recipes.filter(recipe => recipe.author === author);
}

function getRecipesByIngredient(recipes, ingredient) {

return recipes.filter(recipe => 

  recipe.ingredients.some(ing => ing.toLowerCase() === ingredient.toLowerCase())
);}

function getRecipeByName(recipes, name) {
  
return recipes.find(recipe => recipe.name.toLowerCase().includes(name.toLowerCase()));
}

function getAllIngredients(recipes) {

return recipes.reduce((acc, recipe) => {      
return acc.concat(recipe.ingredients);
}, 
[]); 
}




// 1ste Requirement :


function getUniqueAuthors(recipes) {

const authors = [];
recipes.forEach(recipe => {
        
if (!authors.includes(recipe.author)) 
{     
authors.push(recipe.author);
}
 
});
 return authors;
}
 

// 2de requirements

function getUniqueAuthors(recipes) {
  
const authors = [];
recipes.forEach(recipe => {

if (!authors.includes(recipe.author)) 
{
authors.push(recipe.author);
}
});
return authors;
}


const uniqueAuthors = getUniqueAuthors(cakeRecipes);
console.log("Unique authors:", uniqueAuthors);


// voor de rest moet het wel kloppen als het goed is :D


// Part 2

const displayMenu = () => {
  console.log("\nRecipe Management System Menu:");
  console.log("1. Show All Authors");
  console.log("2. Show Recipe names by Author");
  console.log("3. Show Recipe names by Ingredient");
  console.log("4. Get Recipe by Name");
  console.log("5. Get All Ingredients of Saved Recipes");
  console.log("0. Exit");
  const choice = prompt("Enter a number (1-5) or 0 to exit: ");
  return parseInt(choice);
}


let choice;

do {
  choice = displayMenu();

  switch (choice) {
    case 1:

      break;
    case 2:

      break;
    case 3:

      break;
    case 4:

        break;
    case 5:

      break;
    case 0:
      console.log("Exiting...");
      break;
    default:
      console.log("Invalid input. Please enter a number between 0 and 5.");
  }
} while (choice !== 0);