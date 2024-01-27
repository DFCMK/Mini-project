function sendMail(contactForm) {
    emailjs.send("gmail", "rosie_odenkirk", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailadress.value,
        "project_request": contactForm.projectsummery.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        })
        return false;
}