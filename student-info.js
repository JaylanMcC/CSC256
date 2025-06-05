document.addEventListener("DOMContentLoaded", () => {
    const myDetails = {
        fullName: "Jaylan McCoy",
        major: "Network Security",
        email: "jaymccoy@uat.edu",
        graduation: "May 2026",
        favoriteThings: "Tech gadgets, gaming, and cybersecurity challenges"
    };

    const container = document.getElementById("info-container");

    container.innerHTML = `
        <ul>
            <li><strong>Name:</strong> ${myDetails.fullName}</li>
            <li><strong>Major:</strong> ${myDetails.major}</li>
            <li><strong>Email:</strong> <a href="mailto:${myDetails.email}">${myDetails.email}</a></li>
            <li><strong>Expected Graduation:</strong> ${myDetails.graduation}</li>
            <li><strong>Fun Facts:</strong> ${myDetails.favoriteThings}</li>
        </ul>
    `;
});
