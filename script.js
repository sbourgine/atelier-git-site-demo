$(document).ready(function() {
    
    const JOUR_FIN = 25;
    const MOIS_FIN = 12; // 1-12
    const LIBELLE = 'Christmas';

    var dateFin = new Date();
    dateFin.setMonth(MOIS_FIN - 1);
    dateFin.setDate(JOUR_FIN);

    var now = new Date();
    if (now > dateFin) {
      dateFin.setFullYear(now.getFullYear() + 1);
    }

    console.log(`Now : ${now}`);
    console.log(`End : ${dateFin}`);

    var sleepsTo = 0;
    if (now.getFullYear() === dateFin.getFullYear()) {
      sleepsTo = numJour(dateFin) - numJour(now);
      console.log(`_sleepsTo : ${sleepsTo}`);
    } else {
      sleepsTo = numJour(dateFin) + nbJoursDansAnnee(now.getFullYear()) - numJour(now);
      console.log(`_sleepsTo_ : ${sleepsTo}`);
    }

    //set the bg
    if (now.getMonth() == (MOIS_FIN - 1)) {
      $('#mainwrap').addClass('christmas-bg');
    }
    else {
      $('#mainwrap').addClass('notxmas-bg');
    }
    
    //set the sleeps to Xmas
    $('#sleeps').text(sleepsTo);
    $('#text').text("Sleeps Until " + LIBELLE);
    
    // 1 sleep
    if(sleepsTo == 1) {
      $('#text').text("Sleep Until " + LIBELLE);
    };
    
    //if ITS CHRISTMAS!!!!
    if(sleepsTo == 0) {
      $('#sleeps').text("-");
      $('#text').text("Ho, Ho, Ho, it's " + LIBELLE + "!!!");
    };
  });

  function nbJoursDansAnnee(annee) {
    return numJour(new Date(annee, 11, 31));
  }

  function numJour(jour) {
    var start = new Date(jour.getFullYear(), 0, 0);
    var diff = jour - start;
    var oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }
  