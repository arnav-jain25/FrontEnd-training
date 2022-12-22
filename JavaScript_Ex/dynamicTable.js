const body = document.querySelector('body')

const table = document.createElement('table')
table.style.border = '3px solid cadetblue'
table.style.borderCollapse = 'collapse'
table.style.width = '80%'

const data = [
    {
        "name": "John Dow",
        "age": "25",
        "salary": "432392"
    }, {
        "name": "Jane Austin",
        "age": "62",
        "salary": "3289430"
    }, {
        "name": "Ross Shots",
        "age": "34",
        "salary": "84839219"
    }];

// function clearTable(){
//     const rows=document.querySelectorAll('.dr')
//     for(j of rows){
//         table.removeChild(j)
//     }
//     table.removeChild(dr)
// }

// function add(){
//     const obj={
//         "name": "",
//         "age": "",
//         "salary": ""
//     }

//     clearTable()
//     data.push(obj)
//     addDataRow()
//     return
// }

function addHeaderRow() {
    const headerRow = document.createElement('tr')
    headerRow.style.backgroundColor = 'grey'

    const headerCol1 = document.createElement('th')
    headerCol1.innerHTML = "Name"
    headerCol1.style.border = '1px solid bisque'

    const headerCol2 = document.createElement('th')
    headerCol2.innerHTML = "Age"
    headerCol2.style.border = '1px solid bisque'

    const headerCol3 = document.createElement('th')
    headerCol3.innerHTML = "Salary"
    headerCol3.style.border = '1px solid bisque'

    headerRow.appendChild(headerCol1)
    headerRow.appendChild(headerCol2)
    headerRow.appendChild(headerCol3)

    table.appendChild(headerRow)
}

// --------------------------------

function addDataRow() {

    for (i of data) {
        const dataRow = document.createElement('tr')
        dataRow.style.textAlign = 'center'
        dataRow.class='dr'

        const dataCol1 = document.createElement('td')
        dataCol1.innerHTML = i.name
        dataCol1.style.border = '1px solid bisque'

        const dataCol2 = document.createElement('td')
        dataCol2.innerHTML = i.age
        dataCol2.style.border = '1px solid bisque'

        const dataCol3 = document.createElement('td')
        dataCol3.innerHTML = i.salary
        dataCol3.style.border = '1px solid bisque'

        dataRow.appendChild(dataCol1)
        dataRow.appendChild(dataCol2)
        dataRow.appendChild(dataCol3)

        table.appendChild(dataRow)
    }
}

body.appendChild(table)

function addButton() {
    const addData = document.createElement('button')
    addData.style.border = '1px solid red'
    addData.style.borderCollapse = 'collapse'
    addData.innerHTML = 'Add rows to the data table'
    addData.onclick = 'add()'
    body.appendChild(document.createElement('br'))
    body.appendChild(addData)
}

addHeaderRow()
addDataRow()
addButton()