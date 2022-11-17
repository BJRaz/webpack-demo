import _ from 'lodash';
import './style.css';
import Brian from './1.jpg';


function component() {
    const element = document.getElementById('div');

    element.innerHTML = _.join(['Hello','webpack'], ' ');
    element.classList.add('hello');

    const myBrian = new Image;
    myBrian.src = Brian;
    myBrian.addEventListener('click', (e) => {
        console.log(e);
    })

    element.appendChild(myBrian);

    return element;
}

document.body.appendChild(component());
