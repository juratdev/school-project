// Xonalarni shakillantirish
const rooms = [{
  id: 19,
  name: 'Matematika',
  number: '15',
},
{
  id: 20,
  name: 'Fizika',
  number: '8',
},
{
  id: 21,
  name: 'Kimyo',
  number: '12',
},
{
  id: 22,
  name: 'Jismoniy tarbiya',
  number: '5',
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

rooms.forEach((obj, i) => {
  // qator ochamiz
  const row = document.createElement("tr");
  row.id = obj.id;
  row.innerHTML = `
<td>${i + 1}</td>
<td>${obj.name}</td>
<td>${obj.number}</td>
<td><button onclick="trashBtn(${obj.id})" class="trash"><i class="fas fa-trash"></i></button></td>`;

  tbody.appendChild(row)
})
}
// Qidirish qismi
const findUser = () => {
  tbody.innerHTML = "";
  let filter = document.querySelector("#search").value
  const data = rooms.filter((obj, i) => 
    obj.name.includes(filter) || obj.number.includes(filter) 
  )

  // Qator ochamiz
  data.forEach((obj, i) => {
    const row = document.createElement("tr");
    row.id = obj.id;
    row.innerHTML = `
<td>${i + 1}</td>
<td>${obj.name}</td>
<td>${obj.number}</td>
<td><button onclick="trashBtn(${obj.id})" class="trash"><i class="fas fa-trash"></i></button></td>`;

    tbody.appendChild(row)
  })

}
// Hamma tr-larni o'chirish
const deleteAll = () => {
  tbody.innerHTML = "";
}