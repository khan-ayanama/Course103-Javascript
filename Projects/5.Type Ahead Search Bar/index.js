const input = document.querySelector("input[name='search-bar']");
console.log(input);

const endpoint = "https://countriesnow.space/api/v0.1/countries";

const BASE_URL = "https://countriesnow.space/api/v0.1/countries";

let getCountries = async () => {
  const response = await fetch(`${BASE_URL}`).then((response) =>
    response.json()
  );
  const { data } = response;

  data.forEach((country) => {
    console.log(country.cities); // {"country": "Afghanistan", "cities": [ "Herat", "Kabul", "Kandahar", "Molah", ...]}
  });
};

getCountries();
