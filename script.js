let countryInp = document.getElementById("country-inp");
let butt = document.getElementById("search");
let res = document.getElementById("result");
butt.addEventListener("click", () => {
  let val = countryInp.value;
  let url = `https://restcountries.com/v3.1/name/${val}?fullText=true`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data[0]);
      console.log(data[0].capital[0]);
      console.log(Object.keys(data[0].currencies)[0]);
      console.log(data[0].currencies[Object.keys(data[0].currencies)[0]].name);
      console.log(data[0].flags["svg"]);
      console.log(data[0].name.common);
      console.log(data[0].continents[0]);
      console.log(
        Object.values(data[0].languages).toString().split(",").join(", ")
      );
      res.innerHTML = `
            <img src="${data[0].flags["svg"]}">
            <h2>${data[0].name.common}</h2>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Capital:</h4>
                    <span>${data[0].capital[0]}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Continent:</h4>
                    <span>${data[0].continents[0]}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Population:</h4>
                    <span>${data[0].population}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Currency:</h4>
                    <span>${Object.keys(data[0].currencies)[0]}-${
        data[0].currencies[Object.keys(data[0].currencies)[0]].name
      }</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Common Languages:</h4>
                    <span>${Object.values(data[0].languages)
                      .toString()
                      .split(",")
                      .join(", ")}</span>
                </div>
            </div>
      
        `;
    })
    .catch(() => {
      if (val.length == 0) {
        res.innerHTML = `<h3>The input field cannot be empty</h3>`;
      } else {
        res.innerHTML = `<h3>Please enter a valid country name</h3>`;
      }
    });
});
