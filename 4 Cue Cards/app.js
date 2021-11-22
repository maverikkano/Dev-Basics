let data = [
    {
        name: 'Abhishek Patil',
        age: '24'
    },
    {
        name: 'Abhishek Patil',
        age: '24'
    },
    {
        name: 'Abhishek Patil',
        age: '24'
    },
    {
        name: 'Abhishek Patil',
        age: '24'
    },
    {
        name: 'Abhishek Patil',
        age: '24'
    }   
];

console.log(data);
const info = document.querySelector('#info');

let details = data.map(function(item) {
    // return `<div>${item.name} is ${item.age}years old.</div>`;
    return '<div>' + item.name + ' is ' + item.age + ' years old.' + '</div>';
});

info.innerHTML = details.join('\n');