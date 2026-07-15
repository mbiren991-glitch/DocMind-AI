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
