// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('Klasy', [
  'ionic',
  'Klasy.controllers',
  'Klasy.services',
  'ngMap',
  'pascalprecht.translate'
  ])

.run(function($ionicPlatform, $ionicPopup, $translate) {
        
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    if(navigator.connection.type == Connection.NONE) { 
        $ionicPopup.confirm({
            title: "Internet Disconnected",
            content: "Please connect to the internet and come back."
        })
        .then(function(result) {
            if(!result) {
                ionic.Platform.exitApp();
            }
        });
    }
    if(typeof navigator.globalization !== "undefined") {
      navigator.globalization.getPreferredLanguage(function(language) {
        $translate.use((language.value).split("-")[0]).then(function(data) {
          console.log("SUCCESS -> " + data);
        }, function(error) {
          console.log("ERROR -> " + error);
        });
      }, null);
    }

    // // Google Analytics
    // // https://blog.nraboy.com/2014/06/using-google-analytics-ionicframework/
    // $ionicPlatform.ready(function() {
    //     if(typeof analytics !== undefined) {
    //         analytics.startTrackerWithId("UA-35993973-9");
    //     } else {
    //         console.log("Google Analytics Unavailable");
    //     }
    // });

    // // Google AdMob
    // // https://blog.nraboy.com/2014/06/using-admob-ionicframework/
    // if(window.plugins && window.plugins.AdMob) {
    //   var admob_key = device.platform == "Android" ? "ANDROID_PUBLISHER_KEY" : "IOS_PUBLISHER_KEY";
    //   var admob = window.plugins.AdMob;
    //   admob.createBannerView(
    //       {
    //           'publisherId': admob_key,
    //           'adSize': admob.AD_SIZE.BANNER,
    //           'bannerAtTop': false
    //       }, 
    //       function() {
    //           admob.requestAd(
    //               { 'isTesting': false },
    //               function() {
    //                   admob.showAd(true);
    //               }, 
    //               function() { console.log('failed to request ad'); }
    //           );
    //       }, 
    //       function() { console.log('failed to create banner view'); }
    //     );
    //   }
    //

  });
})

