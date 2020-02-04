const formEl = document.getElementById("cadForm");

const nameEl = document.getElementById('name');
const termNumberEl = document.getElementById('termNumber');
const pageNumberEl = document.getElementById('pageNumber');
const dateEl = document.getElementById('date');

const typeRegEl = document.getElementsByName('typeReg');

function getCheckedType() {
    let typeRegElValue
    typeRegEl.forEach(element => {
        if (element.checked) typeRegElValue = element.value
    })
    return typeRegElValue
}


const addToRepos = a => axios.post('http://localhost:3000/api/cads', a).then(resp => {
    console.log('Cadastro concluído')
    document.getElementById('complete').removeAttribute('hidden');
    document.getElementById('error').setAttribute('hidden', true);
}).catch();


formEl.onsubmit = event => {
    event.preventDefault();

    if (nameEl.value == '' || termNumberEl.value == '' || pageNumberEl.value == '') {
        document.getElementById('error').removeAttribute('hidden');
        document.getElementById('complete').setAttribute('hidden', true);
    } else {

        let a = {
            name: nameEl.value,
            termNumber: termNumberEl.value,
            pageNumber: pageNumberEl.value,
            date: dateEl.value,
            type: getCheckedType(),
        }

        addToRepos(a);

        nameEl.value = '';
        termNumberEl.value = '';
        pageNumberEl.value = '';
        dateEl.value = '01/01/2000';
        typeRegEl[0].checked = true;
    }
}




