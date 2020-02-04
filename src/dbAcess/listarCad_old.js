const listEL = document.getElementById("lista")
const prevPage = document.getElementById("prevPage")
const proxPage = document.getElementById("proxPage")
var page = 1;
var maxPage;

function showItems() {
    listEL.innerHTML = ""

    axios.get(`http://localhost:3000/api/cads?page=${page}`).then(resp => {
        resp.data.docs.forEach(element => {
            const list = document.createElement('li')
            listText = document.createTextNode(`${element.name}, ${element.termNumber},${element.pageNumber},${element.type}`);
            list.appendChild(listText);
            listEL.appendChild(list);
        });
        maxPage = resp.data.pages;

        const list = document.createElement('a')
        listText = document.createTextNode(`Pagina ${page} de ${maxPage}`);
        list.appendChild(listText);
        listEL.appendChild(list);

    }).catch(err => {
        console.log(err)
    })
}

showItems();

proxPage.onclick = () => {
    page++;

    if (page >= maxPage) page = maxPage;

    showItems();
}

prevPage.onclick = () => {
    page--;

    if (page < 1) page = 1;

    showItems();
}

