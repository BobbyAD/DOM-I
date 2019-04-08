const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
//Nav
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//THIS IS HACKY GARBAGE
let nav = document.querySelectorAll('header nav a');
for (let i = 0; i < 6; i++) {
  var n = i + 1;
  nav[i].textContent = siteContent['nav']['nav-item-' + n.toString()];
};


//CTA
let ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = siteContent['cta']['h1'];

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

let ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);


//TOP CONTENT
let featuresHeader = document.querySelector('.top-content .text-content h4');
featuresHeader.textContent = siteContent['main-content']['features-h4'];

let featuresText = document.querySelector('.top-content .text-content p');
featuresText.textContent = siteContent['main-content']['features-content'];

let aboutHeader = document.querySelectorAll('.top-content .text-content h4')[1];
aboutHeader.textContent = siteContent['main-content']['about-h4'];

let aboutText = document.querySelectorAll('.top-content .text-content p')[1];
aboutText.textContent = siteContent['main-content']['features-content'];


//MIDDLE IMG
let middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);


//BOTTOM CONTENT
let servicesHeader = document.querySelector('.bottom-content .text-content h4');
servicesHeader.textContent = siteContent['main-content']['services-h4'];

let servicesText = document.querySelector('.bottom-content .text-content p');
servicesText.textContent = siteContent['main-content']['services-content'];

let productHeader = document.querySelectorAll('.bottom-content .text-content h4')[1];
productHeader.textContent = siteContent['main-content']['product-h4'];

let productText = document.querySelectorAll('.bottom-content .text-content p')[1];
productText.textContent = siteContent['main-content']['product-content'];

let visionHeader = document.querySelectorAll('.bottom-content .text-content h4')[2];
visionHeader.textContent = siteContent['main-content']['vision-h4'];

let visionText = document.querySelectorAll('.bottom-content .text-content p')[2];
visionText.textContent = siteContent['main-content']['vision-content'];

//CONTACT
let contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

let contactP1 = document.querySelectorAll('.contact p')[0];
contactP1.textContent = siteContent['contact']['address'];

let contactP2 = document.querySelectorAll('.contact p')[1];
contactP2.textContent = siteContent['contact']['phone'];

let contactP3 = document.querySelectorAll('.contact p')[2];
contactP3.textContent = siteContent['contact']['email'];

//FOOTER
let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];