const visitingCard = document.querySelector('.card');
const zoomedCard = document.getElementById('zoomed-card');

function like() {
    const heartStyling = document.getElementById('like-button');

    heartStyling.style.color = 'red';
    heartStyling.style.transform = 'scale(1.2)';
    heartStyling.style.transitionTimingFunction = 'cubic-bezier(0.6, 0.6, 0.6, 1.0, 1.0, 1.2)'
    setTimeout(()=>{
        heartStyling.style.color = 'rgba(0, 0, 0, 0.087)'; 
        heartStyling.style.transform = 'scale(1)';
        heartStyling.style.transition = 'ease-out 0.3s';
    },600);
}

function exit() {
    zoomedCard.style.transform = 'scale(0)';
    zoomedCard.style.transition = 'ease-out 0.05s';
}

function openProfile() {
    zoomedCard.style.transform = 'scale(1)';
    populateCard();    
}

function populateCard() {
    const imageContainerSource = visitingCard.querySelector('img').getAttribute('src');
    const nameContainer = visitingCard.querySelector('h5').innerText;

    zoomedCard.querySelector('img').setAttribute('src', imageContainerSource);
    zoomedCard.querySelector('h2').innerText = nameContainer;
}

