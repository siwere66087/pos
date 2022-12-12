

let products = JSON.parse(localStorage.getItem('products ')) ?
JSON.parse(localStorage.getItem('products ')) : 

[
    {
        
        id:1,
        name:"cat shoe",
        description:"casual cat shoe",
        price:"R2110",
        pImage:"https://i.postimg.cc/GhVsXqp5/cat1.jpg",
        
    },

    {
        id:2,
        name:"cat sneaker",
        description:"casual cat sneaker",
        price:"R1710",
        Image:"https://i.postimg.cc/PJL1qcx1/cat2.webp",
        
    
    
    
     },

      {
        id:3,
        name:"sneaker",
        description:"formal shoe",
        price:"R1110",
        pImage:"https://i.postimg.cc/D0bbhXjg/cat3.jpg",
       
    
    
    
    },
     {
        id:4,
        pname:"cat shoe",
        description:"casual shoe",
        price:"R910",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        
    
    
    
    },
    {
        id:5,
        name:"cat shoe",
        description:"casual shoe",
        price:"R1210",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
       
    
    
    
    },
    {
        id:6,
        name:"cat shoe",
        description:"casual/formal shoe",
        price:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        
    
    
    
    },
    {
        id:7,
        name:"cat shoe",
        description:"casual shoe",
        price:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        
    
    
    
    },
    {
        id:8,
        name:"cat shoe",
        description:"casual shoe",
        price:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        
    
    
    
    },
    {
        id:9,
        name:"cat shoe",
        description:"casual shoe",
        price:"R2110",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        
    
    
    
    },
    {
        id:10,
        name:"cat shoe",
        description:"casual shoe",
        price:"R9110",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
       
    
    
    },
    {
        id:4,
        name:"cat shoe",
        description:"casual shoe",
        price:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        
    
    
    },
];


function displayTableData(){

let html = "<table border = '1|1' class = 'table'>";

setTimeout(() => {

html += "<thead>";
html+= "<tr>";
html += "<td>" + 'id' +"</td>";
html += "<td>" + 'product name' +"</td>";
html += "<td>" + 'product description' +"</td>";
html += "<td>" + 'product price' +"</td>";
html += "<td>" + 'action' +"</td>";


html += "</tr>";
html += "</thead>";


for(let i = 0; i < products.length;i++){
let id = i+1;

html+= "<tr>";
html += "<td>" + id +"</td>";
html += "<td>" + products[i].name +"</td>";
html += "<td>" + products[i].description +"</td>";
html += "<td>" + products[i].price +"</td>";
html += "</tr>";

}


html+= "</table>";
document.getElementById("table").innerHTML = html },200);

}

displayTableData();



//adding product to the table  
function addArayy(){

let name =  document.getElementById ('name').value;
let description =  document.getElementById ('description').value;
let price =  document.getElementById ('price').value;


if(name && description && price ){

let id = products.length + 1;
products.push({name:name, description:description,price:price,id:id })

displayTableData();
addArayy();
deleleItems();

}

}


//delete product to the table  
function deleleItems(){

    document.getElementById ('name').value = ""
    document.getElementById ('description').value= ""
    document.getElementById ('price').value= "" 
    
    if(name && description && price ){
    
    let id = products.length + 1;
    products.push({name:name, description:description,price:price,id:id })
    
    displayTableData();
    
    }
    
    }
    



































































































// async function tableDisplay() {
//   products.forEach((products) => {
//     document.querySelector("#tdata").innerHTML += `
//           <tr>
//             <th scope="row">${products.id}</th>
//             <td>${products.pname}</td>
//             <td>${products.description}</td>
//             <td>${products.pPrice}</td>
//           </tr>
//         `;
//   });
// }
// tableDisplay();















































let selectedRow = null

function onFormSubmit(e) {
	e.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["productId"] = document.getElementById("productId").value;
    formData["pname"] = document.getElementById("pname").value;
    formData["description"] = document.getElementById("description").value;
    formData["perPrice"] = document.getElementById("perPrice").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("prodList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.productId;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.pname;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.description;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.perPrice;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("productId").value = selectedRow.cells[0].innerHTML;
    document.getElementById("pname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("description").value = selectedRow.cells[2].innerHTML;
    document.getElementById("perPrice").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.productId;
    selectedRow.cells[1].innerHTML = formData.pname;
    selectedRow.cells[2].innerHTML = formData.description;
    selectedRow.cells[3].innerHTML = formData.perPrice;
}

//Delete the data
function onDelete(td) {
    if (confirm('you are about to delete this product!! do you want to continue?')) {
        row = td.parentElement.parentElement;
        document.getElementById('prodList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("productId").value = '';
    document.getElementById("pname").value = '';
    document.getElementById("description").value = '';
    document.getElementById("perPrice").value = '';
    selectedRow = null;
}







