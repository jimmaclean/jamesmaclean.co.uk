document.addEventListener("DOMContentLoaded", function() {
    const rows = document.querySelectorAll("tbody tr");
    const resultEl = document.getElementById("result");
    const data = [];
    const requirementsList = {};

    function rowToObject(row) {
        let tds = [...row.querySelectorAll("td")];
        return {
            name: tds[0].innerText,
            level: tds[1].innerText,
            requirements: reqStringToObject(tds[2].innerText),
            ranks: tds[3].innerText,
            benefit: tds[4].innerText,
            id: tds[5].innerText
        };
    }

    // const teststr1 = "Female PC";
    // const teststr2 = "Male PC";
    // const teststr3 = "Energy Weapons 90";
    // const teststr4 = "PE 6, Sneak 30";
    function reqStringToObject(req) {
        if (req === "") return null;

        let obj = {};
        let stringArr = req.split(", ");

        for (let i = 0; i < stringArr.length; i++) {
            let attribute = stringArr[i].split(" ");
            let key = [attribute[0]];
            let value;
            let valuePrefix = "";

            for (let ii = 1; ii < attribute.length; ii++) {
                if (attribute[ii] === "or") {
                    obj.oneOf = true;
                    obj[key.join("-")] = attribute[ii - 1];
                    key = [];
                    continue;
                }
                if (attribute[ii] === "<") {
                    valuePrefix = "<";
                    continue;
                }

                if (ii === attribute.length - 1) {
                    value = attribute[ii];

                    if (attribute[ii] === "PC") {
                        key.push(attribute[ii]);
                        value = true;
                    }
                } else {
                    key.push(attribute[ii]);
                }
            }

            key = key.join("-");

            requirementsList[key] = (requirementsList[key] || 0) + 1;

            obj[key] = valuePrefix + value;
        }

        return obj;
    }
    // console.log(reqStringToObject(teststr1));
    // console.log(reqStringToObject(teststr2));
    // console.log(reqStringToObject(teststr3));
    // console.log(reqStringToObject(teststr4));

    function createOutput(data) {
        const textarea = document.createElement("textarea");
        textarea.setAttribute("cols", 80);
        textarea.setAttribute("rows", 20);
        textarea.value = JSON.stringify(data, null, 2);
        return textarea;
    }

    [...rows].map(row => data.push(rowToObject(row)));

    resultEl.appendChild(createOutput(data));
    resultEl.appendChild(createOutput(requirementsList));

    // console.log("Guns 45 or Energy Weapons 45".split(", ").length);
});
