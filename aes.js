/*
 * * * * * * * * * * * * * * *
 Encriptación AES-256 utilizando el módulo Crypto de Node.js
 Para correr el script es necesario tener instalado Node.js y usar el comando:  node aes.js
 * * * * * * * * * * * * * * *
 ColScript, 2015
*/

// Metódo para encriptación de cadenas de 15 caracteres o menos.

var crypto		=	require('crypto');  // Carga el módulo crypto.
var key			=	'salt';             // Clave para utilizar en la encriptación simétrica.
var plainText	=	'ColScript';        // Texto a encriptar.
var cipher		=	crypto.createCipher('aes-256-cbc', key);    // Crea el encriptador usando la clave y el algoritmo AES-256
var decipher	=	crypto.createDecipher('aes-256-cbc', key);  // Crea el desencriptador para el algoritmo AES-256 y la clave.

cipher.update(plainText, 'utf8', 'base64');     // Ejecuta la encriptación.
var encrypted	=	cipher.final('base64');     // Asigna la cadena encriptada a la variable encrypted.

decipher.update(encrypted, 'base64', 'utf8');   // Ejecuta la desencriptación.
var decrypted	=	decipher.final('utf8');     // Asigna la cadena desencriptada a la variable decrypted.

// Imprime los 3 valores, cadena original, cadena encriptada y cadena desencriptada.
console.log('Original Text : ', plainText, '\n');   
console.log('Encrypted Text : ', encrypted, '\n');
console.log('Decrypted Text : ', decrypted, '\n');

// Método para encriptación de cadenas de más de 15 caracteres.
/*
var crypto		=	require('crypto');
var key			=	'salt';
var plainText	=	'Texto de prueba de más de 15 caracteres.';
var cipher		=	crypto.createCipher('aes-256-cbc', key);
var decipher	=	crypto.createDecipher('aes-256-cbc', key);

var encrypted	=	cipher.update(plainText, 'utf8', 'base64'); // Asigna la primera parte de la cadena encriptada a la variable.
encrypted		+=	cipher.final('base64');                     // Concatena el resto de la cadena encriptada a la variable.

var decrypted	=	decipher.update(encrypted, 'base64', 'utf8'); // Asigna la primera parte de la cadena desencriptada a la variable.
decrypted		+=	decipher.final('utf8');                       // Concatena el resto de la cadena desencriptada a la variable.

// Imprime los 3 valores, cadena original, cadena encriptada y cadena desencriptada.
console.log('Original Text : ', plainText, '\n');
console.log('Encrypted Text : ', encrypted, '\n');
console.log('Decrypted Text : ', decrypted, '\n');
*/
