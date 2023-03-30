
const getBmiValue = () => {
    const weight = document.getElementById('Weight').value;
    let height = document.getElementById('Height').value;

    height = height * 12;
    height = height * 0.025;

    let newBMIValue = weight / Math.pow(height, 2);
    newBMIValue = Math.round(newBMIValue)
    document.getElementById('bmiValue').value = newBMIValue;

    let message = document.getElementById('message');

    if (newBMIValue < 18.5) {
        return message.innerText = "Under weight You need Healthy Food";
    } else if (newBMIValue >= 18.5 && newBMIValue <= 24.9) {
        return message.innerText = "Normal weight Well Done";
    } else if (newBMIValue >= 25 && newBMIValue <= 29.9) {
        return message.innerText = "Over weight You Need Diet";
    } else {
        return message.innerText = "Obese";
    }

}