const form = document.getElementById('billingForm');
const resultDiv = document.getElementById('result');

const calculateBill = (itemName, quantity = 1, price = 0) => {
    const totalCost = quantity * price;
    return `⁠You ordered ${quantity} ${itemName}(s) at ₹${price} each. Total: ₹${totalCost}.`
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const itemName = document.getElementById('itemName').value;
    let quantity = parseInt(document.getElementById('quantity').value);
    let price = parseFloat(document.getElementById('price').value);

    if (isNaN(quantity) || quantity < 1) quantity = 1;
    if (isNaN(price) || price < 0) price = 0;

    const result = calculateBill(itemName, quantity, price);
    resultDiv.innerHTML = result;
});