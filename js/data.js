const navigation = [
  {
    link: "#",
    name: "Home",
  },
  {
    link: "#",
    name: "Line-Up",
  },
  {
    link: "#",
    name: "Tickets",
  },
  {
    link: "#",
    name: "Praktisch",
  },
  {
    link: "#",
    name: "Camping",
  },
  {
    link: "#",
    name: "History",
  },
];

const uurRooster = [
  {
    id: "24ACF1AE-F1E2-4CF6-BCA3-135150A3CF87",
    artist: {
      name: "Alt-J",
      synopsis: `Tik Alt en J in op een toetsenbord van Apple en je krijgt Δ, de Griekse letter delta. Dat teken gebruikt men in de wiskunde en de 
        fysica om de veranderingen van grootheden aan te geven. Met een lichte vrijheid kan je zeggen dat alt-J iets gelijkaardigs doet met 
        de popgeschiedenis. Het Britse trio verzamelt de topmomenten van de afgelopen 60 jaar en zet die om in een eigen universum. Het is 
        daarin even bedreven en vindingrijk als Sigur Rós of The xx. In Werchter komt hun sprookjesachtige wereld duidelijk goed tot haar recht. 
        Dit schreef Humo na hun eerste doortocht in 2013: ‘Hoeveel tergende schoonheid kan een mens aan, en hoeveel suikerige ontroering? 
        In The Barn veranderde alt-J uw leven.’ En dit zag Moustique in 2015: ‘alt_J rentre dans la cour des grands.’ Sinds hun laatste doortocht 
        in 2017 is het veelbelovend stil rond alt-J…`,
      social: {
        website: "https://www.altjband.com/",
        facebook: "https://facebook.com/altJ.band",
        twitter: "https://twitter.com/alt_J",
        instagram: "https://instagram.com/unrealalt",
      },
    },
    picture: {
      small:
        "https://assets.rockwerchter.be/files/cache/medium/files/alt-j-5f030ee72f4ba.jpg",
      large:
        "https://assets.rockwerchter.be/files/cache/medium/files/alt-j-5f030ee72f4ba.jpg",
    },
    media: {
      type: "youtube",
      sourceId: "dCCXq9QB-dQ",
    },
    place: {
      name: "The Barn",
    },
    from: new Date().valueOf(1625248800000),
    to: new Date().valueOf(1625254200000),
    createdAt: "28/10/2020",
    modifiedAt: "07/11/2020",
    isHeadliner: false,
  },

  {
    id: "AE52748D-D8FE-46C7-8A7D-271B3CC22882",
    artist: {
      name: "Red Hot Chili Pepppers",
      synopsis: `Alle fans op post! Red Hot Chili Peppers komen naar Rock Werchter 2021. 
        Het viertal uit Californië staat op zondag 4 juli in het Festivalpark. 
        Red Hot Chili Peppers zijn één van de meest succesvolle bands in de rockgeschiedenis. 
        Op de teller meer dan 80 miljoen verkochte albums, op de schouw (mogelijk elders) zes 
        Grammy’s en tig andere muziekprijzen. Het levert de groep in 2012 een plekje in de Rock 
        and Roll Hall of Fame op. Bij de allergrootsten is dat. Anthony Kiedis, Flea, Chad Smith 
        en John Frusciante -terug van even weg- werken momenteel aan de opvolger van ‘The Getaway’ 
        (2016). Bijna 30 jaar geleden waren ze voor het eerst in Werchter. Het is altijd feest met 
        dit licht geflipt gezelschap.`,
      social: {
        website: "https://redhotchilipeppers.com/",
        facebook: "https://facebook.com/ChiliPeppers",
        twitter: "https://twitter.com/chilipeppers",
        instagram: "https://instagram.com/chilipeppers",
      },
    },
    picture: {
      small:
        "https://assets.rockwerchter.be/files/cache/medium/files/rhcp-5f5b0c77d7fcb.jpg",
      large:
        "https://assets.rockwerchter.be/files/cache/medium/files/rhcp-5f5b0c77d7fcb.jpg",
    },
    media: {
      type: "Youtube",
      sourceId: "yuFI5KSPAt4",
    },
    place: {
      name: "Main Stage",
    },
    from: new Date().valueOf(1625342400000),
    to: new Date().valueOf(1625347800000),
    createdAt: "28/10/2020",
    modifiedAt: "07/11/2020",
    isHeadlinder: true,
  },
  {
    id: "A22F9A739-F8F5-482E-B43E-BD3CA745CE17",
    artist: {
      name: "Pearl Jam",
      synopsis: `Uitstel is geen afstel. Pearl Jam en Rock Werchter zijn voor mekaar gemaakt. Elke passage van de Amerikanen is nog beter. 
        Pearl Jam toert in juni en juli 2021 kort door Europa. Amper 15 concerten staan op de planning. `,
      social: {
        website: "https://pearljam.com/",
        facebook: "https://facebook.com/pearljam",
        twitter: "https://twitter.com/pearljam",
        instagram: "https://instagram.com/pearljam",
      },
    },
    picture: {
      small:
        "https://assets.rockwerchter.be/files/cache/medium/files/14686-pearl-jam-032020-6c9a9964-flat-lowres-5f1a952633f63.jpg",
      large:
        "https://assets.rockwerchter.be/files/cache/medium/files/14686-pearl-jam-032020-6c9a9964-flat-lowres-5f1a952633f63.jpg",
    },
    media: {
      type: "youtube",
      sourceId: "qM0zINtulho",
    },
    place: {
      name: "Main Stage",
    },
    from: new Date().valueOf(1625256000000),
    to: new Date().valueOf(1625261400000),
    createdAt: "28/10/2020",
    modifiedAt: "07/11/2020",
    isHeadlinder: true,
  },
  {
    id: "F6FB3B4B-D880-44D5-B81D-132BFE03929F",
    artist: {
      name: "Big Thief",
      synopsis: `Adrianne Lenker groeit op in een religieuze sekte. Haar vader-manager wil een kindsterretje van haar maken. 
        Op haar twaalfde speelt Lenker al in bars. Een jaar later komt haar eerste album uit. Het loopt fout af tussen vader en dochter. 
        Niet alles is slecht aan dat bizarre verleden. Het voedt namelijk sterk wat Lenker vandaag doet met Big Thief. Die inspiratiebron 
        is zo groot dat het New Yorkse viertal in 2019 niet één maar twee albums uitbracht. ‘U.F.O.F’ en ‘Two hands’ worden allebei 
        ingehaald als essentiële, eigentijdse verhalenbundels. Big Thief maakt zorgvuldig gecomponeerde folkrock met een brute kracht en 
        veel menselijke warmte. Het is altijd een goed teken wanneer de groten uit een genre een nieuwkomer bewieroken. Jeff Tweedy (Wilco) 
        is vol lof over Big Thief en The National-frontman Matt Berninger coverde hun ‘Not’ live.`,
      social: {
        website: "https://bigthief.net/",
        facebook: "https://facebook.com/bigthiefmusic",
        twitter: "https://twitter.com/bigthiefmusic",
        instagram: "",
      },
    },
    picture: {
      small:
        "https://assets.rockwerchter.be/files/cache/medium/files/bigthief-web-5e3429425cc34.jpg",
      large:
        "https://assets.rockwerchter.be/files/cache/medium/files/bigthief-web-5e3429425cc34.jpg",
    },
    media: {
      type: "Youtube",
      sourceId: "YgKJe3uiJ9g",
    },
    place: {
      name: "Klub C",
    },
    from: new Date().valueOf(1625234400000),
    to: new Date().valueOf(1625238000000),
    createdAt: "28/10/2020",
    modifiedAt: "07/11/2020",
    isHeadlinder: false,
  },
  {
    id: "177C186F-438B-40EA-A3E9-DE79D58F0B43",
    artist: {
      name: "Rag'n'bone man",
      synopsis: `Truckerspet, baard, tatoeages… Rory Graham ziet er vervaarlijk uit maar is in werkelijkheid een grote vriendelijke reus. 
        Dat spreekt ook uit ‘Human’ (2016), een doodeerlijk nummer dat een instant klassieker wordt. De artiestennaam van Graham spruit 
        voort uit Rags’n’Bonez, een drum’n’bass-project dat hij op zijn vijftiende opzet in zijn thuisstad Brighton. Hij is ook wild van 
        hiphop. Maar zijn belangrijkste muzikale ontdekking is de blues. Pa Graham schrijft zoonlief in voor een jamsessie in een lokale pub. 
        Rory brengt een nummer van blueslegende Robert Johnson en is verkocht en verknocht. Vanaf dan is het alleen nog rijpen. Zijn 
        eerste album ‘Human’ (2017) wordt een van de snelst verkopende debuten in jaren. Zijn meest recente single ‘Giant’ (2019), een duet 
        met Calvin Harris, werd genomineerd als Song of the Year tijdens de Brit Awards.`,
      social: {
        website: "https://www.ragnboneman.com/",
        facebook: "https://facebook.com/ragnbonemanuk",
        twitter: "",
        instagram: "",
      },
    },
    picture: {
      small:
        "https://assets.rockwerchter.be/files/cache/medium/files/ragnbone-web-5e284dafc78cf.jpg",
      large:
        "https://assets.rockwerchter.be/files/cache/medium/files/ragnbone-web-5e284dafc78cf.jpg",
    },
    media: {
      type: "Youtube",
      sourceId: "ir6nk2zrMG0",
    },
    place: {
      name: "Main Stage",
    },
    from: new Date().valueOf(1625151600000),
    to: new Date().valueOf(1625158800000),
    createdAt: "28/10/2020",
    modifiedAt: "07/11/2020",
    isHeadlinder: false,
  },
  {
    id: "CA3BC42C-66DE-4442-97BE-F82FF8BF217A",
    artist: {
      name: "Twenty One Pilots",
      synopsis: `Verkleedpartijen, een brandende auto, een drummende crowdsurf, een achterwaartse salto vanop een piano… Twenty One Pilots 
        haalt alles uit de kast om de grote aanhang te entertainen. Met zijn tweeën. Josh Dun is drummer, Tyler Joseph zingt en speelt piano, 
        ukelele en synthesizer. Op hun palmares: mondiale meezingers zoals ’Stressed out’, ‘Ride’ en ‘Heathens’. Talrijke muziekprijzen en 
        nominaties ook. Album ‘Blurryface’, dat 234 weken in de US charts prijkte, werd door Billboard uitgeroepen tot Rock Album of the Decade. 
        Hun meest recente ‘Trench’ (2018) debuteerde wereldwijd in de hoogste regionen van de hitlijsten. In 2014 stond Twenty One Pilots een 
        eerste keer op Rock Werchter, vroeg op de dag in KluB C. Sindsdien hebben ze Paleis 12 uitverkocht en Pukkelpop afgesloten.`,
      social: {
        website: "https://www.twentyonepilots.com/",
        facebook: "https://facebook.com/twentyonepilots",
        twitter: "https://twitter.com/twentyonepilots",
        instagram: "",
      },
    },
    picture: {
      small:
        "https://assets.rockwerchter.be/files/cache/medium/files/top-5f030ee8a4a07.jpg",
      large:
        "https://assets.rockwerchter.be/files/cache/medium/files/top-5f030ee8a4a07.jpg",
    },
    media: [{
      type: "youtube",
      sourceId: "Io2hbcrAYBw",
    }],
    place: {
      name: "Klub C",
    },
    from: new Date().valueOf(1625331600000),
    to: new Date().valueOf(1625337000000),
    createdAt: "28/10/2020",
    modifiedAt: "07/11/2020",
    isHeadlinder: false,
  },
  {
    id: "A02F9416-E25C-4CF7-82CD-67DC843E767D",
    artist: {
      name: "Royal Blood",
      synopsis: `Royal Blood is een onbeschaamd luid tweetal uit het Britse Brighton. Het duo vindt mekaar wanneer bassist/zanger 
        Mike Kerr in 2013 terugkeert van een trip door Australië. Drummer Ben Thatcher pikt hem op aan de luchthaven. Op weg naar huis 
        besluiten ze om een groep te beginnen. De volgende dag geven ze hun eerste concert al. Royal Blood maakt lekkere herrie die vaak 
        wordt vergeleken met Queens Of The Stone Age en The White Stripes. Hun bekendheid krijgt een boost wanneer Matt Helders, de drummer 
        van Arctic Monkeys, op Glastonbury 2013 in een t-shirt van de groep speelt. De volgende meevaller is een selectie voor BBC Sound 
        Of 2014, de jaarlijkse beloftenlijst van de Britse muziekpers. Uit het verslag van hun vorige Werchter in 2017: ‘Royal Blood speelt 
        mainstage op een hoopje’. Vijfde keer voor het koninklijk duo.`,
      social: {
        website: "http://www.royalbloodband.com/",
        facebook: "https://facebook.com/RoyalBloodUK",
        twitter: "https://twitter.com/royalblooduk",
        instagram: "https://instagram.com/royalblooduk",
      },
    },
    picture: {
      small:
        "https://assets.rockwerchter.be/files/cache/medium/files/royal-blood-5f030ee77d2b7.jpg",
      large:
        "https://assets.rockwerchter.be/files/cache/medium/files/royal-blood-5f030ee77d2b7.jpg",
    },
    media: {
      type: "Youtube",
      sourceId: "sbx95gBb5HM",
    },
    place: {
      name: "The Barn",
    },
    from: new Date().valueOf(1625423400000),
    to: new Date().valueOf(1625427900000),
    createdAt: "28/10/2020",
    modifiedAt: "07/11/2020",
    isHeadlinder: false,
  },
  {
    id: "4619129B-2499-48CE-8EB8-17A782576A93",
    artist: {
      name: "Black Pumas",
      synopsis: `Alsof soulzanger Sam Cooke en oerrocker Neil Young lid geworden zijn van hiphopcollectief Wu-Tang Clan. Dat is een ruwe 
        schets van Black Pumas, het project van een bijzonder duo uit de Texaanse hoofdstad Austin. Adrian Quesada is een veertiger die 
        vroeger gitaar speelde bij Grupo Fantasma. Die negenkoppige bende wint in 2010 een Grammy Award voor Best Latin Album. 
        Quesada had in zijn studio enkele instrumentale stukken liggen waar hij een soulstem voor zocht. Vrienden raadden hem Eric Burton 
        aan, een busker die in downtown Austin speelde. Bingo! Het debuut van Black Pumas is zo goed als feilloos. De psychedelische soul 
        bombardeerde de twee in de VS tot ‘breakout band of 2019’. Prima spul alleszins voor wie de voorbije jaren in Werchter genoten 
        heeft van Alabama Shakes, Durand Jones & The Indications of Curtis Harding.`,
      social: {
        website: "https://www.theblackpumas.com/",
        facebook: "https://facebook.com/theblackpumas",
        twitter: "https://twitter.com/blackpumasmusic",
        instagram: "",
      },
    },
    picture: {
      small:
        "https://assets.rockwerchter.be/files/cache/medium/files/black-pumas-5f030ee9dc31d.jpg",
      large:
        "https://assets.rockwerchter.be/files/cache/medium/files/black-pumas-5f030ee9dc31d.jpg",
    },
    media: {
      type: "Youtube",
      sourceId: "2EntxPIULUI",
    },
    place: {
      name: "Klub C",
    },
    from: new Date().valueOf(1625227200000),
    to: new Date().valueOf(1625233500000),
    createdAt: "28/10/2020",
    modifiedAt: "07/11/2020",
    isHeadlinder: false,
  },
  {
    id: "6152A636-15B9-417B-AC69-6B25417A6382",
    artist: {
      name: "Cigarettes After Sex",
      synopsis: `Een groep die klinkt zoals ze heet. Cigarettes After Sex maakt sferische pop die laat denken aan satijnen lakens en 
        zwoele nachten. Referentiepunten zijn Beach House, Chris Isaak en The xx. De man achter de markante naam is Greg Gonzalez. 
        De Texaan is verslingerd aan Françoise Hardy en Miles Davis. Hij bezit een androgyne, honingzoete stem waaraan het menselijk 
        oor meteen blijft plakken. Het titelloze debuut van Cigarettes After Sex behoorde tot het lekkerste auditieve snoepgoed van 2017. 
        Elk nummer is een warm deken dat zachtjes rond de schouders wordt gedrapeerd. Alles klinkt ook supergesofisticeerd. Vreemd want 
        het hele album werd op drie dagen opgenomen in een goedkope demostudio. Nieuwkomer ‘Cry’ (2019) is het gevolg van een intense 
        week werken op Mallorca.`,
      social: {
        website: "https://www.cigarettesaftersex.com/",
        facebook: "https://facebook.com/CigarettesAfterSex",
        twitter: "https://twitter.com/cigsaftersexx",
        instagram: "",
      },
    },
    picture: {
      small:
        "https://assets.rockwerchter.be/files/cache/medium/files/cigarettes-web-5e3008ffab60f.jpg",
      large:
        "https://assets.rockwerchter.be/files/cache/medium/files/cigarettes-web-5e3008ffab60f.jpg",
    },
    media: {
      type: "Youtube",
      sourceId: "3XqqkrJENB4",
    },
    place: {
      name: "The Barn",
    },
    from: new Date().valueOf(1625233500000),
    to: new Date().valueOf(1625237100000),
    createdAt: "28/10/2020",
    modifiedAt: "07/11/2020",
    isHeadlinder: false,
  },
];

const socialsRockWerchter = [
  {
    link: "https://www.facebook.com/rockwerchterfestival",
    icon: "img/facebook.svg",
    name: "Facebook",
  },
  {
    link: "https://twitter.com/rockwerchter",
    icon: "img/twitter.svg",
    name: "Twitter",
  },
  {
    link: "https://www.instagram.com/rockwerchterfestival/",
    icon: "img/instagram-icon.svg",
    name: "Instagram",
  },
  {
    link: "https://open.spotify.com/user/rockwerchterofficial",
    icon: "img/spotify.png",
    name: "Spotify",
  },
  {
    link: "https://www.youtube.com/user/rockwerchterfestival",
    icon: "img/youtube.svg",
    name: "Youtube",
  },
];