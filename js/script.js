const menu = document.querySelector('.main__menu')
const back = document.querySelector('#back')

const chartAccounts = document.querySelector('#chart_of_accounts')
const couplesSchedule = document.querySelector('#couples_schedule')
const callSchedule = document.querySelector('#call_schedule')
const name = document.querySelector('#name')
const notes = document.querySelector('#notes')
const link = document.querySelector('#link')
const transactions = document.querySelector('#transactions')
const airplanes = document.querySelector('#airplanes')

function hidden(test) {
    test.classList.add('hidden')
}

function visible(test) {
    test.classList.remove('hidden')
}

back.addEventListener('click', () => visible(menu));
back.addEventListener('click', () => hidden(schedule));

chartAccounts.addEventListener('click', () => hidden(menu));
couplesSchedule.addEventListener('click', () => hidden(menu));
callSchedule.addEventListener('click', () => hidden(menu));
name.addEventListener('click', () => hidden(menu));
notes.addEventListener('click', () => hidden(menu));
link.addEventListener('click', () => hidden(menu));
transactions.addEventListener('click', () => hidden(menu));
airplanes.addEventListener('click', () => hidden(menu));

// Расписание
let buutonSchedule = document.querySelector('#call_schedule')
let schedule = document.querySelector('.main__couples-schedule')
buutonSchedule.addEventListener('click', () => visible(schedule));

function remove(params) {
    lesson_21_1.classList.remove('nowTd')
    change_21_0.classList.remove('nowTd')
    lesson_21_2.classList.remove('nowTd')
    change_20_1.classList.remove('nowTd')
    
    lesson_22_1.classList.remove('nowTd')
    change_22_0.classList.remove('nowTd')
    lesson_22_2.classList.remove('nowTd')
    change_20_2.classList.remove('nowTd')
    
    lesson_23_1.classList.remove('nowTd')
    change_23_0.classList.remove('nowTd')
    lesson_23_2.classList.remove('nowTd')
    change_20_3.classList.remove('nowTd')
    
    lesson_24_1.classList.remove('nowTd')
    change_24_0.classList.remove('nowTd')
    lesson_24_2.classList.remove('nowTd')
    change_20_4.classList.remove('nowTd')
    
    lesson_25_1.classList.remove('nowTd')
    change_25_0.classList.remove('nowTd')
    lesson_25_2.classList.remove('nowTd')
    change_20_5.classList.remove('nowTd')
    
    lesson_26_1.classList.remove('nowTd')
    change_26_0.classList.remove('nowTd')
    lesson_26_2.classList.remove('nowTd')
}



const lesson_21_1 = document.querySelector('#lesson_21-1')
const change_21_0 = document.querySelector('#change_21-0')
const lesson_21_2 = document.querySelector('#lesson_21-2')
const change_20_1 = document.querySelector('#change_20-1')

const lesson_22_1 = document.querySelector('#lesson_22-1')
const change_22_0 = document.querySelector('#change_22-0')
const lesson_22_2 = document.querySelector('#lesson_22-2')
const change_20_2 = document.querySelector('#change_20-2')

const lesson_23_1 = document.querySelector('#lesson_23-1')
const change_23_0 = document.querySelector('#change_23-0')
const lesson_23_2 = document.querySelector('#lesson_23-2')
const change_20_3 = document.querySelector('#change_20-3')

const lesson_24_1 = document.querySelector('#lesson_24-1')
const change_24_0 = document.querySelector('#change_24-0')
const lesson_24_2 = document.querySelector('#lesson_24-2')
const change_20_4 = document.querySelector('#change_20-4')

const lesson_25_1 = document.querySelector('#lesson_25-1')
const change_25_0 = document.querySelector('#change_25-0')
const lesson_25_2 = document.querySelector('#lesson_25-2')
const change_20_5 = document.querySelector('#change_20-5')

const lesson_26_1 = document.querySelector('#lesson_26-1')
const change_26_0 = document.querySelector('#change_26-0')
const lesson_26_2 = document.querySelector('#lesson_26-2')

const timeBlock = document.querySelector('#time')
const timeBlock2 = document.querySelector('.time')

timeBlock2.addEventListener('click', () => testTine());

Data = new Date();

let days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ];

  let day = Data.getDay();

  dayTitle = document.querySelector('#title_2')
  dayTitle.innerHTML = days[day]

let Hour = Data.getHours();
let Minutes = Data.getMinutes();

// Hour = 13;
// Minutes = 25;


console.log(Hour);
function testTine(params) {
    Minutes = Minutes + 1
    if (Minutes === 60) {
        Minutes = 0
        Hour = Hour + 1
    }
    timeBlock.innerHTML = `${Hour}:${Minutes}`
    raspisanie()
}

testTine()