.config(function($stateProvider, $urlRouterProvider, $translateProvider) {

  // Begin Lang()
  // $translateProvider.translations('en', translations_en);
  // $translateProvider.translations('es', translations_es);

  $translateProvider.translations('en', {
    // Menu
    'Featured': 'Featured',
    'StaffPicks': 'Staff Picks',
    'Newest':'Newest',
    'Home':'Home',
    'MyFavs':'My Favs',
    'MyAds':'My Ads',
    'Messages':'Messages',
    'Settings':'Settings',
    'NearMe':'Near Me',
    'Terms':'Terms of Use',
    'Help':'Help',
    'LogOut':'Log Out',
    'LogIn':'Log In',
    // Item
    'ReportThis':'Report this listing',
    'SignToReport':'Sign up or Login to report this listing',
    // Comments
    'Comments':'Comments',
    'SignToComment':'Login / Register to comment',
    'AddMessage':'Add your message',
    'Comment':'Comment',
    // Login
    'Login':'Login',
    'Email':'E-mail',
    'Password':'Password',
    'ForgotPass':'Forgot Password',
    'RegisterNow':'Register',
    'NewAccount':'Don\'t have an account?',
    // Reset pass
    'ResetPassword':'Reset Password',
    // SignIn
    'AlreadyRegistered':'Already registered?',
    'SignIn':'Sign In',
    'Phone':'Phone Number',
    'WhereAreYouFrom':'Where Are You From?',
    'IsRequired':'is required.',
    'Youremailaddress':'Your email address',
    'Weneedyourphonenumber':'We need your phone number',
    'Chooseapassword':'Choose a password',
    // Categories
    'aO8XZPZZfs':'Buy / Sell',// buy/sel
    'x9spj4HMwH':'Services',// services
    'jgwBXXUKh6':'Dating',// dating
    'qtMW5XJ8tq':'Real Estate',// real estate
    'K0XEtf2TcT':'Jobs / Hire',// jobs
    'e4vU3E5cAv':'Cars',// cars
    // by Categories
    'NoListings':'No listings',
    'ThisCategory':'for this category',
    'AddYours':'Add yours',
    // Near Me
    'Details':'details',
    // usercomments
    'NoMessages':'You have no messages.',
    // userfavs
    'NoFavourites':'You have no favourites.',
    'Myfavourites':'my favourites',
    // listing
    'You have no items. Add a new one ':'You have no items. Add a new one ',
    'Here':'here.',
    'MyListings':'my listings',
    'Whatdoyouwanttosell':'What do you want to sell?',
    'Whattypeofpostingis':'What type of posting is?',
    'Title':'Product name',
    'Category':'Category',
    'selectpicture':'Select a picture (Required)',
    'Price':'Price',
    'Describe':'Describe in a few words',
    'Description':'Description',
    'Featured':'Featured',
    'YourEmailaddress':'Your email address',
    'YourPhoneNumber':'Your phone number',
    'ChoosePassword':'Choose a password',
    'Submit':'Submit',
    'CompleteForm':'Fill form application',
    'PremiumExtras':'Some features are pay. You will receive an confirmation email.',
    // settings
    'NewLocation':'Select a new location',
    'SelectPicture':'Select profile picture',
    // Search 
    'Close':'Close',
    'TermsOfSearch':'Terms of Search',
    'Search':'Search',
    'NoResults':'No results',
    'foryoursearch':'for your search',
    // Help
    'WhatcanyoudowithFindBy':'What can you do with FindBy?',
    'Postaadsclassifiedtoyourstuff':'Post a ads classified to your stuff',
    'Findpostnearbyyourlocation':'Find post nearby your location',
    'Promoteyourbusinessservices':'Promote your business services',
    'Postjobshireemployees':'Post jobs, hire employees',
    'Skyisthelimit':'Sky is the limit!',
    'support1':'Need support with your ads or have any questions? Drop us a line to',
    'support2':'or tweets us at'
  });
  $translateProvider.translations('es', {
    // Menu
    'Featured': 'Destacados',
    'StaffPicks': 'Recomendadas',
    'Newest':'Lo nuevo',
    'Home':'Inicio',
    'MyFavs':'Favoritos',
    'MyAds':'Anuncios',
    'Messages':'Preguntas',
    'Settings':'Ajustes',
    'NearMe':'Cercanos',
    'Terms':'Terminos',
    'Help':'Ayuda',
    'LogOut':'Salir',
    'LogIn':'Entrar',
    // Item
    'ReportThis':'Marcar como inapropiado',
    'SignToReport':'Acceder para reportar',
    // Comments
    'Comments':'Preguntas',
    'SignToComment':'Entrar / Registrarse para comentar',
    'AddMessage':'Escribe tu pregunta',
    'Comment':'Enviar',
    // Login
    'Login':'Login',
    'Email':'E-mail',
    'Password':'Contraseña',
    'ForgotPass':'Olvide mi contraseña',
    'RegisterNow':'Quiero registrarme',
    'NewAccount':'No tengo una cuenta',
    // Reset pass
    'ResetPassword':'Cambiar contraseña',
    // SignIn
    'AlreadyRegistered':'Ya tengo una cuenta',
    'SignIn':'Registrarme',
    'Phone':'Teléfono',
    'WhereAreYouFrom':'De donde eres?',
    'IsRequired':'es requerido.',
    'Location':'Ubicación',
    'Youremailaddress':'Su E-mail',
    'Weneedyourphonenumber':'Necesitamos su teléfono',
    'Chooseapassword':'Escriba una contraseña',
    // Categories
    'aO8XZPZZfs':'Compra / Venta',// buy/sell
    'x9spj4HMwH':'Servicios',// services
    'jgwBXXUKh6':'Citas',// dating
    'qtMW5XJ8tq':'Inmobiliarias',// real estate
    'K0XEtf2TcT':'Trabajo',// jobs
    'e4vU3E5cAv':'Carros',// cars
    // by Categories
    'NoListings':'No hay anuncios',
    'ThisCategory':'para la categoria',
    'AddYours':'Agregar nuevo',
    // Near Me
    'Details':'Ver mas',
    // usercomments
    'NoMessages':'No tienes preguntas.',
    // usercomments
    'NoFavourites':'No tienes favoritos.',
    'Myfavourites':'Mis favoritos',
    // listing
    'NoItems':'You have no items. Add a new one ',
    'Here':'here.',
    'MyListings':'Mis publicaciones',
    'Whatdoyouwanttosell':'Que desea publicar?',
    'Whattypeofpostingis':'Que tipo de anuncio?',
    'Title':'Titulo',
    'Category':'Categoria',
    'selectpicture':'Seleccione una imagen (Requerida)',
    'Price':'Precio',
    'Describe':'Describa su anuncio',
    'Description':'Descripción',
    'Featured':'Destacado',
    'YourEmailaddress':'Introduzca su correo',
    'YourPhoneNumber':'Su teléfono',
    'ChoosePassword':'Elija una contraseña',
    'Submit':'Enviar',
    'CompleteForm':'Complete el formulario',
    'PremiumExtras':'Algunas caracteristicas son pagas. Ud recibirá un correo de confirmación.',
    // settings
    'NewLocation':'Agrega una nueva ubicación',
    'SelectPicture':'Escoge una nueva foto de perfil',
    // Search 
    'Close':'Cerrar',
    'TermsOfSearch':'Buscar...',
    'Search':'Busqueda',
    'NoResults':'No hay resultados',
    'foryoursearch':'para su busqueda',
    // Help
    'WhatcanyoudowithFindBy':'Que puedo hacer con FindBy?',
    'Postaadsclassifiedtoyourstuff':'Publicar sus objectos para venderlos',
    'Findpostnearbyyourlocation':'Conseguir anuncios cercanos',
    'Promoteyourbusinessservices':'Promover sus servicios profesionales',
    'Postjobshireemployees':'Publicar ofertas de trabajo o contratar empleados',
    'Skyisthelimit':'El cielo es el limite!',
    'support1':'Necesita ayuda para publicar su anuncio o quiere contactarnos? Envianos un correo a',
    'support2':' o envianos un tuit a'
  });

  // English by Default
  $translateProvider.preferredLanguage("en");
  $translateProvider.fallbackLanguage("en");
    
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "templates/home.html",
        controller: 'HomeCtrl'
      }
    }
  })
  
    .state('app.add', {
    url: "/add",
    views: {
      'menuContent': {
        templateUrl: "templates/add.html",
        controller: 'AddCtrl'
      }
    }
  })

  .state('app.items', {
    url: "/items/:id",
    views: {
      'menuContent': {
        templateUrl: "templates/items.html",
        controller: 'ItemsCtrl'
      }
    }
  })

  .state('app.item', {
    url: "/item/:id",
    views: {
      'menuContent': {
        templateUrl: "templates/item.html",
        controller: 'ItemCtrl'
      }
    }
  })
  
    .state('app.useritems', {
    url: "/useritems",
    views: {
      'menuContent': {
        templateUrl: "templates/useritems.html",
        controller: 'UserItemsCtrl'
      }
    }
  })
  
  .state('app.userfavourites', {
    cache: false,
    url: "/userfavourites",
    views: {
      'menuContent': {
        templateUrl: "templates/userfavourites.html",
        controller: 'UserFavouritesCtrl'
      }
    }
  })
  
  .state('app.usercomments', {
    url: "/usercomments",
    views: {
      'menuContent': {
        templateUrl: "templates/usercomments.html",
        controller: 'UserCommentsCtrl'
      }
    }
  })
  
  .state('app.help', {
    url: "/help",
    views: {
      'menuContent': {
        templateUrl: "templates/help.html",
        controller: 'HelpCtrl'
      }
    }
  })
  
  .state('app.settings', {
    url: "/settings",
    views: {
      'menuContent': {
        templateUrl: "templates/settings.html",
        controller: 'SettingsCtrl'
      }
    }
  })
  
  .state('app.nearme', {
    cache: false,
    url: "/nearme",
    views: {
      'menuContent': {
        templateUrl: "templates/nearme.html",
        controller: 'NearMeCtrl'
      }
    }
  })
  
  .state('app.searchResults', {
    cache: false,
    url: "/results",
    views: {
      'menuContent': {
        templateUrl: "templates/searchResults.html",
        controller: 'SearchResultsCtrl'
      }
    }
  })
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
