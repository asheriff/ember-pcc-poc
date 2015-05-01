$(function() {
  $('BODY').on('click', '.back-button', function(e) {
    e.preventDefault();
    window.history.back();
    return false;
  })
})
