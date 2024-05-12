document.getElementById('subscribeBtn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function submitEmail() {
    var email = document.getElementById("email").value;
    // Validate email here if needed

    // Redirect to specified link
    window.location.href = "https://www.example.com/thank-you?email=" + encodeURIComponent(email);
}
