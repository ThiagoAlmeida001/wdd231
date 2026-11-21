const params = new URLSearchParams(window.location.search);

const showInfo = document.querySelector('#results');

if (showInfo) {
    showInfo.innerHTML = `
        <h2>Application Summary</h2>
        <p><strong>Applicant Name:</strong> ${params.get('firstName') || ''} ${params.get('lastName') || ''}</p>
        <p><strong>Email:</strong> ${params.get('email') || ''}</p>
        <p><strong>Mobile Phone:</strong> ${params.get('phone') || ''}</p>
        <p><strong>Business / Organization:</strong> ${params.get('organizationName') || ''}</p>
        <p><strong>Submitted On:</strong> ${params.get('timestamp') || ''}</p>
    `;
}