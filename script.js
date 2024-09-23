var scroller = document.querySelector('.scroller');
var dic = 1; // 1 for next, -1 for previous
var currentCard = 1;

function scrollCards() {
    let currentCardLocal = currentCard;

    // Update the current card based on the direction
    if (dic === 1) {
        currentCardLocal += 1;  // Move to the next card
    } else {
        currentCardLocal -= 1;  // Move to the previous card
    }

    const cards = document.querySelectorAll('.scroller .timeline-container .timeline-card-container');
    const count = cards.length+1; // Because coders starts counting at 0, right??:D
    const sWidth = scroller.offsetWidth;

    // Calculate the maximum scroll position
    const maxScroll = scroller.scrollWidth - sWidth;

    // Ensure currentCardLocal stays within valid bounds
    if (currentCardLocal >= 1 && currentCardLocal <= count-1) {
        const targetDiv = cards[currentCardLocal - 1];

        // Remove "current" class from all cards
        cards.forEach(card => card.classList.remove('current'));
        
        // Add "current" class to the currently selected card
        targetDiv.classList.add('current');

        // Calculate the scroll position for RTL
        const scrollTo = targetDiv.offsetLeft;

        // Check if we are at the boundaries
        if (currentCardLocal === 1) {
            // If at the first card
            scroller.scrollTo({ left: 0, behavior: 'smooth' });
        } else if (currentCardLocal === count) {
            // If at the last card
            scroller.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
            // Normal scroll within bounds
            scroller.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }

        // Update the currentCard only if we haven't reached the boundaries
        currentCard = currentCardLocal;
    } else if (currentCardLocal < 1) {
        // Prevent going below the first card
        currentCard = 1; // Stay at the first card
    } else if (currentCardLocal > count) {
        // Prevent going beyond the last card
        currentCard = count; // Stay at the last card
    }
}

function slideLeft() {
    if (htmlElement.getAttribute('dir') === 'rtl') {
        dic = 1;
    } else {
        dic = 0;
    }
    scrollCards();
}

function slideRight() {
    if (htmlElement.getAttribute('dir') === 'rtl') {
        dic = 0;
    } else {
        dic = 1;
    }
    scrollCards();
}

function generateCards() {
    // Fill up with lorem ipsum data
    const cardData = [
        { picture: "img/011.jpg", title: "Lorem ipsum dolor sit amet", description: "In rutrum sem non tortor vehicula, nec tristique arcu ornare. Mauris mollis scelerisque sapien, sit amet lacinia velit commodo non.", month: "July", year: "2025" },
        { picture: "img/010.jpg", title: "Lorem ipsum dolor sit amet", description: "In rutrum sem non tortor vehicula, nec tristique arcu ornare. Mauris mollis scelerisque sapien, sit amet lacinia velit commodo non.", month: "May", year: "2024" },
        { picture: "img/009.jpg", title: "Lorem ipsum dolor sit amet", description: "In rutrum sem non tortor vehicula, nec tristique arcu ornare. Mauris mollis scelerisque sapien, sit amet lacinia velit commodo non.", month: "March", year: "2023" },
        { picture: "img/008.jpg", title: "Lorem ipsum dolor sit amet", description: "In rutrum sem non tortor vehicula, nec tristique arcu ornare. Mauris mollis scelerisque sapien, sit amet lacinia velit commodo non.", month: "August", year: "2022" },
        { picture: "img/007.jpg", title: "Lorem ipsum dolor sit amet", description: "In rutrum sem non tortor vehicula, nec tristique arcu ornare. Mauris mollis scelerisque sapien, sit amet lacinia velit commodo non.", month: "May", year: "2021" },
        { picture: "img/006.jpg", title: "Lorem ipsum dolor sit amet", description: "In rutrum sem non tortor vehicula, nec tristique arcu ornare. Mauris mollis scelerisque sapien, sit amet lacinia velit commodo non.", month: "March", year: "2020" },
        { picture: "img/005.jpg", title: "Lorem ipsum dolor sit amet", description: "In rutrum sem non tortor vehicula, nec tristique arcu ornare. Mauris mollis scelerisque sapien, sit amet lacinia velit commodo non.", month: "April", year: "2019" },
        { picture: "img/004.jpg", title: "Lorem ipsum dolor sit amet", description: "In rutrum sem non tortor vehicula, nec tristique arcu ornare. Mauris mollis scelerisque sapien, sit amet lacinia velit commodo non.", month: "February", year: "2018" },
        { picture: "img/003.jpg", title: "Lorem ipsum dolor sit amet", description: "In rutrum sem non tortor vehicula, nec tristique arcu ornare. Mauris mollis scelerisque sapien, sit amet lacinia velit commodo non.", month: "December", year: "2017" },
        { picture: "img/002.jpg", title: "Lorem ipsum dolor sit amet", description: "In rutrum sem non tortor vehicula, nec tristique arcu ornare. Mauris mollis scelerisque sapien, sit amet lacinia velit commodo non.", month: "March", year: "2016" },
        { picture: "img/001.jpg", title: "Lorem ipsum dolor sit amet", description: "In rutrum sem non tortor vehicula, nec tristique arcu ornare. Mauris mollis scelerisque sapien, sit amet lacinia velit commodo non.", month: "January", year: "2015" }
    ];

    // Render the cards
    cardData.forEach(cardData => {
        document.getElementById("timelinedata").innerHTML += `
        <div class="timeline-card-container">
            <div class="timeline-card d-flex flex-column bg-white p-3 rounded-3 ms-2 me-2">
                <img src="`+cardData.picture+`" alt="Timeline Image"/>
                <h2 class="fs-6">`+cardData.title+`</h2>
                <p class="fs-6 mb-auto">`+cardData.description+`</p>
                <a href="link" class="blue-link rtl-link rtl-flex-content">
                    <span class="view-more">View More</span>
                    <i class="bi bi-arrow-left"></i>
                </a>
            </div>
            <div class="vertical-line"></div>
            <div class="card-date text-center mx-auto px-2 position-relative z-index-1">
                <p class="fw-medium fs-5 lh-1 m-0">`+cardData.month+`</p>
                <p class="fw-medium fs-3 lh-1 m-0">`+cardData.year+`</p>
            </div>
            <div class="horizontal-line-container">
                <div class="horizontal-line"></div>
                <div class="horizontal-line"></div>
            </div>
        </div>
    `;
    });

    // Add the "current" class to the first element
    var firstCard = document.querySelector('#timelinedata .timeline-card-container');

    // Check if the first card exists
    if (firstCard) {
        firstCard.classList.add('current');
    }
}

