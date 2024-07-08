setTimeout(() => {
    revealSlogan();    
}, 500);

async function revealSlogan () {
    await new Promise((resolve) => {
        setTimeout(()=>{
            let sloganSelector = "#welcome-slogan";
            let slogan = document.querySelector(sloganSelector);
            slogan.style.opacity = "1";
            LettersAnimation(sloganSelector, 200, 30, false);
            resolve();
        }, 2000)
    })
}

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let randomLetter = () => alphabet[Math.floor(Math.random() * 26)];

function LettersAnimation(selector, interval = 5000, speed = 30, loop = true) {
    document.querySelectorAll(selector).forEach(el => {
        el.dataset.name = el.textContent;
        const repeat = setInterval(() => {
            let iter = 0;
            const interval = setInterval(() => {
                el.textContent = el.textContent
                    .split("")
                    .map((letter, i) => {
                        if (i < iter) {
                            return el.dataset.name[i];
                        }
                        return randomLetter();
                    })
                    .join("");
                if (iter >= el.dataset.name.length) clearInterval(interval)
                iter += 1 / 3;
            }, speed);
            if (!loop) clearInterval(repeat);
        }, interval);
    });
}