# Rails API Docs Opener

A Chrome extension that allows users to dynamically select a Rails version from the RubyGems API and open its corresponding API documentation in a new tab.

## Overview

**Rails API Docs Opener** fetches the list of Rails versions from [RubyGems](https://rubygems.org/api/v1/versions/rails.json) and displays them in a popup select box. Once a version is selected, the extension opens the Rails API documentation for that version (e.g., `https://api.rubyonrails.org/v7.0.5/`) in a new browser tab.

## Features

- **Dynamic Version Fetching:**  
  Retrieves the full list of Rails versions from RubyGems, filtering out any non-numeric patch versions.

- **User-Friendly Popup:**  
  Displays a select box in a popup window (triggered by clicking the extension icon) where users can pick a Rails version.

- **API Documentation Redirection:**  
  Automatically opens the corresponding Rails API documentation in a new tab when a version is selected.

- **Custom Extension Icon:**  
  Uses a dynamically generated icon with a red background and a white "R".

## Installation

1. **Clone the Repository:**

```bash
git clone git@github.com:masakiq/rails-api-docs-opener-chrome-extension.git
cd rails-api-doc-opener-chrome-extension
```

2. **Load the Extension in Chrome:**

- Open Chrome and navigate to chrome://extensions/.
- Enable “Developer mode” (toggle at the top right).
- Click “Load unpacked” and select the repository folder.

## Usage

1. Click the extension icon in the Chrome toolbar.
2. The popup will display the label “Rails Version:” and a select box with available Rails versions.
3. Choose a version from the dropdown.
4. The corresponding Rails API documentation page (e.g., https://api.rubyonrails.org/v7.0.5/) will open in a new tab.

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- Rails and RubyGems for providing the APIs used in this extension.
- Chrome Extension documentation for guidance on extension development.
