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

radio("barbeiro");
radio("barbearias");
