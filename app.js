

const resultScreen = document.querySelector('.result-screen input');
const buttons = document.querySelectorAll('.btn-group button');
const calculate = document.querySelector("#calculate")
const clean = document.querySelector("#clean")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.value !== "=") {
            resultScreen.value += button.value
        }

    })
})

calculate.addEventListener("click", () => {
    resultScreen.value = eval(resultScreen.value)

})

clean.addEventListener("click", () => {
    resultScreen.value = ""
})