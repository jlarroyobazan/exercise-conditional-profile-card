import "../style/index.scss";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: "alesanchezr",
        linkedin: null,
        instagram: null,
        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let yourName = `Name `;
  if (variables.name !== null) {
    yourName = `${variables.name} `;
  }

  let yourLastname = `Lastname`;
  if (variables.lastname !== null) {
    yourLastname = `${variables.lastname} `;
  }

  let yourRole = "Role";
  if (variables.role !== null) {
    yourRole = `${variables.role}`;
  }

  let yourCity = "City, ";
  if (variables.city !== null) {
    yourCity = `${variables.city}, `;
  }

  let yourCountry = "Country";
  if (variables.country !== null) {
    yourCountry = `${variables.country}`;
  }

  let yourPosition = "position-right";
  if (variables.socialMediaPosition !== "position-right") {
    yourPosition = "position-left";
  }

  let yourTwitter = "Twitter";
  if (variables.twitter !== null) {
    yourTwitter = variables.twitter;
  }

  let yourGithub = "Github";
  if (variables.github !== null) {
    yourGithub = variables.github;
  }

  let yourLinkedin = "Linkedin";
  if (variables.linkedin !== null) {
    yourLinkedin = variables.linkedin;
  }

  let yourInstagram = "Instagram";
  if (variables.instagram !== null) {
    yourInstagram = variables.instagram;
  }

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${yourName} ${yourLastname}</h1>
          <h2>${yourRole}</h2>
          <h3>${yourCity} ${yourCountry}</h3>
          <ul class=${yourPosition}>
            <li><a href="https://twitter.com/${yourTwitter}" target="_blank"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/${yourGithub}" target="_blank"><i class="fa fa-github"></i></a></li>
            <li><a href="https://linkedin.com/in/${yourLinkedin}" target="_blank"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${yourInstagram}" target="_blank"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
