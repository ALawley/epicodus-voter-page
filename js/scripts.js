$(document).ready(function() {
  if (confirm("Are you at least 18 years old?")) {
    $('#registration').show();
  } else {
    $('#information').show();
  }
});
