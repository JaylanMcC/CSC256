// Get reference to main content area
const main = document.getElementById("mainContent");

// Create the section and heading
const section = document.createElement("section");
const heading = document.createElement("h2");
heading.textContent = "Enter Hero Info";
section.appendChild(heading);

// Create the form
const form = document.createElement("form");
form.id = "frmHero";

// Helper to create label/input pairs
function createInput(labelText, id, type) {
  const label = document.createElement("label");
  label.setAttribute("for", id);
  label.textContent = labelText;

  const input = document.createElement("input");
  input.type = type;
  input.id = id;
  input.name = id;

  form.appendChild(label);
  form.appendChild(document.createElement("br"));
  form.appendChild(input);
  form.appendChild(document.createElement("br"));
  form.appendChild(document.createElement("br"));
}

// Add input fields
createInput("Username:", "txtUsername", "text");
createInput("Weapons:", "txtWeapons", "text");
createInput("Health/Damage:", "numHealth", "number");
createInput("Point Total:", "numPoints", "number");

// Submit button
const submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.textContent = "Start Game";
form.appendChild(submitBtn);

// Add form to section
section.appendChild(form);
main.appendChild(section);

// Output area
const outputSection = document.createElement("section");
const outputHeading = document.createElement("h2");
outputHeading.textContent = "Player Info";

const outputArea = document.createElement("textarea");
outputArea.id = "outputArea";
outputArea.rows = 6;
outputArea.cols = 40;
outputArea.readOnly = true;

outputSection.appendChild(outputHeading);
outputSection.appendChild(outputArea);
main.appendChild(outputSection);

// Form submit handler
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form refresh

  const username = document.getElementById("txtUsername").value;
  const weapons = document.getElementById("txtWeapons").value;
  const health = document.getElementById("numHealth").value;
  const points = document.getElementById("numPoints").value;

  const output = 
    `User Name:\t${username}\n` +
    `Weapons:\t${weapons}\n` +
    `Health/Damage:\t${health}\n` +
    `Point Total:\t${points}`;

  outputArea.value = output;
});
