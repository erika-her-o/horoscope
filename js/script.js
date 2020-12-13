alert(`${ prompt("Dime tu nombre") }, que tengas un buen día ♡`);

const zodiacSignOptions = document.querySelector('#zodiac-sign-options');

zodiacSignOptions.onchange = event => {
    const zodiacSignDesc = document.querySelectorAll('.zodiac-sign-desc');
    const { value } = event.target;
    const dNone = 'd-none';
    zodiacSignDesc.forEach(element =>
        element.classList[0] === value ? element.classList.remove(dNone) : element.classList.add(dNone));
}