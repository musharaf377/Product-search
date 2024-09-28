
const searchButton = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const productCard = document.querySelectorAll('.product-card');


searchButton.addEventListener('input', function(e){
    e.preventDefault();

    let searchValue = searchInput.value.toLowerCase();
    
    productCard.forEach(product => {
        let cardSearchContent = product.childNodes[3].childNodes[1].innerText.toLowerCase();
        
        if(cardSearchContent.indexOf(searchValue) > -1){
            product.style.display = 'block';
        }else{
            product.style.display = "none";
        }
    })
})