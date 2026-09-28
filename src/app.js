const cards = [...document.querySelectorAll(".destination-card")];
const filterButtons = [...document.querySelectorAll(".filter-button")];
const searchInput = document.querySelector("#destination-search");
const emptyState = document.querySelector("#empty-state");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

let activeFilter = "todos";

function updateDestinations() {
  const searchTerm = searchInput.value.trim().toLocaleLowerCase("es");
  let visibleCount = 0;

  for (const card of cards) {
    const categories = card.dataset.category.split(" ");
    const searchableText = `${card.dataset.search} ${card.textContent}`.toLocaleLowerCase("es");
    const matchesCategory = activeFilter === "todos" || categories.includes(activeFilter);
    const matchesSearch = !searchTerm || searchableText.includes(searchTerm);
    const isVisible = matchesCategory && matchesSearch;

    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  }

  emptyState.hidden = visibleCount > 0;
}

for (const button of filterButtons) {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;

    for (const filterButton of filterButtons) {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    }

    updateDestinations();
  });
}

searchInput.addEventListener("input", updateDestinations);

document.addEventListener("keydown", (event) => {
  const isSearchShortcut = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k";
  if (isSearchShortcut) {
    event.preventDefault();
    searchInput.focus();
  }

  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    updateDestinations();
    searchInput.blur();
  }
});

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
  mainNav.classList.toggle("is-open", !isOpen);
});

for (const link of mainNav.querySelectorAll("a")) {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    mainNav.classList.remove("is-open");
  });
}

document.querySelector("#current-year").textContent = new Date().getFullYear();
