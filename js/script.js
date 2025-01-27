function hitungBMI() {
    //mengambil value yang ada di html dan masukkan ke variable js
    const tinggiBadan = parseFloat(document.getElementById('tinggiBadan').value);
    const beratBadan = parseFloat(document.getElementById('beratBadan').value);

    //proteksi agar user mengisi nilai dengan benar
    if (isNaN(beratBadan) || isNaN(tinggiBadan) || beratBadan <= 0 || tinggiBadan <= 0) {
        document.getElementById('hasil').innerText = "Harap masukkan nilai yang valid.";
        return;
    }

    
    //rumus untuk kalkulator bmi
    const bmi = beratBadan / (tinggiBadan * tinggiBadan);
    let category = "";

    //menggunakan ifStatement agar bisa mengkategorikan hasil yang akan diperoleh
    if (bmi < 18.5) {
        category = "Kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal (Ideal)";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Kelebihan berat badan";
    } else {
        category = "Kegemukan(Obesitas)";
    }

    //memanggil id hasil untuk menampilkan hasil yang diperoleh dari perhitungan
    document.getElementById('hasil').innerHTML = `
        <p>BMI Anda: <strong>${bmi.toFixed(2)}</strong></p>
        <p>Status: <strong>${category}</strong></p>
    `;
}
