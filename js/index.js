// Bo'limlarni shakillantirish
const cards = document.querySelector(".cards");

const sections = [{
    title: "O'qituvchilar",
    link: "./teachers.html"
  },
  {
    title: "O'quvchilar",
    link: "./students.html"
  },
  {
    title: "Xodimlar",
    link: "./staffes.html"
  },
  {
    title: "Fanlar",
    link: "./sciences.html"
  },
  {
    title: "Xonalar",
    link: "./rooms.html"
  },
  {
    title: "Dars jadvallari",
    link: "#"
  }
]

// Add Cards
const setCards = () => {
  cards.innerHTML = "";
  sections.forEach(sections => {

    const col = document.createElement("a")
    col.className = "box";
    col.href = sections.link;
    const link = document.createElement("h3")
    link.innerHTML = sections.title
    col.appendChild(link)
    cards.appendChild(col)
  })
}

const loaded = () => setCards();























// let dx = document.getElementById('search-form');

// function renderForm(teacher, student) {
//   if (dx) {
//     dx.onsubmit = (event) => {
//       event.preventDefault()

//       const searchName = event.currentTarget.search.value

//       let findName = [];

//       if (event.currentTarget.classList.contains('teacher')) {
//         teacher.forEach(f => {
//           if (f.name === searchName) {
//             findName.push(f)
//           }
//         })
//       } else if (event.currentTarget.classList.contains('student')) {
//         student.forEach(f => {
//           if (f.name === searchName) {
//             findName.push(f)
//           }
//         })
//       }

//       if (findName.length) {
//         alert(findName.map(s => {
//           return `Ismi: ${s.name}\nFamiliyasi: ${s.surname}\nFani: ${s.fani}\nManzili: ${s.address}`
//         }));
//       } else {
//         alert('Ro\'yxati yo\'q.');
//       }
//     }
//   }
// }
// renderForm(teachers, students);



// function renderTable(data, target) {
//   data.forEach(d => {
//     const tr = document.createElement('tr')
//     const nameTd = document.createElement('td')
//     nameTd.textContent = d.name
//     const surnameTd = document.createElement('td')
//     surnameTd.textContent = d.surname
//     const faniTd = document.createElement('td')
//     faniTd.textContent = d.fani
//     const addressTd = document.createElement('td')
//     addressTd.textContent = d.address

//     const buttons = document.createElement('td')

//     const button = document.createElement('button')
//     button.className = 'address-btn'
//     button.textContent = 'Manzilni ko\'rish'
//     button.onclick = () => alert(d.address)
//     buttons.append(button)

//     tr.append(nameTd, surnameTd, faniTd, buttons)

//     const targetElement = document.querySelector('#' + target)

//     if (targetElement) {
//       document.getElementById(target).querySelector('tbody').append(tr)
//     }

//   })
// }

// renderTable(teachers, 'teachers');
// renderTable(students, 'students');