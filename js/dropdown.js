/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function menuFunction() {
    document.getElementById("menuDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) { // IF STATEMENT - 

    var dropdowns = document.getElementsByClassName("dropdown-content"); 
                  // declares varaible name for element to be customised.
    var i;        // dellares variable for i as a counter.

    for (i = 0; i < dropdowns.length; i++) { 
                  //for loop- checks the length of the dropdowns variable
      var openDropdown = dropdowns[i]; 
                 
                  // and passes it to the variable openDropdown
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}