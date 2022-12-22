const body = document.querySelector('body')

function OnloadPage() {
    createTable()
    createButton()
}

// To create the table under consideration
function createTable() {
    const table = document.createElement('table')
    table.style.border = '1px solid cadetblue'
    table.style.borderCollapse = 'collapse'
    table.style.width = '80%'
    table.style.backgroundColor = 'bisque'

    const data = [
        {
            'h1': '1,1',
            'h2': '1,2',
            'h3': '1,3',
            'h4': '1,4'
        },
        {
            'h1': '2,1',
            'h2': '2,2',
            'h3': '2,3',
            'h4': '2,4'
        },
        {
            'h1': '3,1',
            'h2': '3,2',
            'h3': '3,3',
            'h4': '3,4'
        },
        {
            'h1': '4,1',
            'h2': '4,2',
            'h3': '4,3',
            'h4': '4,4'
        }];

    function addHeaderToTable() {
        const headerRow = document.createElement('tr')
        headerRow.style.backgroundColor = 'grey'

        const hCol1 = document.createElement('th')
        hCol1.innerHTML = 'Header 1'
        hCol1.style.border = '1px solid brown'

        const hCol2 = document.createElement('th')
        hCol2.innerHTML = 'Header 2'
        hCol2.style.border = '1px solid brown'

        const hCol3 = document.createElement('th')
        hCol3.innerHTML = 'Header 3'
        hCol3.style.border = '1px solid brown'

        const hCol4 = document.createElement('th')
        hCol4.innerHTML = 'Header 4'
        hCol4.style.border = '1px solid brown'

        headerRow.appendChild(hCol1)
        headerRow.appendChild(hCol2)
        headerRow.appendChild(hCol3)
        headerRow.appendChild(hCol4)

        table.appendChild(headerRow)
    }

    function addDataToTable() {
        for (i of data) {
            const dataRow = document.createElement('tr')
            dataRow.style.textAlign = 'center'

            const Col1 = document.createElement('td')
            Col1.innerHTML = i.h1
            Col1.style.border = '0.5px solid brown'
            Col1.id=i.h1

            const Col2 = document.createElement('td')
            Col2.innerHTML = i.h2
            Col2.style.border = '0.5px solid brown'
            Col2.id=i.h2

            const Col3 = document.createElement('td')
            Col3.innerHTML = i.h3
            Col3.style.border = '0.5px solid brown'
            Col3.id=i.h3

            const Col4 = document.createElement('td')
            Col4.innerHTML = i.h4
            Col4.style.border = '0.5px solid brown'
            Col4.id=i.h4

            dataRow.appendChild(Col1)
            dataRow.appendChild(Col2)
            dataRow.appendChild(Col3)
            dataRow.appendChild(Col4)

            table.appendChild(dataRow)
        }
    }

    addHeaderToTable()
    addDataToTable()
    body.appendChild(table)
}


// UI of Buttons to traverse through the cells
function createButton(){
    body.appendChild(document.createElement('br'))

    const up=document.createElement('button')
    up.innerHTML='Move Up'
    body.appendChild(up)

    const down=document.createElement('button')
    down.innerHTML='Move Down'
    body.appendChild(down)

    const left=document.createElement('button')
    left.innerHTML='Move Left'
    body.appendChild(left)

    const right=document.createElement('button')
    right.innerHTML='Move Right'
    body.appendChild(right)

}