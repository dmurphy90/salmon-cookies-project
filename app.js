'use strict';
var form = document.getElementById('sample_form');
var table = document.getElementById('sales_table');
var storeData = [];

function Store(location, maxCust, minCust, cookiesPer) {
  this.location = location;
  this.maxCust = maxCust;
  this.minCust = minCust;
  this.cookiesPer = cookiesPer;
  this.cookiesPerHour = [];
  this.totalCookies = 0;
  this.storeHours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];
}

function formData(event) {
  event.preventDefault();

  var location = event.target.location.value;
  var maxCust = event.target.maxCust.value;
  var minCust = event.target.minCust.value;
  var cookiesPer = event.target.cookiesPer.value;

  if (Number(minCust) < Number(maxCust)) {
    storeData.push(new Store(location, maxCust, minCust, cookiesPer));
    console.log('store data:', storeData);
    createTable();
    form.reset();
  } else {
    alert ('Max Customers must be greater than Min Customers');
  }
}

Store.prototype.salesPerHour = function() {
  var max = this.maxCust;
  var min = this.minCust;
  var finalCookies = 0;
  var cookiesHourly = [];
  for (var i = 0; i < this.storeHours.length; i++) {
    var randomInt = Math.floor(Math.random() * (max - min) + min);
    var hourlyCookies = Math.floor(randomInt * this.cookiesPer);
    cookiesHourly.push(hourlyCookies);
    finalCookies += hourlyCookies;
    console.log('random num:', randomInt);
  }
  this.totalCookies = finalCookies;
  this.cookiesPerHour = cookiesHourly;
  console.log('!!!', cookiesHourly);
  console.log('@@@', finalCookies);
};

function createTable() {
  document.getElementById('sales_table').innerHTML = '';
  for (var i = 0; i < storeData.length; i++) {
    if (storeData[i].cookiesPerHour.length === 0) {
      storeData[i].salesPerHour();
    }
    var hourSales = ['<td>' + storeData[i].location + '</td>'];
    var newRow = document.createElement('tr');

    console.log(storeData[i].cookiesPerHour);

    for (var j = 0; j < storeData[i].storeHours.length; j++) {
      hourSales.push(
        '<td>' + storeData[i].cookiesPerHour[j][1] + '</td>'
      );
    };
    hourSales.push(storeData[i].totalCookies);
    newRow.innerHTML = hourSales.join('');
    table.appendChild(newRow);
  };
}

form.addEventListener('submit', formData);
// Store.prototype.figures = function(){
//   var randomDecimal = Math.random() * (this.maxCust - this.minCust + 1) + this.minCust;
//   return Math.floor(randomDecimal);
//   this.randomNum.push(randomDecimal);
// };
//
// Store.prototype.salesPerHour = function(){
//   var cookiesSold = 0;
//   for (var i = 0; i < 15; i++) {
//     cookiesSold = this.figures() * this.cookiesPer;
//     cookiesSold = Math.floor(cookiesSold) + 1;
//     this.cookiesPerHour.push(cookiesSold);
//     console.log(cookiesSold);
//   }
// };
//
// Store.prototype.dailyTotal = function(){
//   var finalTotal = 0;
//   for (var i = 0; i < this.cookiesPerHour.length; i++) {
//     finalTotal += this.cookiesPerHour[i];
//   }
//   this.hourlyTotal = finalTotal;
// };


// var pikeStore = new Store('1st and Pike', 23, 65, 6.3);
// console.log('pike store:', pikeStore.cookiesPerHour);
// var seatacStore = new Store('SeaTac Airport', 3, 24, 1.2);
// console.log('seatac store:', seatacStore.cookiesPerHour);
// var seacenStore = new Store('Seattle Center', 11, 38, 3.7);
// console.log('seacen store:', seacenStore.cookiesPerHour);
// var capStore = new Store('Capitol Hill', 20, 38, 2.3);
// console.log('cap store:', capStore.cookiesPerHour);
// var alkiStore = new Store('Alki', 2, 16, 4.6);
// console.log('alki store:', alkiStore.cookiesPerHour);

// pikeStore.salesPerHour();
// console.log('pike store:', pikeStore.cookiesPerHour);
// seatacStore.salesPerHour();
// console.log('seatac store:', seatacStore.cookiesPerHour);
// seacenStore.salesPerHour();
// console.log('seacen store:', seacenStore.cookiesPerHour);
// capStore.salesPerHour();
// console.log('cap store:', capStore.cookiesPerHour);
// alkiStore.salesPerHour();
// console.log('alki store:', alkiStore.cookiesPerHour);
//
// pikeStore.dailyTotal();
// console.log('pike store total:', pikeStore.hourlyTotal);
// seatacStore.dailyTotal();
// console.log('seatac store total:', seatacStore.hourlyTotal);
// seacenStore.dailyTotal();
// console.log('seacen store total:', seacenStore.hourlyTotal);
// capStore.dailyTotal();
// console.log('cap store total:', capStore.hourlyTotal);
// alkiStore.dailyTotal();
// console.log('alki store total:', alkiStore.hourlyTotal);
//
// var totalCookies = 0;
// var newRow;
//
// var buildHeader = function() {
//   var arrTimes = [];
//   for (var i = 0; i < storeHours.length; i++) {
//     arrTimes.push (
//       '<td>' + storeHours[i] + '</td>'
//     );
//   };
//   var tableHeader = '<tr>' + arrTimes.join('') + '</tr>';
//   var newHeader = document.createElement('thead');
//   var sales = document.getElementById('sales');
//   newHeader.innerHTML = tableHeader;
//   sales.appendChild(newHeader);
//   console.log(tableHeader);
//   console.log('arrTimes:', arrTimes);
// };
//
// var buildRow = function(shopObj){
//   var storeNames = ['<td>' + shopObj.location + '</td>'];
//   for (var j = 0; j < 15; j++) {
//     storeNames.push (
//       '<td>' + shopObj.cookiesPerHour[j] + '</td>'
//     );
//   };
//   storeNames.push(shopObj.hourlyTotal);
//   var tableNames = '<tr>' + storeNames.join('') + '</tr>';
//   var newRow = document.createElement('tr');
//   var names = document.getElementById('sales');
//   newRow.innerHTML = tableNames;
//   names.appendChild(newRow);
//   console.log('store names:', storeNames);
// };
//
// buildHeader();
// buildRow(pikeStore);
// buildRow(seatacStore);
// buildRow(seacenStore);
// buildRow(capStore);
// buildRow(alkiStore);
