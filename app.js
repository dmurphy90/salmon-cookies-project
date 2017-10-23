'use strict';

var pikeStore = {
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  cookiePer: 6.3,
  figures: function() {
    return pikeStore.location + ' averages a minimum of ' + pikeStore.minCust + ' customers, a maximum of ' + pikeStore.maxCust + ' with an average of ' + pikeStore.cookiePer + ' cookies sold per customer';
  }
};

var seatacStore = {
  location: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  cookiePer: 1.2,
  figures: function() {
    return seatacStore.location + ' averages a minimum of ' + seatacStore.minCust + ' customers, a maximum of ' + seatacStore.maxCust + ' with an average of ' + seatacStore.cookiePer + ' cookies sold per customer';
  }
};

var seacenStore = {
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  cookiePer: 3.7,
  figures: function() {
    return seacenStore.location + ' averages a minimum of ' + seacenStore.minCust + ' customers, a maximum of ' + seacenStore.maxCust + ' with an average of ' + seacenStore.cookiePer + ' cookies sold per customer';
  }
};

var capStore = {
  location: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  cookiePer: 2.3,
  figures: function() {
    return capStore.location + ' averages a minimum of ' + capStore.minCust + ' customers, a maximum of ' + capStore.maxCust + ' with an average of ' + capStore.cookiePer + ' cookies sold per customer';
  }
};

var alkiStore = {
  location: 'Alki',
  minCust: 2,
  maxCust: 16,
  cookiePer: 4.6,
  figures: function() {
    return alkkStore.location + ' averages a minimum of ' + alkiStore.minCust + ' customers, a maximum of ' + alkiStore.maxCust + ' with an average of ' + alkiStore.cookiePer + ' cookies sold per customer';
  }
};
