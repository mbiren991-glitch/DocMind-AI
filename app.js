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

            console.log(e.target.result);

        };

        reader.readAsText(file);

    }

});
