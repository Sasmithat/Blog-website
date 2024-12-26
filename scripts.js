
// Handle the comment form submission
document.getElementById('commentForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from reloading the page

  // Get the user's name and comment text
  const name = document.getElementById('commentName').value;
  const comment = document.getElementById('commentText').value;

  // Create a new comment element
  const commentItem = document.createElement('div');
  commentItem.classList.add('comment-item');

  // Add the name and comment text
  commentItem.innerHTML = `
      <p class="comment-author">${name}</p>
      <p class="comment-text">${comment}</p>
  `;

  // Append the new comment to the comments list
  document.getElementById('commentsList').appendChild(commentItem);

  // Clear the form fields
  document.getElementById('commentName').value = '';
  document.getElementById('commentText').value = '';
});

// Simulate viewing a post (to be extended later)
function viewPost(postId) {
  alert("This is post " + postId + ". Redirecting to full post page...");
}
$(document).ready(function(){
  $('.slider').slick({
      infinite: true,           // Enable infinite looping
      slidesToShow: 1,          // Show 1 slide at a time
      slidesToScroll: 1,        // Scroll 1 slide at a time
      autoplay: true,           // Enable autoplay
      autoplaySpeed: 3000,      // Set autoplay speed (3 seconds)
      dots: true,               // Show navigation dots
      arrows: true,             // Show previous and next arrows
      fade: true,               // Enable fade effect for smoother transitions
  });
});