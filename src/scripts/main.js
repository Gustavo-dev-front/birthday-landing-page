const BTN_CALC = document.querySelector('[data-btn="calcular"]');
const OUTPUT = document.querySelector(".calculator__output__count");
const NASC = document.querySelector("#date");

let last_interval = null;

const calcular = (born) => {
  const date_now = new Date();
  const date_target = new Date(date_now.getFullYear(), born.getMonth(), born.getDate());
  
  if(date_target < date_now) date_target.setFullYear(date_now.getFullYear() + 1);
  
  const DIFF_IN_MS = date_target - date_now;
  const dias = Math.floor(DIFF_IN_MS / (1000 * 60 * 60 * 24));
  const horas = Math.floor((DIFF_IN_MS % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((DIFF_IN_MS % (1000 * 60 * 60 )) / (1000 * 60 ));
  const segundos = Math.floor((DIFF_IN_MS % (1000 * 60 )) / 1000 );

  return {dias, horas, minutos, segundos};
}

const start = (e) => {
  e.preventDefault();
  clearInterval(last_interval);
  const born = new Date (`${NASC.value} 00:00:00`);

  last_interval = setInterval(() => {
    const {dias, horas, minutos, segundos} = calcular(born);

    OUTPUT.innerText = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
  }, 1000);
}

BTN_CALC.addEventListener("click", start);
