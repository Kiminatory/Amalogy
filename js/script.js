const menu = document.querySelector('.main__menu')
const back = document.querySelector('#back')

const chartAccounts = document.querySelector('#chart_of_accounts')
const couplesSchedule = document.querySelector('#couples_schedule')
const callSchedule = document.querySelector('#call_schedule')
const name = document.querySelector('#name')
const notes = document.querySelector('#notes')
const link = document.querySelector('#link')

function hidden(test) {
    test.classList.add('hidden')
}

function visible(test) {
    test.classList.remove('hidden')
}

back.addEventListener('click', () => visible(menu));

chartAccounts.addEventListener('click', () => hidden(menu));
couplesSchedule.addEventListener('click', () => hidden(menu));
callSchedule.addEventListener('click', () => hidden(menu));
name.addEventListener('click', () => hidden(menu));
notes.addEventListener('click', () => hidden(menu));
link.addEventListener('click', () => hidden(menu));
