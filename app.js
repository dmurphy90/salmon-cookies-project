'use strict';

var table = document.getElementById('table_content');
var storeHours = ['Store Name', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', 'Total'];

function Store(location, minCust, maxCust, cookiesPer) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookiesPer = cookiesPer;
  this.cookiesPerHour = [];
  this.randomNum = 0;
  this.hourlyTotal = 0;
};

Store.prototype.figures = function(){
  var randomDecimal = Math.random() * (this.maxCust - this.minCust + 1) + this.minCust;
  return Math.floor(randomDecimal);
  this.randomNum.push(randomDecimal);
};

Store.prototype.salesPerHour = function(){
  var cookiesSold = 0;
  for (var i = 0; i < 15; i++) {
    cookiesSold = this.figures() * this.cookiesPer;
    cookiesSold = Math.floor(cookiesSold) + 1;
    this.cookiesPerHour.push(cookiesSold);
    console.log(cookiesSold);
  }
};

Store.prototype.dailyTotal = function(){
  var finalTotal = 0;
  for (var i = 0; i < this.cookiesPerHour.length; i++) {
    finalTotal += this.cookiesPerHour[i];
  }
  this.hourlyTotal = finalTotal;
};

var pikeStore = new Store('1st and Pike', 23, 65, 6.3);
console.log('pike store:', pikeStore.cookiesPerHour);
var seatacStore = new Store('SeaTac Airport', 3, 24, 1.2);
console.log('seatac store:', seatacStore.cookiesPerHour);
var seacenStore = new Store('Seattle Center', 11, 38, 3.7);
console.log('seacen store:', seacenStore.cookiesPerHour);
var capStore = new Store('Capitol Hill', 20, 38, 2.3);
console.log('cap store:', capStore.cookiesPerHour);
var alkiStore = new Store('Alki', 2, 16, 4.6);
console.log('alki store:', alkiStore.cookiesPerHour);

pikeStore.salesPerHour();
console.log('pike store:', pikeStore.cookiesPerHour);
seatacStore.salesPerHour();
console.log('seatac store:', seatacStore.cookiesPerHour);
seacenStore.salesPerHour();
console.log('seacen store:', seacenStore.cookiesPerHour);
capStore.salesPerHour();
console.log('cap store:', capStore.cookiesPerHour);
alkiStore.salesPerHour();
console.log('alki store:', alkiStore.cookiesPerHour);

pikeStore.dailyTotal();
console.log('pike store total:', pikeStore.hourlyTotal);
seatacStore.dailyTotal();
console.log('seatac store total:', seatacStore.hourlyTotal);
seacenStore.dailyTotal();
console.log('seacen store total:', seacenStore.hourlyTotal);
capStore.dailyTotal();
console.log('cap store total:', capStore.hourlyTotal);
alkiStore.dailyTotal();
console.log('alki store total:', alkiStore.hourlyTotal);

var totalCookies = 0;
var newRow;

var buildHeader = function() {
  var arrTimes = [];
  for (var i = 0; i < storeHours.length; i++) {
    arrTimes.push (
      '<td>' + storeHours[i] + '</td>'
    );
  };
  var tableHeader = '<tr>' + arrTimes.join('') + '</tr>';
  var newHeader = document.createElement('thead');
  var sales = document.getElementById('sales');
  newHeader.innerHTML = tableHeader;
  sales.appendChild(newHeader);
  console.log(tableHeader);
  console.log('arrTimes:', arrTimes);
};

var buildRow = function(shopObj){
  var storeNames = ['<td>' + shopObj.location + '</td>'];
  for (var j = 0; j < 15; j++) {
    storeNames.push (
      '<td>' + shopObj.cookiesPerHour[j] + '</td>'
    );
  };
  storeNames.push(shopObj.hourlyTotal);
  var tableNames = '<tr>' + storeNames.join('') + '</tr>';
  var newRow = document.createElement('tr');
  var names = document.getElementById('sales');
  newRow.innerHTML = tableNames;
  names.appendChild(newRow);
  console.log('store names:', storeNames);
};

buildHeader();
buildRow(pikeStore);
buildRow(seatacStore);
buildRow(seacenStore);
buildRow(capStore);
buildRow(alkiStore);
