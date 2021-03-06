/*

Implementa una función la cual se comporta como el comando 'uniq-c' de Unix.
Este comando toma por entrada una secuencia y devuelve otra secuencia en la cual todos los 
elementos duplicados de manera seguida han sido reducido a una única
instancia junto con el número de ocurrencias en la secuencia original

Ejemplo:

['a','a','b','b','c','a','b','c'] --> [['a',2],['b',2],['c',1],['a',1],['b',1],['c',1]]
*/

console.log('----------------- Ejercicio numero 1 -----------------')
console.log(newArray);


function uniqC(...values) {
    return getSubArrays(...values).map((subArray) => [...new Set(subArray), subArray.length]);
  }
  
  function getSubArrays(...values) {
    let start = 0;
    let end = 0;
    const subValues = [];
    for (let index = 0; index < values.length; index++) {
      if (values[index] === values[index + 1]) end++;
      else {
        subValues.push(values.slice(start, end + 1));
        start = end + 1;
        end = start;
      }
    }
    return subValues;
  }





/** 
Para este ejercicio, crearás un método global aplanar. 
El método recibe cualquier número de argumentos y los aplana en una sola lista. 
Si alguno de los argumentos que se le pase es una lista, entonces los ojetos individuales en la secuencia serán aplanados de forma tal
que existan al mismo nivel que los otros elementos. 
Cualquier secuencia o lista anidada, sin importar el nivel de profundidad, deberá ser aplanado en una sola lista.

Los siguientes son ejemplos de como esta función sería utilizada y cuál sería el resultado esperado.

flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']

 */
console.log('----------------- Ejercicio numero 2 -----------------')

function flatten(values) {
    return values.some(Array.isArray) ? flatten([...values.flat()]) : values;
  }
  console.log(flatten(1, [2, 3], 4, 5, [6, [7]]))
  console.log(flatten(['a', ['b', 2], 3, null, [[4], ['c']]]));

/*

Dada una lista de palabras y una palabra compuesta meta, tu objetivo es encontrar las dos palabras que combinadas forman la palabra meta,
devolviendo ambas palabras en el mismo orden en que aparecen en la lista, y sus respectivos índices en el orden en que deben combinarse para formar la palabra meta. 
Las palabras en la lista que se recibe pueden repetirse, pero solo habrá un par único conforma la palabra meta. Si no hay palabras en la lista que conformen la palabra meta, puedes devolver null.

Ejemplos  

fn(['super','bow','bowl','tar','get','book','let'], "superbowl")
// ['super','bowl',   [0,2]]

fn(['bow','crystal','organic','ally','rain','line'], "crystalline")
// ['crystal','line', [1,5]]

fn(['bow','crystal','organic','ally','rain','line'], "rainbow")
// ['bow','rain',     [4,0]]

fn(['bow','crystal','organic','ally','rain','line'], "organically")
// ['organic','ally', [2,3]]

fn(['top','main','tree','ally','fin','line'], "mainline")
// ['main','line',    [1,5]]

fn(['top','main','tree','ally','fin','line'], "treetop")
// ['top','tree',     [2,0]]
*/


function word(array, mainWord) {   

let arrayWord = [];

    for (let index = 0; index < array.length; index++) {

        for (let j = 0; j < array.length; j++) {
            const element = array[j];            
            let newWord = element + array[index];

            if(newWord === mainWord){  
                arrayWord.push(array[j] + ',' + array[index]);
                arrayWord.push([j + ',' + index]);
                console.log(arrayWord)
            }
        }       
    }    
}
console.log('----------------- Ejercicio numero 3 -----------------')
word(['top','main','tree','ally','fin','line'], "treetop")
word(['top','main','tree','ally','fin','line'], "mainline")


/*

Se te solicita elevar al cuadrado cada dígito de un número y luego concatenarlos todos juntos.
Por ejemplo, si tomamos 9119 y llamamos nuestra función con este número, la función debería devolver 811181, porque 9 al cuadrado es 81, 1 al cuadrado es 1, 1 al cuadrado es 1 y 9 al cuadrado es 81

fn(9119) // 811181

Nota: La función acepta un número entero y retorna un entero
 */

function func1(num) {
   let newNum = "" + num + "";
   const newArray = Array.from(newNum);

   let result = '';

   for (let index = 0; index < newArray.length; index++) {
       const element = newArray[index];

       result = result + element**2;       
   }
   console.log(result);
}
console.log('----------------- Ejercicio numero 4 -----------------')
func1(9119);