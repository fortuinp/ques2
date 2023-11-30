let cardContainer = document.querySelector('[data-cards]')

fetch('https://randomuser.me/api?results=20')
  .then(data => data.json())
  .then(result => {
    allPeople = result.results;
    displayPeople(allPeople);
  });

function displayPeople(people) {
    cardContainer.innerHTML = '';
      people.forEach(people => {
        cardContainer.innerHTML += `
          <div class="card" style="width: 18rem;">
            <img src="${people.picture.large}" class="card-img-top img-fluid" alt="${people.name.first}">
            <div class="card-body">
              <h5 class="card-title">${people.name.title}. ${people.name.first} ${people.name.last}</h5>
              <p class="card-text">Age: ${people.dob.age}</p>
            </div>
          </div>
        `;
      });
  }
  
let inputSearch = document.querySelector('[search]');
let allPeople = [];

function searchnames(){
    let searchWithName = inputSearch.value.trim().toLowerCase();
    if(searchWithName === '') {
        displayPeople(allPeople)
    }else{
        let getpeople = allPeople.filter(person => person.name.first.toLowerCase().includes(searchWithName))
        displayPeople(getpeople)
    }
}
inputSearch.addEventListener('input', searchnames);
