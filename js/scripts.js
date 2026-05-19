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
};

document.addEventListener("click", function (e) {
    if (!e.target.classList.contains("emoji")) return;

    let emoji = e.target.alt || e.target.textContent || e.target.innerText;
    let result = document.getElementById("result");

    if (e.target.closest(".left-side")) {
        leftEmoji = emoji;
        result.textContent = "Emoji gauche : " + leftEmoji;
        twemoji.parse(result);
    }

    if (e.target.closest(".right-side")) {
        rightEmoji = emoji;
        result.textContent = "Emoji droite : " + rightEmoji;
        twemoji.parse(result);
    }

    if (leftEmoji && rightEmoji) {
        const key = `${leftEmoji}|${rightEmoji}`;
        if (mashupMap[key]) {
            result.innerHTML = `
                ${leftEmoji} + ${rightEmoji} = 
                <img src="${mashupMap[key]}" alt="Emoji mashup" class="emoji" />
            `;
        } else {
            result.textContent = "Pas de mashup défini pour cette combinaison";
        }
        twemoji.parse(result);
        leftEmoji = null;
        rightEmoji = null;
    }
});

// 🤕🤒🤮🤢🤧🥵🥶😶‍🌫️😴💤😈👿👹👺💩👻💀☠👽🤖🎃😺😸😹😻😼😽🙀😿😾😀😃😄😁😆😅😂🤣😇😉😊🙂🙃☺😋😌😍🥰😘😗😙😚🥲🤪😜😝😛🤑😎🤓🥸🧐🤠🥳🤡😏😶🫥😐🫤😑😒🙄🤨🤔🤫🤭🫢🫡🤗🫣🤥😳😞😧😦😯😓😥😰😨😱😮😮‍💨😪🥱😩😫😖😣🥺😬☹🙁😕😔🤬😡😠😤😟🥹😢😭🤤🤩😵😵‍💫🥴😲🫨🤯🫠🤐😷