var redirectButton = document.getElementById("button"),
    homeButton = document.getElementById("home"),
    servicesButton = document.getElementById("services"),
    aboutButton = document.getElementById("about"),
    contactButton = document.getElementById("contact"),
    chooseButton = document.getElementById("choose"),
    selectButton = document.getElementById("select"),
    directionButton = document.getElementById("direction"),
    resultButton = document.getElementById("result"),
    searchButton = document.getElementById("search"),
    detailsButton = document.getElementById("details");
    

redirectButton.onclick = function () {
    "use strict";
    //location.href = "#SERVICES";
    document.getElementById('SERVICES').style.display = 'block';
    document.getElementById('first').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('direction').style.display = 'none';
    document.getElementById('ABOUT').style.display = 'none';
    document.getElementById('fixed').style.backgroundImage = 'linear-gradient(90deg, #2f5c86 , #100234)';
};

homeButton.onclick = function () {
    "use strict";
    document.getElementById('SERVICES').style.display = 'none';
    document.getElementById('first').style.display = 'block';
    document.getElementById('ABOUT').style.display = 'none';
    document.getElementById('direction').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('CONTACT').style.display = 'none';
    document.getElementById('fixed').style.backgroundImage = 'linear-gradient(90deg, #2f5c86 , #11397d )';
}
aboutButton.onclick = function () {
    "use strict";
    document.getElementById('first').style.display = 'none';
    document.getElementById('SERVICES').style.display = 'none';
    document.getElementById('ABOUT').style.display = 'block';
    document.getElementById('fixed').style.backgroundColor = '2F5C86';
    document.getElementById('CONTACT').style.display = 'none';
    document.getElementById('direction').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('fixed').style.backgroundImage= 'none';
}
servicesButton.onclick = function () {
    "use strict";
    document.getElementById('SERVICES').style.display = 'block';
    document.getElementById('first').style.display = 'none';
    document.getElementById('ABOUT').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('direction').style.display = 'none';
    document.getElementById('CONTACT').style.display = 'none';
    document.getElementById('fixed').style.backgroundImage = 'linear-gradient(90deg, #2f5c86 , #100234)';
}
contactButton.onclick = function () {
    "use strict";
    document.getElementById('first').style.display = 'none';
    document.getElementById('SERVICES').style.display = 'none';
    document.getElementById('ABOUT').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('direction').style.display = 'none';
    document.getElementById('CONTACT').style.display = 'block';
    document.getElementById('fixed').style.backgroundImage = 'linear-gradient(90deg, #2f5c86 , #11397d )';
};

servicesButton.addEventListener('mouseover', function () {
    "use strict";
    document.getElementById('choose').style.display = 'block';

});
// servicesButton.addEventListener('mouseleave', function () {
//   "use strict";
//   document.getElementById('choose').style.display = 'none';
//});
searchButton.onclick = function () {
    "use strict";
    document.getElementById('first').style.display = 'none';
    document.getElementById('SERVICES').style.display = 'none';
    document.getElementById('ABOUT').style.display = 'none';
    document.getElementById('CONTACT').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('direction').style.display = 'none';
    document.getElementById('fixed').style.backgroundImage = 'linear-gradient(90deg, #2f5c86 , #11397d )';
}; 
detailsButton.onclick = function () {
    "use strict";
    document.getElementById('first').style.display = 'none';
    document.getElementById('SERVICES').style.display = 'none';
    document.getElementById('ABOUT').style.display = 'none';
    document.getElementById('CONTACT').style.display = 'none';
    document.getElementById('result').style.display = 'none';    
    document.getElementById('direction').style.display = 'block';    
    document.getElementById('fixed').style.backgroundImage = 'linear-gradient(90deg, #2f5c86 , #11397d )';
}; 
