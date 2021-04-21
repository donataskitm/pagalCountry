
const konteineris = document.getElementById('vieta');
konteineris.style.display = "flex";
konteineris.style.flexWrap = "wrap";
konteineris.style.justifyContent ="center";



const btn = document.getElementById('mygtukas');
btn.addEventListener("click", paieska);

const btnClear = document.getElementById('clear');
btnClear.addEventListener("click", clear);


async function paieska(){
  
  if (document.getElementById('country').value!==""){
  
  document.getElementById("vieta").innerHTML = "";
  
  try{
    const name = document.getElementById('country').value;
    console.log(name);

    const pazadas = await fetch (`https://restcountries.eu/rest/v2/name/${name}?fullText=true`);
    const salys = await pazadas.json();
  

    if (pazadas.status === 200){

       // console.log(salys);

    for (let i=0; i<salys.length; i++){

    const vienaSalis = document.createElement('div');
    const vienaSalis1 = document.createElement('div');

    //vienaSalis1.classList.add("remas");
    vienaSalis1.style.width = "300px";
    vienaSalis1.style.marginBottom = "15px";
    vienaSalis1.style.height= "auto";

    const nuotrauka = document.createElement('img');
    const pavadinimas = document.createElement('h3');

    pavadinimas.style.textAlign = "center";
   // nuotrauka.src = salis.flag;
    nuotrauka.src =salys[i].flag;
    nuotrauka.style.height = "100px";
    nuotrauka.style.display ="block";
    nuotrauka.style.margin = "0 auto";
    nuotrauka.style.paddingTop = "20px";
    //  pavadinimas.innerText = salis.name;
 
    pavadinimas.innerText ="Country: "+salys[i].name;
    //console.log(salis.name);
    konteineris.appendChild(vienaSalis1);

    vienaSalis1.appendChild(vienaSalis);
    vienaSalis.appendChild(nuotrauka);
    vienaSalis.appendChild(pavadinimas);
    vienaSalis.style.backgroundColor = "#e3e1e1";
    vienaSalis.style.minHeight = "100%";
    vienaSalis.style.margin = "0px 20px 0px 20px";

    const kalba_p = document.createElement('p'); 

    kalba_p.innerText="Language: ";
    kalba_p.style.paddingLeft = "20px";

    vienaSalis.appendChild(kalba_p);

    const kalba_ul = document.createElement('ul'); 

        for (let x=0; x<salys[i].languages.length; x++){
          console.log(salys[i].languages[x].name)
        //  console.log(salis.languages[i].name)
          const kalba_li = document.createElement('li');

          kalba_li.innerText = salys[i].languages[x].name;
          kalba_ul.appendChild(kalba_li);
          vienaSalis.appendChild(kalba_ul);
        } //antro ciklo pabaiga




document.getElementById('country').value=null;


    } //pirmo ciklo pabaiga
    }
else if (pazadas.status === 404){
document.getElementById("vieta").innerHTML = "Country not found";
}
else {
document.getElementById("vieta").innerHTML = "Some other error";
}

  }catch{
    console.log(error);
  }
  }//if
  else{
    document.getElementById("vieta").innerHTML = "Enter country";
  }
}

function clear(){
  document.getElementById("vieta").innerHTML = "";
}

