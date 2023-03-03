// Fanlarni shakillantirish

const lessons = [{
    id: 1,
    day: "Dushanba",
    lessons: [{
        id: 23,
        supject: "Matematika",
        time: "1-soat"
      },
      {
        id: 24,
        supject: "Informatika",
        time: "2-soat"
      },
      {
        id: 25,
        supject: "Fizika",
        time: "3-soat"
      },
    ],
  },
  {
    id: 2,
    day: "Seshanba",
    lessons: [{
        id: 23,
        supject: "Ona-tili",
        time: "1-soat"
      },
      {
        id: 24,
        supject: "Jismoniy tarbiya",
        time: "2-soat"
      },
      {
        id: 25,
        supject: "Fizika",
        time: "3-soat"
      },
    ]
  },
  {
    id: 3,
    day: "Chorshanba",
    lessons: [{
        id: 23,
        supject: "Fimyo",
        time: "1-soat"
      },
      {
        id: 24,
        supject: "Informatika",
        time: "2-soat"
      },
      {
        id: 25,
        supject: "Fizika",
        time: "3-soat"
      },
    ]
  }
]


const table = document.getElementById("table");
const tbody = table.children[1];

const loaded = () => {
  tbody.innerHTML = "";
  lessons.forEach((day) => {

    day.lessons.forEach((lesson, i) => {
      const tr = document.createElement('tr')

      if (i == 0) {
        const idColumn = document.createElement('td')
        idColumn.innerText = day.id
        idColumn.rowSpan = day.lessons.length
        const dayColumn = document.createElement('td')
        dayColumn.innerText = day.day
        dayColumn.rowSpan = day.lessons.length
        tr.append(idColumn, dayColumn)
      }

      const timeColumn = document.createElement('td')
      timeColumn.innerText = lesson.time

      const subjectColumn = document.createElement('td')
      subjectColumn.innerText = lesson.supject

      const deleteColumn = document.createElement('td')

      const deleteBtn = document.createElement('button')
      deleteBtn.innerHTML = "<i class='fas fa-trash'>"
      deleteBtn.className = "trash"
      deleteBtn.onclick = () => {
        tr.remove()
      }

      deleteColumn.appendChild(deleteBtn)

      tr.append(subjectColumn, timeColumn, deleteColumn)

      tbody.appendChild(tr)
    })
  })
}


// Delete tr
const trashBtn = (id) => {
  const tr = document.getElementById(id);
  tr.remove();
}


// Qidirish qismi
const findUser = () => {
  tbody.innerHTML = "";
  let filter = document.querySelector("#search").value
  const data = lessons.filter((obj, i) =>
    obj.day.includes(filter)
  )

  // Qator ochamiz
  data.forEach((day) => {

    day.lessons.forEach((lesson, i) => {
      const tr = document.createElement('tr')

      if (i == 0) {
        const idColumn = document.createElement('td')
        idColumn.innerText = day.id
        idColumn.rowSpan = day.lessons.length
        const dayColumn = document.createElement('td')
        dayColumn.innerText = day.day
        dayColumn.rowSpan = day.lessons.length
        tr.append(idColumn, dayColumn)
      }

      const timeColumn = document.createElement('td')
      timeColumn.innerText = lesson.time

      const subjectColumn = document.createElement('td')
      subjectColumn.innerText = lesson.supject

      const deleteColumn = document.createElement('td')

      const deleteBtn = document.createElement('button')
      deleteBtn.innerHTML = "<i class='fas fa-trash'>"
      deleteBtn.className = "trash"
      deleteBtn.onclick = () => {
        tr.remove()
      }

      deleteColumn.appendChild(deleteBtn)

      tr.append(subjectColumn, timeColumn, deleteColumn)

      tbody.appendChild(tr)
    })
  })

}
// Hamma tr-larni o'chirish
const deleteAll = () => {
  tbody.innerHTML = "";
}