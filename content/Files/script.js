

// 1) Define the learning goal order exactly as your table expects:
const GOALS_IN_ORDER = [
  "1.1.","1.2.","1.3.","1.4.","1.5.","1.6.","1.7.","1.8.","1.9.","1.10.","1.11.",
  "2.1.","2.2.","2.3.","2.4.","2.5.","2.6.","2.7.","2.8.",
  "3.1.","3.2.","3.3.","3.4.","3.5.","3.6.","3.7.","3.8.","3.9.","3.10.","3.11.","3.12.","3.13.","3.14.","3.15.",
  "4.1.","4.2.","4.3.","4.4.","4.5.","4.6.","4.7.","4.8.","4.9.","4.10.","4.11.","4.12.","4.13.","4.14.","4.15.","4.16.","4.17.","4.18.","4.19.","4.20.",
  "5.1.","5.2.","5.3.","5.4.","5.5.","5.6.","5.7.","5.8.","5.9."
];

// 2) Helper to compute totals per chapter as average(score)/5
function computeTotals(scoresByGoal) {
  console.log("✅ Student hash script loaded - SCORESBYGOAL");
  const chapterSums = {};   // { "1": {sum:..., count:...}, ... }
  GOALS_IN_ORDER.forEach(g => {
    const chapter = g.split('.')[0]; // "1" from "1.6."
    const v = Number(scoresByGoal[g] ?? 0);
    if (!chapterSums[chapter]) chapterSums[chapter] = { sum: 0, count: 0 };
    chapterSums[chapter].sum += v;
    chapterSums[chapter].count += 1;
  });
  const totals = {};
  Object.keys(chapterSums).forEach(ch => {
    const { sum, count } = chapterSums[ch];
    const pct = count > 0 ? (sum / (5 * count)) : 0; // 0..1
    totals[`total_${ch}`] = pct;
  });
  return totals;
}

// 3) Decode a hash string (digits 0–5) into the structure your UI expects
function buildStudentDataFromHash(hashDigits) {
  const obj = {};
  console.log("✅ Student hash script loaded - BUILDING");
  // Map digits to goals
  for (let i = 0; i < GOALS_IN_ORDER.length; i++) {
    const goalKey = GOALS_IN_ORDER[i];
    const char = hashDigits[i] || "0";       // pad missing as 0
    const val = Math.max(0, Math.min(5, parseInt(char, 10) || 0)); // clamp 0..5
    obj[goalKey] = val;
  }

  // Optionally keep your legacy null fields (not required for your coloring code)
  // obj["Vurdering"] = null; obj[""] = null; obj["TEST"] = null; obj["Obligatorisk"] = null; obj["Praksisoppgave"] = null;

  // Compute totals
  const totals = computeTotals(obj);
  Object.assign(obj, totals);

  return obj;
}

// 4) On load: read #... and feed your existing personalizeTable
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Student hash script loaded -DOMCONTENT");

  // Read from the query string
  const params = new URLSearchParams(window.location.search);
  const secretid = params.get("secretid");
  const deploymentid = params.get("deploymentid");
  console.log(deploymentid)
  const masteryStringParam = params.get("masterystring");

  // Store extra IDs if present
  try { if (secretid)     localStorage.setItem("secretid", secretid); } catch (_) {}
  try { if (deploymentid) localStorage.setItem("deploymentid", deploymentid); } catch (_) {}

  console.log(masteryStringParam);

  if (masteryStringParam && masteryStringParam.length > 1) {
    // Clean the mastery string
    const masteryString = masteryStringParam.trim().replace(/\s+/g, "");

    // Use the mastery string itself as a synthetic studentID
    const syntheticID = masteryString;

    // Ensure global studentData exists
    window.studentData = window.studentData || {};
    window.studentData[syntheticID] = buildStudentDataFromHash(masteryString);

    // Cache locally for returning visits
    try { localStorage.setItem("studentID", syntheticID); } catch (_) {}

    // Reuse your existing UI logic
    console.log(window.studentData[syntheticID]);
    personalizeTable(window.studentData[syntheticID]);

  } else {
    // Fallback: use whatever was stored previously
    const storedID = localStorage.getItem("studentID") || "";
    const masteryString = storedID.trim().replace(/\s+/g, "");
    const syntheticID = masteryString;

    window.studentData = window.studentData || {};
    window.studentData[syntheticID] = buildStudentDataFromHash(masteryString);

    console.log("✅ Student hash script loaded -NOHASH");
    personalizeTable(window.studentData[syntheticID]);
  }
});



function saveStudentID() {
    const studentID = document.getElementById("student-id").value
    localStorage.setItem("studentID", studentID)
    personalizeTable(studentID)
  }
  
  function personalizeTable(studentID) {
    // if (!studentID || !studentData[studentID]) return
  
    const scores = studentID // studentData[studentID]
  
    Object.keys(scores).forEach((assignmentID) => {
      const score = scores[assignmentID];
      
      if (assignmentID.startsWith("total_")) {
        // Handle total_x entries
        const div = document.getElementById(assignmentID);
        if (div) {
          div.style.width = `${score * 100}%`;
          div.style.backgroundColor = `#39ac4c54`;
          number = (score* 100).toFixed(2);
          div.innerHTML = '';
          div.innerHTML += `${number}%`;
          div.style.borderRadius = '5px'
        }
      } else {
  
      const row = document.getElementById(assignmentID)
      if (row) {
        const cells = row.querySelectorAll("td:nth-child(n+2)")
        const thresholds = [0, 1, 3]
  
        cells.forEach((cell, index) => {
          if (cell.textContent.trim() != "") {
            const colorClass = score > thresholds[index] ? "green-bg" : "red-bg"
            cell.className = colorClass
          }
        })
      }
    }
  })
  }
