var crypto		=	require('crypto');
var hash		=	crypto.createHash('md5');
var plainText	=	'Hashing is OP';
var encrypted	=	hash.update(plainText, 'utf8').digest('hex');
console.log("\nOriginal text: " + plainText + "\n");
console.log("Encrypted text: " + encrypted +"\n");