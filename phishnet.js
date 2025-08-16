let score = 0;
let currentEmail = {};

let emails = [
  {
    sender: "support@paypa1.com",
    subject: "Verify your account now",
    body: "We noticed something wrong. Login here immediately.",
    link: "http://fake-paypal.com",
    phish: true
  },
  {
    sender: "updates@microsoft.com",
    subject: "New Security Update",
    body: "Download the patch from Microsoft.",
    link: "http://microsoft.com/security",
    phish: false
  },
  {
    sender: "hr@company.com",
    subject: "Benefits Enrollment",
    body: "Complete your form before Friday.",
    link: "http://company.com/benefits",
    phish: false
  },
  {
    sender: "it@companny.com",
    subject: "Password Reset Needed",
    body: "Reset your password now or lose access.",
    link: "http://reset-passw0rd.com",
    phish: true
  }
];

function newEmail() {
  let rand = Math.floor(Math.random() * emails.length);
  currentEmail = emails[rand];
  document.getElementById("email-box").innerHTML =
    "<p><b>From:</b> " + currentEmail.sender + "</p>" +
    "<p><b>Subject:</b> " + currentEmail.subject + "</p>" +
    "<p>" + currentEmail.body + "</p>" +
    "<p><a href='#'>" + currentEmail.link + "</a></p>";
  document.getElementById("feedback").innerText = "";
}

function check(choice) {
  if ((choice === "phish" && currentEmail.phish) ||
      (choice === "safe" && !currentEmail.phish)) {
    score++;
    document.getElementById("feedback").innerText = "Correct!";
  } else {
    document.getElementById("feedback").innerText = "Wrong!";
  }
  document.getElementById("score").innerText = score;
  setTimeout(newEmail, 1200);
}

document.getElementById("safeBtn").onclick = function() { check("safe"); };
document.getElementById("phishBtn").onclick = function() { check("phish"); };

newEmail();
