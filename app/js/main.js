const viewers = document.querySelectorAll(".image-compare");
  
const options = {

  // UI Theme Defaults
  controlColor: "#fff",
  controlShadow: false,
  addCircle: false,
  addCircleBlur: false,

  // Label Defaults
  showLabels: false,
  labelOptions: {
    before: 'Before',
    after: 'After',
    onHover: false
  },

  // Smoothing
  smoothing: true,
  smoothingAmount: 100,

  // Other options
  hoverStart: false,
  verticalMode: false,
  startingPoint: 50,
  fluidMode: false
};
  
// Add your options object as the second argument
viewers.forEach((element) => {
  let view = new ImageCompare(element).mount();
});