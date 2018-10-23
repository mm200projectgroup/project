//---------------TITLE PAGE LAYOUT--------------------------------------------------------------------------
function titlePage(output) {
    output.className = 'grid-container-title';
    for (let i = 0; i < 2; i++) {
        // Lager div- elementene som holder tekstfeltene for css-grid
        let div = document.createElement('div');
        div.id = "divtitle" + i;
        div.className = "grid-item";
        div.contentEditable = "true";
        div.placeholder = "Title";
        output.appendChild(div);
    }
}
