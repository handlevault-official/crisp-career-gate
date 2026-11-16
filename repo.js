// --- Career Gate: repo.js (Central Logic) ---

let currentTheme = 'dark';
function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', currentTheme);
}

let step = 1;
let careerData = { name: '', role: '', exp: '' };

function openGate() {
    document.getElementById('stepEnvelope').classList.add('hidden');
    document.getElementById('stepGate').classList.remove('hidden');
    renderQuestion();
}

function renderQuestion() {
    document.getElementById('errorMsg').innerText = '';
    document.getElementById('btnBack').classList.toggle('hidden', step === 1);
    document.getElementById('stepIndicator').innerText = `Career Stage ${step} of 3`;

    let title = '', desc = '', html = '';

    if (step === 1) {
        title = "Candidate Full Name";
        desc = "Ilagay ang iyong buong pangalan para sa career application.";
        html = `<input type="text" id="ansVal" placeholder="Juan dela Cruz" value="${careerData.name}">`;
    } else if (step === 2) {
        title = "Target Position / Track";
        desc = "Piliin ang posisyon o track na iyong inaaplayan.";
        html = `<select id="ansVal">
            <option value="">Pili ng Posisyon...</option>
            <option value="Senior Frontend Specialist">Senior Frontend Specialist 💻</option>
            <option value="Full-Stack Engineer">Full-Stack Engineer ⚡</option>
            <option value="Creative Director">Creative Director 🎨</option>
            <option value="Client Success Manager">Client Success Manager 🤝</option>
        </select>`;
    } else if (step === 3) {
        title = "Experience / Professional Summary";
        desc = "Ilagay ang iyong taon ng karanasan o key portfolio link/code.";
        html = `<input type="text" id="ansVal
