let isHovered = false;

function handleFacebookHover(e) {
    if (!isHovered) {
        isHovered = true;
        const copyrightMessage = document.createElement('div');
        copyrightMessage.innerHTML = '<b>FACEBOOK</b><br>Amerogin Kamid<br>ムトフギン<br>@amerogink.p';
        copyrightMessage.id = 'copyrightMessage';
        document.body.appendChild(copyrightMessage);

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
    }
}

function handleFacebookLeave() {
    isHovered = false;
    const message = document.getElementById('copyrightMessage');
    if (message) {
        document.body.removeChild(message);
        document.removeEventListener('mousemove', updatePosition);
    }
}

// Adding event listener to the Facebook logo
const facebookLogo = document.getElementById('facebook');
if (facebookLogo) {
    facebookLogo.addEventListener('mouseover', handleFacebookHover);
    facebookLogo.addEventListener('mouseleave', handleFacebookLeave);
}

//----------------//

function handleInstagramHover(e) {
    if (!isHovered) {
        isHovered = true;
        const copyrightMessage = document.createElement('div');
        copyrightMessage.innerHTML = '<b>INSTAGRAM</b><br>Amerogin Kamid<br>ムトフギン<br>@mtfugin__00';
        copyrightMessage.id = 'copyrightMessage';
        document.body.appendChild(copyrightMessage);

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
    }
}

function handleInstagramLeave() {
    isHovered = false;
    const message = document.getElementById('copyrightMessage');
    if (message) {
        document.body.removeChild(message);
        document.removeEventListener('mousemove', updatePosition);
    }
}

// Adding event listener to the Facebook logo
const instagramLogo = document.getElementById('instagram');
if (instagramLogo) {
    instagramLogo.addEventListener('mouseover', handleInstagramHover);
    instagramLogo.addEventListener('mouseleave', handleInstagramLeave);
}

//----------------//

function handleDiscordHover(e) {
    if (!isHovered) {
        isHovered = true;
        const copyrightMessage = document.createElement('div');
        copyrightMessage.innerHTML = '<b>DISCORD</b><br>Amerogin Kamid<br>ムトフギン<br>@mtfugin';
        copyrightMessage.id = 'copyrightMessage';
        document.body.appendChild(copyrightMessage);

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
    }
}

function handleDiscordLeave() {
    isHovered = false;
    const message = document.getElementById('copyrightMessage');
    if (message) {
        document.body.removeChild(message);
        document.removeEventListener('mousemove', updatePosition);
    }
}

// Adding event listener to the Facebook logo
const discordLogo = document.getElementById('discord');
if (discordLogo) {
    discordLogo.addEventListener('mouseover', handleDiscordHover);
    discordLogo.addEventListener('mouseleave', handleDiscordLeave);
}

//----------------//

function handleLinkedInHover(e) {
    if (!isHovered) {
        isHovered = true;
        const copyrightMessage = document.createElement('div');
        copyrightMessage.innerHTML = '<b>LINKEDIN</b><br>Amerogin Kamid<br>ムトフギン<br>@mtfugin';
        copyrightMessage.id = 'copyrightMessage';
        document.body.appendChild(copyrightMessage);

        function updatePosition(e) {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const message = document.getElementById('copyrightMessage');
            message.style.top = mouseY + 'px';
            message.style.left = mouseX + 'px';
        }

        updatePosition(e);

        document.addEventListener('mousemove', updatePosition);
    }
}

function handleLinkedInLeave() {
    isHovered = false;
    const message = document.getElementById('copyrightMessage');
    if (message) {
        document.body.removeChild(message);
        document.removeEventListener('mousemove', updatePosition);
    }
}

const linkedInLogo = document.getElementById('linkedin');
if (linkedInLogo) {
    linkedInLogo.addEventListener('mouseover', handleLinkedInHover);
    linkedInLogo.addEventListener('mouseleave', handleLinkedInLeave);
}
