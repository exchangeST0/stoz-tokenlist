const { validateList, validateToken } = require('@uniswap/token-lists');
const fs = require('fs');
const path = require('path');

const tokenListPath = path.join(__dirname, 'token-list.json');
const tokenList = JSON.parse(fs.readFileSync(tokenListPath, 'utf8'));

console.log(' Validando Token List...\n');

try {
  const listValidation = validateList(tokenList);
  
  if (listValidation.valid) {
    console.log(' Token List válido!\n');
    console.log(' Información:');
    console.log(   - Nombre: );
    console.log(   - Versión: ..);
    console.log(   - Tokens: \n);
    
    tokenList.tokens.forEach((token, index) => {
      const tokenValidation = validateToken(token);
      if (tokenValidation.valid) {
        console.log( Token  () válido);
      } else {
        console.log( Token  tiene errores:);
        tokenValidation.errors.forEach(error => console.log(   - ));
      }
    });
  } else {
    console.log(' Errores en la lista:');
    listValidation.errors.forEach(error => console.log(   - ));
    process.exit(1);
  }
} catch (error) {
  console.error(' Error:', error.message);
  process.exit(1);
}
