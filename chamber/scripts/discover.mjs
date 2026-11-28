import { places } from "../data/interest.mjs";

const show = document.querySelector("#allplaces");

function displayItems(places) {
    places.forEach((x, index) => {
        const thecard = document.createElement('section');
        thecard.className = `discover-card card${index + 1}`;

        const thetitle = document.createElement('h2');
        const thefig = document.createElement('figure');
        const thephoto = document.createElement('img');
        const theaddress = document.createElement('address');
        const thedesc = document.createElement('p');
        const learn = document.createElement('button');

        thetitle.textContent = x.name;
        theaddress.textContent = x.address;
        thedesc.textContent = x.description;

        thephoto.src = x.photo_url;
        thephoto.alt = x.name;
        thephoto.setAttribute('loading', 'lazy');
        thephoto.setAttribute('width', '300');
        thephoto.setAttribute('height', '200');

        learn.textContent = "Learn more";
        learn.type = "button";

        thefig.appendChild(thephoto);

        thecard.appendChild(thetitle);
        thecard.appendChild(thefig);
        thecard.appendChild(theaddress);
        thecard.appendChild(thedesc);
        thecard.appendChild(learn);

        show.appendChild(thecard);
    });
}

displayItems(places);
