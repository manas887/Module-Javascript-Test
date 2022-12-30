import newdata from "./mydata.json" assert {type: 'json'};
console.log(newdata);

let searchInput = document.getElementById("searchInput");

function mapData(newdata) {
    tableBody.innerHTML = "";

    newdata.map((item) => {
        let tableItem = document.createElement("tr");
        tableItem.innerHTML =
            `
            <td>${item.id}</td>
            <td><img src="${item.img_src}"/> ${item.first_name} ${item.last_name}</td>
            <td>${item.gender}</td>
            <td>${item.class}</td>
            <td>${item.marks}</td>
            <td>${item.passing ? "Pass" : "Fail"}</td>
            <td>${item.email}</td>
            `
        tableBody.append(tableItem);
    });

}
mapData(newdata);


window.searchTablea = function searchTablea() {
    let search = searchInput.value;
    let matchedData = newdata.filter((item) => {
        return item.first_name.toLowerCase().includes(search.toLowerCase()) || item.last_name.toLowerCase().includes(search.toLowerCase()) || item.email.toLowerCase().includes(search.toLowerCase())
    });
    mapData(matchedData);
}

window.sortAZa = function sortAZa() {
    let increasingData = newdata.sort((a, b) => {
        if ((a.first_name < b.first_name)) {
            return -1;
        }
        if ((a.first_name < b.first_name)) {
            return 1;
        }
        return 0;
    })
    mapData(increasingData)
}

window.sortZAa = function sortZAa() {
    let decreasingData = newdata.sort((a, b) => {
        if ((a.first_name > b.first_name)) {
            return -1;
        }
        if ((a.first_name > b.first_name)) {
            return 1;
        }
        return 0;
    })
    mapData(decreasingData)
}

window.sortMarksa = function sortMarksa() {
    let increasingMarks = newdata.sort((a, b) => {
        if (a.marks < b.marks) {
            return -1;
        }
        if (a.marks > b.marks) {
            return 1;
        }
        return 0;
    })
    mapData(increasingMarks)
}

window.sortPassinga = function sortPassinga() {
    let passedStudent = newdata.filter((item) => {
        return item.passing;
    })
    mapData(passedStudent)
}

window.sortClassa = function sortClassa() {
    let classSort = newdata.sort((a, b) => {
        if ((a.class < b.class)) {
            return -1;
        }
        if ((a.class < b.class)) {
            return 1;
        }
        return 0;
    })
    mapData(classSort);
}