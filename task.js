const fontSize = document.querySelectorAll('.font-size');
const bookContent = document.querySelector('.book__content');
const textColor = document.querySelectorAll("[data-text-color]");
const bgColor = document.querySelectorAll("[data-bg-color]");

function closeFsActive() {
    fontSize.forEach((item) => {
        item.classList.remove('font-size_active');
    })
}

function closeTextColor() {
    textColor.forEach((item) => {
        item.classList.remove('color_active');
    })
}

function closeBgColor() {
    bgColor.forEach((item) => {
        item.classList.remove('color_active');
    })
}

fontSize.forEach((item) => {
    item.onclick = () => {
        closeFsActive();
        item.classList.add('font-size_active');
        let size = item.dataset.size;
        if (size) {
            let classSize = `font-size_${size}`;
            bookContent.classList.add(classSize);
        } else {
            bookContent.classList.remove('font-size_small', 'font-size_big');
        }
        return false;
    }
})

textColor.forEach((item) => {
    item.onclick = () => {
        closeTextColor();
        item.classList.add('color_active');
        let color = item.getAttribute('data-text-color');
        let classColor = `book_color-${color}`;
        console.log(classColor);
        bookContent.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
        bookContent.classList.add(classColor);
        console.log(bookContent);
        return false;
    }
})

bgColor.forEach((item) => {
    item.onclick = () => {
        closeBgColor();
        item.classList.add('color_active');
        let color = item.getAttribute('data-bg-color');
        let classColor = `text_color_${color}`;
        console.log(classColor);
        bookContent.classList.remove('text_color_black', 'text_color_gray', 'text_color_whitesmoke');
        bookContent.classList.add(classColor);
        return false;
    }
})