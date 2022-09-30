let minute = document.getElementById("mm");
let second = document.getElementById("ss");
let mSecond = document.getElementById("ml");

let iniciar = document.getElementById("iniciar");
let pause = document.getElementById("pause");
let reiniciar = document.getElementById("reiniciar");

let mm = 0;
let ss = 0;
let ml = 0;

let controle = true;

let croPause;

function format(content, content2) {
  if (content < 10) {
    content2.innerHTML = `0${content}`;
  } else {
    content2.innerHTML = content;
  }
}

iniciar.addEventListener("click", () => {
  if (controle) {
    iniciar.innerHTML = "Iniciar";
    croPause = setInterval(function () {
      ml++;
      mSecond.innerHTML = ml;

      format(ml, mSecond);

      if (ml == 100) {
        ss++;
        mSecond.innerHTML = "00";
        ml = 0;
      }

      format(ss, second);

      if (ss == 60) {
        ss = 0;
        second.innerHTML = "00";
        mm++;
      }

      format(mm, minute);
    }, 1000 / 100);
  }
  controle = false;
});

pause.addEventListener("click", function () {
  clearInterval(croPause);
  controle = true;
  iniciar.innerHTML = "Retomar";
});

reiniciar.addEventListener("click", function () {
  clearInterval(croPause);
  minute.innerHTML = "00";
  second.innerHTML = "00";
  mSecond.innerHTML = "00";
  mm = 0;
  ss = 0;
  ms = 0;
  controle = true;
});
