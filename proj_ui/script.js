document.getElementById('manual-input').addEventListener('click', function() {
    document.getElementById('input-selection').style.display = 'none';
    document.getElementById('manual-input-section').style.display = 'block';
});

document.getElementById('upload-input').addEventListener('click', function() {
    document.getElementById('input-selection').style.display = 'none';
    document.getElementById('upload-section').style.display = 'block';
});

document.getElementById('next-step-manual').addEventListener('click', function() {
    const manualText = document.getElementById('manual-text').value;
    const wordCount = manualText.split(/\s+/).filter(function(word) { return word.length > 0; }).length;

    if (wordCount > 300) {
        alert("Please limit your input to 300 words.");
    } else {
        document.getElementById('manual-input-section').style.display = 'none';
        document.getElementById('output-selection').style.display = 'block';
    }
});

document.getElementById('upload-next').addEventListener('click', function() {
    const fileType = document.getElementById('file-type').value;
    const fileInput = document.getElementById('file-upload');
    const filePath = fileInput.value;

    if (!fileType || filePath === '') {
        alert("Please select a file type and upload a file.");
        return;
    }

    const validExtensions = fileType === 'pdf' ? '.pdf' : '.docx';
    if (!filePath.endsWith(validExtensions)) {
        alert(`Please upload a ${fileType.toUpperCase()} file.`);
        return;
    }

    // Simulate file upload success and move to output selection
    document.getElementById('upload-section').style.display = 'none';
    document.getElementById('output-selection').style.display = 'block';
});

document.getElementById('generate-questions').addEventListener('click', function() {
    const outputType = document.getElementById('output-type').value;
    const difficultyLevel = document.getElementById('difficulty-level').value;

    if (!outputType || !difficultyLevel) {
        alert("Please select both output type and difficulty level.");
        return;
    }

    // Simulate question generation
    document.getElementById('output-selection').style.display = 'none';
    document.getElementById('questions-display').style.display = 'block';

    const questionsList = document.getElementById('questions-list');
    questionsList.innerHTML = ""; // Clear previous questions
    questionsList.innerHTML += `<p>Generated ${outputType} at ${difficultyLevel} level.</p>`;
    // Here you would normally generate and display the actual questions.
    
    document.getElementById('show-answer-key').style.display = 'block'; // Show the button to display answer key
});

document.getElementById('show-answer-key').addEventListener('click', function() {
    // Simulate showing answer key
    document.getElementById('questions-display').style.display = 'none';
    document.getElementById('answer-key').style.display = 'block';

    const answerKeyList = document.getElementById('answer-key-list');
    answerKeyList.innerHTML = ""; // Clear previous answer keys
    answerKeyList.innerHTML += "<p>Answer Key will be displayed here.</p>"; // Add simulated answer keys
});

document.getElementById('back-to-questions').addEventListener('click', function() {
    document.getElementById('answer-key').style.display = 'none';
    document.getElementById('questions-display').style.display = 'block';
});

// Update word count for manual input
document.getElementById('manual-text').addEventListener('input', function() {
    const manualText = document.getElementById('manual-text').value;
    const wordCount = manualText.split(/\s+/).filter(function(word) { return word.length > 0; }).length;
    document.getElementById('word-count').innerText = `Words: ${wordCount}/300`;
});












