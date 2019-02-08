$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results==null) {
      return null;
  }
  return decodeURI(results[1]) || 0;
};

function sortByKeyDesc(array, key) {
  return array.sort(function (a, b) {
    var x = a[key]; var y = b[key];
    return ((x > y) ? -1 : ((x < y) ? 1 : 0));
  });
}

function sortByKeyAsc(array, key) {
  return array.sort(function (a, b) {
    var x = a[key]; var y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}


// Convert to human time
Handlebars.registerHelper('humanTime', function(value) {
  var humanTime = moment(value, "YYYY-MM-DD").fromNow();
  return humanTime;
});

// Convert to human time
Handlebars.registerHelper('awesomeTime', function(value) {
  var awesomeTime = moment().format("Do MMMM YYYY");
  return awesomeTime;
});

// limit an array to a maximum of elements (from the start)
Handlebars.registerHelper('limit', function (arr, limit) {
  if (!Array.isArray(arr)) { return []; }
  return arr.slice(0, limit);
});

// Replace 
Handlebars.registerHelper('nameFixed', function(value) {
  value = value.toString().replace(/&amp;/g, '&')
  value = value.replace(/&&#35;41;/g, ')')
  value = value.replace(/&&#35;40;/g, '(')
  return value;
});