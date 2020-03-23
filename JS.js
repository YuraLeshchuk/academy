//вставляю алерти
// let message = 'Hello!';
// alert(message);

//присвоїння одній змінній іншої
//let name = "John";
//let admin;
//admin = name;
//alert(admin);

//додавання виразів в строку
//alert(`Hey, ${admin}!`);

//модалки з питаннями
//let name = prompt('What is your name?');
//alert(`Call me: ${name}`);
//let isBoss = confirm("Ты здесь главный?");
//alert(isBoss); // true, если нажата OK

//умови
//let year = prompt('Enter password', '');
//if (year == 1997) {
//alert('Wellcome!');
//} else {
// alert('Gerara here haker!'); // любое значение, кроме 1997
//}

// порівння зі ? - скорочення:
/* let age = prompt('Возраст?', 18);

let message = (age < 3) ? 'What is your!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';

alert( message );

без ? але з if else:*/
if (age < 3) {
    message = 'Hello, what is you age?!';
} else if (age < 18) {
    message = 'Hello!';
} else if (age < 100) {
    message = 'Hello!';
} else {
    message = 'Wow!';
}

/*let userName = prompt("login:", '');

if (userName == 'admin') {

    let pass = prompt('password?', '');

    if (pass == 'admin') {
        alert('Wellcome!');
    } else if (pass == '' || pass == null) {
        alert('Rejeckt'), location.reload();
    } else {
        alert('Wrong password'), location.reload();
    }

} else if (userName == '' || userName == null) {
    alert('Rejeckt'), location.reload();
} else {
    alert('Wrong login'), location.reload();
}*/
/*let i = 0;

for (; i < 3;) {
    alert(i++);
}*/