const outputList = document.createElement('ol');
outputList.style.fontFamily = 'monospace';
outputList.style.lineHeight = '2em';
document.body.appendChild(outputList);

window.print = (line) => {
    const lineItem = document.createElement('li');
    const lineItemContent = document.createTextNode(line);
    lineItem.appendChild(lineItemContent);

    outputList.appendChild(lineItem);
};
