function removeLastCharacter() {
    const display = document.getElementById("display");
    if (display.value.length > 0) {
        display.value = display.value.slice(0, -1);
    }
}