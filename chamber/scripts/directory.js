const url = "data/members.json";
const container = document.querySelector("#directory-container");
const gridBtn = document.querySelector("#grid-view-btn");
const listBtn = document.querySelector("#list-view-btn");

async function getMembers() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayMembers(data);
        } else {
            console.error("No se pudo cargar el archivo JSON");
        }
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}

function displayMembers(members) {
    container.innerHTML = ""; 
    
    members.forEach((member) => {
        let card = document.createElement("section");
        card.className = "member-card";

        let levelText = "Member";
        if (member.MEMBERSHIP_LEVEL === 3) levelText = "Gold";
        else if (member.MEMBERSHIP_LEVEL === 2) levelText = "Silver";

        card.innerHTML = `
            <img src="images/${member.IMAGE}.jpg" alt="${member.NAME} Logo" loading="lazy" width="150" height="100">
            <h3>${member.NAME}</h3>
            <p class="address">${member.ADDRESS}</p>
            <p class="phone">${member.PHONE}</p>
            <p class="email">${member.EMAIL}</p>
            <a href="https://${member.WEBSITE}" target="_blank" class="web-link">Visit Website</a>
            <span class="badge ${levelText.toLowerCase()}">${levelText} Member</span>
        `;
        container.appendChild(card);
    });
}

gridBtn.addEventListener("click", () => {
    container.className = "grid-layout";
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
});

listBtn.addEventListener("click", () => {
    container.className = "list-layout";
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
});

getMembers();
