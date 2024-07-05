import DOMPurify from 'dompurify';
import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
  
    <div>
      <h2>Enter Text to Render</h2>
      <input type="text" id="userInput" placeholder="Enter some text" />
      <button id="renderButton">Render</button>
      <div id="output"></div>
      <h2>Enter Promo Content</h2>
      <div id="promoOutput"></div>
    </div>
  </div>
`
// Function to parse URL query parameters
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
// Spoofing demonstration with URL query parameter
const promoContent = getQueryParam('promo');
if (promoContent) {
  const promoOutput = document.getElementById('promoOutput');

  // Remove any existing content
  promoOutput.innerHTML = DOMPurify.sanitize(promoContent, {
    ALLOWED_TAGS: [],
  
  });

}

document.getElementById('renderButton').addEventListener('click', () => {
  const userInput = document.getElementById('userInput').value;
  const output = document.getElementById('output');
  // Remove any existing content
  output.innerHTML = DOMPurify.sanitize(userInput);
  // Render other HTML content
  output.insertAdjacentHTML('beforeend', userInput.replace(/<script>[\s\S]*?<\/script>/, '').replace(/<img[^>]*>/, ''));
});
