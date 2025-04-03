const GITHUB_ACCESS_TOKEN = '';

function loadNavigation() {
    fetch('nav.html').then(res => res.text()).then(data => {
        const body = document.querySelector('body');
        body.insertAdjacentHTML('afterbegin', data);
    }).catch(err => console.error(err));
}

loadNavigation();