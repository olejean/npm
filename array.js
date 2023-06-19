let animals = [ 
    { name: 'Vasya', type: 'Cat', age: 4},
    { name: 'Murka', type: 'Cat', age: 1.5 },
    { name: 'Varna', type: 'Turtle', age: 21 },
    { name: 'Kesha', type: 'Parrot', age: 3 },
    { name: 'Nayda', type: 'Dog', age: 2.5 },
    { name: 'Pufic', type: 'Humster', age: 2.5 },
    { name: 'Randy', type: 'dog', age: 12 },
];
document.write('<ol start="0">');
animals.forEach( animal => {
  document.write(`<li>${animal.type} <span style="color: #1a55cc">${animal.name}</span> 
           is ${animal.age} years old.</li>`);
});
document.write('<ol>');
