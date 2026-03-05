const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/generate-resume", (req, res) => {
  const data = req.body;

  const resumeText = `
==============================
${data.name}
${data.role}
==============================

Email: ${data.email}
Phone: ${data.phone}
Address: ${data.address}

SKILLS:
${data.skills}

EXPERIENCE:
${data.experience}

EDUCATION:
${data.education}

PROJECTS:
${data.projects}

CERTIFICATIONS:
${data.certifications}

ACHIEVEMENTS:
${data.achievements}

LANGUAGES / HOBBIES:
${data.languages}
`;

  res.json({ resume: resumeText });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});