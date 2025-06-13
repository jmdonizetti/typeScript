let array1: [string, string, number, boolean] = 
[
  'João', 
  'Marcos', 
  123, 
  false 
];

let array2: Array<string | number | boolean> = [
  'Joao',
  123,
  true
];

let obj1: { nome: string, sobrenome: string, idade: number, deuBom: boolean } = {
  nome: 'Joao',
  sobrenome: 'Donizetti',
  idade: 27,
  deuBom: true
};

let obj2: Array<{
  nome: string;
  sobrenome: string;
  idade: number;
  deuBom: boolean;
}> = [
  {
    nome: 'Joao',
    sobrenome: 'Donizetti',
    idade: 27,
    deuBom: true
  },
  {
    nome: 'Apollo',
    sobrenome: 'Silva',
    idade: 27,
    deuBom: true
  },
];

console.log(array1);
console.log(array2);
console.log(obj1);
console.log(obj2);

