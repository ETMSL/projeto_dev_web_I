function resetarEstilosInput(inputElement) {
  const container = inputElement.closest(
    ".form-item, .select-item, .form-item-radio",
  );

  if (container) {
    container.classList.remove("error");
    container.style.removeProperty("--error-message");
  }
}

const form = document.querySelector(".contato-form");

form.addEventListener("submit", (event) => {
  let isValid = true;

  document.querySelectorAll(".error").forEach((el) => {
    el.classList.remove("error");
  });

  const requiredInputs = form.querySelectorAll(
    "input[id='input-nome'], input[id='input-email']",
  );
  requiredInputs.forEach((input) => {
    if (!input.value.trim()) {
      showError(input, "Campo obrigatório");
      isValid = false;
    }
  });

  const idadeInput = form.querySelector('input[type="number"]');
  const idadeValue = parseInt(idadeInput.value);

  if (idadeValue <= 0 || idadeValue > 120) {
    // Verifica limites
    showError(idadeInput, "Idade inválida (1-120)");
    isValid = false;
  }

  const genero = form.querySelector('input[name="genero"]:checked');
  if (!genero) {
    showError(form.querySelector(".form-item-radio"), "Selecione uma opção");
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
  } else {
    console.log("Formulário válido! Enviando...");
  }
});

function showError(element, message) {
  const container = element.closest(
    ".form-item, .select-item, .form-item-radio",
  );
  if (container) {
    container.style.setProperty("--error-message", `"${message}"`);
    container.classList.add("error");
  }
}
