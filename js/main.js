// Init Masonry
$(function(){
    
    var m = new Masonry($('.grid').get()[0], {
        itemSelector: ".reto"
    });

});

// Filter
!function(d){var c="portfilter";var b=function(e){this.$element=d(e);this.stuff=d("[data-tag]");this.target=this.$element.data("target")||""};b.prototype.filter=function(g){var e=[],f=this.target;this.stuff.fadeOut("fast").promise().done(function(){d(this).each(function(){if(d(this).data("tag")==f||f=="all"){e.push(this)}});d(e).show()})};var a=d.fn[c];d.fn[c]=function(e){return this.each(function(){var g=d(this),f=g.data(c);if(!f){g.data(c,(f=new b(this)))}if(e=="filter"){f.filter()}})};d.fn[c].defaults={};d.fn[c].Constructor=b;d.fn[c].noConflict=function(){d.fn[c]=a;return this};d(document).on("click.portfilter.data-api","[data-toggle^=portfilter]",function(f){d(this).portfilter("filter")})}(window.jQuery);

// Drawboard
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
// canvas.height = '660px'; // Posiblemente hay error

ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if (!isDrawing) return; // Detiene la funcion cuando el usuario no está dibujando.
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    
    // Empezar dibujo
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    
    // Ir a
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    
    // Update
    lastX = e.offsetX;
    lastY = e.offsetY;
    
    // Color
    hue++;
    if (hue >= 360) {
        hue = 0;
    };
    
    // Line Width
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    };
    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    };
    
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);









