function createGrid(rows) {
    const numPixels = 480 / rows; // 480 is the width of the container it is hardcoded
    const container = document.createElement('div');
    container.classList.add('grid-container');
    container.style.width = "480px";
    container.style.height = "480px";
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap'; //very imp 
    container.style.marginLeft ='auto';//gird in the center of page
    container.style.marginRight ='auto';
    container.style.marginTop = '30px';
    container.style.border = '3px solid black';
    container.style.boxShadow = '3px 3px 4px #00695C';
    container.style.backgroundColor = 'white';
    
    for (let i = 0; i < rows * rows; i++) { //if row =16 we need 256 square in the grid
      const cell = document.createElement('div');
      cell.classList.add('grid-cell');
      cell.style.flexBasis = `calc(100% / ${rows})`; //initial size of the cell
      cell.style.margin='0';
      cell.style.boxSizing = 'border-box';//the browser accounts the border
      cell.style.height = `${numPixels}px`;
      container.appendChild(cell);
      cell.addEventListener('mouseover' , () => {
        cell.style.backgroundColor = 'black';
      });
    }
    document.body.appendChild(container);//added at the bottom of body
  }//end if func
  
  document.addEventListener('DOMContentLoaded', () => {
    createGrid(60);
  });
  
  //if the button clicked , prompt
  function promptBtn(){
    let newRows = parseInt(prompt('How many pixels do you desire? '));
      if (100 < rows){
        alert('Sorry, the number of squares per side CANNOT be more than 100');
      }else{

        return createGrid(newRows);
      }
  
  }

