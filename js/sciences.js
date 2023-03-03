// Fanlarni shakillantirish
const sciences = [{
    id: 13,
    supject: 'Matematika'
  },
  {
    id: 14,
    supject: 'Informatika'
  },
  {
    id: 15,
    supject: 'Jismoniy tarbiya'
  },
  {
    id: 16,
    supject: 'Ona-tili'
  },
  {
    id: 17,
    supject: 'Fizika'
  },
  {
    id: 18,
    supject: 'Tarix'
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

  sciences.forEach((obj, i) => {
    // qator ochamiz
    const row = document.createElement("tr");
    row.id = obj.id;
    row.innerHTML = `
<td>${i + 1}</td>
<td>${obj.supject}</td>
<td><button onclick="trashBtn(${obj.id})" class="trash"><i class="fas fa-trash"></i></button></td>`;

    tbody.appendChild(row)
  })
}

// Qidirish qismi
const findUser = () => {
  tbody.innerHTML = "";
  let filter = document.querySelector("#search").value
  const data = sciences.filter((obj, i) => 
    obj.supject.includes(filter)
  )

  // Qator ochamiz
  data.forEach((obj, i) => {
    const row = document.createElement("tr");
    row.id = obj.id;
    row.innerHTML = `
<td>${i + 1}</td>
<td>${obj.supject}</td>
<td><button onclick="trashBtn(${obj.id})" class="trash"><i class="fas fa-trash"></i></button></td>`;

    tbody.appendChild(row)
  })

}
// Hamma tr-larni o'chirish
const deleteAll = () => {
  tbody.innerHTML = "";
}