const questionItem = document.querySelectorAll('.question-item');

if (questionItem[0]) {
    questionItem.forEach(item => {
        item.onclick = () => {
            item.classList.toggle('question-item-active');
        }
    })
}