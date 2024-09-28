function trackParcel() {
    const trackingNumber = document.getElementById("trackingNumber").value;
    const trackResult = document.getElementById("trackResult");

    // Dummy tracking logic (replace with actual tracking API if needed)
    if (trackingNumber.trim() === "") {
        trackResult.innerHTML = "<p style='color: red;'>Please enter a valid tracking number.</p>";
        return;
    }

    // Simulated response (you can replace this with an API call)
    const dummyData = {
        "12345": "In Transit",
        "67890": "Delivered",
        "54321": "Pending",
    };

    const status = dummyData[trackingNumber] || "Tracking number not found.";
    trackResult.innerHTML = `<p>Tracking Status: <strong>${status}</strong></p>`;
}
