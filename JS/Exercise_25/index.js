let weekdayNumber = 7;

if (weekdayNumber == 1) {
    console.log('Today is Monday');
} else if (weekdayNumber == 2) {
    console.log('Today is Tuesday');
} else if (weekdayNumber == 3) {
    console.log('Today is Wednesday');
} else if (weekdayNumber == 4) {
    console.log('Today is Thursday');
} else if (weekdayNumber == 5) {
    console.log('Today is Friday');
} else if (weekdayNumber == 6) {
    console.log('Today is Saturday');
} else if (weekdayNumber == 7) {
    console.log('Today is Sunday');
}

switch (weekdayNumber) {
    case 1:
        let message = 'Today is Monday';
        break;

    case 2:
        let message = 'Today is Tuesday';
        break;

    case 3:
        let message = 'Today is Wednesday';
        break;
        
    case 4:
        let message = 'Today is Thursday';
        break;

    case 5:
        let message = 'Today is Friday';
        break;

    case 6:
        let message = 'Today is Saturday';
        break;

    case 7:
        let message = 'Today is Sunday';
        break;
    default:
        let message = 'Number not between 1-7';
        break;
}

console.log('message');