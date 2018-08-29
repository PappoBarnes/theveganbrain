/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction_2() {
    document.getElementById("myDropdown_2").classList.toggle("show_2");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn_2')) { // IF STATEMENT - 

    var dropdown = document.getElementsByClassName("dropdown-content_2"); 
                  // declares varaible name for element to be customised.
    var i;        // dellares variable for i as a counter.

    for (i = 0; i < dropdown.length; i++) { 
                  //for loop- checks the length of the dropdowns variable
      var openDropdown = dropdown[i]; 
                 
                  // and passes it to the variable openDropdown
      if (openDropdown.classList.contains('show_2')) {
        openDropdown.classList.remove('show_2');
      }
    }
  }
}