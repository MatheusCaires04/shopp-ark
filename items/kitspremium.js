const kitPremium = [
  {
    id: 0,
    name: "KIT FARM (R$ 40,00)",
    items: [
      "• 1 Quetzal 24K Peso",
      "• 1 Ancilo 2K Dano",
      "• 1 Doedic 2K Dano",
      "• 1 Mamute 2K Dano",
      "• Não trocamos os dinos desse kit",
    ],
  },
];

inicialoja = () => {
  let containerItems = document.querySelector(".container__items");
  kitPremium.map((val) => {
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
          <li>` +
      val.items[4] +
      `</li>
        </ul>
      </div>
    `;
  });
};

inicialoja();
