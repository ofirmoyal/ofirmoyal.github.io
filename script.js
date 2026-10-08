// Frameworks stay nested inside their language when filtering.
const filterButtons = document.querySelectorAll("[data-filter]");
const languageGroups = document.querySelectorAll("[data-language]");
const filterStatus = document.getElementById("filter-status");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const language = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });

    languageGroups.forEach((group) => {
      group.hidden =
        language !== "all" && group.dataset.language !== language;
    });

    filterStatus.textContent =
      language === "all"
        ? "Showing projects in all languages."
        : `Showing ${button.textContent.trim()} projects.`;
  });
});