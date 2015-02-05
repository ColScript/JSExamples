var crypto		=	require('crypto');
var hash		  =	crypto.createHash('sha1');
var plainText	=	"Texto a encriptar";
var encrypted	=	hash.update(plainText, 'utf8').digest('hex');
console.log("Original text: " + plainText + "\n");
console.log("Encrypted text: " + encrypted);
