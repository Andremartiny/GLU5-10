// Function to reveal a random callout with title containing "1.2 Medium"
function revealRandomCallout(TITTEL) {
    // Select all blockquote elements with data-callout="hidden"
    const callouts = document.querySelectorAll('blockquote[data-callout="hidden"]');
    // console.log('Total hidden callouts found:', callouts.length);
  
    // Filter the callouts to only include those with "1.2 Medium" in the title
    const mediumCallouts = Array.from(callouts).filter(callout => {
      const titleInner = callout.querySelector('.callout-title-inner');
      const containsMedium = titleInner && titleInner.textContent.includes(TITTEL);
    //   console.log('Checking callout:', titleInner ? titleInner.textContent : 'No title found', 'Contains "1.2 Medium":', containsMedium);
      return containsMedium;
    });
  
  
    // If there are no matching callouts, exit the function
    if (mediumCallouts.length === 0) {
    //   console.log('No matching callouts found.');
      return;
    }
  
    // Randomly select one of the matching callouts
    const randomIndex = Math.floor(Math.random() * mediumCallouts.length);
    const selectedCallout = mediumCallouts[randomIndex];
    // console.log('Randomly selected callout index:', randomIndex);
  
    // Change the data-callout attribute to "custom"
    selectedCallout.setAttribute('data-callout', 'custom');
    
    selectedCallout.setAttribute('class', 'callout custom');
  selectedCallout.style.maxHeight = 'none'; // Adjust max-height to ensure it's fully visible
    // console.log('Changed data-callout to "custom" for:', selectedCallout);
  }
  

// Function to process all checked checkboxes and call revealRandomCallout
function processCheckedCallouts() {
  const checkboxes = document.querySelectorAll('.lmtabell input[type="checkbox"]:checked');
  
  checkboxes.forEach(checkbox => {
    const title = checkbox.value;
    revealRandomCallout(title);
  });
  
  document.getElementById('restart').style.display = '';
  
  document.getElementById('utvelgelse').style.display = 'none';
  
  renderMathInElement(document.body, {
    // customised options
    // • auto-render specific keys, e.g.:
    delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '$', right: '$', display: false},
        {left: '\\(', right: '\\)', display: false},
        {left: '\\[', right: '\\]', display: true}
    ],
    // • rendering keys, e.g.:
    throwOnError : false
   });
}



function resetprocessCheckedCallouts() {
 
    const callouts = document.querySelectorAll('blockquote[data-callout="custom"]');
    for (let i = 0; i < callouts.length; i++) {
    callouts[i].setAttribute('data-callout', 'hidden');
    callouts[i].setAttribute('class', 'callout hidden');
    }
    
  document.getElementById('restart').style.display = 'none';
  document.getElementById('utvelgelse').style.display = '';
}