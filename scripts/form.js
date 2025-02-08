const span = document.querySelector('footer span');
const para = document.querySelector('#last-mod');
const today = new Date();
span.textContent = today.getFullYear();
span.style.color = "#FFFFFF";
para.textContent = `Last modificatin: ${document.lastModified}`;
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
  const select = document.querySelector('select');
  products.forEach( item => {
    const option = document.createElement('option');
    const id = item.id;
    const name = item.name;
    option.textContent = name;
    option.value = id;
    select.appendChild(option);
  });

const text = document.querySelector('.review-count');
function formSubmitted()
{
  return window.location.search.length > 0;
}
if (formSubmitted()) {
  let reviewCount = localStorage.getItem("reviewCount") || 0;
  reviewCount = Number(reviewCount) + 1;
  localStorage.setItem("reviewCount", reviewCount);
  text.innerHTML = `You have submitted <strong>${reviewCount}</strong> reviews so far`;
}