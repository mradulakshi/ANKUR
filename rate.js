document.addEventListener("DOMContentLoaded", function() {
    var submitBtn = document.getElementById("submitReview");
    var reviewText = document.getElementById("reviewText");
    var reviewsList = document.getElementById("reviewsList");

    submitBtn.onclick = function() {
        var review = reviewText.value.trim();
        if (review) {
            var reviewElement = document.createElement("div");
            reviewElement.className = "review";
            reviewElement.textContent = review;
            reviewsList.appendChild(reviewElement);
            reviewText.value = "";
        } else {
            alert("Please write a review before submitting.");
        }
    }
});
