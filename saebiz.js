const data = {
    'А': 'A',
    'а': 'a',
    'Б': 'B',
    'б': 'b',
    'Ц': 'C',
    'ц': 'c',
    'Д': 'D',
    'д': 'd',
    'Е': 'E',
    'е': 'e',
    'Ф': 'F',
    'ф': 'f',
    'Г': 'G',
    'г': 'g',
    'Х': 'H',
    'х': 'h',
    'Һ': 'H',
    'һ': 'h',
    'І': 'I',
    'і': 'i',
    'И': 'I',
    'и': 'i',
    'Й': 'J',
    'й': 'j',
    'К': 'K',
    'к': 'k',

    'Л': 'L',
    'л': 'l',
    'М': 'M',
    'м': 'm',
    'Н': 'N',
    'н': 'n',
    'О': 'O',
    'о': 'o',
    'П': 'P',
    'п': 'p',
    'Қ': 'Q',
    'қ': 'q',
    'Р': 'R',
    'р': 'r',
    'С': 'S',
    'с': 's',
    'Т': 'T',
    'т': 't',
    'В': 'V',
    'в': 'v',
    'У': 'W',
    'у': 'w',
    'Ы': 'Y',
    'ы': 'y',
    'Ұ': 'U',
    'ұ': 'u',
    'З': 'Z',
    'з': 'z',

    'Ә': 'Ae',
    'ә': 'ae',
    'Ө': 'Oe',
    'ө': 'oe',
    'Ү': 'Ue',
    'ү': 'ue',
    'Ң': 'Ng',
    'ң': 'ng',
    'Ғ': 'Gh',
    'ғ': 'gh',
    'Ч': 'Ch',
    'ч': 'ch',
    'Ш': 'Sh',
    'ш': 'sh',
    'Ж': 'Zh',
    'ж': 'zh',
    'я': 'ja',
    'Я': 'Ja',
    'ю': 'jw',
    'Ю': 'Jw',
    'э': 'e',
    'Э': 'E',
    'Щ': 'Sh',
    'щ': 'sh',
    'ь': '',
    'ъ': '',
};

chrome.runtime.onMessage.addListener((msg)=>{
    
    let res = [];
    for(let i = 0; i < msg.length; i++){
        let char = data[msg[i]];
        if(char !== undefined){
            res.push(char);
        }else{
            res.push(msg[i]);
        }
    }
    window.modifySelection(res.join(''));
});

function modifySelection(newValue) {
    var range = document.getSelection().getRangeAt(0);
    range.deleteContents();
    range.insertNode(document.createTextNode(newValue));
    
}