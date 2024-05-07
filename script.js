function startSimulation() {
    const n = parseInt(document.getElementById('n').value); //кол-во котиков
    const b = parseInt(document.getElementById('b').value); //кол-во корва необходимое 1 котику
    const m = parseInt(document.getElementById('m').value); // вместимость миски
    const t = parseInt(document.getElementById('t').value); //время поедания корма
    const r = parseInt(document.getElementById('r').value); //время наполнения миски 

    let timeResult = 0; //общее время
    let bowlContent = m; //остатки корма
    let catsFed = 0;//счетчик накормленных кошек

    const output = document.getElementById('output');

    function feedCat(catNumber) {
        if (bowlContent >= b) {
            bowlContent -= b;
            output.innerHTML += `Котик под номером ${catNumber} подошел к миске<br>`;
            setTimeout(() => {
                output.innerHTML += `Котик под номером ${catNumber} отошел от миски<br>`;
                catsFed++;
                timeResult += t;

                if (catsFed === n) {
                    output.innerHTML += `Все котики накормлены! Затрачено времени: ${timeResult} секунд<br>`;
                    return;
                }

                setTimeout(() => {
                    feedCat((catNumber % n) + 1);
                }, t * 1000);
            }, t * 1000);
        } else {
            output.innerHTML += 'Бабушка наполняет миску...<br>';
            setTimeout(() => {
                bowlContent = m;
                output.innerHTML += 'Миска наполнена!<br>';
                feedCat(catNumber);
            }, r * 1000);

            timeResult += r;
        }
    }

    feedCat(1);
}