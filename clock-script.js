// Define timezones (UTC offsets)
const timezones = [
    { id: 'ny', name: 'America/New_York', offset: -5 },
    { id: 'london', name: 'Europe/London', offset: 0 },
    { id: 'paris', name: 'Europe/Paris', offset: 1 },
    { id: 'tokyo', name: 'Asia/Tokyo', offset: 9 },
    { id: 'sydney', name: 'Australia/Sydney', offset: 11 },
    { id: 'dubai', name: 'Asia/Dubai', offset: 4 },
    { id: 'la', name: 'America/Los_Angeles', offset: -8 },
    { id: 'singapore', name: 'Asia/Singapore', offset: 8 }
];

function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function updateClock(timezone) {
    // Get current UTC time
    const now = new Date();
    const utcTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
    
    // Create date in the target timezone
    const tzTime = new Date(utcTime.getTime() + timezone.offset * 3600000);
    
    // Update clock display
    const clockElement = document.getElementById(`clock-${timezone.id}`);
    const dateElement = document.getElementById(`date-${timezone.id}`);
    
    if (clockElement) {
        clockElement.textContent = formatTime(tzTime);
    }
    if (dateElement) {
        dateElement.textContent = formatDate(tzTime);
    }
}

function updateAllClocks() {
    timezones.forEach(timezone => {
        updateClock(timezone);
    });
}

// Update clocks every second
setInterval(updateAllClocks, 1000);

// Initial update
updateAllClocks();