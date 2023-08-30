document.addEventListener("DOMContentLoaded", function () {
    const addEntryButton = document.getElementById("add-entry");
    const checklistTable = document.getElementById("checklist");
    const templateRow = document.getElementById("template-row");

    addEntryButton.addEventListener("click", function () {
        const newRow = templateRow.cloneNode(true);
        newRow.removeAttribute("id");
        newRow.style.display = "table-row";
        checklistTable.appendChild(newRow);
    });

    const adjustInputWidth = function(input) {
        const minWidth = parseInt(input.getAttribute("data-min-width"));
        const currentWidth = input.offsetWidth;
        
        input.style.width = (Math.max(minWidth, currentWidth) + 10) + "px";
    };

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            const row = this.closest("tr");
            if (this.checked) {
                row.style.textDecoration = "line-through";
            } else {
                row.style.textDecoration = "none";
            }
        });
    });
});
