# YouGlish Word Explorer - Chrome Extension

A Chrome extension that helps users learn English pronunciation using the YouGlish API. Watch native speakers pronounce words in context through video clips.

## Features

- Search for any English word or phrase
- Watch video clips of native speakers using the word
- Navigate through multiple examples
- Real-time result count
- Clean and intuitive user interface

## Installation

### From Source
1. Clone this repository:
```bash
git clone https://github.com/curarc/youGlish.git
```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" in the top right corner

4. Click "Load unpacked" and select the extension directory

### Usage

1. Click the YouGlish icon in your Chrome toolbar
2. Enter a word or phrase in the search box
3. Click "Search" or press Enter
4. Watch the video examples
5. Use "Previous" and "Next" buttons to navigate through more examples

## Technical Details

- Built with vanilla JavaScript
- Uses YouGlish JavaScript API
- Chrome Extension Manifest V3
- Responsive design with CSS Flexbox

## Project Structure

```
youglish-chrome-extension/
├── images/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── manifest.json
├── popup.html
├── popup.js
├── styles.css
└── widget.js
```

## Development

To modify the extension:
1. Make your changes to the source files
2. Reload the extension in `chrome://extensions/`
3. Click the refresh icon on the extension card

## Credits

- Uses the [YouGlish API](https://youglish.com/api/doc/js-api) for video content
- Extension icon and design elements created for this project

## License

MIT License - see LICENSE file for details

---

[中文版](README_zh.md)
