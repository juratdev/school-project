// Xodimlarni shakillantirish
const staffes = [{
    id: 9,
    name: 'Muhammad',
    surname: 'Ibadullayev',
    position: 'Director',
    phone: "91 429 74 78"
  },
  {
    id: 10,
    name: 'Jamol',
    surname: 'Ruzimov',
    position: 'Software Engineer',
    phone: "99 009 11 79"
  },
  {
    id: 11,
    name: 'Sardor',
    surname: 'Sadullayev',
    position: 'Ta\'lim nazorati',
    phone: "91 999 74 75"
  },
  {
    id: 12,
    name: 'Umid',
    surname: 'Soliyev',
    position: 'Software Engineer',
    phone: "99 459 55 48"
  }
]

// Delete tr
const trashBtn = (id) => {
  const tr = document.getElementById(id);
  tr.remove();
}

const table = document.getElementById("table");
const tbody = table.children[1];

const loaded = () => {
  // tozalash
  tbody.innerHTML = "";

  staffes.forEach((obj, i) => {
    // qator ochamiz
    const row = document.createElement("tr");
    row.id = obj.id;
    row.innerHTML = `
<td>${i + 1}</td>
<td>${obj.name}</td>
<td>${obj.surname}</td>
<td>${obj.position}</td>
<td>${obj.phone}</td>
<td><button onclick="trashBtn(${obj.id})" class="trash"><i class="fas fa-trash"></i></button></td>`;

    tbody.appendChild(row)
  })
}

// Qidirish qismi

const findUser = () => {
  tbody.innerHTML = "";
  let filter = document.querySelector("#search").value

  const data = staffes.filter((obj, i) =>
    obj.name.includes(filter) || obj.surname.includes(filter)
  )

  // Qator ochamiz
  data.forEach((obj, i) => {
    const row = document.createElement("tr");
    row.id = obj.id;
    row.innerHTML = `
      <td>${i + 1}</td>
      <td>${obj.name}</td>
      <td>${obj.surname}</td>
      <td>${obj.position}</td>
      <td>${obj.phone}</td>
      <td><button onclick="trashBtn(${obj.id})" class="trash"><i class="fas fa-trash"></i></button></td>
    `
    tbody.appendChild(row)
  })
}