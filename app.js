const express = require('express');
const app = express();

const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
  ];

/*const specialtyFilter = (a, b) => {
    if (a === b) {
        return name & age;
    }
}*/

const developersData = usersData.filter(function(element){
    return element.specialty === 'developers'
})

const marketingData = usersData.filter(function(element) {
    return element.specialty === 'marketing'
})

const ventasData = usersData.filter(function(element) {
    return element.specialty === 'ven1tas'
})

const QAsData = usersData.filter(function(element) {
    return element.specialty === 'QAs'
})


const printDevelopers = developersData.forEach((e) =>{
    innerHtml += `name: ${e.name}`;
})

console.log(developersData);
console.log(printDevelopers);

app.get('/', (req, res) => {
    res.send(
        `<!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home</title>
        </head>
        <body>
            <h1>Home</h1>
            <p>Esta pagina muestra los actuales alumos separados por su especialidad: </p>
            <a href="/developers">Developers</a>
            <a href="/marketing">Marketing</a>
            <a href="/ventas">Ventas</a>
            <a href="/QAs">QAs</a>
        </body>
        </html>`  
    );
});

app.get('/developers', (req, res) => {
    res.send(
        `<!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Developers</title>
        </head>
        <body>
            <h1>Alumnos developers</h1>
            <p>${developersData.forEach((element) =>{
                return `name: ${developersData.name} age: ${element.age}`
            })}</p>
            <a href="/">Return Home</a>
        </body>
        </html>`  
    );
});

app.get('/marketing', (req, res) => {
    res.send(
        `<!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Marketing</title>
        </head>
        <body>
            <h1>Alumnos de marketing</h1>
            <a href="/">Return Home</a>
        </body>
        </html>`  
    );
});

app.get('/ventas', (req, res) => {
    res.send(
        `<!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Ventas</title>
        </head>
        <body>
            <h1>Alumnos de ventas</h1>
            <a href="/">Return Home</a>
        </body>
        </html>`  
    );
});

app.get('/QAs', (req, res) => {
    res.send(
        `<!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>QAs</title>
        </head>
        <body>
            <h1>Alumnos de QAs</h1>
            <a href="/">Return Home</a>
        </body>
        </html>`  
    );
});

app.use((req, res) =>{
    res.status(404).send(
        `<!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Page not found</title>
        </head>
        <body>
            <h1>Error 404, page not found</h1>
            <a href="/">Return Home</a>
        </body>
        </html>`  
    );
});

app.listen(3000, () => {
    console.log("node.js listening on port http://localhost:3000/")
});