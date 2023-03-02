// O'quvchilarni shakillantirish
const students = [{
    id: 5,
    name: "Jur\'atbek",
    surname: "Raximbayev",
    class: "7-'A'",
    phone: "91 429 74 78"
  },
  {
    id: 6,
    name: "Baxram",
    surname: "Gayipov",
    class: "8-'B'",
    phone: "99 009 11 79"
  },
  {
    id: 7,
    name: 'Bobur',
    surname: 'Matnazarov',
    class: "7-'A'",
    phone: "91 999 74 75"
  },
  {
    id: 8,
    name: "Jahongir",
    surname: "Alimov",
    class: "8-'A'",
    phone: "99 459 55 48"
  }
]

// Delete tr
const trashBtn = (id) => {
  const tr = document.getElementById(id)
  tr.remove();
}

const table = document.getElementById("table");
const tbody = table.children[1];

const loaded = () => {
  // tozalash
  tbody.innerHTML = "";

  students.forEach((obj, i) => {
    // qator ochamiz
    const row = document.createElement("tr");
    row.id = obj.id;
    row.innerHTML = `
  <td>${i + 1}</td>
  <td>${obj.name}</td>
  <td>${obj.surname}</td>
  <td>${obj.class}</td>
  <td>${obj.phone}</td>
  <td><button onclick="trashBtn(${obj.id})" class="trash"><i class="fas fa-trash"></i></button></td>`;

    tbody.appendChild(row);
  })
}

// Qidirish qismi
const findUser = () => {
  tbody.innerHTML = "";
  let filter = document.querySelector("#search").value;

  const data = students.filter((obj, i) => 
  obj.name.includes(filter) || obj.surname.includes(filter)
  )
  // Qator ochish
  data.forEach((obj, i) => {
    const row = document.createElement("tr");
    row.id = obj.id;

    row.innerHTML = `
      <td>${i + 1}</td>
      <td>${obj.name}</td>
      <td>${obj.surname}</td>
      <td>${obj.class}</td>
      <td>${obj.phone}</td>
      <td><button onclick="trashBtn(${obj.id})" class="trash"><i class="fas fa-trash"></i></button></td>
    `
    tbody.appendChild(row)
  })
}