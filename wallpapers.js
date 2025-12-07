// Список обоев в папке src/wpp/
const wallpapers = [
    "src/wpp/wallpaper1.jpg",
    "src/wpp/wallpaper2.jpg",
    "src/wpp/wallpaper3.jpg",
    "src/wpp/wallpaper4.jpg",
    "src/wpp/wallpaper5.jpg"
];

// Выбираем случайные обои при загрузке
function setRandomWallpaper() {
    if (wallpapers.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * wallpapers.length);
    const selectedWallpaper = wallpapers[randomIndex];
    
    const background = document.getElementById('background');
    if (background) {
        background.style.backgroundImage = `url('${selectedWallpaper}')`;
    }
}

// Запускаем при загрузке страницы
document.addEventListener('DOMContentLoaded', setRandomWallpaper);