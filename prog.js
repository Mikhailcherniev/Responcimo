function retanglo(){
    let x=Number(prompt("informe o lado "));
    let y=Number(prompt("informe o outro lado"));
    let resultado=x*y;
    alert("o resultado da área é "+resultado+"m²")
}

function triangulo(){
    let x=Number(prompt("informe a base "));
    let y=Number(prompt("informe a altura"));
    let resultado=x*y/"2";
    alert("o resultado da área é "+resultado+"m²")
}

function circulo(){
    let x=Number(prompt("informe o raio "));
    let y=Number(Math.PI);
    let resultado=x*y;
    alert("o resultado da área é "+resultado+"m²")
}

function trapezio(){
    let x=Number(prompt("informe a base maior"));
    let y=Number(prompt("informe a base menor"));
    let z=Number(prompt("informe a altura"));
    let resultado=(x*y)*z/"2";
    alert("o resultado da área é "+resultado+"m²")
}

function losango(){
    let x=Number(prompt("informe a maior diaginal "));
    let y=Number(prompt("informe a menor diagonal"));
    let resultado=x*y/"2";
    alert("o resultado da área é "+resultado+"m²")
}
