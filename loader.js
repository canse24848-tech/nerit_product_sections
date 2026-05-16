document.addEventListener("DOMContentLoaded", async function () {

  const target = document.querySelector("[data-nerit-section]");

  if (!target) return;

  const sectionName = target.dataset.neritSection;

  const baseUrl =
    "https://canse24848-tech.github.io/nerit_product_sections";

  try {

    const response = await fetch(
      `${baseUrl}/${sectionName}.html`
    );

    const html = await response.text();

    target.innerHTML = html;

  } catch(error){

    console.error("NERIT section load failed:", error);

  }

});
