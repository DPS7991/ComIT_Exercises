let currentHour = Number(prompt('What is the current hour?'));

if ((currentHour < 0) || (currentHour > 23)) {
    alert('Input is incorrect!');
} else if ((currentHour < 8) || (currentHour >= 18)) {
    alert('Hour is outside of the office hours');
} else if ((currentHour >= 0) || (currentHour < 18)) {
    alert('We are open!');
}