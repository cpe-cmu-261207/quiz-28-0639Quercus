const pgender = document.getElementById("span-gender-icon");
const userCard = document.getElementById("div-user-card");
const pname = document.getElementById("p-name"); //
const pemail = document.getElementById("p-email"); //
const paddress = document.getElementById("p-address"); //
const random = document.getElementById("btn-random");
const loading = document.getElementById("div-loading-card");

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  const chosen = resp.data.results[0];
  console.log(chosen);

  //userCard.innerHTML = `<img id="img-profile" class="rounded-circle d-block mx-auto" src=${chosen.picture.large} width="128"/>`;

  pname.innerText = chosen.name.first + " " + chosen.name.last;
  pemail.innerText = chosen.email;
  paddress.innerText =
    chosen.location.city +
    " " +
    chosen.location.state +
    " " +
    chosen.location.country +
    " " +
    chosen.location.postcode;

  if (chosen.gender === "male") pgender.innerText = "👨";
  else pgender.innerText = "👩";
}

random.onclick = () => {
  pgender = "";
  pname.innerText = "";
  pemail.innerText = "";
  paddress.innerText = "";
};

callApi();
