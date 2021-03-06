const input = document.getElementById('input');
const btn = document.getElementById('btn');
const div = document.getElementById('result');

btn.addEventListener("click", (e) => {
    e.preventDefault();
    div.innerHTML = input.value;
})