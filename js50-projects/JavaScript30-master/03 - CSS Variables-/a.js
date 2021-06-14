// Select all input elements inside div
const inputs = document.querySelectorAll(".controls input");
// Define an event handler that updates the event each time it chages
function eventHandler() {
  // value returns a value , but we need to add pixels to update the css variable
  // the color variable however returns a color

  const suffix = this.dataset.sizing || "";

  // select the element and update the property value in CSS.
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

// call the event handler on each nodelist element
inputs.forEach((i) => i.addEventListener("change", eventHandler));
inputs.forEach((i) => i.addEventListener("mousemove", eventHandler));
