const bugadoDinos = [
  {
    id: 0,
    name: "AJUDA PARA DOMAR (R$ 5)",
    items: [
      "Derrube qualquer Dino de qualquer Level e deixaremos ele LV 380+",
      "forneceremos Balm",
      "Kibble",
      "Toxinas e uparemos +60LV após domado",
    ],
  },
  {
    id: 1,
    name: "LV EM 1 DINO (R$ 1)",
    items: ["Apenas em dinos já domados", "Domados", "Prontos", "Completo"],
  },
];

inicialoja = () => {
  let containerItems = document.querySelector(".container__items");
  bugadoDinos.map((val) => {
    containerItems.innerHTML +=
      `
      <div class='box__item'>
        <strong>` +
      val.name +
      `</strong>
        <ul>
          <li>` +
      val.items[0] +
      `</li>
          <li>` +
      val.items[1] +
      `</li>
          <li>` +
      val.items[2] +
      `</li>
          <li>` +
      val.items[3] +
      `</li>
        </ul>
      </div>
    `;
  });
};

inicialoja();
