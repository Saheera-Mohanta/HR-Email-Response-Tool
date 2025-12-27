Front-End (HTML + CSS +JS)

The form takes details from HR:
Candidate Name
Candidate Email
Position
Status

When user clicks Preview Email, a message is created and shown inside a modal popup.
When user clicks Send Email, JavaScript sends all data to the backend using fetch → POST API.

Back-End (Node.js + Express)

The backend receives the data (name, email, message, etc.)
Uses nodemailer package to send email.
Takes Gmail username & app password from .env file.
Sends plain text email & HTML email.

