const myList = document.getElementsByTagName('LI');
for (let i = 0; i < myList.length; i++) {
    const span = document.createElement("SPAN");
    const text = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(text);
    myList[i].appendChild(span);
}

const close = document.getElementsByClassName('close');
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        const div = this.parentElement;
        div.style.display = 'none';
    }
}

let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function addTask(){
    const li = document.createElement('LI');
    const inputValue = document.getElementById('myInput').value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert('Please type something.');
    } else {
        document.getElementById('myUL').appendChild(li);
    }
    document.getElementById('myInput').value = "";

    const span = document.createElement('SPAN');
    const txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            const div = this.parentElement;
            div.style.display = 'none';
        }
    }
}