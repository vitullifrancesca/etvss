avaScript
// Ottieni i dati dalla tabella
const table = document.querySelector('table');
const rows = table.querySelectorAll('tbody tr');

// Crea il form dinamicamente
const form = document.getElementById('shu-score-form');
rows.forEach(row => {
    const age = row.cells[0].textContent.trim();
    const etiology = row.cells[1].textContent.trim();
    const score = parseInt(row.cells[2].textContent) || 0; // Gestisci celle vuote

    if (age || etiology) { // Evita di creare input per righe vuote
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.name = age || etiology; // Usa age o etiology come nome
        input.value = score;

        const label = document.createElement('label');
        label.textContent = (age && etiology) ? `${age} - ${etiology}` : (age || etiology);

        form.appendChild(input);
        form.appendChild(label);
        form.appendChild(document.createElement('br'));
    }
});

// Gestisci l'invio del form
form.addEventListener('submit', (event) => {
    event.preventDefault();

    let totalScore = 0;
    const checkedInputs = form.querySelectorAll('input:checked');
    checkedInputs.forEach(input => {
        totalScore += parseInt(input.value);
    });

    document.getElementById('result').textContent = `SHU Score totale: ${totalScore}`;
});
