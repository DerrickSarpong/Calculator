const slider = document.getElementById('slider');

slider.addEventListener('input', function() {
  const value = slider.value;

  const linkTag = document.querySelector('link#css');
  if (value === '1') {

    if (linkTag) {
      console.log(linkTag.href); // Get the href attribute
      linkTag.href = 'Calculator.css'; // Set a new href attribute
      console.log('Dark mode enabled');

}
    
  } else {
   console.log(linkTag.href); // Get the href attribute
   linkTag.href = 'Calculatorlightmode.css';
   console.log('Dark mode disabled');
  }
});
