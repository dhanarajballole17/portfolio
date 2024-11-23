document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the default form submission

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const description = document.getElementById('description').value;

    // Prepare data to be sent
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', description);

    // Send data using fetch API
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Handle success
        if (data.success) {
            document.getElementById('response-message').innerHTML = '<p>Message sent successfully!</p>';
            document.getElementById('contact-form').reset(); // Reset form after success
        } else {
            document.getElementById('response-message').innerHTML = '<p>Error sending message.</p>';
        }
    })
    .catch(error => {
        // Handle error
        document.getElementById('response-message').innerHTML = '<p>Something went wrong, please try again later.</p>';
    });
});
