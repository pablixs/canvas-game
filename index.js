const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');



// ctx.fillStyle = 'green';
// ctx.fillRect(20,30,20,20);

ctx.fillStyle = 'blue';
ctx.fillRect(0, 0, canvas.width, canvas.height)

function Background(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;

    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height)
}

const Floor = new Background(0, 520, 1000, 500, 'red');
console.log(Floor)

const character = {
    x: 0,
    y: 470,
    prevX: 0,
    prevY: 0,
    width: 50,
    height: 50,
    speed: 10,
    floor: 470,
    gravity: 0.9,
    jumping: false,
    jumpForce: 15,
    jumpingUp: false,
    jumpingDown: false,
    direction: 'none'
};

console.log(character)

const tempImage = ctx.getImageData(0, 0, canvas.width, canvas.height)
console.log(ctx);

// function jump(){
//     character.y -= character.speed * 3;
//     setInterval(() => {
//         character.y += character.speed * 3;
//     },character.gravity)
// }

function updatePosition() {
    // console.log(character.direction)
    character.prevX = character.x;
    character.prevY = character.y;

    if (character.direction === 'up') {
        console.log(`Esta saltando? ${character.jumping}`)
        if (!character.jumping) {
            character.jumping = true;
            character.jumpingUp = true;
        }
    } else if (character.direction === 'down') {
        if (character.jumping) {
            character.jumping = false;
            character.jumpingUp = false;
        }
        character.y += character.speed;
    } else if (character.direction === 'left') {
        character.x -= character.speed;
    } else if (character.direction === 'right') {
        character.x += character.speed;
    }

    if (character.jumping) {
        character.y -= character.jumpForce;
        character.jumpForce -= character.gravity;
    };

    if (character.jumpForce <= 0) {
        character.jumpingUp = false;
        character.jumpingDown = true;
    }

    if (character.y >= character.floor) {
        character.jumping = false;
        character.jumpingDown = false;
        character.y = character.floor
        character.jumpForce = 15;
    }


};

document.addEventListener('keydown', function (e) {
    if (e.key === 'w' || e.keyCode === 38) {
        character.direction = 'up';
        console.log(e.key)
    } else if (e.key === 's' || e.keyCode === 40) {
        character.direction = 'down'
        console.log(e.key)
    } else if (e.key === 'a' || e.keyCode === 37) {
        character.direction = 'left'
        console.log(e.key)
    } else if (e.key === 'd' || e.keyCode === 39) {
        character.direction = 'right'
        console.log(e.key)
    }
});


document.addEventListener('keyup', function (e) {
    character.direction = 'none'
});

