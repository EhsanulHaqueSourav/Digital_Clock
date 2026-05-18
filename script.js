function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; 
    const hoursString = String(hours).padStart(2, '0');

    const timeString = `${hoursString}:${minutes}:${seconds} ${ampm}`;
    const dateString = now.toLocaleDateString(undefined, { year : 'numeric', month : 'long', day : 'numeric' });

    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

setInterval(updateClock, 1000);
updateClock();  
