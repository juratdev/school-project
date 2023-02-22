const loaded = () => console.log("Sahifa yuklandi...");

const sidebar = document.querySelector(".sidebar");
const cards = document.querySelector(".cards");
const selected = document.querySelector(".selected");
const dark = document.querySelector(".dark");
const darkBtn = document.querySelector(".darkBtn");
const addressBtn = document.querySelectorAll('.numbers button');
const users = document.querySelectorAll('td');

const toggleSidebar = () => {
  if (sidebar.classList.contains("hide")) {
    sidebar.classList.remove("hide");
  } else sidebar.classList.add("hide")
}

const keyUp = (e) => {
  if (e.key == "Escape") sidebar.classList.add("hide");
}

if (cards) {
  for (const card of cards.children) {
    card.onclick = () => {
      const menu = card.children[0].innerHTML;
      selected.innerHTML = menu;
    }
  }
}

darkBtn.onclick = () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
  } else document.body.classList.add("dark")
}

addressBtn.forEach(button => {
  button.onclick = () => {
    alert(button.value);
  }
})

const teachers = [{
    id: 1,
    name: 'Jurat',
    surname: 'Raximbayev',
    fani: 'Matematika',
    address: 'Xorazm viloyati'
  },
  {
    id: 2,
    name: 'Muhammadali',
    surname: 'Ruzimov',
    fani: 'Informatika',
    address: 'Toshkent shahar'
  },
  {
    id: 3,
    name: 'Umar',
    surname: 'Sadullayev',
    fani: 'Jismoniy tarbiya',
    address: 'Andijon viloyati'
  },
  {
    id: 4,
    name: 'Kamol',
    surname: 'Soliyev',
    fani: 'Tarix',
    address: 'Termiz shahar'
  }
]

const students = [{
    id: 5,
    name: 'Jur\'atbek',
    surname: 'Raximbayev',
    fani: 'Matematika',
    address: 'Xorazm viloyati'
  },
  {
    id: 6,
    name: 'Baxram',
    surname: 'Gayipov',
    fani: 'Geometriya',
    address: 'Xorazm viloyati'
  },
  {
    id: 7,
    name: 'Bobur',
    surname: 'Matnazarov',
    fani: 'Tarix',
    address: 'Andijon viloyati'
  },
  {
    id: 8,
    name: 'Jahongir',
    surname: 'Alimov',
    fani: 'Informatika',
    address: 'Urganch shahar'
  },
  {
    id: 9,
    name: 'Akbar',
    surname: 'Abdullayev',
    fani: 'Geografiya',
    address: 'Termiz shahar'
  }
]

let dx = document.getElementById('search-form');

function renderForm(teacher, student) {
  if (dx) {
    dx.onsubmit = (event) => {
      event.preventDefault()

      const searchName = event.currentTarget.search.value

      let findName = [];

      if (event.currentTarget.classList.contains('teacher')) {
        teacher.forEach(f => {
          if (f.name === searchName) {
            findName.push(f)
          }
        })
      } else if (event.currentTarget.classList.contains('student')) {
        student.forEach(f => {
          if (f.name === searchName) {
            findName.push(f)
          }
        })
      }

      if (findName.length) {
        alert(findName.map(s => {
          return `Ismi: ${s.name}\nFamiliyasi: ${s.surname}\nFani: ${s.fani}\nManzili: ${s.address}`
        }));
      } else {
        alert('Ro\'yxati yo\'q.');
      }
    }
  }
}
renderForm(teachers, students);



function renderTable(data, target) {
  data.forEach(d => {
    const tr = document.createElement('tr')
    const nameTd = document.createElement('td')
    nameTd.textContent = d.name
    const surnameTd = document.createElement('td')
    surnameTd.textContent = d.surname
    const faniTd = document.createElement('td')
    faniTd.textContent = d.fani
    const addressTd = document.createElement('td')
    addressTd.textContent = d.address

    const buttons = document.createElement('td')

    const button = document.createElement('button')
    button.className = 'address-btn'
    button.textContent = 'Manzilni ko\'rish'
    button.onclick = () => alert(d.address)
    buttons.append(button)

    tr.append(nameTd, surnameTd, faniTd, buttons)

    const targetElement = document.querySelector('#' + target)

    if (targetElement) {
      document.getElementById(target).querySelector('tbody').append(tr)
    }

  })
}

renderTable(teachers, 'teachers');
renderTable(students, 'students');