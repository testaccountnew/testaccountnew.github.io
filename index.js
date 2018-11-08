// class HelloWorld {
//   message = 'Hello World';
//   print = () => this.message;
// }
//
// const hello = new HelloWorld();
// // eslint-disable-next-line no-console
// console.log(
//   `%c ${hello.print()}`,
//   `color: green; font-size:48px; weight: bold`,
// );

let products = [
  { "name": "Brielle Williamson", "position": "Integration Specialist", "office": "New York", "age": "61", "date": "2012/12/02", "salary": "372.000"},
  { "name": "Bradly Greer", "position": "Software Engineer", "office": "London", "age": "41", "date": "2012/10/13", "salary": "132.000"},
  { "name": "Dai Rios", "position": "Personel Lead", "office": "Edinburg", "age": "35", "date": "2012/09/26", "salary": "217.500"},
  { "name": "Haley Kennedy", "position": "Senior Marketing Designer", "office": "London", "age": "43", "date": "2012/12/18", "salary": "313.500"},
  { "name": "Herrod Chandler", "position": "Sales Assistant", "office": "San Francisco", "age": "59", "date": "2012/08/06", "salary": "137.500"},
  { "name": "Jennifer Acosta", "position": "Junior Javascript Developer", "office": "Edinburg", "age": "43", "date": "2013/02/01", "salary": "73.500"},
  { "name": "Michael Silva", "position": "Marketing Designer", "office": "London", "age": "66", "date": "2012/11/27", "salary": "198.500"},
  { "name": "Quinn Flynn", "position": "Support Lead", "office": "Edinburg", "age": "22", "date": "2013/03/03", "salary": "392.000"},
  { "name": "Thor Walton", "position": "Developer", "office": "New York", "age": "61", "date": "2013/08/11", "salary": "98.540"},
  { "name": "Zorita Serrano", "position": "Software Engineer", "office": "San Francisco", "age": "56", "date": "2012/06/01", "salary": "115.000"}
];

function tableItems(obj) {
  // добавление значений в таблицу
  let table = document.getElementById('table');
  let tbody = table.getElementsByTagName('tbody')[0];
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  tr.appendChild(td);

  obj.forEach(item => {
      return tbody.innerHTML += `<td>${ item.name }</td><td>${ item.position }</td><td>${ item.office }</td><td>${ item.age }</td><td>${ item.date }</td><td>${ item.salary }</td>`;
  });
  tbody.appendChild(tr);

  //  поиск значений  при нажатии на кнопку
  let button = document.getElementById('button');
  button.onclick = function(e) {
    e.preventDefault();
    let input = document.getElementById('input');
    let filter = input.value.toUpperCase();
    let tr = table.getElementsByTagName('tr');
    let td;
    for (let i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
  }

  // пагинация, доюавление удаление класса
  function pagination(e) {
    var elems = document.querySelectorAll('.active-btn');
    [].forEach.call(elems, function(el) {
      el.classList.remove('active-btn');
    });
    e.target.className = 'active-btn';
  }

  let links = document.getElementsByTagName('a');
  for(let i = 0; i < links.length; i++) {
    links[i].onclick = pagination;
  }
}

tableItems(products);