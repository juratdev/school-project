// Fanlarni shakillantirish
const sciences = [{
    id: 1,
    supject: 'Matematika'
  },
  {
    id: 2,
    supject: 'Informatika'
  },
  {
    id: 3,
    supject: 'Jismoniy tarbiya'
  },
  {
    id: 4,
    supject: 'Ona-tili'
  },
  {
    id: 5,
    supject: 'Fizika'
  },
  {
    id: 6,
    supject: 'Tarix'
  }
]

const table = document.getElementById("table");
const tbody = table.children[1];

const loaded = () => {
  // tozalash
  tbody.innerHTML = "";

  sciences.forEach((obj, i) => {
    // qator ochamiz
    const row = document.createElement("tr");
    row.innerHTML = `
<td>${i + 1}</td>
<td>${obj.supject}</td>
<td><button class="trash"><i class="fas fa-trash"></i></button></td>`;

    tbody.appendChild(row)
  })
}