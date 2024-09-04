document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("#nav-bar .nav-link");
  const sections = document.querySelectorAll("main section");

  function updateActiveLink() {
    let index = 0;
    const fromTop = window.scrollY + 50;

    sections.forEach((section, i) => {
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        index = i;
      }
    });

    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[index].classList.add("active");
  }

  updateActiveLink();

  window.addEventListener("scroll", updateActiveLink);

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offset = 100;
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });

    const icon = link.querySelector("i");

    link.addEventListener("mouseenter", () => {
      if (icon.classList.contains("bx-food-menu")) {
        icon.classList.replace("bx-food-menu", "bxs-food-menu");
      } else if (icon.classList.contains("bxs-folder")) {
        icon.classList.replace("bxs-folder", "bxs-folder-open");
      } else if (icon.classList.contains("bx-search-alt-2")) {
        icon.classList.replace("bx-search-alt-2", "bxs-search-alt-2");
      }
    });

    link.addEventListener("mouseleave", () => {
      if (icon.classList.contains("bxs-food-menu")) {
        icon.classList.replace("bxs-food-menu", "bx-food-menu");
      } else if (icon.classList.contains("bxs-folder-open")) {
        icon.classList.replace("bxs-folder-open", "bxs-folder");
      } else if (icon.classList.contains("bx-search-alt-2")) {
        icon.classList.replace("bx-search-alt-2", "bxs-search-alt-2");
      } else if (icon.classList.contains("bxs-search-alt-2")) {
        icon.classList.replace("bxs-search-alt-2", "bx-search-alt-2");
      }
    });
  });
});

function findEnterprise() {
  let inputData = document.querySelector("#number").value;
  console.log(inputData);
  getData(inputData);
}

async function getData(CNPJ) {
  let data = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${CNPJ}`).then(
    (response) => response.json()
  );
  console.log(data);
  documentChange(data);
}

function documentChange(data) {
  // Situação Cadastral
  document.querySelector("#cnpj").innerHTML = data.cnpj;
  document.querySelector("#razao-social").innerHTML = data.razao_social;
  document.querySelector("#nome-fantasia").innerHTML = data.nome_fantasia;
  document.querySelector("#situacao-cadastral").innerHTML =
    data.descricao_situacao_cadastral +
    ", Verificado em " +
    data.data_situacao_cadastral;
  document.querySelector("#cnae-fiscal").innerHTML = data.cnae_fiscal + ", " + data.cnae_fiscal_descricao;

  // Localização
  document.querySelector("#cep").innerHTML = data.cep;
  document.querySelector("#logradouro").innerHTML = data.logradouro;
  document.querySelector("#bairro").innerHTML = data.bairro;
  document.querySelector("#municipio-uf").innerHTML = data.municipio + ", " + data.uf;

  // Contato
  document.querySelector("#telefone").innerHTML = data.ddd_telefone_1;
}
