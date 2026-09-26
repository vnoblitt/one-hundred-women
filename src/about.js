const aboutTab = document.createElement('div');
/*
aboutTab.innerHTML = `
        <div class="header">
            <h1>About</h1>
        </div>

        <div class="contact">
            <div class="contact-name">
                V
                <div class="contact-position">Owner</div>
                <div class="contact-phone">818-867-5309</div>
                <div class="contact-email">admin@vnob.dev</div>
            </div>
        </div>
`
*/

const aboutHeader = document.createElement('div');
aboutHeader.classList.add('header');
const headerText = document.createElement('h1');
headerText.textContent = 'About';
aboutHeader.append(headerText);

const contactContainer = document.createElement('div');
contactContainer.classList.add('contact');
const contact1 = document.createElement('div');
contact1.classList.add('contact-name')
contact1.textContent = 'V';
const contact1Position = document.createElement('div');
contact1Position.classList.add('contact-position');
contact1Position.textContent = 'Owner';
const contact1Phone = document.createElement('div');
contact1Phone.classList.add('contact-phone');
contact1Phone.textContent = '818-867-5309';
const contact1Email = document.createElement('div');
contact1Email.classList.add('contact-email');
contact1Email.textContent = 'admin@vnob.dev'
contact1.append(contact1Position, contact1Phone, contact1Email);
contactContainer.append(contact1);

aboutTab.append(aboutHeader, contactContainer);
export {aboutTab};