/*
 * * * * * * * * * * * * * * *
 Encriptación AES-256 utilizando el módulo Crypto de Node.js
 * * * * * * * * * * * * * * *
 ColScript, 2015
*/

// Metódo para encriptación de cadenas de 15 caracteres o menos.

var crypto		=	require('crypto');
var key			=	'salt';
var plainText	=	'ColScript';
var cipher		=	crypto.createCipher('aes-256-cbc', key);
var decipher	=	crypto.createDecipher('aes-256-cbc', key);

cipher.update(plainText, 'utf8', 'base64');
var encrypted	=	cipher.final('base64');

decipher.update(encrypted, 'base64', 'utf8');
var decrypted	=	decipher.final('utf8');

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

var encrypted	=	cipher.update(plainText, 'utf8', 'base64');
encrypted		+=	cipher.final('base64');

var decrypted	=	decipher.update(encrypted, 'base64', 'utf8');
decrypted		+=	decipher.final('utf8');

console.log('Original Text : ', plainText, '\n');
console.log('Encrypted Text : ', encrypted, '\n');
console.log('Decrypted Text : ', decrypted, '\n');
*/
