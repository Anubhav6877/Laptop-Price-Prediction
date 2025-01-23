// dynamic.js
document.getElementById('laptopForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get user input values
    const brand = document.getElementById('brand').value;
    const processor = document.getElementById('processor').value;
    const ram = parseInt(document.getElementById('ram').value);
    const storage = parseInt(document.getElementById('storage').value);

    let basePrice = 0;

    // Calculate base price based on the brand
    if (brand === 'dell') {
        basePrice = 500;
    } else if (brand === 'hp') {
        basePrice = 550;
    } else if (brand === 'apple') {
        basePrice = 1000;
    } else if (brand === 'lenovo') {
        basePrice = 600;
    }

    // Adjust price based on processor
    if (processor === 'i7') {
        basePrice += 200;
    } else if (processor === 'm1') {
        basePrice += 300;
    }

    // Adjust price based on RAM size
    basePrice += (ram - 8) * 50;

    // Adjust price based on storage
    basePrice += (storage - 256) * 0.5; // $0.5 per GB above 256GB

    // Show the result
    const resultDiv = document.getElementById('result');
    const predictedPriceSpan = document.getElementById('predictedPrice');
    predictedPriceSpan.textContent = `$${basePrice.toFixed(2)}`;
    resultDiv.classList.remove('hidden');
});
