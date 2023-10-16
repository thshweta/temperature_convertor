document.getElementById("convert").addEventListener("click", function() {
    // Get input value in Celsius
    const celsius = parseFloat(document.getElementById("celsius").value);

    // Check if the input is a valid number
    if (!isNaN(celsius)) {
        // Calculate Fahrenheit and Kelvin
        const fahrenheit = (celsius * 9/5) + 32;
        const kelvin = celsius + 273.15;

        // Update the output fields
        document.getElementById("fahrenheit").textContent = fahrenheit.toFixed(2);
        document.getElementById("kelvin").textContent = kelvin.toFixed(2);
    } else {
        alert("Please enter a valid temperature in Celsius.");
    }
});
