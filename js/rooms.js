// Fanlarni shakillantirish
const rooms = [{
  id: 1,
  name: 'Matematika',
  number: '15',
},
{
  id: 2,
  name: 'Fizika',
  number: '8',
},
{
  id: 3,
  name: 'Kimyo',
  number: '12',
},
{
  id: 4,
  name: 'Jismoniy tarbiya',
  number: '5',
}
]

const table = document.getElementById("table");
const tbody = table.children[1];

const loaded = () => {
// tozalash
tbody.innerHTML = "";

rooms.forEach((obj, i) => {
  // qator ochamiz
  const row = document.createElement("tr");
  row.innerHTML = `
<td>${i + 1}</td>
<td>${obj.name}</td>
<td>${obj.number}</td>
<td><button class="trash"><i class="fas fa-trash"></i></button></td>`;

  tbody.appendChild(row)
})
}