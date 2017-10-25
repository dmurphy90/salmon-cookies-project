'use strict';

var table = document.getElementById('table_content');
var stores = [];
var cookiesSold = 0;
var storeHours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];

function Store(location, minCust, maxCust, cookiesPer) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookiesPer = cookiesPer;
}


Store.prototype.figures = function (){
  var randomDecimal = Math.random() * (this.maxCust - this.minCust + 1) + this.minCust;
  return Math.floor(randomDecimal);
};

Store.prototype.salesPerHour = function (){
  for (var i = 0; i < storeHours.length; i++) {
    cookiesSold = this.figures() * this.cookiesPer;
    cookiesSold = Math.floor(cookiesSold) + 1;
    cookiesPerHour.push(cookiesSold);
    console.log(cookiesSold);
  }
  console.log('cookiesPerHour:', cookiesPerHour);
  return cookiesPerHour;
};

var pikeStore = new Store('1st and Pike', 23, 65, 6.3);
var seatacStore = new Store('SeaTac Airport', 3, 24, 1.2);
var seacenStore = new Store('Seattle Center', 11, 38, 3.7);
var capStore = new Store('Capitol Hill', 20, 38, 2.3);
var alkiStore = new Store('Alki', 2, 16, 4.6);

stores.push(pikeStore);
stores.push(seatacStore);
stores.push(seacenStore);
stores.push(capStore);
stores.push(alkiStore);
console.log(stores);

// var arrOfSales = shopObj.salesPerHour();
var totalCookies = 0;
var newRow;

var buildHeader = function() {
  var arrTimes = [];
  for (var i = 0; i < storeHours.length; i++) {
    arrTimes.push (
      '<td>' + storeHours[i] + '</td>'
    );
  };
  var tableHeader = '<tr>' + arrTimes.join('') + '</tr>'
  var newHeader = document.createElement('thead');
  var sales = document.getElementById('sales');
  newHeader.innerHTML = tableHeader;
  sales.appendChild(newHeader);
  console.log(tableHeader);
  console.log('arrTimes:', arrTimes);
};

var buildRow = function(){
  var storeNames = [];
  for (var j = 0; j < storeHours.length; j++) {
    storeNames.push (
      '<tr>' +
      '<td>' + this.cookiesPerHour[j] + '</td>' +
      '</tr>'

    );
  };
  var tableNames = '<tr>' + storeNames.join('') + '</tr>'
  var newRow = document.createElement('tr');
  var names = document.getElementById('sales');
  newRow.innerHTML = tableNames;
  names.appendChild(newRow);
  console.log('store names:', storeNames);
};
// var shopHourlySales = function(shopObj) {
//   var arrCookieHTML = [];
//   var arrTimes = [];
//   var arrOfSales = shopObj.salesPerHour();
//   console.log('arrOfSales length:', arrOfSales.length);
//
//   for (var i = 0; i < storeHours.length; i++) {
//     arrTimes.push (
//       '<tr>' + storeHours[i] + '</tr>'
//     );
//   };
//   console.log('arrTimes:', arrTimes);
//
//   var newRow;
//
//   for (var j = 0; j < arrTimes.length; j++) {
//     newRow = document.createElement('tr');
//     newRow.innerHTML = arrTimes[j];
//     table.appendChild(newRow);
//   };
// };
//
// shopHourlySales(pikeStore);
// shopHourlySales(seatacStore);
// shopHourlySales(seacenStore);
// shopHourlySales(capStore);
// shopHourlySales(alkiStore);

buildHeader();
buildRow();
