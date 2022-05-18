const poolCocktails = [
    {
        name: 'ANDRE BRUT',
        image: 'assets/images/lounge/Andre-brut.jpg',
        price: '10000'
    },
    {
        name: 'ANDRE ROSE',
        image: 'assets/images/lounge/andre-rose.jpg',
        price: '10000'
    },
    {
        name: 'BELAIRE ROSE ',
        image: 'assets/images/lounge/belaire-wine.jpg',
        price: '40000'
    },
    {
        name: 'MOET ROSE',
        image: 'assets/images/lounge/moet-rose.jpg',
        price: '55000'
    },
    {
        name: 'MOET BRUT',
        image: 'assets/images/lounge/moet-brut.jpg',
        price: '40000'
    },
    {
        name: 'FOUR COUSINS SPARKLING',
        image: 'assets/images/lounge/Four-Cousins-Sparkling.jpg',
        price: '6000'
    },
    {
        name: 'VEUVE DU VERNAY',
        image: 'assets/images/lounge/VEUVE-DU-VERNAY.jpg',
        price: '10000'
    },
    {
        name: 'PASCAL ROSE',
        image: 'assets/images/lounge/Pascal-rose.jpg',
        price: '7000'
    },
    {
        name: 'ANDRE MONCATO',
        image: 'assets/images/lounge/Andre-Moncato.jpg',
        price: '7000'
    },
    {
        name: 'BAILEYS DELIGHT BIG',
        image: 'assets/images/lounge/Baileys-Big.jpg',
        price: '7000'
    },
    {
        name: 'BAILEYS BIG',
        image: 'assets/images/lounge/Baileys-Big.jpg',
        price: '10000'
    },
    {
        name: 'BAILEYS DELIGHT SMALL',
        image: 'assets/images/grillkitchen/Icon.jpg',
        price: '2000'
    },
    {
        name: 'COCKTAIL',
        image: 'assets/images/lounge/Cocktail.jpg',
        price: '1500'
    },
    {
        name: 'BLUE COCKTAIL',
        image: 'assets/images/lounge/blue-cocktail.jpg',
        price: '4000'
    },
    {
        name: 'CHAPMAN ALCOHOL',
        image: 'assets/images/lounge/CHAPMAN-ALCOHOL.jpg',
        price: '2000'
    },
    {
        name: 'PRINCESS COLADA',
        image: 'assets/images/lounge/pina-colada.jpg',
        price: '2000'
    },
    {
        name: 'MOJITO PERFECTO',
        image: 'assets/images/lounge/MOJITO-PERFECTO.jpg',
        price: '2500'
    },
    {
        name: 'J AND W COCKTAIL',
        image: 'assets/images/lounge/J-&-W 2.jpg',
        price: '3000'
    },
    {
        name: 'MOCKTAIL',
        image: 'assets/images/grillkitchen/Icon.jpg',
        price: '1500'
    },
    {
        name: 'CHAPMAN',
        image: 'assets/images/lounge/Chapman.jpg',
        price: '1500'
    },
];

