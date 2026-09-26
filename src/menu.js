const menuTab = document.createElement('div');
/*
menuTab.innerHTML = `
        <div class="header">
            <h1>Menu</h1>
        </div>

        <div class="menu">
            <div class="menu-section">
                Pizzas
                <div class="menu-item">Cheese</div>
                <div class="menu-item">Pepperoni</div>
                <div class="menu-item">Hawaiian</div>
                <div class="menu-item">Margherita</div>
                <div class="menu-item">Meatlover's</div>
                <div class="menu-item">BBQ Chicken</div>
                <div class="menu-item">Spicy Chicken</div>
                <div class="menu-item">Supreme</div>
            </div>
            <div class="menu-section">
                Milkshakes
                <div class="menu-item">Vanilla</div>
                <div class="menu-item">Chocolate</div>
                <div class="menu-item">Strawberry</div>
            </div>
            <div class="menu-section">
                Drinks
                <div class="menu-item">Cola</div>
                <div class="menu-item">Root Beer</div>
                <div class="menu-item">Lemonade</div>
                <div class="menu-item">Iced Tea</div>
            </div>           
        </div>
`
*/
const menuHeader = document.createElement('div');
menuHeader.classList.add('header');
const headerText = document.createElement('h1');
headerText.textContent = 'Menu';
menuHeader.append(headerText);

const menuContainer = document.createElement('div');
menuContainer.classList.add('menu')

const pizzaSection = document.createElement('div');
pizzaSection.classList.add('menu-section');
pizzaSection.textContent = 'Pizzas';
const pizza1 = document.createElement('div');
pizza1.classList.add('menu-item');
pizza1.textContent = 'Cheese';
const pizza2 = document.createElement('div');
pizza2.classList.add('menu-item');
pizza2.textContent = 'Pepperoni';
const pizza3 = document.createElement('div');
pizza3.classList.add('menu-item');
pizza3.textContent = 'Hawaiian';
const pizza4 = document.createElement('div');
pizza4.classList.add('menu-item');
pizza4.textContent = 'Margherita';
const pizza5 = document.createElement('div');
pizza5.classList.add('menu-item');
pizza5.textContent = "Meatlover's";
const pizza6 = document.createElement('div');
pizza6.classList.add('menu-item');
pizza6.textContent = 'BBQ Chicken';
const pizza7 = document.createElement('div');
pizza7.classList.add('menu-item');
pizza7.textContent = 'Spicy Chicken';
const pizza8 = document.createElement('div');
pizza8.classList.add('menu-item');
pizza8.textContent = 'Supreme';
pizzaSection.append(pizza1, pizza2, pizza3, pizza4, pizza5, pizza6, pizza7, pizza8);

const milkshakeSection = document.createElement('div');
milkshakeSection.classList.add('menu-section');
milkshakeSection.textContent = 'Milkshakes';
const milkshake1 = document.createElement('div');
milkshake1.classList.add('menu-item');
milkshake1.textContent = 'Vanilla';
const milkshake2 = document.createElement('div');
milkshake2.classList.add('menu-item');
milkshake2.textContent = 'Chocolate';
const milkshake3 = document.createElement('div');
milkshake3.classList.add('menu-item');
milkshake3.textContent = 'Strawberry';
milkshakeSection.append(milkshake1, milkshake2, milkshake3);

const drinkSection = document.createElement('div');
drinkSection.classList.add('menu-section');
drinkSection.textContent = 'Drinks';
const drink1 = document.createElement('div');
drink1.classList.add('menu-item');
drink1.textContent = 'Cola';
const drink2 = document.createElement('div');
drink2.classList.add('menu-item');
drink2.textContent = 'Root Beer';
const drink3 = document.createElement('div');
drink3.classList.add('menu-item');
drink3.textContent = 'Lemonade';
const drink4 = document.createElement('div');
drink4.classList.add('menu-item');
drink4.textContent = 'Iced Tea';
drinkSection.append(drink1, drink2, drink3, drink4);

menuContainer.append(pizzaSection, milkshakeSection, drinkSection);

menuTab.append(menuHeader, menuContainer);

export {menuTab}