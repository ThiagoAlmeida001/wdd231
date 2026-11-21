const currentUrl = window.location.href;
const everything = currentUrl.split('?');

if (everything.length > 1) {
    let formData = everything[1].split('&');

    function show(cup) {
        let result = '';
        formData.forEach((element) => {
            if (element.startsWith(cup + '=')) {
                result = decodeURIComponent(element.split('=')[1].replace(/\+/g, ' '));
            }
        });
        return result;
    }

    const showInfo = document.querySelector('#results');
    showInfo.innerHTML = `
        <h2>Application Summary</h2>
        <p><strong>Applicant Name:</strong> ${show('firstName')} ${show('lastName')}</p>
        <p><strong>Email:</strong> ${show('email')}</p>
        <p><strong>Mobile Phone:</strong> ${show('phone')}</p>
        <p><strong>Business / Organization:</strong> ${show('organizationName')}</p>
        <p><strong>Submitted On:</strong> ${show('timestamp')}</p>
    `;
}
