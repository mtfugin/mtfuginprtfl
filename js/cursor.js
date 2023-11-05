const coords = {x: 0, y: 0};
const cursors = document.querySelectorAll(".cursor");
const cursorsd = document.querySelectorAll(".cursor-diff");
const buttons = document.querySelectorAll("button");


// Cursor Animation Colors
const colors = [
    "#58828d",
    "#6c9199",
    "#7a9aa0",
    "#8ca7aa",
    "#9ab1b2",
    "#aebfbd",
    "#bbc9c5",
    "#cad3cd",
    "#d8ddd5",
    "#e8e8de",
    "#f6f3e6",
    "#faf3e5",
    "#f3e8db",
    "#e9ddcf",
    "#e3d2c5",
    "#dac5b8",
    "#d2baae",
    "#cbb0a4",
    "#c1a599",
    "#b9978c",
    "#b18c80",
    "#a87f73"
];

cursors.forEach(function (cursor, index) {
    cursor.x = 0;
    cursor.y = 0;
    cursor.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

// Cursor Animation
function animateCursors() {
    let x = coords.x;
    let y = coords.y;

    cursors.forEach(function (cursor, index) {
        cursor.style.left = x - 12 + "px";
        cursor.style.top = y - 12 + "px";

        cursor.style.transform = `scale(${(cursors.length - index) / cursors.length})`;

        cursor.x = x;
        cursor.y = y;

        const nextCursor = cursors[index + 1] || cursors[0];
        x += (nextCursor.x - x) * 0.3;
        y += (nextCursor.y - y) * 0.3;
    });

    requestAnimationFrame(animateCursors);
}
animateCursors();

// Start Button
buttons.forEach(function (button) {
    let tl = gsap.timeline({ paused: true });

    button.addEventListener("click", function () {
    forceMouseoutEvent();
     });

     function forceMouseoutEvent() {
    tl.to(cursors, { duration: 0.5, alpha: 1 })
    .to(cursorsd, { duration: 0.5, alpha: 0 }, "<");
    tl.play();
    }

    button.addEventListener("mouseover", function () {
        tl.to(cursors, { duration: 0.5, alpha: 0 })
        .to(cursorsd, { duration: 0.5, alpha: 1}, "<");
        tl.play();
    });

    button.addEventListener("mouseout", function () {
        tl.to(cursors, { duration: 0.5, alpha: 1 })
        .to(cursorsd, { duration: 0.5, alpha: 0}, "<");
        tl.play();
    });
});

function animatediffCursors() {
    let x = coords.x;
    let y = coords.y;

    cursorsd.forEach(function (cursor, index) {
        cursor.style.left = x - 40 + "px";
        cursor.style.top = y - 40 + "px";
        cursor.style.transform = `scale(${(cursorsd.length - index) / cursorsd.length})`;

        cursor.x = x;
        cursor.y = y;

        const nextCursor = cursorsd[index + 1] || cursorsd[0];
        x += (nextCursor.x - x) * 0.3;
        y += (nextCursor.y - y) * 0.3;
    });

    requestAnimationFrame(animatediffCursors);
}
animatediffCursors();


document.addEventListener('contextmenu', function (e) {
    e.preventDefault(); // Prevent the default context menu
    const copyrightMessage = document.createElement('div');
    copyrightMessage.innerHTML = 'COPYRIGHT © 2023<br>AMEROGIN KAMID<br>ALL RIGHTS RESERVED<br><br>║▌║█║▌│║▌║▌█'; // Replace with your own copyright message
    copyrightMessage.id = 'copyrightMessage';
    document.body.appendChild(copyrightMessage); // Append the message to the document

    function updatePosition(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const message = document.getElementById('copyrightMessage');
        message.style.top = mouseY + 'px';
        message.style.left = mouseX + 'px';
    }

    updatePosition(e);

    // Update message position on mouse move
    document.addEventListener('mousemove', updatePosition);

    // Remove the message after a certain duration
    setTimeout(() => {
        document.body.removeChild(document.getElementById('copyrightMessage'));
        document.removeEventListener('mousemove', updatePosition);
    }, 2000); // Adjust the duration as needed (in milliseconds)
});
