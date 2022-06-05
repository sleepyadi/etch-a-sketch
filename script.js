const canvas = document.querySelector('.canvas');

function createGrid(containerNode, grids) {
    
    let h = Number(containerNode.offsetHeight) / grids;
    let w = Number(containerNode.offsetWidth) / grids;

    for (let i = 0; i < grids; i++) {

        let colDiv = document.createElement('div');
        colDiv.classList.add('col');

        for (let j = 0; j < grids; j++) {
            let rowDiv = document.createElement('div');
            rowDiv.classList.add('row');
            rowDiv.style.height = h + 'px';
            rowDiv.style.width = w + 'px';
            colDiv.appendChild(rowDiv);
        }
        containerNode.appendChild(colDiv);
    }
}

