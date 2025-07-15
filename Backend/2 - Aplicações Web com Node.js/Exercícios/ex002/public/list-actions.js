document.querySelectorAll('.delete-form').forEach(form => {
    form.addEventListener('submit', (ev) => {
        const confirm = window.confirm("Do you want to Delete this Task List?");

        if (!confirm) {
            ev.preventDefault();
        }
    });
});