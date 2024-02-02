document.querySelector('.backgtound-main img').style.opacity = 1;
document.querySelector('.section-1').style.opacity = 1;
var ex = document.querySelector('#ex'),
    ctx = ex.getContext('2d');

//Центральная линия
// Создание линейного градиента
// Точка начала линии градиента: x=20, y=0
// Точка конца линии градиента: x=220, y=0
var gradient = ctx.createLinearGradient(399, 0, 399, 2201);

// Добавление трёх контрольных точек
gradient.addColorStop(0, "rgba(1, 68, 32, 0.00)");
gradient.addColorStop(0.06, "rgba(1, 68, 32, 0.99)");
gradient.addColorStop(0.86, "#014420");
gradient.addColorStop(1, "rgba(1, 68, 32, 0.00)");

// Установка стиля заливки и отрисовка прямоугольника градиента
ctx.beginPath();
ctx.moveTo(399, 0);
ctx.lineTo(399, 2201);
ctx.strokeStyle = gradient;
ctx.lineWidth = 6;
ctx.stroke();

//Первая линия

var gradient1 = ctx.createLinearGradient(0, 140, 396, 140);
gradient1.addColorStop(0, "rgba(6, 255, 121, 0.00)");
gradient1.addColorStop(1, "rgba(6, 255, 121, 0.27)");
ctx.beginPath();
ctx.moveTo(396, 140);
ctx.lineTo(0, 140);
ctx.strokeStyle = gradient1;
ctx.lineWidth = 6;
ctx.stroke();

//Вторая линия

var gradient2 = ctx.createLinearGradient(402, 345, 798, 345);
gradient2.addColorStop(0.14, "rgba(6, 255, 121, 0.27)");
gradient2.addColorStop(1, "rgba(6, 255, 121, 0.00)");
ctx.beginPath();
ctx.moveTo(402, 345);
ctx.lineTo(798, 345);
ctx.strokeStyle = gradient2;
ctx.lineWidth = 6;
ctx.stroke();

// Треья линия

var gradient3 = ctx.createLinearGradient(0, 804, 396, 804);
gradient3.addColorStop(0, "rgba(6, 255, 121, 0.00)");
gradient3.addColorStop(1, "rgba(6, 255, 121, 0.27)");
ctx.beginPath();
ctx.moveTo(0, 804);
ctx.lineTo(396, 804);
ctx.strokeStyle = gradient3;
ctx.lineWidth = 6;
ctx.stroke();

//Четвертая линия 

var gradient4 = ctx.createLinearGradient(402, 1053, 798, 1053);
gradient4.addColorStop(0.14, "rgba(6, 255, 121, 0.27)");
gradient4.addColorStop(1, "rgba(6, 255, 121, 0.00)");
ctx.beginPath();
ctx.moveTo(402, 1053);
ctx.lineTo(798, 1053);
ctx.strokeStyle = gradient4;
ctx.lineWidth = 6;
ctx.stroke();

//Пятая линия

var gradient5 = ctx.createLinearGradient(0, 1507, 396, 1507);
gradient5.addColorStop(0, "rgba(6, 255, 121, 0.00)");
gradient5.addColorStop(1, "rgba(6, 255, 121, 0.27)");
ctx.beginPath();
ctx.moveTo(0, 1507);
ctx.lineTo(396, 1507);
ctx.strokeStyle = gradient5;
ctx.lineWidth = 6;
ctx.stroke();

//Шестая линия

var gradient6 = ctx.createLinearGradient(402, 1771, 798, 1771);
gradient6.addColorStop(0.14, "rgba(6, 255, 121, 0.27)");
gradient6.addColorStop(1, "rgba(6, 255, 121, 0.00)");
ctx.beginPath();
ctx.moveTo(402, 1771);
ctx.lineTo(798, 1771);
ctx.strokeStyle = gradient6;
ctx.lineWidth = 6;
ctx.stroke();


