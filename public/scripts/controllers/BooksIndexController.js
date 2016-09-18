// defines the apps behavior through functions
angular
  .module('bookApp')
  .controller('BooksIndexController', BooksIndexController);

  BooksIndexController.$inject = ['$http'];
  function BooksIndexController($http) {
    var vm = this;
    // debugger
    vm.newBook = {};
    vm.newBook = {
      title: "The Four Hour Workweek",
      author: "Tim Ferriss",
      image: "https://cloud.githubusercontent.com/assets/7833470/10892117/865b465a-8156-11e5-834b-9c4172d4b0fe.jpg",
      releaseDate: "April 1, 2007",
    }
    vm.books = [
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald"
      },
      {
        title: "Romeo and Juliet",
        author: "William Shakespeare"
      }
    ];
  };

  // $http({
  //   method: 'GET',
  //   url: '/api/books'
  // }).then(function successCallback(response) {
  //   vm.albums = response.data;
  // }, function errorCallback(response) {
  //   console.log('There was an error', response);
  // });
  //
  // vm.createAlbum = function () {
  //   $http({
  //     method: 'POST',
  //     url: '/api/books'
  //     data: vm.newBook
  //   }).then(fuction successCallback(response) {
  //     vm.books.push(response.data);
  //   }, function errorCallback(response) {
  //     console.log('There was an error posting info', response)
  //   });
  // }
