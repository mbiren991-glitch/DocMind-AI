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
