// Function to create an icon with a red background
function createRedIcon(width, height) {
  const canvas = new OffscreenCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // Fill the canvas with red color
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, width, height);

  // Set white text for the "R" with a font size relative to the icon size.
  ctx.fillStyle = "white";
  ctx.font = `bold ${Math.floor(width * 0.6)}px Arial`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.fillText("R", width / 2, height / 2);
  // Draw the letter "R" at the center of the canvas.

  // Return the ImageData for the created icon
  return ctx.getImageData(0, 0, width, height);
}

// When the extension is installed or updated, set the icon
chrome.runtime.onInstalled.addListener(() => {
  // For simplicity, we set only one size (48x48) here.
  // If you need multiple sizes, you can create an object mapping sizes to imageData.
  chrome.action.setIcon({ imageData: createRedIcon(48, 48) });
});