const poolBeers = [
    {
        name: 'SNAPP',
        image: 'assets/images/lounge/snapp.jpg',
        price: '400'
    },
    {
        name: 'STAR',
        image: 'assets/images/lounge/star.jpg',
        price: '600'
    },
    {
        name: 'GULDER ',
        image: 'assets/images/lounge/Gulder.jpg',
        price: '600'
    },
    {
        name: 'SMALL STOUT',
        image: 'assets/images/lounge/small-stout.jpg',
        price: '600'
    },
    {
        name: 'TIGER BEER',
        image: 'assets/images/lounge/Tiger.jpg',
        price: '400'
    },
    {
        name: 'STAR RADLER',
        image: 'assets/images/lounge/Star-Radler.jpg',
        price: '500'
    },
    {
        name: 'LITE CASTLE',
        image: 'assets/images/lounge/Lite-Castle.jpg',
        price: '500'
    },
    {
        name: 'TROPHY STOUT',
        image: 'assets/images/grillkitchen/Icon.jpg',
        price: '600'
    },
    {
        name: 'BUDWEIZER BIG',
        image: 'assets/images/lounge/budweizer.jpg',
        price: '800'
    },
    {
        name: 'SMOOTH GUINESS CAN',
        image: 'assets/images/grillkitchen/Icon.jpg',
        price: '600'
    },
    {
        name: 'SMIRNOFF ICE BIG',
        image: 'assets/images/lounge/smirnoff-ice.jpg',
        price: '1000'
    },
    {
        name: 'LEGEND BIG<',
        image: 'assets/images/lounge/Legend.jpg',
        price: '800'
    },
    {
        name: 'TROPHY',
        image: 'assets/images/lounge/Trophy.jpg',
        price: '600'
    },
    {
        name: 'SMOOTH GUINNESS',
        image: 'assets/images/lounge/Guiness-smooth.jpg',
        price: '600'
    },
    {
        name: '33 BEER',
        image: 'assets/images/lounge/33.jpg',
        price: '600'
    },
    {
        name: 'ORIJIN MEDIUM',
        image: 'assets/images/grillkitchen/Icon.jpg',
        price: '500'
    },
    {
        name: 'SMIRNOFF ICE SMALL',
        image: 'assets/images/lounge/smirnoff-ice.jpg',
        price: '600'
    },
    {
        name: 'HEINEKEN',
        image: 'assets/images/lounge/heineken.jpg',
        price: '1000'
    },
    {
        name: 'GOLDBERG',
        image: 'assets/images/lounge/Goldberg.jpg',
        price: '600'
    },
    {
        name: 'ORIJIN BIG',
        image: 'assets/images/lounge/Orijin.jpg',
        price: '800'
    },
    {
        name: 'BIG STOUT ',
        image: 'assets/images/lounge/Big-Stout.jpg',
        price: '1000'
    },
    {
        name: '1960 ROOTZ BIG ',
        image: 'assets/images/lounge/1960-rootz.jpg',
        price: '600'
    },
    {
        name: 'SHISHA FLAVOUR',
        image: 'assets/images/lounge/Shisha-Flavor.jpg',
        price: '2600'
    },
    {
        name: 'SHISHA COAL',
        image: 'assets/images/lounge/shisha-coal.jpg',
        price: '200'
    },
    {
        name: 'ROTHMANS / SWITCH',
        image: 'assets/images/lounge/Rothman.jpg',
        price: '1000'
    },
    {
        name: 'DUNHILL SWITCH',
        image: 'assets/images/lounge/Dunhill.jpg',
        price: '1000'
    },
    {
        name: 'EDGE',
        image: 'assets/images/lounge/Edge.jpg',
        price: '1000'
    },
    {
        name: 'WHITE LONDON',
        image: 'assets/images/grillkitchen/Icon.jpg',
        price: '1000'
    },
    {
        name: 'BENSON SWITCH',
        image: 'assets/images/lounge/benson.jpg',
        price: '1000'
    },
    {
        name: 'HEDGES BENSON',
        image: 'assets/images/lounge/Benson-&-Hedges.jpg',
        price: '1000'
    },
    {
        name: 'ESSE',
        image: 'assets/images/lounge/Esse-cigarette.jpg',
        price: '1000'
    },
    {
        name: 'ORIS',
        image: 'assets/images/lounge/oris.jpg',
        price: '1000'
    },
];

