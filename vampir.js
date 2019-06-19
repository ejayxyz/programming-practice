/* Sam és Dean Winchester egy vámpírtanya kiírtására készülnek Missouri állambeli Green Ridge külvárosában.
* Bobby információi szerint 12 vámpír tanyázik az elhagyott pajtában, ebből 3 nő, egy pedig alfa.
* Egy hím vámpírt 4 ezüstgolyó terít le. A nőket fele ennyi. Az alfát viszont a háromszora a férfinak.
* Samnek 3 tára van táranként 8 golyóval, Dean felkészültebb, 4 darab 10 töltényes tárral érkezett hentelni.
* A megbeszéltek szerint Castiel a segítségükre siet, ha kifogynak a munícióból. Castiel egy angyal,
* szinte halhatatlan, de egy kis esélye, 3%-a minden általa elpusztított vámpír esetén van, hogy megsérül.
*/

let alfa = 1;
let noivampir = 3;
let ferfivampir = 8;

let alfa_hp = 12;
let noivampir_hp = 2;
let ferfivampir_hp = 4;

let sam_mag = 3;
let sam_bullet = 8;
let dean_mag = 4;
let dean_bullet = 10;

let sam_all_bullet = sam_bullet * sam_mag;
let dean_all_bullet = dean_bullet * dean_mag;

console.log('Hány tölténye volt Deannek?');
console.log('Dean töltényeinek a száma:', dean_all_bullet);

console.log('-----------------------------------');

console.log('Hány tölténye volt Samneknek?');
console.log('Sam töltényeinek a száma:', sam_all_bullet);

console.log('-----------------------------------');

console.log('Hány töltényük volt összesen?');
console.log('Az összes töltény száma:', sam_all_bullet + dean_all_bullet);

console.log('-----------------------------------');

console.log('Hány töltény kell egy női vámpír kivégzéséhez?');
console.log('A női vámpír kivégzéséhez szükséges töltények száma:', noivampir_hp);

console.log('-----------------------------------');

console.log('Hány töltény kell az alfa kivégzéséhez?');
console.log('Az alfa kivégzéséhez szükséges töltények száma:', alfa_hp);

console.log('-----------------------------------');

console.log('Kinek volt több tölténye?');
if(sam_all_bullet > dean_all_bullet){

    console.log('Sam-nek volt több tölténye.')

}else{
    console.log('Dean-nek volt több tölténye.')
}

console.log('-----------------------------------');

console.log('Hány töltény szükséges az összes vámpír kivégzéséhez?');
let all_vampir_hp = (alfa * alfa_hp) + (noivampir * noivampir_hp) + (ferfivampir * ferfivampir_hp);
console.log('Összes szükséges töltény száma:', all_vampir_hp);

console.log('-----------------------------------');

console.log('Ha minden golyó betalál, Samnek hány tölténye marad az egy tárral maximálisan lelőhető vámpírok után?');
let sam_left_bullet = sam_bullet % (noivampir * noivampir_hp);
console.log('Sam megmaradt golyóinak száma:', sam_left_bullet);

console.log('-----------------------------------');

console.log('Ha minden golyó betalál, Deannek hány tölténye marad az egy tárral maximálisan lelőhető vámpírok után?');
let dean_left_bullet = dean_bullet;
for(let i = noivampir; i > 0; i--){
    if(dean_left_bullet >= noivampir_hp){
    dean_left_bullet = dean_left_bullet - noivampir_hp;
    }
}
for(let i = ferfivampir; i > 0; i--){
   if(dean_left_bullet >= ferfivampir_hp){  
       dean_left_bullet = dean_left_bullet - ferfivampir_hp;    
    }
 }
console.log('Dean megmaradt golyóinak száma:', dean_left_bullet);
 
console.log('-----------------------------------');
 
console.log('Szükséges volt-e Castiel közbelépése?');
if((sam_all_bullet + dean_all_bullet) % all_vampir_hp > 0){
    console.log('Nem volt szükség rá.');
}else{
console.log('Szükséges volt.');
}

console.log('-----------------------------------');

console.log('Mekkora esélye (%) volt Castielnek arra, hogy baja essen?');
let castiel_hurt = (noivampir * 3) + (ferfivampir * 3) + (alfa * 3);
console.log('Az esély:', castiel_hurt);

