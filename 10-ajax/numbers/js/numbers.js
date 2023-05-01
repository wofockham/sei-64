const fetchFact = function () {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return;
        }

        // Convert your string into an actual JS object
        const data = JSON.parse( xhr.responseText );

        const p = document.createElement('p');
        p.innerText = data.text;
        document.body.appendChild(p);
    };
    
    xhr.open('GET', 'http://numbersapi.com/random/trivia?json');
    xhr.send(); // this is asynchronous
};

document.getElementById('fetch').addEventListener('click', fetchFact);
fetchFact(); // First fact for free