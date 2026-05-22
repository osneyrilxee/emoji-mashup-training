twemoji.parse(document.body, {
    folder: 'svg',
    ext: '.svg',
    attributes: () => ({ class: 'emoji' }),
});

let leftEmoji = null;
let rightEmoji = null;

const mashupMap = {
    "😊|🧐": "../assets/emoji/twemoji-1.png",
    "🧐|😊": "../assets/emoji/twemoji-1.png",
    "🥳|😭": "../assets/emoji/twemoji-2.png",
    "😭|🥳": "../assets/emoji/twemoji-2.png",
    "🤩|🙂": "../assets/emoji/twemoji-3.png",
    "🙂|🤩": "../assets/emoji/twemoji-3.png",
    "☠️|😍": "../assets/emoji/twemoji-4.png",
    "😍|☠️": "../assets/emoji/twemoji-4.png",
    "😭|🤠": "../assets/emoji/twemoji-5.png",
    "🤠|😭": "../assets/emoji/twemoji-5.png",
    "🤑|🤮": "../assets/emoji/twemoji-6.png",
    "🤮|🤑": "../assets/emoji/twemoji-6.png",
    "😒|😬": "../assets/emoji/twemoji-7.png",
    "😬|😒": "../assets/emoji/twemoji-7.png",
    "👿|😎": "../assets/emoji/twemoji-8.png",
    "😎|👿": "../assets/emoji/twemoji-8.png",
    "🤑|🤑": "../assets/emoji/twemoji-9.png",
    "😉|🥲": "../assets/emoji/twemoji-10.png",
    "🥲|😉": "../assets/emoji/twemoji-10.png",
    "🙁|🥲": "../assets/emoji/twemoji-11.png",
    "🥲|🙁": "../assets/emoji/twemoji-11.png",
    "😍|😶": "../assets/emoji/twemoji-12.png",
    "😶|😍": "../assets/emoji/twemoji-12.png",
    "🤮|👽": "../assets/emoji/twemoji-13.png",
    "🤔|😎": "../assets/emoji/twemoji-14.png",
    "😎|🤔": "../assets/emoji/twemoji-14.png",
    "😎|😡": "../assets/emoji/twemoji-15.png",
    "😡|😎": "../assets/emoji/twemoji-15.png",
    "😇|😭": "../assets/emoji/twemoji-16.png",
    "😭|😇": "../assets/emoji/twemoji-16.png",
    "🥳|🤒": "../assets/emoji/twemoji-17.png",
    "🤒|🥳": "../assets/emoji/twemoji-17.png",
    "🤠|🤒": "../assets/emoji/twemoji-18.png",
    "🤒|🤠": "../assets/emoji/twemoji-18.png",
    "🤠|🤮": "../assets/emoji/twemoji-19.png",
    "🤮|🤠": "../assets/emoji/twemoji-19.png",
    "🤠|😎": "../assets/emoji/twemoji-20.png",
    "😎|🤠": "../assets/emoji/twemoji-20.png",
    "🤠|🤑": "../assets/emoji/twemoji-21.png",
    "🤑|🤠": "../assets/emoji/twemoji-21.png",
    "🤠|👻": "../assets/emoji/twemoji-22.png",
    "👻|🤠": "../assets/emoji/twemoji-22.png",
    "🥲|🫠": "../assets/emoji/twemoji-23.png",
    "🫠|🥲": "../assets/emoji/twemoji-23.png",
    "🥰|🤧": "../assets/emoji/twemoji-24.png",
    "🤧|🥰": "../assets/emoji/twemoji-24.png",
    "👾|🤠": "../assets/emoji/twemoji-25.png",
    "🤠|👾": "../assets/emoji/twemoji-25.png",
    "😍|🥲": "../assets/emoji/twemoji-26.png",
    "🥲|😍": "../assets/emoji/twemoji-26.png",
    "😱|😗": "../assets/emoji/twemoji-27.png",
    "😗|😱": "../assets/emoji/twemoji-27.png",
    "👾|😇": "../assets/emoji/twemoji-28.png",
    "😇|👾": "../assets/emoji/twemoji-28.png",
    "😎|😇": "../assets/emoji/twemoji-29.png",
    "😇|😎": "../assets/emoji/twemoji-29.png",
};

document.addEventListener("click", function (e) {
    if (!e.target.classList.contains("emoji")) return;

    let emoji = e.target.alt || e.target.textContent || e.target.innerText;
    let result = document.getElementById("result");

    if (e.target.closest(".left-side")) {
        leftEmoji = emoji;
        result.textContent = leftEmoji;
        twemoji.parse(result);
    }

    if (e.target.closest(".right-side")) {
        rightEmoji = emoji;
        result.textContent = rightEmoji;
        twemoji.parse(result);
    }

    if (leftEmoji && rightEmoji) {
        result.innerHTML = `
    <div class="loading-mashup">
        <div class="selected-emojis">
            <span class="emoji-preview">${leftEmoji}</span>
            <span class="plus">+</span>
            <span class="emoji-preview">${rightEmoji}</span>
        </div>
        <p>mashup en cours...</p>
    </div>
`;
        twemoji.parse(result);
        setTimeout(() => {
            const key = `${leftEmoji}|${rightEmoji}`;
            if (mashupMap[key]) {
                result.innerHTML = `
                <img id="resultemoji" 
                     src="${mashupMap[key]}" 
                     alt="Emoji mashup" 
                     class="emoji" />`;
            } else {
                result.textContent = "Pas de mashup défini pour cette combinaison";
            }

            setTimeout(() => {
                const img = document.getElementById("resultemoji");

                if (img) {
                    img.style.cursor = "pointer";

                    img.addEventListener("click", function () {
                        const link = document.createElement("a");
                        link.href = img.src;
                        link.download = "mashup.png";
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    });
                }
            }, 0);
            twemoji.parse(result);
            leftEmoji = null;
            rightEmoji = null;

        }, 2000);
    }
});

let resetButton = document.getElementById("reset-function");
let zoneToReset = document.getElementById("result");

resetButton.addEventListener('click', function () {
    zoneToReset.textContent = "essayer un mashup!";
});