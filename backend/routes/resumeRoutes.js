const express = require("express");
const router = express.Router();

router.post("/generate-resume", (req, res) => {
  try {
    const data = req.body;

    const summary = `Highly motivated ${data.role} with strong skills in ${data.skills}. Dedicated to professional growth.`;

    const resumeText = `
==============================
${data.name}
${data.role}
==============================

Email: ${data.email}
Phone: ${data.phone}
Address: ${data.address}

PROFESSIONAL SUMMARY:
${summary}

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

  } catch (err) {
    console.log(err);
    res.json({ resume: "Error generating resume" });
  }
});

module.exports = router;