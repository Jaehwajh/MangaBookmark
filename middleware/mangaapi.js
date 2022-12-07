const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://manga-scrapper.p.rapidapi.com/search/solo/',
  headers: {
    'X-RapidAPI-Key': '082fceb990mshd8af457ea684e7ep12d2c8jsnf945214e1c52',
    'X-RapidAPI-Host': 'manga-scrapper.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});