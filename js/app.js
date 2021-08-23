// window.addEventListener('load', function() {
    
//     const search = new Filter('search', 'data-caption');
// });


//Work in progress

baguetteBox.run('.gallery');

const search = document.querySelector('#search');
const boxTexts = document.querySelectorAll('[data-caption]');

const handleSearch = (event) =>  {

  const searchTerm = event.target.value.toLowerCase();

  boxTexts.forEach(boxText => {
    const text = boxText.getAttribute('data-caption').toLowerCase();
          
    if(text.includes(searchTerm)) {
      boxText.parentElement.style.display = "block";
    } else {
      boxText.parentElement.style.display = "none";  
    }
  });

};

search.addEventListener('keyup', handleSearch);   
