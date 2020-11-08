(() => {
    const app = {
      concert: {
        imageURL: "https://assets.rockwerchter.be/files/cache/medium/files/alt-j-5f030ee72f4ba.jpg",
        title: "ALT-J",
        details:
          `Tik Alt en J in op een toetsenbord van Apple en je krijgt Δ, de Griekse letter delta. Dat teken gebruikt men in de wiskunde en de 
          fysica om de veranderingen van grootheden aan te geven. Met een lichte vrijheid kan je zeggen dat alt-J iets gelijkaardigs doet met 
          de popgeschiedenis. Het Britse trio verzamelt de topmomenten van de afgelopen 60 jaar en zet die om in een eigen universum. Het is 
          daarin even bedreven en vindingrijk als Sigur Rós of The xx. In Werchter komt hun sprookjesachtige wereld duidelijk goed tot haar recht. 
          Dit schreef Humo na hun eerste doortocht in 2013: ‘Hoeveel tergende schoonheid kan een mens aan, en hoeveel suikerige ontroering? 
          In The Barn veranderde alt-J uw leven.’ En dit zag Moustique in 2015: ‘alt_J rentre dans la cour des grands.’ Sinds hun laatste doortocht 
          in 2017 is het veelbelovend stil rond alt-J…"`,
      },
      socials: [{
        website: "",
        facebook: "",
        twitter: "",
        instagram:"",
      }],
  
  
      initialize: function () {
        let concertContainerDiv = document.querySelector("#container-concerts"); //ophalen
        this.loadConcerts(this.concert, concertContainerDiv);
      },
  
      loadConcerts: function (concert, divToAppendTo) {
        let innerHTMLForOneConcert = `<article>
                  <h2>${concert.title}</h2>
                  <img src="${concert.imageURL}" alt="${concert.title}">
              </article>`;
  
    //     //divToAppendTo.innerHTML=innerHTMLForOneConcert;
    //     //alles binnden de div wordt verwijderd en vervangen door innerHTMLForOneConcert1
    //     //in case of a loop: meerder html toevoegen
    //     //oplossing:
    //     // 1) +=, maar enkel op einde van div kunnen we toevoegen
    //     // 2) insertAdjacentHTML, dan kunnen we kiezen waar we toevoegen (vooraan, achteraan)
        divToAppendTo.insertAdjacentHTML("beforeend", innerHTMLForOneConcert);
  
    //     //element dat ik net heb toegevoegd, ophalen.
        let addedConcert = divToAppendTo.lastChild; //.querySelector("img");
    //     //stel vooraan toevoegen met "afterbegin" => firstchild
    //     //foto klik => functie schrijven voor details te tonen
        addedConcert.addEventListener("click", (event) =>
          this.showDetails(event, concert));
      },
  
      showDetails: function (event, concertActive) {
        let innerHTMLDetails = `<article>
                  <p>${concertActive.details}</p>
              </article>`;
        document.querySelector("#concert-detail").innerHTML = innerHTMLDetails;
      },
    };
  
    console.log("Application started!");
    app.initialize();
  })();