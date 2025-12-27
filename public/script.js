let emailData = {};

function previewEmail(event) {
  event.preventDefault();

  let name = document.getElementById("candidate_name").value;
  let email = document.getElementById("candidate_email").value;
  let pos = document.getElementById("position").value;
  let status = document.querySelector("input[name='status']:checked").value;

  let msg = status === "selected" ?
`Dear ${name},

We are pleased to inform you that you have been selected
for the position of ${pos}.

Please reply to this email to confirm your acceptance.

Best regards,
HR Team`
:
`Dear ${name},

Thank you for applying for the position of ${pos}.

We regret to inform you that we have decided to move 
forward with other candidates.

Best regards,
HR Team`;

  emailData = { name, email, pos, status, msg };

  document.getElementById("previewText").innerText = msg;
  document.getElementById("previewModal").style.display = "block";
}

function closePreview() {
  document.getElementById("previewModal").style.display = "none";
}

async function sendMail() {
  const res = await fetch("/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(emailData)
  });

  const data = await res.json();
  alert(data.message);

  if(data.success) window.location.reload();
}
