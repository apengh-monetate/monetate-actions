(function() {
    var reviews = 'divProductDetailsCustomerReviewWrapper';
    var readReviewsLink = document.getElementById('mtScrollToReviews');

    readReviewsLink.addEventListener('click', function() {
        document.getElementById(reviews).scrollIntoView({
            behavior: 'smooth'
        });
    });
})();