const poolAlcohols = [
    {
        name: 'BLACK LABEL BIG',
        image: 'assets/images/lounge/Black-label.jpg',
        price: '20000'
    },
    {
        name: 'JAMESON BLACK BARREL',
        image: 'assets/images/lounge/Jameson-Black.jpg',
        price: '30000'
    },
    {
        name: 'ELLIOT',
        image: 'assets/images/grillkitchen/Icon.jpg',
        price: '4500'
    },
    {
        name: 'JOHN BANNERMANS',
        image: 'assets/images/lounge/John-bannerman.jpg',
        price: '9000'
    },
    {
        name: 'RED LABEL BIG',
        image: 'assets/images/lounge/Red-label.jpg',
        price: '10000'
    },
    {
        name: 'RED LABEL SMALL',
        image: 'assets/images/lounge/Red-label.jpg',
        price: '2500'
    },
    {
        name: 'LABEL 5',
        image: 'assets/images/lounge/Label-5.jpg',
        price: '8000'
    },
    {
        name: 'JAMESON',
        image: 'assets/images/lounge/Jameson.jpg"',
        price: '25000'
    },
    {
        name: 'MC DOWELL BIG',
        image: 'assets/images/lounge/Mc-dowells.jpg',
        price: '4000'
    },
    {
        name: 'ABSOLUTE VODKA',
        image: 'assets/images/lounge/Absolute-Vodka.jpg',
        price: '9000'
    },
    {
        name: 'CIROC VODKA ',
        image: 'assets/images/lounge/Ciroc-Vodka.jpg',
        price: '35000'
    },
    {
        name: 'FLIRT VODKA',
        image: 'assets/images/lounge/Flirt-Vodka.jpg',
        price: '9000'
    },
    {
        name: 'CHRISTIAN AUDIGER',
        image: 'assets/images/lounge/Motor-Head.jpg',
        price: '15000'
    },
    {
        name: 'VODKA SHOT',
        image: 'assets/images/lounge/Vodka-Shot.jpg',
        price: '1000'
    },
    {
        name: 'SKY VODKA',
        image: 'assets/images/lounge/Sky-Vodka.jpg',
        price: '9000'
    },
    {
        name: 'MAGIC MOMENT BIG',
        image: 'assets/images/lounge/Magic-Moment-Big.jpg',
        price: '6000'
    },
    {
        name: 'MAGIC MOMENT SMALL',
        image: 'assets/images/lounge/magic-moment-small.jpg',
        price: '1500'
    },
    {
        name: 'SMIRNOFF VODKA MEDIUM',
        image: 'assets/images/lounge/Smirnoff-vodka-medium.jpg',
        price: '6000'
    },
    {
        name: 'SMIRNOFF VODKA BIG',
        image: 'assets/images/lounge/smirnoff-vodka-big.jpg',
        price: '9000'
    },
    {
        name: 'SMIRNOFF VODKA SMALL',
        image: 'assets/images/lounge/smirnoff-vodka-small.jpg',
        price: '1500'
    },
    {
        name: 'CAMPARI',
        image: 'assets/images/lounge/Campari.jpg',
        price: '7000'
    },
    {
        name: 'CAMPARI 1 LTRS',
        image: 'assets/images/lounge/Campari.jpg',
        price: '9000'
    },
    {
        name: 'HENNESSEY VS',
        image: 'assets/images/lounge/Hennessy-VS.jpg',
        price: '40000'
    },
    {
        name: 'MARTELL V S O P',
        image: 'assets/images/lounge/Martell-VSOP.jpg',
        price: '25000'
    },
    {
        name: 'JACK DANIEL -70cl',
        image: 'assets/images/lounge/Jack-Daniels-70cl.jpg',
        price: '20000'
    },
    {
        name: 'HENNESSEY V S O P',
        image: 'assets/images/lounge/Hennessy-VSOP.jpg',
        price: '60000'
    },
    {
        name: 'MARTELL V S NEW',
        image: 'assets/images/lounge/Martell-VS-New.jpg',
        price: '35000'
    },
    {
        name: 'MARTELL BLUE SWIFT',
        image: 'assets/images/lounge/Martell-Blue-Swift.jpg',
        price: '40000'
    },
];

