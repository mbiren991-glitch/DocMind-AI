function uploadFile() {
    document.getElementById("fileInput").click();
}

document.getElementById("fileInput").addEventListener("change", function () {

    if (this.files.length > 0) {
        document.getElementById("fileName").innerHTML =
            "✅ " + this.files[0].name;
    }

});
