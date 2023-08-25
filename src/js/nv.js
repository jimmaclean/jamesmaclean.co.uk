document.addEventListener("DOMContentLoaded", function() {
    const data = [];
    const rows = document.querySelectorAll("tbody tr");
    [...rows].map(row => data.push(rowToObject(row)));

    function rowToObject(row) {
        let tds = [...row.querySelectorAll("td")];
        return {
            name: tds[0].innerText,
            level: tds[1].innerText,
            requirements: tds[2].innerText,
            ranks: tds[3].innerText,
            benefit: tds[4].innerText,
            id: tds[5].innerText
        };
    }

    console.log(data);
});
