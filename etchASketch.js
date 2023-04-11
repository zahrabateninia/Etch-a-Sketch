function createGrid(rows, cols) {
    const numPixels = 480 / rows; // 480 is the width of the container it is hardcoded
    const container = document.createElement('div');
    container.classList.add('grid-container');
    container.style.width = "480px";
    container.style.height = "480px";
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.marginLeft ='auto';
    container.style.marginRight ='auto';
    container.style.marginTop = '30px';

    container.style.border = '3px solid black';
    container.style.boxShadow = '3px 3px 3px gray';
    
  
    for (let i = 0; i < rows * cols; i++) {
      const cell = document.createElement('div');
      cell.classList.add('grid-cell');
      cell.style.flexBasis = `calc(100% / ${cols})`;
      cell.style.margin='0';
      cell.style.boxSizing = 'border-box';
      cell.style.border = '1px solid black';
      cell.style.height = `${numPixels}px`;
      container.appendChild(cell);
    }
    document.body.appendChild(container);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    createGrid(30, 30);
  });
  