const axios = require("axios");

const options = {
  method: 'GET',
  url: `https://manga-scrapper.p.rapidapi.com/search/${searchMangas}/`,
  headers: {
    'X-RapidAPI-Key': process.env.KEY,
    'X-RapidAPI-Host': process.env.HOST
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});