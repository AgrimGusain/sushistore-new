// Import images as relative image paths won't work with Vite/Vercel.
import check from '../assets/check.svg';
import star from '../assets/star.svg';
import sushi12 from '../assets/sushi-12.png';
import sushi11 from '../assets/sushi-11.png';
import sushi10 from '../assets/sushi-10.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

// Init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

// Sushi categories
const trendingSushis = [
    'Make Sushi',
    'Nigiri Sushi',
    'Oshizushi',
    'Temaki Sushi',
    'Uramaki Sushi',
    'Inari Sushi'
];

const trendingDrinks = [
    'Oruncha',
    'Ofukucha',
    'Sakura Tea',
    'Kombu-cha',
    'Aojiru',
    'Mugicha',
];

// Sushi Cards Data
const cards = [
    {
        imgSrc: sushi12,
        alt: 'sushi-12',
        title: 'Chezu Sushi',
        rating: '4.8',
        price: '$21.00',
    },
    {
        imgSrc: sushi11,
        alt: 'sushi-11',
        title: 'Originale Sushi',
        rating: '4.8',
        price: '$21.00',
        active: true,
    },
    {
        imgSrc: sushi10,
        alt: 'sushi-10',
        title: 'Ramen Legendo',
        rating: '4.8',
        price: '$21.00',
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.popular-foods__filter-btn');
    const foodCards = document.querySelectorAll('.popular-foods__card');

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons & add to clicked one
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Get selected category
            const category = button.textContent.trim();

            foodCards.forEach((card, index) => {
                card.classList.remove("rotating", "hidden");

                // Add rotation effect to the cards
                if (category === "All" || card.textContent.includes(category)) {
                    setTimeout(() => {
                        card.classList.add("rotating");
                        card.style.display = "flex";
                    }, index * 0);
                } else {
                    card.classList.add("hidden");
                    setTimeout(() => {
                        card.style.display = "none";
                    }, 0);
                }
            });
        });
    });
});