// Get some elements for the language changer
const htmlElement = document.documentElement;
const styleElement = document.getElementById('dynamic-styles');

// Define the styles for rtl and ltr
const rtlStyles = `
    .rtl-link {
        margin-left: auto;
    }
    .rtl-flex-content {
        flex-direction: initial;
    }

    .rtl-title {
        margin-left: auto;
    }
`;

const ltrStyles = `
    .rtl-link {
        margin-right: auto;
        margin-left: 0; 
    }
    .rtl-flex-content {
        flex-direction: row-reverse; 
    }

    .rtl-title {
        margin-right: auto;
        margin-left: 0;
    }

    .blue-title-ribbon {
        margin-left: 0;
        margin-right: 5px;
    }

    .timeline-card-container:first-child .horizontal-line-container .horizontal-line:first-of-type {
        display: block;
    }

    .timeline-card-container:first-child .horizontal-line-container .horizontal-line:nth-last-child(1) {
        display: none;
        margin-left: auto;
    }

    .change-language {
        margin-right: auto;
        margin-left: 0;
    }
`;

// Change language on some elements and set the styles
function changeLang() {
    const elements = document.querySelectorAll('.view-more');
    if (htmlElement.getAttribute('dir') === 'rtl') {
        styleElement.innerHTML = ltrStyles;
        htmlElement.setAttribute('dir', 'ltr');
        document.getElementById("header_title").innerHTML = "A pénzügyi szektor fejlődésének ütemezése";
        document.getElementById("lang_button").innerHTML = "Nyelv változtatása";
        document.getElementById("view_all").innerHTML = "Összes mutatása";
        elements.forEach(element => {
            element.innerHTML = 'Mutass többet';
        });
    } else {
        styleElement.innerHTML = rtlStyles;
        htmlElement.setAttribute('dir', 'rtl');
        document.getElementById("header_title").innerHTML = "Financial sector development timeline";
        document.getElementById("lang_button").innerHTML = "Change language";
        document.getElementById("view_all").innerHTML = "View all";
        elements.forEach(element => {
            element.innerHTML = 'View More';
        });
    }
}

let startX;

const swipeArea = document.getElementById('scroller');

// Event listener for touch start
swipeArea.addEventListener('touchstart', (e) => {
    // Store the initial touch point (X coordinate)
    startX = e.touches[0].clientX;
});

// Event listener for touch end
swipeArea.addEventListener('touchend', (e) => {
    // Get the touch end point (X coordinate)
    const endX = e.changedTouches[0].clientX;

    // Calculate the difference in X
    const diffX = startX - endX;

    // Check for swipe direction and threshold
    if (diffX > 50) {
        onSwipeRight();
    } else if (diffX < -50) {
        onSwipeLeft();
    }
});

// Function to call when swiping left
function onSwipeLeft() {
    slideLeft();
}

// Function to call when swiping right
function onSwipeRight() {
    slideRight()
}