const hello = document.getElementById('hello');
if (hello) {
  hello.addEventListener('click', () => {
    incrementMutationCount();

    const el = document.createElement('h1');
    el.textContent = 'Hello World!';
    document.body.appendChild(el);
  });
}