const poolWines = [
    {
        name: 'DONELL RED WINE',
        image: 'assets/images/lounge/Donelli.jpg',
        price: '800'
    },
    {
        name: 'J AND W PREMIUM',
        image: 'assets/images/lounge/J-&-W 2.jpg',
        price: '3000'
    },
    {
        name: 'GRENADINE',
        image: 'assets/images/lounge/Grenadine 2.jpg',
        price: '3000'
    },
    {
        name: 'DON SIMON BOTTLE',
        image: 'assets/images/lounge/Don-Simon 2.jpg',
        price: '2500'
    },
    {
        name: 'CARLO ROSSI ROSE',
        image: 'assets/images/lounge/Carlo-Rosi-Rose 2.jpg',
        price: '6000'
    },
    {
        name: 'CARLO ROSSI RED',
        image: 'assets/images/lounge/Carlo-Rossi-Red 2.jpg',
        price: '6000'
    },
    {
        name: 'BARON ROMERO',
        image: 'assets/images/lounge/Baron-Romeo 2.jpg',
        price: '4000'
    },
    {
        name: 'BARON DE VALL',
        image: 'assets/images/lounge/baron-de-val 2.jpg',
        price: '4000'
    },
    {
        name: 'CARLOROSSI ICE PEACH',
        image: 'assets/images/lounge/Carlo-rossi-ice.jpg',
        price: '6000'
    },
    {
        name: 'FOUR COUSINS SWEET WHITE',
        image: 'assets/images/lounge/Four-Cousins-Sweet-White-wine.jpg',
        price: '6000'
    },
    {
        name: 'CHAPMANS',
        image: 'assets/images/lounge/Chapman.jpg',
        price: '1500'
    },
    {
        name: 'PURE HEAVEN',
        image: 'assets/images/lounge/Pure-heaven.jpg',
        price: '3000'
    },
    {
        name: 'CARLOROSSI SWEET RED',
        image: 'assets/images/lounge/Carlo-Rossi-Red 2.jpg',
        price: '6000'
    },
    {
        name: 'CARLO ROSSI WHITE',
        image: 'assets/images/lounge/Carlo-Rosi-Rose 2.jpg',
        price: '6000'
    },
    {
        name: 'FOUR COUSINS SWEET ROSE',
        image: 'assets/images/lounge/Four-cousins-sweet-rose.jpg',
        price: '6000'
    },
    {
        name: 'NIGHT TRAIN SMALL',
        image: 'assets/images/grillkitchen/Icon.jpg',
        price: '2500'
    },
    {
        name: 'NIGHT TRAIN BIG',
        image: 'assets/images/grillkitchen/Icon.jpg',
        price: '5000'
    },
    {
        name: 'FOUR COUSINS SWEET RED',
        image: 'assets/images/lounge/Four-Cousins-sweet-red-wine.jpg',
        price: '6000'
    }
];

