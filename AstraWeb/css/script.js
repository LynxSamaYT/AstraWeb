document.getElementById("search").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    document.querySelectorAll(".command-item").forEach(command => {
        const text = command.textContent.toLowerCase();
        command.style.display = text.includes(searchTerm) ? "block" : "none";
    });
});