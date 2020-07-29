// Select our DOM elements

const select1 = document.querySelector("#currency-name1");
const select2 = document.querySelector("#currency-name2");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const swapButton = document.querySelector("#btn");
const createH2 = document.querySelector(".created-text");
const p = document.querySelector("p");
const h4 = document.querySelector("h4");

// Main Function when an Event Listener activated

function calculate() {
    let currency1 = select1.value;
    let currency2 = select2.value;
    let amountOfMoney1 = input1.value;
    let amountOfMoney2 = input2.value;

    //Fetch

    fetch(
        `https://api.exchangeratesapi.io/latest?base=${currency1}&symbols${currency2}`
    )
        .then((res) => res.json())
        .then((data) => {
            let rate = data.rates[currency2];
            input2.value = amountOfMoney1 * rate;
            p.innerText = `Your selected currency is ${currency1} and costs ${currency2}`;
            h4.innerText = `Buy 1 ${currency1} for ${rate.toFixed(
                3
            )} ${currency2}`;
        })
        .catch((err) => console.log(err));
}

// Event Listeners

select1.addEventListener("change", calculate);
input1.addEventListener("input", calculate);
select2.addEventListener("change", calculate);
input2.addEventListener("input", calculate);

swapButton.addEventListener("click", () => {
    const temp = select1.value;
    select1.value = select2.value;
    select2.value = temp;

    calculate();
});

calculate();
