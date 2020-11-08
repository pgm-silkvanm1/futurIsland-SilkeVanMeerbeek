(() => {
    const futureIsland = {

        startApp: function() {
            console.log("1. Application started");
            this.printNavigation();
            this.printLineUp();
            this.eventListeners();
            // this.removeDetails();
            this.countDownClock();
            this.printSocialsRW();
        },

        

        printNavigation: function() {
            console.log("2. Navigation working");
            this.navbar = document.querySelector(".container-nav");

            let tempStr = "";
            navigation.forEach((item) => {
                tempStr += `<a class="container-nav__item" href="${item.link}" target ="_blank">${item.name}</a>`;
            });
            this.navbar.innerHTML = tempStr;
        },



        printLineUp: function() {
            console.log("3. Line up working");
            this.lineUp = document.querySelector(".container-lineup");

            let tempStr = "";
            uurRooster.forEach((rooster) => {
                tempStr += `<section id="${rooster.id}" class="containerflex-lineup">`
                tempStr += `<h2 class="containerflex-lineup__name">${rooster.artist.name} - ${rooster.place.name}</h2>`;
                tempStr += `<div class="container-lineup"> <img src="${rooster.picture.small}" data-id="${rooster.id}"></div>`;
                tempStr += `</section>`;
            });
            this.lineUp.innerHTML = tempStr;  
        },

        printSocials: function(detailElement, lineupItem) {
            console.log("4. Socials working");
            console.log(lineupItem)
            let tempStr = '<ul>';
            let socials = Object.entries(lineupItem.artist.social);
            for(let i=0;i<socials.length;i++){
                tempStr += `<li><a class="socials-artist" href="${socials[i][1]}">${socials[i][0]}</a></li>`;
                };
            tempStr += "</ul>";
            detailElement.innerHTML += tempStr;
        },


          extraPrint: function (id) {
            let detail = document.querySelectorAll(".lineup-flexcontainer")[0];
            let lineupItem = uurRooster.find((entry)=>entry.id === id);
            detail.innerHTML = "";
            let tempStr = "";
            tempStr += `<button id="close-btn">X</button>
            <section class="clicked"><div class="img__large"> <img src="${lineupItem.picture.large}" data-id="${lineupItem.id}"></div>
            <br>
            ${lineupItem.artist.name}
            ${lineupItem.artist.synopsis}</section>
            <br>
            <iframe class="yt-iframe" src="https://www.youtube.com/embed/${lineupItem.media.sourceId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        

            detail.innerHTML += tempStr;
            this.printSocials(detail, lineupItem);
            console.log("ik ben geklikt");
        },


        eventListeners() {
            let containers = document.querySelectorAll(".containerflex-lineup");
            console.log(containers);
            for (let i = 0; i < containers.length; i++) {
                containers[i].addEventListener("click", (event) => {
                    this.extraPrint(containers[i].id);
                });
            }
        },



        countDownClock() {
            let clock = document.querySelectorAll(".aftelklok")[0];
            let countDownDate = new Date(1625140800000);
            let x = setInterval(function() {

                // Get today's date and time
                let now = new Date().getTime();
                  
                // Find the distance between now and the count down date
                let distance = countDownDate - now;
                  
                // Time calculations for days, hours, minutes and seconds
                let days = Math.floor(distance / (1000*60*60*24));
                let hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
                let minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
                let seconds = Math.floor((distance % (1000*60)) / 1000);
                  
                // Output the result in an element with id="demo"
                clock.innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";
                  
                // If the count down is over, write some text 
                if (distance < 0) {
                  clearInterval(x);
                     clock.innerHTML = "EXPIRED";
                }
              }, 1000);
        },

        printSocialsRW: function() {
            console.log("5. NavigationSocailsRW working");
            this.socialsRWnavbar = document.querySelector(".socialsRW-nav");

            let tempStr = "Socials:";
            socialsRockWerchter.forEach((item) => {
                tempStr += `<li><a class="socialsRW-nav__item" href="${item.link}" target ="_blank"><img src="${item.icon}"></a></li>`;
            });
            this.socialsRWnavbar.innerHTML = tempStr;
        },

        
    };

    futureIsland.startApp();
})()



// findWeekdayViaMillis: function (timeMillis) {
//     const weekdagen = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
//     return weekdagen [new Date(timeMillis).getDay()]
// };