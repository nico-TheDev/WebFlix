let mobileNav,burger,genreBtn,genreList,movieCards,animeBtn,movieBtn,tvBtn,allBtn,search,searchText;

mobileNav = document.querySelector('.mobilenavigation__list');
burger = document.querySelector('.burger');
genreBtn = document.querySelector('.searchbox__genre');
genreList = document.querySelector('.genre-list');
movieCards = document.querySelectorAll('.movie');

animeBtn = document.querySelector('.animeBtn');
movieBtn = document.querySelector('.movieBtn');
tvBtn = document.querySelector('.tvBtn');
allBtn = document.querySelector('.allBtn');

search = document.querySelector('.searchbox__input');



// DONE FUNCTIONALITY ================================================================

burger.addEventListener('click',function(){
    mobileNav.classList.toggle('active');
});

genreBtn.addEventListener('click',function(){
    console.log('click');
    genreList.classList.toggle('open');
}); 



function sortCards(genre){
    event.preventDefault();
    for (let i = 0; i < movieCards.length;i++){
        console.log('clicking');

        if (movieCards[i].dataset.genre === genre){
            movieCards[i].style.display = 'block';
        }

        else if(genre === 'all'){
            movieCards[i].style.display = 'block';
        }

        else{
            movieCards[i].style.display = 'none';
        }
    }
}
// DONE FUNCTIONALITY ================================================================


function checkSearch(){
    searchText = search.value;

    for (let i = 0; i < movieCards.length;i++){
        if(movieCards[i].dataset.genre.includes(searchText.toLowerCase())){
            movieCards[i].style.display = 'block';
        }
        else{
            movieCards[i].style.display = 'none';
        }
    }
}


search.addEventListener('keyup',checkSearch);

/**
 * 
 * background: #FFEFBA;  /* fallback for old browsers 
 linear-gradient(to right, #FFFFFF, #FFEFBA)*/

//  LIGHT THEME // 
//genrelist
let app,content;

app = document.querySelector('.app');
content = document.querySelector('.content');

function changeTheme(){
    // mobileNav.classList.toggle('light');
    mobileNav.classList.toggle('light');
    app.classList.toggle('light');
    content.classList.toggle('light');

  
}