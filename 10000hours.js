const result = document.querySelector('.result');
const btnResult = document.querySelector('.btn-result');
let resultWannabe = document.querySelector('.txt-wannabe');
let howLong = document.querySelector('.txt-howlong');

const share = document.querySelector('.btn-share');

const runModal = document.querySelector('.btn-go');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.modal-close');

btnResult.addEventListener('click', () => {
    let specialist = document.querySelector('.inp-wannabe');
    let daily = document.querySelector('.inp-time');

    if(specialist.value == '' || daily.value =='') {
        if(specialist.value == '') {
            alert('어떤 전문가가 되고 싶은지 입력해주세요.');
            return document.specialist.focus();
        } else {
            alert('매일 몇 시간씩 훈련할지 입력해주세요.');
            return document.daily.focus();
        }
    } else {
        if((parseInt(daily.value)) == daily.value){
            resultWannabe.textContent = specialist.value;
            howLong.textContent = parseInt(10000/parseInt(daily.value,10));
        
            result.style.display = 'block';
        } else {
            alert('숫자를 입력하세요.');
            return document.daily.focus();
        }
    };
})

runModal.addEventListener('click', () => {
    modal.style.display = 'block';
});

btnClose.addEventListener('click', () => {
    window.close();
})

share.addEventListener('click', () => {
    let url = '';
    let urlText = document.createElement('textarea');
    document.body.appendChild(urlText);
    url = window.document.location.href;
    urlText.value = url;
    urlText.select();
    document.execCommand('copy');
    document.body.removeChild(urlText);
    alert('URL이 복사되었습니다:)')
})