"use strict";

const button = document.querySelector("button");

const setTr = (post) => {
  const tr = document.createElement("tr");
  Object.values(post).forEach((item) => {
    tr.insertAdjacentHTML("beforeend", `<td>${item}</td>`);
  });
  return tr;
};

const insertTable = (posts) => {
  const table = document.createElement("table");
  const tr = document.createElement("tr");

  Object.keys(posts[0]).forEach((item) => {
    tr.insertAdjacentHTML("beforeend", `<th>${item}</th>`);
  });
  table.append(tr);
  posts.forEach((post) => {
    table.append(setTr(post));
  });

  document.body.append(table);
};

const getTableData = async (e) => {
  e.preventDefault();
  console.log("hallo");
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (response.ok) {
    const result = await response.json();
    insertTable(result);
  } else console.log("error");
};

button.addEventListener("click", getTableData);
