const listEl = document.getElementById("lista");
const formEl = document.getElementById("searchForm");
const nameEl = document.getElementById("name");
const termNumberEl = document.getElementById("termNumber");
const pageNumberEl = document.getElementById("pageNumber");
const dateEl = document.getElementById("date");
const date2El = document.getElementById("date2");

function formatDateBR(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [day, month, year].join('/');
}

function formatDateUS(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [month, day, year].join('/');
}


formEl.onsubmit = async event => {
    event.preventDefault();

    listEl.innerHTML = ('')

    await axios.get('http://localhost:3000/api/cads').then(resp => {

        result = resp.data.docs;


        let searchObj = {
            name: nameEl.value,
            pageNumber: pageNumberEl.value,
            termNumber: termNumberEl.value,
            dateInit: new Date(formatDateBR(dateEl.value)),
            dateEnd: new Date(formatDateBR(date2El.value)),
        }

        result.forEach(element => {
            if ((element.name.toLowerCase().search(searchObj.name.toLowerCase()) !=  -1 || searchObj.name == '') 
            && (element.pageNumber == searchObj.pageNumber || searchObj.pageNumber == '') 
            && (element.termNumber == searchObj.termNumber || searchObj.termNumber == '')
            && ((new Date(element.date) >= searchObj.dateInit && new Date(element.date) < searchObj.dateEnd) || (isNaN(Date.parse(searchObj.dateInit)) && (isNaN(Date.parse(searchObj.dateEnd)))))
            ) {
                const list = document.createElement('li')
                const listText = document.createTextNode(`Nome: ${element.name}, Numero do termo: ${element.termNumber}, Pagina: ${element.pageNumber},Tipo: ${element.type}`);
                list.appendChild(listText);
                listEl.appendChild(list);
            }
        });


    }).catch(err => {
        console.log(err)
    })
}




