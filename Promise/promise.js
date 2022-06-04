// Promise
const posts = [
  { id: 1, title: "this is first post" },
  { id: 2, title: "this is second post" },
];
const list = document.querySelector(".list");
function getPost() {
  setTimeout(() => {
    const htmls = posts.map((post) => `<li>${post.title}</li>`);
    list.innerHTML = htmls.join(""); // remove comma in array , convert array to string
  }, 1000);
}

function createPost(callback) {
  return new Promise((resolve, reject) => {
    posts.push({ id: 3, title: "this is third post" });
    let error = false;
    if (!error) {
      resolve(callback());
    } else {
      reject("something went wrong");
    }
  });
}

createPost(getPost)
  .then(() => console.log("success"))
  .catch((error) => console.log(error));

// try debug js
let a = 1;
let b = 2;
let c = 2;
let d = 2;
let e = 2;
let f = 2;
let g = 2;

console.log(a);

function add(a, b) {
  console.log(a + b);
}

add(a, b);
