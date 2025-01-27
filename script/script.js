function hitungBMI() {
    
    const tinggiBadan = parseFloat(document.getElementById('tinggiBadan').value);
    const beratBadan = parseFloat(document.getElementById('beratBadan').value);

    if (isNaN(beratBadan) || isNaN(tinggiBadan) || beratBadan <= 0 || tinggiBadan <= 0) {
        document.getElementById('hasil').innerText = "Harap masukkan nilai yang valid.";
        return;
    }

    

    const bmi = beratBadan / (tinggiBadan * tinggiBadan);
    let category = "";

    if (bmi < 18.5) {
        category = "Kurus (Underweight)";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal (Ideal)";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Gemuk (Overweight)";
    } else {
        category = "Obesitas";
    }

    document.getElementById('hasil').innerHTML = `
        <p>BMI Anda: <strong>${bmi.toFixed(2)}</strong></p>
        <p>Kategori: <strong>${category}</strong></p>
    `;
}
