'use strict';
var form = document.getElementById('sample_form');
var table = document.getElementById('sales_table');
var storeData = [];
var storeHours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];

function Store(location, maxCust, minCust, cookiesPer) {
  this.location = location;
  this.maxCust = parseInt(maxCust);
  this.minCust = parseInt(minCust);
  this.cookiesPer = parseInt(cookiesPer);
  this.cookiesPerHour = [];
  this.totalCookies = 0;
}

function formData(event) {
  event.preventDefault();

  var location = event.target.location.value;
  var maxCust = event.target.maxCust.value;
  var minCust = event.target.minCust.value;
  var cookiesPer = event.target.cookiesPer.value;

  if (parseInt(minCust) < parseInt(maxCust)) {
    storeData.push(new Store(location, maxCust, minCust, cookiesPer));
    console.log('store data:', storeData);
    buildHeader();
    createTable();
    hourlyTotals();
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
  for (var i = 0; i < storeHours.length; i++) {
    var randomInt = Math.floor(Math.random() * (max - min) + min);
    var hourlyCookies = Math.floor(randomInt * this.cookiesPer);
    cookiesHourly.push(hourlyCookies);
    finalCookies += hourlyCookies;
    console.log('random num:', randomInt);
  }
  this.totalCookies = finalCookies;
  this.cookiesPerHour = cookiesHourly;
  console.log('cookies per hour:', cookiesHourly);
  console.log('total cookies:', finalCookies);
};

function buildHeader() {
  var arrTimes = [];
  for (var i = 0; i < storeHours.length; i++) {
    arrTimes.push (
      '<td>' + storeHours[i] + '</td>'
    );
  };
  var tableHeader = '<tr>' + arrTimes.join('') + '</tr>';
  var newHeader = document.createElement('thead');
  var table = document.getElementById('sales_table');
  newHeader.innerHTML = tableHeader;
  table.appendChild(newHeader);
  console.log(tableHeader);
  console.log('arrTimes:', arrTimes);
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

    for (var j = 0; j < storeHours.length; j++) {
      hourSales.push(
        '<td>' + storeData[i].cookiesPerHour[j] + '</td>'
      );
    };
    hourSales.push(storeData[i].totalCookies);
    newRow.innerHTML = hourSales.join('');
    table.appendChild(newRow);
  };

}

function hourlyTotals() {
  var footer = document.createElement('tfoot');
  var totalName = ['<td>' + 'Hourly Total' + '</td>'];
  var newRow = document.createElement('tr');
  // footer.appendChild(totalName);
  // totalName.textContent = 'Hourly Totals';

  for (var i = 0; i < storeHours.length; i++) {
    var hourlyTotal = 0;
    for (var j = 0; j < storeData.length; j++){
      hourlyTotal += storeData[j].cookiesPerHour[i];
      totalName.push(
        '<td>' + hourlyTotal + '</td>'
      );
    }
    // var hourlyTotalTd = document.createElement('td');
    newRow.innerHTML = hourlyTotal;
    footer.appendChild(newRow);
    // hourlyTotalTd.textContent = hourlyTotal;
  }
  table.appendChild(footer);
}

form.addEventListener('submit', formData);
