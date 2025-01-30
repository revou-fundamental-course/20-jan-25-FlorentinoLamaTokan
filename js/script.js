function hitungBMI() {
    //mengambil value yang ada di html dan masukkan ke variable js
    const tinggiBadan = parseFloat(document.getElementById('tinggiBadan').value);
    const beratBadan = parseFloat(document.getElementById('beratBadan').value);

    //proteksi agar user mengisi nilai dengan benar
    if (isNaN(beratBadan) || isNaN(tinggiBadan) || beratBadan <= 0 || tinggiBadan <= 0) {
        alert("Harap masukkan nilai yang valid!");
        return;
    }

    
    //rumus untuk kalkulator bmi
    const bmi = beratBadan / (tinggiBadan * tinggiBadan);
    let category = "";
    let tips = "";

    //menggunakan ifStatement agar bisa mengkategorikan hasil yang akan diperoleh
    if (bmi < 18.5) {
        category = "Kekurangan berat badan";
        tips = '<p>1. Konsumsi Kalori Lebih banyak<p/><br><p>2. Pilih Makanan Bernutrisi Tinggi<p/><br><p>3. Makan Lebih Sering<p/><br>';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal (Ideal)";
        tips = '<p>1. Atur Pola Makan dengan Gizi Seimbang<p/><br><p>2. Makan dalam Porsi Cukup & Teratur<p/><br><p>3. Berolahraga minimal seminggu 3 kali<p/><br>';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Kelebihan berat badan";
        tips = '<p>1. Pilih Makanan Bergizi & Seimbang<p/><br><p>2. Makan dalam Porsi yang Tepat<p/><br><p>3. Rutin Berolahraga<p/><br>';
    } else {
        category = "Kegemukan(Obesitas)";
        tips = '<p>1. Pilih Makanan Bergizi & Seimbang<p/><br><p>2. Makan dalam Porsi yang Tepat<p/><br><p>3. Rutin Berolahraga<p/><br>';
    }


    //memanggil id hasil untuk menampilkan hasil yang diperoleh dari perhitungan
    document.getElementById('hasil').innerHTML = `
        <p>BMI Anda: <strong>${bmi.toFixed(2)}</strong></p>
        <p>Status: <strong>${category}</strong></p>
        
    `;

    document.getElementById('tips').innerHTML = `
        <p>Tips: <strong>${tips}</strong></p>
        
    `;
}
