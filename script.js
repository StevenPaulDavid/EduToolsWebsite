const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    primaryNav.classList.toggle("is-open", !isExpanded);
  });

  primaryNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      primaryNav.classList.remove("is-open");
    }
  });
}

const year = document.querySelector("#year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const downloadLinks = window.EDUTOOLS_DOWNLOADS || {};
[
  { id: "eduresourcer-download", key: "eduresourcer", name: "EduResourcer" },
  { id: "eduexamwriter-download", key: "eduexamwriter", name: "EduExamWriter" },
  { id: "helpdesk-download", key: "helpdesk", label: "Download EduHelpdesk" },
  { id: "helpdesk-docs", key: "helpdeskDocs", label: "View documentation" },
  { id: "helpdesk-docs-bottom", key: "helpdeskDocs", label: "View documentation" },
].forEach(({ id, key, name, label }) => {
  const download = document.querySelector(`#${id}`);
  const url = downloadLinks[key];

  if (download && url) {
    download.href = url;
    download.classList.remove("is-disabled");
    download.removeAttribute("aria-disabled");
    download.removeAttribute("tabindex");
    const downloadLabel = download.querySelector(".download-label");
    if (downloadLabel) {
      downloadLabel.textContent = label || `Download ${name}`;
    }
  }
});
