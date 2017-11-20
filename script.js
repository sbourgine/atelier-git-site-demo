$(document).ready(function() {
    
    var sleepsTo = 0;
    var monthDaysUntil = [359, 328, 300, 269, 239, 208, 178, 147, 116, 86, 55, 25];
    var picAPic = ["630n0zf4ejjqhb3/snowman-120px.png", "a9v1dtgs9m4g5h3/firestove-120px.png" ,"5uqou2o4ya9agh1/bell-120px.png", "cqn10s10hv9xtne/cookie-120px.png", "k54f3genpvbqr3e/christmasstar-120px.png", "yqpfttxnara7cx7/candy-120px.png", "hhu9jsyhuk39954/ribbon-120px.png", "qqbd9ui5t5wrwoy/stick-120px.png", "f2uaiqo50kecdwl/christmas-tree-120px.png", "mdd0v8rn0zf5dcq/rocket-120px.png", "f9n2w4nfujleve3/rudolph-120px.png", "bmu0m8wxqjvbksz/santacart-120px.png", "ilrzah9sw95ezwr/calendarchristmas-120px.png", "9ox8sbx4s0va0xo/sinterclaus-120px.png"];
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
      $("#xmasimg").attr("src","https://dl.dropboxusercontent.com/s/" + picAPic[13]);
    }
    else {
      sleepsTo = monthDaysUntil[today.getMonth()] - today.getDate();
      $('#sleeps').text(sleepsTo);
      $("#xmasimg").attr("src","https://dl.dropboxusercontent.com/s/" + picAPic[today.getMonth()]);
    }
    
    // 1 sleep
    if(sleepsTo == 1) {
      $('#text').text("Sleep Until Christmas");
    };
    
    //if ITS CHRISTMAS!!!!
    if(sleepsTo == 0) {
      $('#sleeps').text("-");
      $('#text').text("Ho, Ho, Ho, it's Christmas!!!");
      $("#xmasimg").attr("src","https://dl.dropboxusercontent.com/s/" + picAPic[12]);
    };
  });