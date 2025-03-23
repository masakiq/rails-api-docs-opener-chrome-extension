document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("version-select");

  // Fetch the Rails versions from RubyGems API
  fetch("https://rubygems.org/api/v1/versions/rails.json")
    .then((response) => response.json())
    .then((data) => {
      // Extract version numbers and filter only those with digits and dots
      const versions = data
        .map((entry) => entry.number)
        .filter((version) => /^\d+(\.\d+)*$/.test(version));

      // Clear the select box and add a default option
      select.innerHTML = "";
      const defaultOption = document.createElement("option");
      defaultOption.textContent = "Select a Rails version";
      defaultOption.disabled = true;
      defaultOption.selected = true;
      select.appendChild(defaultOption);

      // Add an option for each valid version
      versions.forEach((version) => {
        const option = document.createElement("option");
        option.value = version;
        option.textContent = version;
        select.appendChild(option);
      });
    })
    .catch((error) => {
      console.error("Failed to fetch versions:", error);
    });

  // Open the Rails API documentation in a new tab when a version is selected
  select.addEventListener("change", () => {
    const version = select.value;
    if (version) {
      const docUrl = `https://api.rubyonrails.org/v${version}/`;
      chrome.tabs.create({ url: docUrl });
      window.close(); // Close the popup window
    }
  });
});
