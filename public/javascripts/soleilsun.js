/*
 * soleilsun.js
 * ----------------------------------------
 * Initializes soleilsun web application.
 * 
 */

Galleria.loadTheme('/galleria/themes/classic/galleria.classic.min.js');
Galleria.run('#galleria');

$(document).ready(function() {

  // When document loads, remove loading.gif and display webapp.
  $('.container .gallery .loading').remove();
  $('.container .gallery #galleria').css('display', 'block');

});