/* 
Armar una función que reciba dos cadenas. Una de las cadenas son joyas que representan
los tipos de piedras preciosas que tenemos. La otra cadena reporesenta las piedras es un
tipo que tenemos. Quieremos saber cuántas de las piedras son también joyas. 
*/

function piedrasYJoyas(joyas: string, piedras: string) {
    const reg = new RegExp(`[${joyas}]`, "g");
    return piedras.match(reg)?.length ?? 0;
}

export default piedrasYJoyas;
