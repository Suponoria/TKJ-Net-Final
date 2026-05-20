// =========================
// FILE : script.js
// =========================


// Fungsi untuk menghitung total biaya saat tombol "Hitung Total Harga" diklik
function hitungTotal() {

    // Ambil nilai paket dari dropdown lalu ubah dari teks ke angka
    let hargaPaket =
    parseInt(
        document.getElementById("paketInternet").value
    ); /* parseInt = ubah string jadi number */

    // Biaya pemasangan tetap
    let biayaInstalasi = 150000; /* angka biaya pemasangan */

    // Total biaya adalah jumlah harga paket + biaya pemasangan
    let total = hargaPaket + biayaInstalasi; /* menghitung total */

    // Tampilkan total biaya di halaman
    document.getElementById("totalBiaya").innerHTML =
    "Total Biaya: Rp " + formatRupiah(total); /* innerHTML ganti isi HTML */
}

// Fungsi pembantu untuk merubah angka menjadi format mata uang Indonesia
function formatRupiah(angka) {
    return angka.toLocaleString('id-ID'); /* format angka sesuai lokal Indonesia */
}


// Pasang event listener pada form agar submit tidak reload halaman
document.getElementById("formPemesanan")

.addEventListener("submit", function(event) {

    // Hentikan form agar tidak refresh otomatis
    event.preventDefault(); /* cegah refresh halaman */

    // Ambil nilai nama dan alamat dari input form
    let nama =
    document.getElementById("nama").value; /* ambil teks input nama */
    let alamat =
    document.getElementById("alamat").value; /* ambil teks input alamat */

    // Ambil teks paket yang dipilih dari dropdown
    let paket =
    document.getElementById("paketInternet")
    .options[
        document.getElementById("paketInternet")
        .selectedIndex
    ].text; /* teks opsi yang dipilih */

    // Jika nama atau alamat kosong, tampilkan peringatan
    if (nama === "" || alamat === "") {
        alert(
        "Mohon lengkapi data diri dan alamat pemasangan!"
        ); /* alert memperlihatkan pesan peringatan */
    }
    // Jika data lengkap, tampilkan pesan sukses dan reset form
    else {
        alert(
        "Terima kasih, " + nama +
        ". Pesanan layanan " + paket +
        " Anda sedang kami proses."
        ); /* alert memperlihatkan pesan sukses */

        document.getElementById("formPemesanan")
        .reset(); /* reset = kosongkan form */

        document.getElementById("totalBiaya")
        .innerHTML =
        "Total Biaya: Rp 0"; /* reset tampilan total biaya */
    }

});