function drawCharacter() {
    ctx.clearRect(character.prevX, character.prevY, character.width, character.height);
    ctx.moveTo(6, 6);
    ctx.lineTo(6, 6);
    ctx.lineTo(6, 7);
    ctx.lineTo(6, 9);
    ctx.lineTo(6, 10);
    ctx.lineTo(6, 13);
    ctx.lineTo(6, 15);
    ctx.lineTo(6, 18);
    ctx.lineTo(6, 21);
    ctx.lineTo(7, 22);
    ctx.lineTo(7, 25);
    ctx.lineTo(7, 27);
    ctx.lineTo(7, 29);
    ctx.lineTo(7, 30);
    ctx.lineTo(7, 31);
    ctx.lineTo(7, 32);
    ctx.lineTo(7, 33);
    ctx.lineTo(7, 34);
    ctx.lineTo(7, 35);
    ctx.moveTo(5, 5);
    ctx.lineTo(5, 5);
    ctx.lineTo(6, 5);
    ctx.lineTo(8, 5);
    ctx.lineTo(10, 5);
    ctx.lineTo(12, 5);
    ctx.lineTo(15, 5);
    ctx.lineTo(17, 5);
    ctx.lineTo(19, 5);
    ctx.lineTo(21, 5);
    ctx.lineTo(23, 5);
    ctx.lineTo(25, 5);
    ctx.lineTo(27, 5);
    ctx.lineTo(28, 5);
    ctx.lineTo(29, 5);
    ctx.lineTo(30, 5);
    ctx.lineTo(31, 6);
    ctx.lineTo(32, 6);
    ctx.lineTo(33, 6);
    ctx.lineTo(34, 6);
    ctx.lineTo(35, 6);
    ctx.lineTo(36, 6);
    ctx.lineTo(37, 6);
    ctx.lineTo(38, 6);
    ctx.lineTo(39, 6);
    ctx.lineTo(40, 7);
    ctx.lineTo(41, 7);
    ctx.lineTo(42, 7);
    ctx.lineTo(43, 7);
    ctx.lineTo(44, 7);
    ctx.lineTo(45, 7);
    ctx.lineTo(46, 7);
    ctx.lineTo(46, 7);
    ctx.lineTo(46, 9);
    ctx.lineTo(46, 11);
    ctx.lineTo(46, 13);
    ctx.lineTo(46, 16);
    ctx.lineTo(45, 19);
    ctx.lineTo(45, 22);
    ctx.lineTo(45, 24);
    ctx.lineTo(44, 26);
    ctx.lineTo(44, 27);
    ctx.lineTo(44, 29);
    ctx.lineTo(44, 31);
    ctx.lineTo(44, 32);
    ctx.lineTo(44, 33);
    ctx.lineTo(44, 34);
    ctx.lineTo(44, 35);
    ctx.lineTo(44, 37);
    ctx.lineTo(43, 38);
    ctx.lineTo(43, 39);
    ctx.lineTo(43, 40);
    ctx.lineTo(43, 42);
    ctx.lineTo(43, 43);
    ctx.lineTo(43, 44);
    ctx.lineTo(43, 46);
    ctx.lineTo(43, 47);
    ctx.lineTo(43, 48);
    ctx.lineTo(43, 49);
    ctx.lineTo(43, 50);
    ctx.lineTo(43, 51);
    ctx.lineTo(43, 52);
    ctx.lineTo(42, 52);
    ctx.lineTo(41, 52);
    ctx.lineTo(40, 52);
    ctx.lineTo(38, 52);
    ctx.lineTo(36, 52);
    ctx.lineTo(34, 52);
    ctx.lineTo(32, 52);
    ctx.lineTo(30, 52);
    ctx.lineTo(29, 51);
    ctx.lineTo(27, 51);
    ctx.lineTo(26, 51);
    ctx.lineTo(25, 51);
    ctx.lineTo(24, 51);
    ctx.lineTo(23, 51);
    ctx.lineTo(22, 51);
    ctx.lineTo(21, 50);
    ctx.lineTo(20, 49);
    ctx.lineTo(19, 49);
    ctx.lineTo(18, 49);
    ctx.lineTo(17, 49);
    ctx.lineTo(16, 48);
    ctx.lineTo(15, 48);
    ctx.lineTo(14, 48);
    ctx.lineTo(13, 48);
    ctx.lineTo(11, 48);
    ctx.lineTo(10, 48);
    ctx.lineTo(9, 48);
    ctx.lineTo(8, 48);
    ctx.lineTo(7, 48);
    ctx.lineTo(7, 47);
    ctx.lineTo(7, 46);
    ctx.lineTo(7, 45);
    ctx.lineTo(7, 43);
    ctx.lineTo(7, 41);
    ctx.lineTo(7, 40);
    ctx.lineTo(7, 39);
    ctx.lineTo(7, 38);
    ctx.lineTo(7, 37);
    ctx.lineTo(7, 36);
    ctx.lineTo(7, 35);
    ctx.lineTo(7, 33);
    ctx.lineTo(7, 31);
    ctx.lineTo(7, 30);
    ctx.lineTo(7, 29);
    ctx.lineTo(7, 28);
    ctx.moveTo(17, 26);
    ctx.lineTo(17, 26);
    ctx.lineTo(17, 27);
    ctx.lineTo(17, 28);
    ctx.lineTo(17, 30);
    ctx.lineTo(17, 31);
    ctx.lineTo(17, 33);
    ctx.lineTo(17, 34);
    ctx.lineTo(17, 35);
    ctx.lineTo(17, 37);
    ctx.lineTo(17, 38);
    ctx.lineTo(17, 39);
    ctx.lineTo(17, 40);
    ctx.lineTo(18, 40);
    ctx.lineTo(19, 40);
    ctx.lineTo(19, 41);
    ctx.lineTo(20, 42);
    ctx.lineTo(22, 42);
    ctx.lineTo(24, 42);
    ctx.lineTo(25, 42);
    ctx.lineTo(27, 42);
    ctx.lineTo(28, 41);
    ctx.lineTo(29, 40);
    ctx.lineTo(30, 39);
    ctx.lineTo(31, 38);
    ctx.lineTo(31, 37);
    ctx.lineTo(31, 36);
    ctx.lineTo(31, 34);
    ctx.lineTo(31, 32);
    ctx.lineTo(31, 31);
    ctx.lineTo(30, 30);
    ctx.lineTo(30, 28);
    ctx.lineTo(30, 27);
    ctx.lineTo(29, 26);
    ctx.lineTo(29, 25);
    ctx.moveTo(16, 18);
    ctx.lineTo(16, 18);
    ctx.lineTo(17, 18);
    ctx.moveTo(27, 18);
    ctx.lineTo(27, 18);

    // Dibuja al personaje en la posición actual
    ctx.fillStyle = 'green';
    ctx.putImageData(tempImage, 0, 0)
    ctx.fillRect(character.x, character.y, character.width, character.height);
}

function animate() {
    updatePosition();
    drawCharacter();
    requestAnimationFrame(animate);
}

animate();