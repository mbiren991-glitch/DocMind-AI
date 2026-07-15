function uploadDocument() {
    document.getElementById("fileInput").click();
}

document.addEventListener("DOMContentLoaded", function () {

    const uploadBtn = document.querySelector(".hero button");

    uploadBtn.addEventListener("click", uploadDocument);

    const input = document.createElement("input");

    input.type = "file";
    input.id = "fileInput";
    input.accept = ".pdf,.doc,.docx,.txt";

    input.style.display = "none";

    document.body.appendChild(input);

    input.addEventListener("change", function () {

        if (this.files.length > 0) {

            alert("✅ Selected: " + this.files[0].name);

        }

    });

});
