
angular
  .module('bookApp', [])
  .config(config)

  config.$inject = ['$routeProvider', '$locationProvider'];


  function config ($routeProvider, $locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'templates/books',
        controllerAs: 'booksIndexCtrl',
        controller: 'BooksIndexController'
      })
      .when('/books/:id', {
        templateUrl: 'templates/books-show',
        controllerAs: 'booksShowctrl',
        controller: 'BooksShowController'
      });
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
      };


      })
  }
