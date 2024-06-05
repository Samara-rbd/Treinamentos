function tabuada() {
  //função nomeada quando o usuário deseja calcular a tabuada
  let num = document.getElementById("txtn"); //começa a pegar os elementos HTML pelo seu ID
  let tab = document.getElementById("seltab");
  if (num.value.length == 0) {
    window.alert("Por favor. digite um numero!");
  } else {
    let n = Number(num.value); // é o numero que o usuário digitou,  `c` é um contador inicializado em 1
    let c = 1;
    tab.innerHTML = ``; // limpesza do elemento 'select'
    while (c <= 10) {
      // laço para calcular
      let item = document.createElement("option"); // cada interação um novo elemento option é criado
      item.text = `${n} x ${c} = ${n * c}`;
      item.value = `tab${c}`;
      tab.appendChild(item);
      c++;
    }
  }
}
