document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('toggle');

    toggleSwitch.addEventListener('change', function () {
        if (this.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
        console.log("logic.js is running");
    });
});

