// Verificando se existe uma chave salva no localstorage
let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document.querySelector("#dark-mode-toggle");

// Ativar o modo escuro
const enableDarkMode = () => {
  document.documentElement.setAttribute("theme", "dark"); // Ativando o modo escuro
  localStorage.setItem("darkMode", "enabled"); // Atualizar o modo escuro no localstorage
  document.getElementById("theme-button-icon").classList = "fas fa-moon"; // Mudar o ícone do botão
};

// Função para desativar o modo escuro
const disableDarkMode = () => {
  localStorage.setItem("darkMode", null); // Atualizar o modo escuro no localstorage
  document.location.reload(true); // Recarrega a página para desativar modo escuro
};

// Se o usuário já visitou e ativou o modo escuro
// Começa com o as informações salvas
if (darkMode === "enabled") {
  enableDarkMode();
}

// Quando clica no botão
const changeTheme = () => {
  // Pega a informação salva no localstorage
  darkMode = localStorage.getItem("darkMode");

  // Se o modo escuro não foi ativado, será ativado
  if (darkMode !== "enabled") {
    enableDarkMode();
    // Se o modo escuro não foi ativado, será desativado
  } else {
    disableDarkMode();
  }
}
