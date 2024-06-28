// Parallax Effect
document.addEventListener('scroll', function () {
    const parallaxElements = document.querySelectorAll('.ui-parallax');
    const scrollPosition = window.pageYOffset;

    parallaxElements.forEach((element, index) => {
        const depth = 0.5 * (index + 1);
        const translateY = scrollPosition * depth;
        const scale = 1 + scrollPosition / 1000;

        element.style.transform = `translateY(${translateY}px) scale(${scale})`;
    });
});

// Shuffle Team Functionality
const teamMembers = [
    { name: 'Erik', role: 'Intern', image: 'images/intern.png' },
    { name: 'April', role: 'Strategist', image: 'images/strat.png' },
    { name: 'Harper', role: 'Developer', image: 'images/dev.png' },
    { name: 'Joe', role: 'Designer', image: 'images/design.png' }
];

function shuffleTeam() {
    const shuffled = teamMembers.sort(() => Math.random() - 0.5);
    const teamGrid = document.querySelector('.template-home_6_cards-grid');
    teamGrid.innerHTML = '';

    shuffled.forEach(member => {
        const listItem = document.createElement('li');
        listItem.className = 'template-home_6_cards-item';

        listItem.innerHTML = `
            <button class="template-home_6_cards-pos">
                <div class="template-home_6_cards-front">
                    <div class="template-home_6_cards-image">
                        <img src="${member.image}" alt="${member.role}" loading="lazy" width="546" height="758">
                    </div>
                    <div class="template-home_6_cards-plate">
                        <p>${member.name}</p>
                        <p>${member.role}</p>
                    </div>
                </div>
            </button>
        `;

        teamGrid.appendChild(listItem);
    });
}

// Card Carousel
const carousel = document.querySelector('.part-card-spread_items');
let items = Array.from(carousel.children);
let currentIndex = 0;

function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.remove('--active', 'part-card-spread_item-leave-active', 'part-card-spread_item-enter-active', 'part-card-spread_item-leave-to', 'part-card-spread_item-enter-to');
        if (index === currentIndex) {
            item.classList.add('--active');
        } else if (index === (currentIndex + 1) % items.length) {
            item.classList.add('part-card-spread_item-enter-active', 'part-card-spread_item-enter-to');
        } else if (index === (currentIndex - 1 + items.length) % items.length) {
            item.classList.add('part-card-spread_item-leave-active', 'part-card-spread_item-leave-to');
        }
    });
}

function moveNext() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}

setInterval(moveNext, 2000);

updateCarousel();
