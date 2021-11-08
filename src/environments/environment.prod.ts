export const environment = {
  production: true,
  apiURL: {
    "mealCategories": "https://www.themealdb.com/api/json/v1/1/list.php?c=list",
    "randomMeal": "https://www.themealdb.com/api/json/v1/1/random.php",
    "allCategories": "https://www.themealdb.com/api/json/v1/1/categories.php",
    "categoryInfo": "https://www.themealdb.com/api/json/v1/1/filter.php",
    "mealsByCategory": "https://www.themealdb.com/api/json/v1/1/filter.php",
    "mealRecipe": "https://www.themealdb.com/api/json/v1/1/lookup.php",
    "recipeByName": "https://www.themealdb.com/api/json/v1/1/search.php"
  },
  // API de firebase
  firebaseConfig: {
    apiKey: "AIzaSyA4_xGJwaG35XpCfPax27OGo8BtgRgGj3s",
    authDomain: "myfridge-6cf61.firebaseapp.com",
    databaseURL: "https://myfridge-6cf61-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "myfridge-6cf61",
    storageBucket: "myfridge-6cf61.appspot.com",
    messagingSenderId: "685106100859",
    appId: "1:685106100859:web:975a048c1fba7800e580de",
    measurementId: "G-YG1EBSQMGP"
  }
};

