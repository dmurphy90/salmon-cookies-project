'use strict';

var pikeStore = {
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  cookiePer: 6.3,
  figures: function() {
    var randomDecimal = Math.random() * (this.maxCust - this.minCust + 1) + this.minCust;
    return Math.floor(randomDecimal);
  },
  salesPerHour: function () {
    var cookiesPerHour = [];
    var cookiesSold = 0;
    for (var i = 0; i < 15; i++) {
      cookiesSold = this.figures() * this.cookiePer;
      cookiesSold = Math.floor(cookiesSold) + 1;
      cookiesPerHour.push(cookiesSold);
      console.log(cookiesSold);
    }
    console.log(cookiesPerHour);
    return cookiesPerHour;
  }
};

var seatacStore = {
  location: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  cookiePer: 1.2,
  figures: function() {
    var randomDecimal = Math.random() * (this.maxCust - this.minCust + 1) + this.minCust;
    return Math.floor(randomDecimal);
  },
  salesPerHour: function () {
    var cookiesPerHour = [];
    var cookiesSold = 0;
    for (var i = 0; i < 15; i++) {
      cookiesSold = this.figures() * this.cookiePer;
      cookiesSold = Math.floor(cookiesSold) + 1;
      cookiesPerHour.push(cookiesSold);
      console.log(cookiesSold);
    }
    console.log(cookiesPerHour);
    return cookiesPerHour;
  }
};

var seacenStore = {
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  cookiePer: 3.7,
  figures: function() {
    var randomDecimal = Math.random() * (this.maxCust - this.minCust + 1) + this.minCust;
    return Math.floor(randomDecimal);
  },
  salesPerHour: function () {
    var cookiesPerHour = [];
    var cookiesSold = 0;
    for (var i = 0; i < 15; i++) {
      cookiesSold = this.figures() * this.cookiePer;
      cookiesSold = Math.floor(cookiesSold) + 1;
      cookiesPerHour.push(cookiesSold);
      console.log(cookiesSold);
    }
    console.log(cookiesPerHour);
    return cookiesPerHour;
  }
};

var capStore = {
  location: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  cookiePer: 2.3,
  figures: function() {
    var randomDecimal = Math.random() * (this.maxCust - this.minCust + 1) + this.minCust;
    return Math.floor(randomDecimal);
  },
  salesPerHour: function () {
    var cookiesPerHour = [];
    var cookiesSold = 0;
    for (var i = 0; i < 15; i++) {
      cookiesSold = this.figures() * this.cookiePer;
      cookiesSold = Math.floor(cookiesSold) + 1;
      cookiesPerHour.push(cookiesSold);
      console.log(cookiesSold);
    }
    console.log(cookiesPerHour);
    return cookiesPerHour;
  }
};

var alkiStore = {
  location: 'Alki',
  minCust: 2,
  maxCust: 16,
  cookiePer: 4.6,
  figures: function() {
    var randomDecimal = Math.random() * (this.maxCust - this.minCust + 1) + this.minCust;
    return Math.floor(randomDecimal);
  },
  salesPerHour: function () {
    var cookiesPerHour = [];
    var cookiesSold = 0;
    for (var i = 0; i < 15; i++) {
      cookiesSold = this.figures() * this.cookiePer;
      cookiesSold = Math.floor(cookiesSold) + 1;
      cookiesPerHour.push(cookiesSold);
      console.log(cookiesSold);
    }
    console.log(cookiesPerHour);
    return cookiesPerHour;
  }
};

var shopHourlySales = function (shopObj) {
  var storeHours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];
  var arrOfSales = shopObj.salesPerHour();
  console.log(arrOfSales);

  var storeName = document.createElement('div');
  storeName.innerHTML = '<p>' + shopObj.location + '</p>';
  document.body.appendChild(storeName);
  var docData = document.createElement('ul');
  var arrCookieHTML = [];
  var totalCookies = 0;
  for (var i = 0; i < storeHours.length; i++) {
    arrCookieHTML.push('<li>' + storeHours[i] + ': ' + arrOfSales[i] + '</li>')
    totalCookies += arrOfSales[i];
  }

  arrCookieHTML.push('<li> Total: ' + totalCookies + '</li>');

  var strCookieHTML = arrCookieHTML.join('');
  docData.innerHTML = strCookieHTML;
  document.body.appendChild(docData);
}

shopHourlySales(pikeStore);
shopHourlySales(seatacStore);
shopHourlySales(seacenStore);
shopHourlySales(capStore);
shopHourlySales(alkiStore);
