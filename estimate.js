function estimateCost() {
    const weight = document.getElementById("weight").value;
    const dimensions = document.getElementById("dimensions").value;
    const destination = document.getElementById("destination").value;
    const costResult = document.getElementById("costResult");

    // Convert dimensions from string to numbers
    const dimensionsArray = dimensions.split('x').map(Number);

    // Validate inputs
    if (!weight || !dimensions || !destination || dimensionsArray.length !== 3 || dimensionsArray.some(isNaN) || dimensionsArray.some(dim => dim <= 0)) {
        costResult.innerHTML = "<p style='color: red;'>Please fill in all fields correctly.</p>";
        return;
    }

    const weightValue = parseFloat(weight);

    // Calculate volume and estimated cost
    const volume = dimensionsArray[0] * dimensionsArray[1] * dimensionsArray[2]; // L x W x H
    let estimatedCost = (weightValue * 0.5) + (volume * 0.01); // Simple formula for estimation

    // Display the results
    costResult.innerHTML = `<p>Estimated Shipping Cost: <strong>$${estimatedCost.toFixed(2)}</strong></p>
                            <p>Estimated Delivery Time: <strong>3-5 Days</strong></p>`;
}
