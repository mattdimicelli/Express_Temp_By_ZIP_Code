const h1 = document.querySelector('h1');
const zip = document.querySelector('input[name="zip"]');
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const zipCode = zip.value.trim();
    h1.textContent = 'Loading...';

    async function loadTemp(endpoint) {
        try {
            const response = await fetch(endpoint);
            
            const json = await response.json();
            
            const temperature = json.temperature;
            h1.innerHTML = `It is ${temperature} &#176F in ${zipCode}.`;
        } catch(err) {
            h1.textContent = err;
        }
    }

    loadTemp(`/${zipCode}`);
});
