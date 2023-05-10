/* 
Armar una función que reciba dos cadenas. Una de las cadenas son joyas que representan
los tipos de piedras preciosas que tenemos. La otra cadena reporesenta las piedras es un
tipo que tenemos. Quieremos saber cuántas de las piedras son también joyas. 
*/

function myFunction(joyas, piedras) {
  const reg = new RegExp(`[${joyas}]`, "g");
  return piedras.match(reg)?.length ?? 0;
}

console.assert(myFunction("aA", "aAAbbbb") === 3);
console.assert(myFunction("z", "ZZ") === 0);

export default myFunction;
