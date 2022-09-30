/*!
* Start Bootstrap - Modern Business v5.0.6 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

setTheme = (theme) => {
    let currentTheme = document.getElementById('theme');

    switch(theme){
        case 'darkly':
            currentTheme.setAttribute('href', 'css/darkly.min.css');
            break;
       
        case 'simplex':
            currentTheme.setAttribute('href', 'css/sandstone.min.css');
            break;
        case 'sketchy':
            currentTheme.setAttribute('href', 'css/sketchy.min.css');
            break;
        case 'minty':
            currentTheme.setAttribute('href', 'css/minty.min.css');
            break;
            
    }
    localStorage.setItem('jsTheme', theme);
}

if(localStorage.getItem('jsTheme') != null){
    setTheme(localStorage.getItem('jsTheme'));
}

$(function(){
    $(".ss-menu").ssMenu({
        
    });

  });
