const openButtonEmpty = document.getElementById('openEmpty');
const modalWindowEmpty = document.getElementById('modalEmpty');
const closeButtonEmpty = document.getElementById('closeEmpty');
const overlayModalEmpty = document.getElementById('overlayEmpty');

 // Show the overlay and the modal
openButtonEmpty.addEventListener('click', function () {
    modalEmpty.classList.remove('hidden');
    overlayEmpty.classList.remove('hidden');
});

// Side the overlay and the modal
closeButtonEmpty.addEventListener('click', function () {
    modalEmpty.classList.add('hidden');
    overlayEmpty.classList.add('hidden');
});

// The modal will close when the user clicks anywhere outside the modal
overlayModalEmpty.addEventListener('click', function () {
    modalEmpty.classList.add('hidden');
    overlayEmpty.classList.add('hidden');
});


const openButtonSuccess = document.getElementById('openSuccess');
const modalWindowSuccess = document.getElementById('modalSuccess');
const closeButtonSuccess = document.getElementById('closeSuccess');
const overlayModalSuccess = document.getElementById('overlaySuccess');

 // show the overlay and the modal
openButtonSuccess.addEventListener('click', function () {
    modalSuccess.classList.remove('hidden');
    overlaySuccess.classList.remove('hidden');
});

// hide the overlay and the modal
closeButtonSuccess.addEventListener('click', function () {
    modalSuccess.classList.add('hidden');
    overlaySuccess.classList.add('hidden');
});

// The modal will close when the user clicks anywhere outside the modal
overlayModalSuccess.addEventListener('click', function () {
    modalSuccess.classList.add('hidden');
    overlaySuccess.classList.add('hidden');
});


const openButtonInfo = document.getElementById('openInfo');
const modalWindowInfo = document.getElementById('modalInfo');
const closeButtonInfo = document.getElementById('closeInfo');
const overlayModalInfo = document.getElementById('overlayInfo');

 // show the overlay and the modal
openButtonInfo.addEventListener('click', function () {
    modalInfo.classList.remove('hidden');
    overlayInfo.classList.remove('hidden');
});

// hide the overlay and the modal
closeButtonInfo.addEventListener('click', function () {
    modalInfo.classList.add('hidden');
    overlayInfo.classList.add('hidden');
});

// The modal will close when the user clicks anywhere outside the modal
overlayModalInfo.addEventListener('click', function () {
    modalInfo.classList.add('hidden');
    overlayInfo.classList.add('hidden');
});

const openButtonDanger = document.getElementById('openDanger');
const modalWindowDanger = document.getElementById('modalDanger');
const closeButtonDanger = document.getElementById('closeDanger');
const overlayModalDanger = document.getElementById('overlayDanger');

 // show the overlay and the dialog
openButtonDanger.addEventListener('click', function () {
    modalDanger.classList.remove('hidden');
    overlayDanger.classList.remove('hidden');
});

// hide the overlay and the dialog
closeButtonDanger.addEventListener('click', function () {
    modalDanger.classList.add('hidden');
    overlayDanger.classList.add('hidden');
});

// The modal will close when the user clicks anywhere outside the modal
overlayModalDanger.addEventListener('click', function () {
    modalDanger.classList.add('hidden');
    overlayDanger.classList.add('hidden');
});


const openButtonForm = document.getElementById('openForm');
const modalWindowForm = document.getElementById('modalForm');
const closeButtonForm = document.getElementById('closeForm');
const overlayModalForm = document.getElementById('overlayForm');

 // show the overlay and the modal
openButtonForm.addEventListener('click', function () {
    modalForm.classList.remove('hidden');
    overlayForm.classList.remove('hidden');
});

// hide the overlay and the modal
closeButtonForm.addEventListener('click', function () {
    modalForm.classList.add('hidden');
    overlayForm.classList.add('hidden');
});

// The modal will close when the user clicks anywhere outside the modal
overlayModalForm.addEventListener('click', function () {
    modalForm.classList.add('hidden');
    overlayForm.classList.add('hidden');
});