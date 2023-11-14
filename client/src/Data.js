import fluffyCoatImage from './img/winterjackert.jpg';
import beigeHoodieImage from './img/beigehoodie.jpg';
import piecewhiteImage from './img/3piecewhite.jpg';
import bombaJacketImage from './img/bombajacket.jpg';
import corduroyImage from './img/corduroy.jpg';
import goldHeelsImage from './img/goldheels.jpg';
import herasweaterImage from './img/herasweater.jpg';
import greyTopImage from './img/greytop.jpg';
import signatureImage from './img/signature.jpg';
import leatherJacketImage from './img/leatherjacket.jpg';
import whitePantsImage from './img/whitepants.jpg';
import redPieceImage from './img/redpiece.jpg';
import stripeBlouseImage from './img/stripeblouse.jpg';
import kingTeeImage from './img/kingtee.jpg';
import sparckleHeelsImage from './img/sparkleheels.jpg';
import denimPieceImage from './img/deminpiece.jpg';
import strapHeelsImage from './img/strapheels.jpg';
import yellowHoodieImage from './img/yellowhoodie.jpg';
import stripeShirtImage from './img/stripetshirt.jpg';
import summerDressImage from './img/greysummerdress.jpg';
import twoPieceImage from './img/2piece.jpg';

const products = [
    {
        id: 1,
        image: fluffyCoatImage,
        name: 'Fluffy Winter Jacket',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        price: 800.00,
        category: 'collaboration',
    },
    {
        id: 2,
        image: beigeHoodieImage,
        name: 'Beige Hoodie',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        price: 550.00,
        category: 'collaboration',
    },
    {
        id: 3,
        image: piecewhiteImage,
        name: 'White 3 Piece',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        price: 380.00,
        category: 'bestSellers',
    },
    {
        id: 4,
        image: bombaJacketImage,
        name: 'Yellow Bomba Jacket',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        price: 600.00,
        category: 'newArrivals',
    },
    {
        id: 5,
        image: corduroyImage,
        name: 'Brown Corduroy Jumpsuit',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        price: 760.00,
        category: 'bestSellers',
    },
    {
        id: 6,
        image: goldHeelsImage,
        name: 'Gold Block Heels',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        price: 450.00,
        category: 'bestSellers',
    },
    {
        id: 7,
        image: herasweaterImage,
        name: 'Hera Oversized T-shirt',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        price: 500.00,
        category: 'bestSellers',
    },
    {
        id: 8,
        image: greyTopImage,
        name: 'Grey Top',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        price: 250.00,
        category: 'newArrivals',
    },
    {
        id: 9,
        image: signatureImage,
        name: 'Signature Blazer',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        price: 150.00,
        category: 'bestSellers',
    },
    {
        id: 10,
        image: leatherJacketImage,
        name: 'Leather Jacket',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        price: 880.00,
        category: 'collaboration',
    },
    {
        id: 11,
        image: whitePantsImage,
        name: 'White Vintage Pants',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        price: 600.00,
        category: 'collaboration',
    },
    {
        id: 12,
        image: redPieceImage,
        name: ' 2 Piece Suit - Red',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        price: 1000.00,
        category: 'newArrivals',
    },
    {
        id: 13,
        image: stripeBlouseImage,
        name: 'Summer Blouse',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        price: 300.00,
        category: 'bestSellers',
    },
    {
        id: 14,
        image: kingTeeImage,
        name: 'King T-Shirt',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        price: 150.00,
        category: 'bestSellers',
    },
    {
        id: 15,
        image: sparckleHeelsImage,
        name: 'Heels With Sparckles',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        price: 1500.00,
        category: 'collaboration',
    },
    {
        id: 16,
        image: denimPieceImage,
        name: 'Denim Puffy Jacket and Pants',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        price: 1650.00,
        category: 'newArrivals',
    },
    {
        id: 17,
        image: strapHeelsImage,
        name: 'Black Strapped Heels',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        price: 1900.00,
        category: 'collaboration',
    },
    {
        id: 18,
        image: yellowHoodieImage,
        name: 'Yellow Hoodie',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        price: 790.00,
        category: 'newArrivals',
    },
    {
        id: 19,
        image: stripeShirtImage,
        name: 'Stripe T-Shirt',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        price: 250.00,
        category: 'collaboration',
    },
    {
        id: 20,
        image: summerDressImage,
        name: 'Grey Summer Dress',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        price: 470.00,
        category: 'newArrivals',
    },
    {
        id: 21,
        image: twoPieceImage,
        name: 'Crop & Long Skirt ',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        price: 860.00,
        category: 'collaboration',
    },
];

export default products;