function raspisanie() {
    if (8 === Hour && 30 <= Minutes || 9 === Hour && 15 > Minutes ) {
        remove()
        
        let endTime = 0
        
        if (Hour === 8) {
            endTime = 45 - (Minutes - 30)
        } else if(Hour === 9) {
            endTime = 15 - (Minutes - 0)
        }

        timeBlock.innerHTML = `${endTime} мин`

        lesson_21_1.classList.add('nowTd')
    } else if (9 === Hour && 15 <= Minutes && 20 > Minutes) {
        remove()

        let endTime = 0
        if (Hour === 9) {
            endTime = 5 - (Minutes - 15)
        }
        console.log(`${Hour}:${Minutes}`);

        timeBlock.innerHTML = `${endTime} мин`

        change_21_0.classList.add('nowTd')
    } else if (9 === Hour && 20 <= Minutes || 10 === Hour && 5 > Minutes) {
        
        remove()

        let endTime = 0
        if (Hour === 9) {
            endTime = 45 - (Minutes - 20)
        } else if(Hour === 10) {
            endTime = 5 - (Minutes - 0)
        }
        console.log(`${Hour}:${Minutes}`);
        timeBlock.innerHTML = `${endTime} мин`

        lesson_21_2.classList.add('nowTd')


    } else if(10 === Hour && 5 <= Minutes && 20 > Minutes) {
        
        remove()

        let endTime = 0
        if (Hour === 10) {
            endTime = 15 - (Minutes - 5)
        }
        console.log(`${Hour}:${Minutes}`);
        timeBlock.innerHTML = `${endTime} мин`

        change_20_1.classList.add('nowTd')
    } else if (10 === Hour && 20 <= Minutes || 11 === Hour && 5 > Minutes) {

        remove()

        let endTime = 0
        if (Hour === 10) {
            endTime = 45 - (Minutes - 20)
        } else if(Hour === 11) {
            endTime = 5 - (Minutes - 0)
        }
        console.log(`${Hour}:${Minutes}`);
        timeBlock.innerHTML = `${endTime} мин`

        lesson_22_1.classList.add('nowTd')
    } else if(11 === Hour && 5 <= Minutes && 10 > Minutes) {
        
        remove()

        let endTime = 0
        if (Hour === 11) {
            endTime = 5 - (Minutes - 5)
        }
        console.log(`${Hour}:${Minutes}`);
        timeBlock.innerHTML = `${endTime} мин`
        
        change_22_0.classList.add('nowTd')


    } else if (11 === Hour && 10 <= Minutes && 55 > Minutes){

        remove()

        let endTime = 0
        if (Hour === 11) {
            endTime = 45 - (Minutes - 10)
        }
        console.log(`${Hour}:${Minutes}`);
        timeBlock.innerHTML = `${endTime} мин`
        
        lesson_22_2.classList.add('nowTd')


    } else if (11 === Hour && 55 <= Minutes || 12 === Hour && 15 > Minutes) {

        remove()

        let endTime = 0
        if (Hour === 11) {
            endTime = 20 - (Minutes - 55)
        } else if(Hour === 12) {
            endTime = 15 - (Minutes - 0)
        }
        console.log(`${Hour}:${Minutes}`);
        timeBlock.innerHTML = `${endTime} мин`

        change_20_2.classList.add('nowTd')
    } else if (12 === Hour && 15 <= Minutes || 13 === Hour && 0 > Minutes){
        remove()

        let endTime = 0
        if (Hour === 12) {
            endTime = 45 - (Minutes - 15)
        }
        console.log(`${Hour}:${Minutes}`);
        timeBlock.innerHTML = `${endTime} мин`
        
        lesson_23_1.classList.add('nowTd')
    } else if (13 === Hour && 0 <= Minutes && 5 > Minutes){
        remove()

        let endTime = 0
        if (Hour === 13) {
            endTime = 5 - (Minutes - 0)
        }
        console.log(`${Hour}:${Minutes}`);
        timeBlock.innerHTML = `${endTime} мин`

        change_23_0.classList.add('nowTd')
    } else if (13 === Hour && 5 <= Minutes && 50 > Minutes){
        remove()

        let endTime = 0
        if (Hour === 13) {
            endTime = 45 - (Minutes - 5)
        }
        console.log(`${Hour}:${Minutes}`);
        timeBlock.innerHTML = `${endTime} мин`

        lesson_23_2.classList.add('nowTd')
    } else if (13 === Hour && 50 <= Minutes || 14 === Hour && 5 > Minutes){
        remove()

        let endTime = 0
        if (Hour === 13) {
            endTime = 15 - (Minutes - 50)
        } else if(Hour === 14) {
            endTime = 5 - (Minutes - 0)
        }
        console.log(`${Hour}:${Minutes}`);
        timeBlock.innerHTML = `${endTime} мин`

        change_20_3.classList.add('nowTd')
    } else if (14 === Hour && 5 <= Minutes && 50 > Minutes){
        remove()

        let endTime = 0
        if (Hour === 14) {
            endTime = 45 - (Minutes - 5)
        }
        console.log(`${Hour}:${Minutes}`);
        timeBlock.innerHTML = `${endTime} мин`

        lesson_24_1.classList.add('nowTd')
    } else if (14 === Hour && 50 <= Minutes && 55 > Minutes){
        remove()

        let endTime = 0
        if (Hour === 14) {
            endTime = 5 - (Minutes - 50)
        }
        console.log(`${Hour}:${Minutes}`);
        timeBlock.innerHTML = `${endTime} мин`

        change_24_0.classList.add('nowTd')
    } else if (14 === Hour && 55 <= Minutes || 15 === Hour && 40 > Minutes){
        remove()

        let endTime = 0
        if (Hour === 14) {
            endTime = 45 - (Minutes - 55)
        } else if(Hour === 15) {
            endTime = 40 - (Minutes - 0)
        }
        console.log(`${Hour}:${Minutes}`);
        timeBlock.innerHTML = `${endTime} мин`

        lesson_24_2.classList.add('nowTd')
    } else if (15 === Hour && 40 <= Minutes || 16 === Hour && 0 > Minutes){
        remove()

        let endTime = 0
        if (Hour === 15) {
            endTime = 20 - (Minutes - 40)
        }
        console.log(`${Hour}:${Minutes}`);
        timeBlock.innerHTML = `${endTime} мин`

        change_20_4.classList.add('nowTd')
    } else if (16 === Hour && 0 <= Minutes && 45 > Minutes){
        remove()

        let endTime = 0
        if (Hour === 16) {
            endTime = 45 - (Minutes - 0)
        }
        console.log(`${Hour}:${Minutes}`);
        timeBlock.innerHTML = `${endTime} мин`

        lesson_25_1.classList.add('nowTd')
    } else if (16 === Hour && 45 <= Minutes && 50 > Minutes){
        remove()

        let endTime = 0
        if (Hour === 16) {
            endTime = 5 - (Minutes - 45)
        }
        console.log(`${Hour}:${Minutes}`);
        timeBlock.innerHTML = `${endTime} мин`

        change_25_0.classList.add('nowTd')
    } else if (16 === Hour && 50 <= Minutes || 17 === Hour && 35 > Minutes){
        remove()

        let endTime = 0
        if (Hour === 16) {
            endTime = 45 - (Minutes - 50)
        } else if(Hour === 17) {
            endTime = 35 - (Minutes - 0)
        }
        console.log(`${Hour}:${Minutes}`);
        timeBlock.innerHTML = `${endTime} мин`

        lesson_25_2.classList.add('nowTd')
    } else if (17 === Hour && 35 <= Minutes && 45 > Minutes){
        remove()

        let endTime = 0
        if (Hour === 17) {
            endTime = 10 - (Minutes - 35)
        }
        console.log(`${Hour}:${Minutes}`);
        timeBlock.innerHTML = `${endTime} мин`

        change_20_5.classList.add('nowTd')
    } else if (17 === Hour && 45 <= Minutes || 18 === Hour && 30 > Minutes){
        remove()

        let endTime = 0
        if (Hour === 17) {
            endTime = 45 - (Minutes - 45)
        } else if(Hour === 18) {
            endTime = 30 - (Minutes - 0)
        }
        console.log(`${Hour}:${Minutes}`);
        timeBlock.innerHTML = `${endTime} мин`

        lesson_26_1.classList.add('nowTd')
    } else if (18 === Hour && 30 <= Minutes && 35 > Minutes){
        remove()

        let endTime = 0
        if (Hour === 18) {
            endTime = 5 - (Minutes - 30)
        }
        console.log(`${Hour}:${Minutes}`);
        timeBlock.innerHTML = `${endTime} мин`

        change_26_0.classList.add('nowTd')
    } else if (18 === Hour && 35 <= Minutes || 19 === Hour && 20 > Minutes){
        remove()

        let endTime = 0
        if (Hour === 18) {
            endTime = 45 - (Minutes - 35)
        } else if(Hour === 19) {
            endTime = 20 - (Minutes - 0)
        }
        console.log(`${Hour}:${Minutes}`);
        timeBlock.innerHTML = `${endTime} мин`

        lesson_26_2.classList.add('nowTd')
    } else if (19 <= Hour){
        remove()
        console.log(`${Hour}:${Minutes}`);
        timeBlock.innerHTML = `Домой`
    } else {
        remove()
        timeBlock.innerHTML = ``
    }
}

setInterval(() => {
    raspisanie()
}, 1000);

raspisanie()

