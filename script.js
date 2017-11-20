$(document).ready(function() {
    
    var sleepsTo = 0;
    var monthDaysUntil = [359, 328, 300, 269, 239, 208, 178, 147, 116, 86, 55, 25];
    var picAPic = ["snowman-120px.png", "firestove-120px.png" ,"bell-120px.png", "cookie-120px.png", "christmasstar-120px.png", "candy-120px.png", "ribbon-120px.png", "stick-120px.png", "christmas-tree-120px.png", "rocket-120px.png", "rudolph-120px.png", "santacart-120px.png", "calendarchristmas-120px.png", "sinterclaus-120px.png"];
    var today = new Date();
    
    // add a day to Jan and Feb if a leap year
    var isLeap = new Date(today.getYear(), 1, 29).getMonth() == 1;
    if (today.getMonth() == 11 && today.getDate() > 25) {
      isLeap = new Date((today.getYear()+1), 1, 29).getMonth() == 1;
    };
    if(isLeap) {
      monthDaysUntil[0] = 360;
      monthDaysUntil[1] = 329;
    };
    
    //set the bg
    if (today.getMonth() == 11) {
      $('#mainwrap').addClass('christmas-bg');
    }
    else {
      $('#mainwrap').addClass('notxmas-bg');
    }
    
    //set the sleeps to Xmas
    if (today.getMonth() == 11 && today.getDate() > 25) {
      sleepsTo = (31 - today.getDate()) + monthDaysUntil[0];
      $('#sleeps').text(sleepsTo);
      $("#xmasimg").attr("src","third/img/" + picAPic[13]);
    }
    else {
      sleepsTo = monthDaysUntil[today.getMonth()] - today.getDate();
      $('#sleeps').text(sleepsTo);
      $("#xmasimg").attr("src","third/img/" + picAPic[today.getMonth()]);
    }
    
    // 1 sleep
    if(sleepsTo == 1) {
      $('#text').text("Sleep Until Christmas");
    };
    
    //if ITS CHRISTMAS!!!!
    if(sleepsTo == 0) {
      $('#sleeps').text("-");
      $('#text').text("Ho, Ho, Ho, it's Christmas!!!");
      $("#xmasimg").attr("src","third/img/" + picAPic[12]);
    };
  });