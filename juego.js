function generador(max) {
    return Math.floor(Math.random() * max) + 1;
}
let numA1 = generador(10);
let numA2 = generador(10);

let intentos1 = 2;
let intentos2 = 4;
let adivinado = false;

const letraS = (intentos)=>{
    if (intentos !== 1) {
        const S ='s';
        return S
    }else{
        return '';
    }
} 
 


 while (intentos1 > 0 && adivinado ===  false) {

    const letraS = (intentos1)=>{
        if (intentos1 !== 1) {
            const S ='s';
            return S
        }else{
            return '';
        }
    }    
    const numI1 = Number(prompt('Ingrese el primer número por adivinar, Tienes '+intentos1+' intento'+ letraS(intentos1)));
    intentos1 =  intentos1 - 1  ;

  
    if (numI1 === numA1) {
        adivinado = true;
    }else{
        adivinado = false;
        alert('Vuelve a intentarlo');
    }

 }
 while (intentos2 > 0 && adivinado ===  false) {
    const numI2 = Number(prompt('Ingrese el segúndo número por adivinar ,Tienes '+intentos2+' intento'+ letraS(intentos2)));
    intentos2 =  intentos2 - 1  ;
    if (numI2 === numA2) {
        adivinado = true;
    } else if(intentos2 > 0){
        adivinado = false;
        alert('Vuelve a intentarlo');
    }
 
 }


 if (adivinado === false) {
    alert('Perdiste');
 }else{
    alert('Ganaste!!!');
 }
