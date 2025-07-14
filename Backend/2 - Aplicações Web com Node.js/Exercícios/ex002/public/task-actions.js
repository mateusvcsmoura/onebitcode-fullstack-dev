document.addEventListener("DOMContentLoaded", () => {
    const tasks = document.querySelectorAll(".task");

    tasks.forEach(task => {
        const btn = task.querySelector(".complete-btn");
        const name = task.querySelector(".task-name");

        if (btn) {
            btn.addEventListener("click", () => {
                name.classList.add("done");
                btn.remove();
            });
        }
    });
});
