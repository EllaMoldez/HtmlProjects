const textAreaElement = document.getElementById('textarea');

const totalCounterElement = document.getElementById('total-counter');

const remainingCounterElement = document.getElementById('remaining-counter');

const refreshButtonElement = document.querySelector('.btn');

const refreshPage = () => {
  location.reload();
};

refreshButtonElement.addEventListener('click', refreshPage);

textAreaElement.addEventListener('keyup', () => {
  updateCounter();
});

updateCounter();

function updateCounter() {
  totalCounterElement.innerText = textAreaElement.value.length;
  remainingCounterElement.innerText =
    textAreaElement.getAttribute('maxLength') - textAreaElement.value.length;
}
