// Write your solution in this file!
var customerName = "bob";
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

var bestCustomer;
function setBestCustomer(){
    bestCustomer = "not bob";
}

function overwriteBestCustomer(newCustomer) {
    window.bestCustomer = newCustomer;
  }



  function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = 'Alice';
    leastFavoriteCustomer = 'Bob'; 
  }