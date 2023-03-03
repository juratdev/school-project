// O'qiuvchilarni shakillantirish
const teachers = [{
    id: 1,
    name: 'Jurat',
    surname: 'Raximbayev',
    supject: 'Matematika',
    phone: "91 429 74 78"
  },
  {
    id: 2,
    name: 'Muhammadali',
    surname: 'Ruzimov',
    supject: 'Informatika',
    phone: "99 009 11 79"
  },
  {
    id: 3,
    name: 'Umar',
    surname: 'Sadullayev',
    supject: 'Jismoniy tarbiya',
    phone: "91 999 74 75"
  },
  {
    id: 4,
    name: 'Kamol',
    surname: 'Soliyev',
    supject: 'Tarix',
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

  // Qator ochamiz
  teachers.forEach((obj, i) => {
    // qator ochamiz
    const row = document.createElement("tr");
    row.id = obj.id;
    row.innerHTML = `
  <td>${i + 1}</td>
  <td>${obj.name}</td>
  <td>${obj.surname}</td>
  <td>${obj.supject}</td>
  <td>${obj.phone}</td>
  <td><button onclick="trashBtn(${obj.id})" class="trash"><i class="fas fa-trash"></i></button></td>`;

    tbody.appendChild(row)
  })
}

// Qidirish qismi
const findUser = () => {
  tbody.innerHTML = "";
  let filter = document.querySelector('#search').value
  const data = teachers.filter((obj, i) =>
    obj.name.includes(filter) || obj.surname.includes(filter)

  )
  // Qator ochamiz
  data.forEach((obj, i) => {
    // qator ochamiz
    const row = document.createElement("tr");
    row.id = obj.id;
    row.innerHTML = `
<td>${i + 1}</td>
<td>${obj.name}</td>
<td>${obj.surname}</td>
<td>${obj.supject}</td>
<td>${obj.phone}</td>
<td><button onclick="trashBtn(${obj.id})" class="trash"><i class="fas fa-trash"></i></button></td>`;

    tbody.appendChild(row)
  })

  console.log(data);
}
// Hamma tr-larni o'chirish
const deleteAll = () => {
  tbody.innerHTML = "";
}