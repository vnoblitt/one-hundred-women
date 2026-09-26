function Woman(id, name) {
    this.id = id;
    this.name = name;
}

function makeGrid(content) {
    let arr = [];
    for (let i = 0; i < 100; i++) {
        const woman = new Woman(`woman${i}`, '');
        const womanDiv = document.createElement('div');
        womanDiv.id = `woman${i}`;
        womanDiv.textContent = '';
        womanDiv.classList.add('woman', 'blank');
        content.append(womanDiv);
        arr.push(woman);
    }
    return arr;
}