const poolSofts = [
    {
        name: 'New CRANBERRY',
        image: 'assets/images/lounge/Cranberry 2.jpg',
        price: '3000'
    },
    {
        name: 'CHI VITA 100 PERCENT',
        image: 'assets/images/lounge/Chivita-100percent.jpg',
        price: '1200'
    },
    {
        name: 'CHI VITA ACTIVE',
        image: 'assets/images/lounge/Chi-Vita-Active 2.jpg',
        price: '1200'
    },
    {
        name: 'CHI EXOTIC',
        image: 'assets/images/lounge/chi-exotic 2.jpg',
        price: '1200'
    },
    {
        name: 'CHI EXOTIC 500ML',
        image: 'assets/images/lounge/chi-exotic 2.jpg',
        price: '500'
    },
    {
        name: '5 ALIVE PULPY',
        image: 'assets/images/lounge/Pulpy-Orange-big.jpg',
        price: '800'
    },
    {
        name: '5 ALIVE BIG',
        image: 'assets/images/lounge/5alive.jpg',
        price: '800'
    },
    {
        name: 'COCONUT WATER',
        image: 'assets/images/lounge/Coconut-water 2.jpg',
        price: '500'
    },
    {
        name: 'LEAH WATER',
        image: 'assets/images/grillkitchen/Icon.jpg',
        price: '200'
    },
    {
        name: 'PLASTIC BETA MALT',
        image: 'assets/images/lounge/maltina 3.jpg',
        price: '400'
    },
    {
        name: 'PET SEVEN UP',
        image: 'assets/images/lounge/7up.jpg',
        price: '200'
    },
    {
        name: 'CAN MIRINDA',
        image: 'assets/images/lounge/Mirinda.jpg',
        price: '250'
    },
    {
        name: 'COKE 35CL',
        image: 'assets/images/lounge/Pet-Coke 2.jpg',
        price: '150'
    },
    {
        name: 'FRESH YO BIG',
        image: 'assets/images/lounge/Fresh-Yo.jpg',
        price: '1200'
    },
    {
        name: 'TEEM BITTER LEMON',
        image: 'assets/images/lounge/Teem.jpg',
        price: '250'
    },
    {
        name: 'MOUNTAIN DEW',
        image: 'assets/images/lounge/Moutain-dew.jpg',
        price: '250'
    },
    {
        name: 'CAN CLIMAX',
        image: 'assets/images/lounge/Climax-can.jpg',
        price: '600'
    }, 
    {
        name: '50CL FANTA',
        image: 'assets/images/lounge/Fanta 2.jpg',
        price: '200'
    }, 
    {
        name: 'PET LIMCA',
        image: 'assets/images/lounge/Limca.jpg',
        price: '250'
    }, 
    {
        name: 'CLIMAX PET',
        image: 'assets/images/lounge/Climax.jpg',
        price: '500'
    }, 
    {
        name: 'PET MIRINDA',
        image: 'assets/images/lounge/Mirinda-Plastic.jpg',
        price: '250'
    },
    {
        name: 'PET PEPSI',
        image: 'assets/images/grillkitchen/Icon.jpg',
        price: '250'
    },
    {
        name: 'PET FANTA',
        image: 'assets/images/lounge/Fanta 2.jpg',
        price: '250'
    },
    {
        name: 'MALTINA CAN',
        image: 'assets/images/lounge/Maltina-Can.jpg',
        price: '300'
    },
    {
        name: 'EVA WATER',
        image: 'assets/images/grillkitchen/Icon.jpg',
        price: '200'
    },
    {
        name: 'AQUAFINA WATER',
        image: 'assets/images/lounge/Aquafina 2.jpg',
        price: '200'
    },
    {
        name: 'SHABRAM TABLE WATER',
        image: 'assets/images/grillkitchen/Icon.jpg',
        price: '200'
    },
    {
        name: 'ZERO ORIJIN CAN',
        image: 'assets/images/lounge/Orijin-Zero 3.jpg',
        price: '300'
    },
    {
        name: 'MALTINA',
        image: 'assets//images/lounge/maltina 3.jpg',
        price: '400'
    },
    {
        name: 'MALTA GUINNESS',
        image: 'assets/images/lounge/Malta-guiness 2.jpg',
        price: '400'
    },
    {
        name: 'FAYROUZ',
        image: 'assets/images/lounge/Fayrouz 2.jpg',
        price: '300'
    },
    {
        name: 'PET COKE 50CL',
        image: 'assets/images/lounge/Pet-Coke 2.jpg',
        price: '250'
    },
    {
        name: 'PET SPRITE',
        image: 'assets/images/lounge/sprite.jpg',
        price: '250'
    },
    {
        name: 'VIJU BAKED YOGHURT',
        image: 'assets/images/lounge/Viju-baked.jpg',
        price: '500'
    },
    {
        name: 'HOLLANDIA YOGHURT',
        image: 'assets/images/lounge/Hollandia-Yogurt.jpg',
        price: '1500'
    },
    {
        name: 'VISMARTIC',
        image: 'assets/images/grillkitchen/Icon.jpg',
        price: '1200'
    },
    {
        name: 'VIJU YOGHURT',
        image: 'assets/images/lounge/Viju-Yoghurt.jpg',
        price: '500'
    },
    {
        name: 'MONSTER ENERGY DRINKS',
        image: 'assets/images/lounge/Monster.jpg',
        price: '1000'
    },
    {
        name: 'POWER HORSE 50CL',
        image: 'assets/images/lounge/Power-Horse.jpg',
        price: '1200'
    },
    {
        name: 'AMBER ENERGY DRINK',
        image: 'assets/images/lounge/Amber.jpg',
        price: '500'
    },
    {
        name: 'POWER HORSE 350ML',
        image: 'assets/images/lounge/Power-Horse.jpg',
        price: '1200'
    },
];

