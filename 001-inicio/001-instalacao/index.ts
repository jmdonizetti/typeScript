// TypeScript
// npm install -g typescript
// tsc --init  //Cria o tsconfig.json

// Plugin: Code Runner 
// npm i -g ts-node 
// tsc index.ts // Para criar o arquivo ts em js
// ctrl + alt + n

console.log("npm install -g typescript");

const latido = (latido: string) => {
  return `O cachorro latiu ${latido}`;
}

console.log(latido("Au au au"));
