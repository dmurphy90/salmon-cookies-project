'use strict';

var cookiesSold = 0;
var cookiesPerHour = [];
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


var totalCookies = 0;

var shopHourlySales = function(shopObj) {
  var arrCookieHTML = [];
  var arrOfSales = shopObj.salesPerHour();
  console.log('arrOfSales length:', arrOfSales.length);

  var storeName = document.createElement('div');
  storeName.innerHTML = '<p>' + shopObj.location + '</p>';
  document.body.appendChild(storeName);
  var docData = document.createElement('ul');
  for (var i = 0; i < storeHours.length; i++) {
    arrCookieHTML.push('<li>' + storeHours[i] + ': ' + arrOfSales[i] + '</li>');
    totalCookies += arrOfSales[i];
  };

  arrCookieHTML.push('<li> Total: ' + totalCookies + '</li>');

  var strCookieHTML = arrCookieHTML.join('');
  docData.innerHTML = strCookieHTML;
  document.body.appendChild(docData);
};

shopHourlySales(pikeStore);
shopHourlySales(seatacStore);
shopHourlySales(seacenStore);
shopHourlySales(capStore);
shopHourlySales(alkiStore);
