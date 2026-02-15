

function radio(classe) {
    document.addEventListener("change", function (e) {

        if (e.target.matches(`.${classe} input[type="radio"]`)) {

            document.querySelectorAll(`.${classe}`)
                .forEach(div => div.classList.remove("selecionado"));

            const container = e.target.closest(`.${classe}`);
            if (container) {
                container.classList.add("selecionado");
            }
        }
    });
}

radio("unidade-card");
radio("servico-card");
radio("barbeiro-card");

const mes = document.getElementById("mesAno")
const voltar = document.getElementById("voltarMes")
const avancar = document.getElementById("avancarMes")
const anoDeAgora = new Date().getFullYear()
const mesDeAgora = new Date().getMonth()
const numeroForExtenco = {
    0: "janeiro",
    1: "fevereiro",
    2: "marco",
    3: "abril",
    4: "maio",
    5: "junho",
    6: "julho",
    7: "agosto",
    8: "setembro",
    9: "outubro",
    10: "novembro",
    11: "dezembro"
}

alert()
mes.innerText = `${numeroForExtenco[mesDeAgora]} ${anoDeAgora}`