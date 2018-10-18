function titlePage() {
    let gridContainer = document.createElement('div');
    gridContainer.className = 'grid-container-title';
    for (let i = 0; i < 3; i++) {
        let div = document.createElement('div');
        div.id = "div" + i;
        div.className = "grid-item";
        div.innerHTML = "Dette er en div";
        gridContainer.appendChild(div);
    }
    document.body.appendChild(gridContainer);
    console.log(document.getElementsByClassName('grid-container-title'));
}
//window.onload = titlePage();