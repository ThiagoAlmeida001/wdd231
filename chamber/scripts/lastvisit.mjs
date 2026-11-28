const visitMessage = document.getElementById('last-visit');
const lastVisitTime = localStorage.getItem('lastVisit');
const now = Date.now();

if (lastVisitTime) {
    const difference = now - Number(lastVisitTime);
    const dayDiff = Math.floor(difference / (1000 * 60 * 60 * 24));

    if (dayDiff < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else if (dayDiff === 1) {
        visitMessage.textContent = "You last visited 1 day ago.";
    } else {
        visitMessage.textContent = `You last visited ${dayDiff} days ago.`;
    }
} else {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
}

localStorage.setItem('lastVisit', now);
