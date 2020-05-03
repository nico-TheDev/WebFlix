let mobileNav,burger,genreBtn,genreList,movieCards,animeBtn,movieBtn,tvBtn,allBtn,search,searchText,watchBtn;

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

watchBtn = document.querySelectorAll('.watch');

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
            genreList.classList.remove('open');
        }

        else if(genre === 'all'){
            movieCards[i].style.display = 'block';
            genreList.classList.remove('open');
        }

        else{
            movieCards[i].style.display = 'none';
            genreList.classList.remove('open');
        }
    }
}
// DONE FUNCTIONALITY ================================================================


function checkSearch(){
    searchText = search.value;

    for (let i = 0; i < movieCards.length;i++){
        if(movieCards[i].dataset.title.includes(searchText.toLowerCase())){
            movieCards[i].style.display = 'block';
        }
        else{
            movieCards[i].style.display = 'none';
        }
    }
}


search.addEventListener('keyup',checkSearch);


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
    genreList.classList.toggle('light');
}


// =================================MODAL EFFECT============================

//When we click watch a modal appears

//click the modal will appear
// the modal will change content based on the current element chosen

//get the value of the current element 

//pass it to the modal

let parent,coverImg,movieName,movieYear,movieRatings,closeModal,popupNext,popupPrev,modal,popup,popupChildren,popupText,popupCover,popupTitle,popupImg,popupRatings,popupSummary,movieRate,movieSummary;

modal = document.querySelector('.modal');
popup = document.querySelector('.popup');
closeModal = document.querySelector('.close');
popupPrev = document.querySelector('.prev');
popupNext = document.querySelector('.next');

popupTitle = document.querySelector('.popup__title');
popupRatings = document.querySelector('.popup__rate');
popupImg = document.querySelector('.popup__img');
popupSummary = document.querySelector('.popup__summary');

// SHOW MODAL
closeModal.addEventListener('click',function(){
    modal.classList.remove('showModal');
});


function reassignPopup (){
      // gets the movie elements 
      coverImg = parent[0]; // // gets the cover Image
      movieName = parent[1]; // gets the movie name
      movieRatings = parent[3].children;
      movieRate =  movieRatings[1];
      movieSummary = movieRatings[0].lastElementChild;

      // shows the modal
      modal.classList.add('showModal');

      // sets the popup content to the content of the movie elements
      popupImg.setAttribute('src',coverImg.src);
      popupTitle.textContent = movieName.textContent;
      popupRatings.textContent = movieRate.textContent;
      popupSummary.textContent = movieSummary.textContent;
}

// POPUP
for (let i = 0; i < watchBtn.length; i++){
    // creates an event listener to all watch button
    watchBtn[i].addEventListener('click',function(e){

        let currentCard = i;
        parent = e.target.parentElement.parentElement.children; // gets the current movie card with the target

        reassignPopup();

        popupNext.addEventListener('click',function(){
            // the current card index
            // do the same thing as assigning every element in popup based on index

            if (currentCard >= (movieCards.length - 1)){
                currentCard = 0;
                parent = movieCards[currentCard].children;
                reassignPopup();
            }
            else{
                currentCard++;
                parent = movieCards[currentCard].children;
                reassignPopup();
            }
               
        });

        popupPrev.addEventListener('click',function(){
            // the current card index
            // do the same thing as assigning every element in popup based on index
            console.log(currentCard);
            if (currentCard <= 0){
                currentCard = movieCards.length - 1;
                parent = movieCards[currentCard].children;
                reassignPopup();    
            }
            else{
                currentCard--;
                parent = movieCards[currentCard].children;
                reassignPopup();
            }      
        });
        
    });
}

