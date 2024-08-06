// const Items = class {
//     async getAllItems() {
//         const url = 'http://localhost:3000/items';
//         const response = await fetch(url);
//         const items = await response.json();
//         return items;
//     }

//     async seachItemsByCS(cs) {
//         const url = `http://localhost:3000/items?cs=${cs}`;
//         const response = await fetch(url);
//         const items = await response.json();
//         return items;
//     }

//     async seachItemsByStatus(status) {
//         const url = `http://localhost:3000/items?status=${status}`;
//         const response = await fetch(url);
//         const items = await response.json();
//         return items;
//     }

//     async seachItemsBySerial(serial) {
//         const url = `http://localhost:3000/items?serial=${serial}`;
//         const response = await fetch(url);
//         const items = await response.json();
//         return items;
//     }

//     async seachItemsByEquipmentType(equipment_type) {
//         const url = `http://localhost:3000/items?equipment_type=${equipment_type}`;
//         const response = await fetch(url);
//         const items = await response.json();
//         return items;
//     }

//     async seachItemsByCompany(company) {
//         const url = `http://localhost:3000/items?company=${company}`;
//         const response = await fetch(url);
//         const items = await response.json();
//         return items;
//     }

//     async seachItemsByTech(tech) {
//         const url = `http://localhost:3000/items?tech=${tech}`;
//         const response = await fetch(url);
//         const items = await response.json();
//         return items;
//     }

// }


// async function showItems() {
//     try {
//         var items = await itemsService.getAllItems();
//     }
//     catch (error) {
//         console.log(error);
//         showErrorMessage(error);
//         return;
//     }

//     for (let item of items) {
//         addItemToPage(item);
//     }
// }

// async function searchByCS(cs) {
//     try {
//         var items = await itemsService.seachItemsByCS(cs);
//     }
//     catch (error) {
//         console.log(error);
//         showErrorMessage(error);
//         return;
//     }

//     for (let item of items) {
//         addItemToPage(item);
//     }
// }

// function addItemToPage(item) {
//     var template = document.getElementById("game-template").content.cloneNode(true);
//     template.querySelector('#gameTitle').innerText = item.cs;
//     template.querySelector('#gameText').innerText = item.status;
//     template.querySelector('#gameGenre').innerText = item.serial;
//     template.querySelector('#gameImg').src = item.equipment_type;
//     template.querySelector('.game-url').href = item.Company;

//     document.querySelector('#games-list').appendChild(template);
// }

// function showErrorMessage(error) {
//     var errorMessageElement = document.getElementById("error-messages");
//     errorMessageElement.style.display = "block";
//     errorMessageElement.innerText = "Error: " + error.message;
// }