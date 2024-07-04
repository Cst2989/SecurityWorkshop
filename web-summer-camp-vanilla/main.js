import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
  
    <div>
      <h2>Enter Text to Render</h2>
      <input type="text" id="userInput" placeholder="Enter some text" />
      <button id="renderButton">Render</button>
      <div id="output"></div>
    </div>
  </div>
`


document.getElementById('renderButton').addEventListener('click', () => {
  const userInput = document.getElementById('userInput').value;
  const output = document.getElementById('output');

  // Remove any existing content
  output.innerHTML = '';

  // Create a new script element if input contains <script>
  if (userInput.includes('<script>')) {
    const scriptContent = userInput.match(/<script>([\s\S]*?)<\/script>/)[1];
    const scriptElement = document.createElement('script');
    scriptElement.textContent = scriptContent;
    output.appendChild(scriptElement);
  }

  // Create a new image element if input contains <img>
  if (userInput.includes('<img')) {
    const imgContent = userInput.match(/<img[^>]*>/)[0];
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = imgContent;
    const imgElement = tempDiv.firstChild;
    output.appendChild(imgElement);
  }

  // Render other HTML content
  output.insertAdjacentHTML('beforeend', userInput.replace(/<script>[\s\S]*?<\/script>/, '').replace(/<img[^>]*>/, ''));
});
