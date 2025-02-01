const mainnav = document.querySelector('nav');
const hambutton = document.querySelector('#menu');
const heading = document.querySelector('header');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    heading.classList.toggle('show');
});

const span = document.querySelector('span');
let today = new Date();
span.innerHTML = today.getFullYear();
const lastModified = document.querySelector('#last-modified');
lastModified.innerHTML = `Last modified ${document.lastModified}`;

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Laie Hawaii Temple",
        location: "Laie, Hawaii, United States",
        dedicated: "1919, November, 27 ",
        area:  42100,
        imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/400x250/laie-temple-772757-wallpaper.jpg"
      },
    {
      templeName: "Arequipa Peru Temple",
      location: "Arequipa, Peru",
      dedicated: "2019 December, 11",
      area: 26969,
      imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/arequipa-peru/400x250/2-3c2316607190934fc0265f4107b5013b0cc4b21e.jpeg"
    },
    {
        templeName: "Bern Switzerland Temple",
        location: "Zollikofen, Bern, Switzerland",
        dedicated: "1955, September, 11",
        area:  35546,
        imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-1053202-wallpaper.jpg"
      },
      {
        templeName: "Taipei Taiwan Temple",
        location: "Taipei, Taipei, Taiwan",
        dedicated: "1984, November, 17",
        area:  9945,
        imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/taipei-taiwan/400x250/taipei-taiwan-temple-lds-1031625-wallpaper.jpg"
      },
      {
        templeName: "Cardston Alberta Temple",
        location: "Cardston, Alberta, Canada",
        dedicated: "1923, August, 26",
        area:  88562,
        imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cardston-alberta/400x250/cardston-alberta-temple-lds-333631-wallpaper.jpg"
      },
  ];


  const container = document.querySelector('.grid-container');

  function displayTemples(templesToDisplay)
  {
    container.innerHTML = "";
    for(let x = 0; x < templesToDisplay.length; x++)
        {
          const cardContainer = document.createElement('div');
          cardContainer.classList.add('card-container');
      
          const textContainer = document.createElement('div');
      
          const image = document.createElement('img');
          const name = document.createElement('h3');
          const location = document.createElement('p');
          const dedicated = document.createElement('p');
          const area = document.createElement('p');
      
          
          name.textContent = templesToDisplay[x].templeName;
          location.textContent = `LOCATION:  ${templesToDisplay[x].location}`;
          dedicated.textContent = `DEDICATED: ${templesToDisplay[x].dedicated}`;
          area.textContent = `SIZE: ${templesToDisplay[x].area}`;
          image.src = templesToDisplay[x].imageUrl;
          image.alt = templesToDisplay[x].templeName;
          image.loading = "lazy";
      
          
          textContainer.appendChild(name);
          textContainer.appendChild(location);
          textContainer.appendChild(dedicated);
          textContainer.appendChild(area);
          
          cardContainer.appendChild(textContainer);
          cardContainer.appendChild(image);
      
          container.appendChild(cardContainer);
        }
  }
  displayTemples(temples);

  const navLinks = document.querySelectorAll('header nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const filteredLink = link.textContent.trim();
        let filterdTemples;
        switch(filteredLink)
        {
            case "Old":
                filterdTemples = temples.filter(temple => {
                    const year = new Date(temple.dedicated).getFullYear();
                    return year < 1900;
                });
                break;
            case "New":
                filterdTemples = temples.filter(temple => {
                    const year = new Date(temple.dedicated).getFullYear();
                    return year > 2000;
                });
                break;
            case "Large":
                filterdTemples = temples.filter(temple => temple.area > 90000);
                break;
            case "Small":
                filterdTemples = temples.filter(temple => temple.area < 10000);
                break;
            case "Home":
                filterdTemples = temples;
                break;
        }
        displayTemples(filterdTemples);

    });
  });
  