function uploadFile() {
    document.getElementById("fileInput").click();
}

document.getElementById("fileInput").addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    document.getElementById("fileName").innerHTML =
        "✅ " + file.name;

    if (file.name.endsWith(".txt")) {

        const reader = new FileReader();

        reader.onload = function(e) {

            alert("Document Loaded Successfully!");

            document.getElementById("documentText").innerHTML =
"<h3>📄 Document Content</h3><pre>" + e.target.result + "</pre>";

        };

        reader.readAsText(file);

    }

});

function summarizeDocument() {

    const text = document.getElementById("documentText").innerText;

    if (text.trim() === "") {
        alert("Please upload a TXT document first.");
        return;
    }

    document.getElementById("summary").innerHTML = `
        <h3>🤖 AI Summary</h3>
        <p>
        This is a demo summary. In the next version, a real AI model
        will analyze your document and generate an accurate summary.
        </p>
    `;
}
function askAI() {

    const question = document.getElementById("question").value;

    if (question.trim() === "") {
        alert("Please enter a question.");
        return;
    }

    document.getElementById("answer").innerHTML = `
        <h3>🤖 AI Answer</h3>
        <p>
        This is a demo answer for: <b>${question}</b>.
        In the next version, a real AI model will answer questions based on your uploaded document.
        </p>
    `;
}
function translateDocument() {
    document.getElementById("toolResult").innerHTML = `
        <h3>🌍 Translation</h3>
        <p>This is a demo translation. Real AI translation will be added later.</p>
    `;
}

function rewriteDocument() {
    document.getElementById("toolResult").innerHTML = `
        <h3>✍️ Rewritten Text</h3>
        <p>This is a demo rewritten version. Real AI rewriting will be added later.</p>
    `;
}
