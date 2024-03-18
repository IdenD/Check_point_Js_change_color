document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('color-box').style.backgroundColor = '#efefef';
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('change-color-btn').addEventListener('click', () => {
    document.getElementById('color-box').style.backgroundColor = getRandomColor();
    console.log(getRandomColor());
})

