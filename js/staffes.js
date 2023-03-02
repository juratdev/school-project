// Xodimlarni shakillantirish
const staffes = [{
  id: 1,
  name: 'Muhammad',
  surname: 'Ibadullayev',
  position: 'Director',
  phone: "91 429 74 78"
},
{
  id: 2,
  name: 'Jamol',
  surname: 'Ruzimov',
  position: 'Software Engineer',
  phone: "99 009 11 79"
},
{
  id: 3,
  name: 'Sardor',
  surname: 'Sadullayev',
  position: 'Ta\'lim nazorati',
  phone: "91 999 74 75"
},
{
  id: 4,
  name: 'Umid',
  surname: 'Soliyev',
  position: 'Software Engineer',
  phone: "99 459 55 48"
}
]

const table = document.getElementById("table");
const tbody = table.children[1];

const loaded = () => {
// tozalash
tbody.innerHTML = "";

staffes.forEach((obj, i) => {
  // qator ochamiz
  const row = document.createElement("tr");
  row.innerHTML = `
<td>${i + 1}</td>
<td>${obj.name}</td>
<td>${obj.surname}</td>
<td>${obj.position}</td>
<td>${obj.phone}</td>
<td><button class="trash"><i class="fas fa-trash"></i></button></td>`;

  tbody.appendChild(row)
})
}