console.log('Pool Softs', poolSofts);
console.log('Pool Wines', poolWines);
console.log('Pool Alcohols', poolAlcohols);
console.log('Pool Beers', poolBeers);
console.log('Pool Cocktails', poolCocktails);

const productCardTab1 = document.getElementById('product-card-tab1');
const productCardTab2 = document.getElementById('product-card-tab2');
const productCardTab3 = document.getElementById('product-card-tab3');
const productCardTab4 = document.getElementById('product-card-tab4');
const productCardTab5 = document.getElementById('product-card-tab5');

// eslint-disable-next-line no-unused-vars
const addToCart = (name, image, price) => {
    console.log('adding to cart');
    const state = JSON.parse(localStorage.getItem('cartProducts')) || [];
    const productExistInCart = state.findIndex(x => x.name === name);
    const currentQty = state.filter(y => y.name === name);
    if(productExistInCart >= 0) {
        state.splice(productExistInCart, 1, {name, image, price, quantity: currentQty[0].quantity + 1})
    } else {
        state.push({name, image, price, quantity: 1});
    }
  
    localStorage.setItem('cartProducts', JSON.stringify(state));
    console.log(JSON.parse(localStorage.getItem('cartProducts')));
};

const card = (product) => `
            <div onclick="" class="custom-col-5">
            <div class="product-wrapper mb-25">
                <div class="product-img">
                    <a href="#product-details">
                        <img src="${product.image}" alt="">
                        <!--<span>New</span>--!>
                    </a>
                    <div class="product-action">
                        <div class="pro-action-left">
                            <a onclick="addToCart('${product.name}', '${product.image}', '${product.price}')" title="Add To Cart"><i class="ion-android-cart"></i> Add To Cart</a>
                        </div>
                        <div class="pro-action-right">
                            <a title="Wishlist" href="#wishlist"><i class="ion-ios-heart-outline"></i></a>
                            <a title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#"><i class="ion-android-open"></i></a>
                        </div>
                    </div>
                </div>
                <div class="product-content">
                    <h4>
                        <a href="#product-details">${product.name}</a>
                    </h4>
                    <div class="product-price-wrapper">
                        <span>&#8358;${product.price}</span>
                        <span class="product-price-old">${(product.avalaible !== undefined) ? product.avalaible : ''}</span>
                    </div>
                </div>
            </div>
            </div>`;

if(productCardTab1){

    productCardTab1.innerHTML = '';
    
    poolSofts.forEach(product => {
        productCardTab1.innerHTML += card(product);
    });
}
if(productCardTab2){

    productCardTab2.innerHTML = '';
    
    poolWines.forEach(product => {
        productCardTab2.innerHTML += card(product);
    });
}
if(productCardTab3){

    productCardTab3.innerHTML = '';
    
    poolAlcohols.forEach(product => {
        productCardTab3.innerHTML += card(product);
    });
}
if(productCardTab4){

    productCardTab4.innerHTML = '';
    
    poolBeers.forEach(product => {
        productCardTab4.innerHTML += card(product);
    });
}
if(productCardTab5){

    productCardTab5.innerHTML = '';
    
    poolCocktails.forEach(product => {
        productCardTab5.innerHTML += card(product);
    });
}
