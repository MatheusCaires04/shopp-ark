const recompensas = [
  {
    id: 0,
    name: "CHEGAR EM R$ 50",
    items: "• 1 Dino Bugado",
  },
  {
    id: 1,
    name: "CHEGAR EM R$ 100",
    items: "• R$ 50 em itens da lojao",
  },
];

inicialoja = () => {
  let containerItems = document.querySelector(".container__items");
  recompensas.map((val) => {
    containerItems.innerHTML +=
      `
      <div class='box__item'>
        <strong>` +
      val.name +
      `</strong>
        <ul>
          <li>` +
      val.items +
      `</li>
        </ul>
        
      </div>
    `;
  });
};

inicialoja();
