

function submitFeedback() {
    var feedbackText = document.getElementById('feedback').value;
    if (feedbackText.trim() !== '') {
      addReview(feedbackText);
      document.getElementById('feedback').value = '';
    }
  }
  
  function addReview(feedback) {
    var reviewList = document.getElementById('reviewList');
    var li = document.createElement('li');
    li.className = 'review-item';
    var p = document.createElement('p');
    p.textContent = feedback;
    li.appendChild(p);
    reviewList.appendChild(li);
  }