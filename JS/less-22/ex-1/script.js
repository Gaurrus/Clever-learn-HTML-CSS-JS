"use strict";

const button = document.querySelector("button");
const form = document.createElement("form");
const submit = document.createElement("input");
let focusInValue;
let focusOutValue;

const setTr = (post) => {
  const tr = document.createElement("tr");
  Object.values(post).forEach((item, index) => {
    tr.insertAdjacentHTML(
      "beforeend",
      `<td><textarea name="form-elem-${index}">${item}</textarea></td>`
    );
  });
  return tr;
};

const insertTable = (posts) => {
  const table = document.createElement("table");
  form.setAttribute("class", "form");
  submit.setAttribute("type", "submit");
  submit.setAttribute("class", "button");
  submit.setAttribute("disabled", true);
  const tr = document.createElement("tr");

  Object.keys(posts[0]).forEach((item, index) => {
    tr.insertAdjacentHTML(
      "beforeend",
      `<th><textarea name='form-elem-${index}'>${item}</textarea></th>`
    );
  });
  table.append(tr);
  posts.forEach((post) => {
    table.append(setTr(post));
  });
  form.append(table);
  form.append(submit);
  document.body.append(form);
};

const getTableData = (e) => {
  try {
    setLoading();
    Promise.all([
      new Promise((resolve) => setTimeout(() => resolve(null), 1000)),
      fetch("https://jsonplaceholder.typicode.com/posts"),
    ])
      .then((response) => response[1].json())
      .then((result) => {
        setLoading();
        insertTable(result);
        focusInValue = result;
        button.innerHTML = "Данные загружены";
        button.setAttribute("disabled", true);
      });
  } catch {
    document.body.insertAdjacentHTML("beforeend", `<h2>Ошибка!</h2>`);
  } finally {
  }
};

const setLoading = () => {
  button.innerHTML = "Загрузка...";
};

const removeText = () => {
  const removableText = document.querySelector("h2");
  const removableTable = document.querySelector("table");
  if (removableText) {
    removableText.remove();
  }
  if (removableTable) {
    removableTable.remove();
  }
};

const onSubmit = async (e) => {
  e.preventDefault();
  try {
    const submitInput = document.querySelector("input");
    const tableForm = document.querySelector("form");
    const response = await fetch(`https://httpbin.org/post`, {
      method: "POST",
      body: new FormData(tableForm),
    });
    const result = await response.json();
    console.log(result);
    submitInput.value = "Форма успешно отправлена";
  } catch {
    const submitInput = document.querySelector("input");
    submitInput.value = "Ошибка отправки!";
  }
};

button.addEventListener("click", () => {
  removeText();
  getTableData();
});

form.addEventListener("submit", onSubmit);

const onChange = (e) => {
  e.preventDefault();
  submit.removeAttribute("disabled", true);
};

// const onChange = (e) => {
//   e.preventDefault();
//   const tableForm = document.querySelector("form");
//   focusOutValue = new FormData(tableForm);
//   console.log(focusInValue, `focus IN`);
//   console.log(focusOutValue, `focus OUT`);
//   if (focusInValue != focusOutValue) {
//     submit.removeAttribute("disabled", true);
//   }
// };

form.addEventListener("change", onChange);
