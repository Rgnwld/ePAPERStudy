const listEL = document.getElementById("listarCads")
// const prevPage = document.getElementById("prevPage")
// const proxPage = document.getElementById("proxPage")
var page = 1;
var maxPage;

function showItems() {
    listEL.innerHTML = ""

    axios.get(`http://localhost:3000/api/cads?page=${page}`).then(resp => {
        resp.data.docs.forEach(element => {
            const linhaTr = document.createElement('tr')

            //Informações usuários
            const nomeTh = document.createElement('th')
            const nTermTh = document.createElement('th')
            const pgTh = document.createElement('th')
            const tLivroTh = document.createElement('th')
            const dRegTh = document.createElement('th')

            nomeTh.setAttribute("scope", "row");
            nTermTh.setAttribute("scope", "row");
            pgTh.setAttribute("scope", "row");
            tLivroTh.setAttribute("scope", "row");
            dRegTh.setAttribute("scope", "row");

            nomeTh.appendChild(document.createTextNode(`${element.name}`))
            nTermTh.appendChild(document.createTextNode(`${element.termNumber}`))
            pgTh.appendChild(document.createTextNode(`${element.pageNumber}`))
            tLivroTh.appendChild(document.createTextNode(`${element.type}`))
            dRegTh.appendChild(document.createTextNode(`${new Date(element.date).getDate()} / ${new Date(element.date).getMonth() + 1} / ${new Date(element.date).getFullYear()} `))

            linhaTr.appendChild(nomeTh);
            linhaTr.appendChild(nTermTh);
            linhaTr.appendChild(pgTh);
            linhaTr.appendChild(tLivroTh);
            linhaTr.appendChild(dRegTh);

            //Menu Ações
            const menuAct = document.createElement('th')
            const div01MenuAct = document.createElement('div')
            const a01MenuAct = document.createElement('a')
            const iMenuAct = document.createElement('i')
            const div02MenuAct = document.createElement('div')
            const a02MenuAct = document.createElement('a')
            const a03MenuAct = document.createElement('a')

            menuAct.setAttribute("scope", "row");

            div01MenuAct.setAttribute("class", "dropdown");

            a01MenuAct.setAttribute("class", "btn btn-sm btn-icon-only text-light");
            a01MenuAct.setAttribute("role", "button");
            a01MenuAct.setAttribute("data-toggle", "dropdown");
            a01MenuAct.setAttribute("aria-haspopup", "true");
            a01MenuAct.setAttribute("aria-expanded", "false");

            iMenuAct.setAttribute("class", "fas fa-ellipsis-v");

            div02MenuAct.setAttribute("class", "dropdown-menu dropdown-menu-left dropdown-menu-arrow")

            a02MenuAct.setAttribute("class", "dropdown-item")
            a02MenuAct.setAttribute("style", "cursor: pointer")
            a02MenuAct.appendChild((document.createTextNode(`Editar`)))

            a03MenuAct.setAttribute("class", "dropdown-item")
            a03MenuAct.setAttribute("style", "cursor: pointer")
            a03MenuAct.appendChild((document.createTextNode(`Excluir`)))

            a01MenuAct.appendChild(iMenuAct);

            div02MenuAct.appendChild(a02MenuAct);
            div02MenuAct.appendChild(a03MenuAct);

            div01MenuAct.appendChild(a01MenuAct);
            div01MenuAct.appendChild(div02MenuAct);

            menuAct.appendChild(div01MenuAct);

            linhaTr.appendChild(menuAct)

            listEL.appendChild(linhaTr);
        });
        maxPage = resp.data.pages;

        // const list = document.createElement('a')
        // listText = document.createTextNode(`Pagina ${page} de ${maxPage}`);
        // list.appendChild(listText);
        // listEL.appendChild(list);

    }).catch(err => {
        console.log(err)
    })
}

showItems();

// proxPage.onclick = () => {
//     page++;

//     if (page >= maxPage) page = maxPage;

//     showItems();
// }

// prevPage.onclick = () => {
//     page--;

//     if (page < 1) page = 1;

//     showItems();
// }

