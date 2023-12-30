document.addEventListener('DOMContentLoaded', function() {
    var links = document.getElementsByTagName('a');
    var activeLinkText = document.getElementById('active-link-text');
  
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function(event) {
        // Remove active class from all links
        for (var j = 0; j < links.length; j++) {
          links[j].classList.remove('active');
        }
  
        // Add active class to the clicked link
        event.target.classList.add('active');
  
        // Display the text of the active link in the paragraph below
        activeLinkText.innerText = 'Active link: ' + event.target.innerText;
      });
    }
  });