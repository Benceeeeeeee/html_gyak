import './node_modules/bootstrap/dist/css/bootstrap.css'

document.addEventListener('DOMContentLoaded', () => {
  const amerika = document.getElementById("amerika");
  const bolygo = document.getElementById("bolygo");
  const allat = document.getElementById("allat");
  const bun = document.getElementById("bun");
  const fovaros = document.getElementById("fovaros");

  document.getElementById("kvizForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const amerikaa = amerika.value;
    const bolygoo = bolygo.value
    const allatt =allat.value;
    const bunn = bun.value
    const fovaross = fovaros.value
    const meter = document.getElementById("meter");


    let darab = 0;
    if(amerikaa == 'a'){
      darab += 1
      
    }
    if(bolygoo == 'c'){
      darab += 1;
    }
    if(allatt == 'c'){
      darab += 1;
    }
    if(bunn == 'b'){
      darab += 1;
    }
    if(fovaross == 'b'){
      darab += 1;
    }
    meter.value = darab;
    document.getElementById("visszajelzes").innerHTML = darab + " db lett jó";
    
  })
})