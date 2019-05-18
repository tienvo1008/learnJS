var infList = [];

function setValueByElement(elementName, valueNeedSet) {
    return document.getElementById(elementName).value = valueNeedSet;
}

function getValueByElement(elementName) {
    return document.getElementById(elementName).value;
}

function resetValueByElement(elementName) {
    return document.getElementById(elementName).value = '';
}

function clearForm() {
    resetValueByElement('fname');
    resetValueByElement('lname');
    resetValueByElement('yearold');
}


function reloadTable(infList) {
    document.getElementById("dataList").innerHTML = "";
    if (infList) {
        for (var i = 0; i < infList.length; i++) {
            infObj = infList[i];
            createTable(infObj)
        }
    }
}

function createTable(infObj) {
    var table = document.getElementById("dataList");
    var row = table.insertRow();
    var firstNameCell = row.insertCell(0);
    var lastNameCell = row.insertCell(1);
    var yearOldCell = row.insertCell(2);
    var highLightCell = row.insertCell(3);
    var deleteCell = row.insertCell(4);

    firstNameCell.innerHTML = infObj.firstName;
    lastNameCell.innerHTML = infObj.lastName;
    yearOldCell.innerHTML = infObj.yearOld;
    highLightCell.innerHTML = '<button onClick="hightlight(this)">Highlight</button>';
    deleteCell.innerHTML = '<button onClick="onDelete(this)">Xóa</button>'

}

var addInfo = function () {
    let firstName = getValueByElement('fname');
    let lastName = getValueByElement('lname');
    let yearOld = getValueByElement('yearold');

    let infObj = {
        firstName: firstName,
        lastName: lastName,
        yearOld: yearOld
    }

    infList.push(infObj);
    console.log(infList);

    reloadTable(infList);
    clearForm();

}

function hightlight(td) {
    row = td.parentElement.parentElement;
    row.style.background = "red"
}
function onDelete(td) {
    if (confirm("Are you sure to delete this record ?")) {
        row = td.parentElement.parentElement.parentElement;
        document.getElementById("dataList").deleteRow(row.rowIndex);
    }
}