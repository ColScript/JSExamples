var crypto		=	require('crypto');
var plainText	=	'Hashing is OP';
var encrypted	=	crypto.createHash('md5').update(plainText, 'utf8').digest('hex');
console.log("\nOriginal text: " + plainText + "\n");
console.log("Encrypted text: " + encrypted +"\n");
