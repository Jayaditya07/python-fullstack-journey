// ================================
// AI RESUME ANALYZER - JAVASCRIPT
// ================================

// Get HTML elements
const resumeForm = document.getElementById("resumeForm");
const resumeInput = document.getElementById("resume");
const jobDescription = document.getElementById("jobDescription");
const analyzeBtn = document.getElementById("analyzeBtn");
const results = document.getElementById("results");


// ================================
// SKILLS DATABASE
// ================================

const skills = [
    "Python",
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Django",
    "Node.js",
    "SQL",
    "MongoDB",
    "Machine Learning",
    "Data Science",
    "Git",
    "GitHub",
    "AWS",
    "Docker",
    "C++",
    "C",
    "REST API",
    "Bootstrap"
];


// ================================
// FORM SUBMIT
// ================================

resumeForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Check resume
    if (resumeInput.files.length === 0) {
        alert("Please upload your resume.");
        return;
    }

    // Check job description
    if (jobDescription.value.trim() === "") {
        alert("Please enter a job description.");
        return;
    }

    // Show analyzing state
    analyzeBtn.innerText = "Analyzing...";
    analyzeBtn.disabled = true;

    // Simulate analysis
    setTimeout(function () {

        analyzeResume();

        analyzeBtn.innerText = "Analyze Resume";
        analyzeBtn.disabled = false;

    }, 1500);
});


// ================================
// ANALYZE RESUME
// ================================

function analyzeResume() {

    const resumeFile = resumeInput.files[0];

    // Basic score simulation
    const resumeScore = calculateResumeScore();
    const atsScore = calculateATSScore();

    // Job match score
    const jobMatchScore = calculateJobMatch();

    // Display scores
    document.getElementById("resumeScore").innerText =
        resumeScore + "%";

    document.getElementById("atsScore").innerText =
        atsScore + "%";

    document.getElementById("jobMatchScore").innerText =
        jobMatchScore + "%";


    // Extract filename
    console.log("Analyzing:", resumeFile.name);


    // Show detected skills
    detectSkills();


    // Show keyword analysis
    keywordAnalysis();


    // Show recommendations
    showRecommendations(
        resumeScore,
        atsScore,
        jobMatchScore
    );


    // Show result section
    results.style.display = "block";

    // Scroll to results
    results.scrollIntoView({
        behavior: "smooth"
    });
}


// ================================
// RESUME SCORE
// ================================

function calculateResumeScore() {

    let score = 75;

    const fileName = resumeInput.files[0].name;

    // Small score variation
    if (fileName.toLowerCase().includes("resume")) {
        score += 5;
    }

    return Math.min(score, 100);
}


// ================================
// ATS SCORE
// ================================

function calculateATSScore() {

    let score = 80;

    const jd = jobDescription.value.toLowerCase();

    if (jd.includes("python")) {
        score += 5;
    }

    if (jd.includes("django")) {
        score += 5;
    }

    return Math.min(score, 100);
}


// ================================
// JOB MATCH SCORE
// ================================

function calculateJobMatch() {

    const jd = jobDescription.value.toLowerCase();

    let matchedSkills = 0;

    skills.forEach(function (skill) {

        if (jd.includes(skill.toLowerCase())) {
            matchedSkills++;
        }

    });

    let score = 50 + matchedSkills * 5;

    return Math.min(score, 100);
}


// ================================
// DETECT SKILLS
// ================================

function detectSkills() {

    const skillsList =
        document.getElementById("skillsList");

    const missingSkills =
        document.getElementById("missingSkills");


    // Clear previous data
    skillsList.innerHTML = "";
    missingSkills.innerHTML = "";


    // Example detected skills
    const detectedSkills = [
        "Python",
        "HTML",
        "CSS",
        "JavaScript",
        "SQL",
        "Git",
        "Django"
    ];


    detectedSkills.forEach(function (skill) {

        const span = document.createElement("span");

        span.className = "skill-badge";

        span.innerText = skill;

        skillsList.appendChild(span);

    });


    // Example missing skills
    const missing = [
        "Docker",
        "AWS",
        "React"
    ];


    missing.forEach(function (skill) {

        const span = document.createElement("span");

        span.className = "skill-badge";

        span.innerText = skill;

        missingSkills.appendChild(span);

    });
}


// ================================
// KEYWORD ANALYSIS
// ================================

function keywordAnalysis() {

    const technicalKeywords =
        document.getElementById("technicalKeywords");

    const industryKeywords =
        document.getElementById("industryKeywords");

    const actionVerbs =
        document.getElementById("actionVerbs");


    technicalKeywords.innerText =
        "Python, Django, SQL, HTML, CSS, JavaScript";

    industryKeywords.innerText =
        "Software Development, Web Development, API, Database";

    actionVerbs.innerText =
        "Developed, Designed, Implemented, Created, Managed";
}


// ================================
// RECOMMENDATIONS
// ================================

function showRecommendations(
    resumeScore,
    atsScore,
    jobMatchScore
) {

    const recommendations =
        document.getElementById("recommendations");

    recommendations.innerHTML = "";


    let advice = [];


    if (resumeScore < 80) {

        advice.push(
            "Improve your resume structure and formatting."
        );

    }


    if (atsScore < 80) {

        advice.push(
            "Add important keywords from the job description."
        );

    }


    if (jobMatchScore < 80) {

        advice.push(
            "Add more skills related to the target job."
        );

    }


    advice.push(
        "Add measurable achievements to your projects."
    );

    advice.push(
        "Keep your resume concise and ATS-friendly."
    );


    advice.forEach(function (item) {

        const li = document.createElement("li");

        li.innerText = item;

        recommendations.appendChild(li);

    });
}


// ================================
// RE-ANALYZE BUTTON
// ================================

const reanalyzeBtn =
    document.getElementById("reanalyzeBtn");


reanalyzeBtn.addEventListener("click", function () {

    results.style.display = "none";

    resumeForm.scrollIntoView({
        behavior: "smooth"
    });

});


// ================================
// DOWNLOAD REPORT
// ================================

const downloadReport =
    document.getElementById("downloadReport");


downloadReport.addEventListener("click", function () {

    const resumeScore =
        document.getElementById("resumeScore").innerText;

    const atsScore =
        document.getElementById("atsScore").innerText;

    const jobMatchScore =
        


    const report = `
AI RESUME ANALYZER
============================

Resume Score: ${resumeScore}

ATS Score: ${atsScore}

Job Match Score: ${jobMatchScore}

Generated by AI Resume Analyzer
`;


    const blob = new Blob(
        [report],
        { type: "text/plain" }
    );


    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "resume-analysis-report.txt";

    link.click();

    URL.revokeObjectURL(url);

});