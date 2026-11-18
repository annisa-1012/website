let mahasiswa = {
    nama: "Khikmatul Annisa",
    semester: 3,
    jurusan: "Teknologi Informasi",
    tahunMasuk: 2025
};

document.querySelector("#label-semester").textContent =  
    "Semester " + mahasiswa.semester + " · " + mahasiswa.jurusan;

let hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

function buatSapaan(mhs, waktu, namaHari) {
    return "Selamat " + waktu + ", hari " + namaHari + ". Saya " + mhs.nama +    ", mahasiswa semester " + mhs.semester + " " + mhs.jurusan + ".";
}


let jam = new Date().getHours();
let waktu;

if (jam < 10) {
    waktu = "pagi";
} else if (jam < 15) {
    waktu = "siang";
} else if (jam < 18) {
    waktu = "sore";
} else {
    waktu = "malam";
}

let namaHariIni = hari[new Date().getDay()];
document.querySelector("#sapaan").textContent = buatSapaan(mahasiswa, waktu, namaHariIni);

let sisaSemester = 8 - mahasiswa.semester;
let tahunLulus = mahasiswa.tahunMasuk + 4;
document.querySelector("#info-tambahan").textContent = 
    "Perkiraan lulus tahun " + tahunLulus + " (" + sisaSemester + " semester lagi).";

let keahlianTambahan = [
    { nama: "Git & GitHub", level: "Menengah" },
    { nama: "Responsive Design", level: "Dasar" },
    { nama: "Debugging Dasar", level: "Dasar" }
];

keahlianTambahan.forEach(function (item) {
    let li = document.createElement("li");
    li.textContent = item.nama + " — " + item.level;
    document.querySelector("#keahlian-tambahan").appendChild(li);
});

let pengalaman = [
    { tahun: 2024, kegiatan: "Mengikuti pelatihan dasar pemrograman web" },
    { tahun: 2025, kegiatan: "Masuk kuliah S1 Teknologi Informasi UIN Salatiga" },
    { tahun: 2026, kegiatan: "Mulai mengerjakan proyek kelompok Pemrograman Website" }
];

let daftarPengalaman = document.querySelector("#daftar-pengalaman");
if (!daftarPengalaman) {
    daftarPengalaman = document.createElement("ul");
    daftarPengalaman.id = "daftar-pengalaman";
    document.querySelector("#tentang .bio-text").appendChild(daftarPengalaman);
}

pengalaman.forEach(function (item) {
    let li = document.createElement("li");
    li.textContent = item.tahun + " — " + item.kegiatan;
    daftarPengalaman.appendChild(li);
});

function evaluasiStudi(mhs) {
    let sisa = 8 - mhs.semester;
    let lulus = mhs.tahunMasuk + 4;

    if (sisa <= 2) {
        return "Sebentar lagi lulus! Tinggal " + sisa + " semester lagi, semangat " + mhs.nama + "!";
    } else {
        return mhs.nama + " masih semester " + mhs.semester + ", perkiraan lulus " + lulus + ".";
    }
}

document.querySelector("#btn-cek").addEventListener("click", function () {
    document.querySelector("#hasil-cek").textContent = evaluasiStudi(mahasiswa);
});


function validasiForm(event) {
    let namaInput = document.querySelector("#nama").value;
    if (namaInput === "") {
        event.preventDefault();
        document.querySelector("#hasil-form").textContent = "Nama wajib diisi sebelum pesan dikirim.";
    } else {
        document.querySelector("#hasil-form").textContent = "";
    }
}

document.querySelector("#form-kontak").addEventListener("submit", validasiForm);

function cekKesiapanUTS(mhs) {  
    return "Profil " + mhs.nama + " memiliki " + keahlianTambahan.length +    
    " keahlian tambahan dan " + pengalaman.length +    
    " pengalaman yang tercatat — siap direview menjelang UTS."; 
} 

document.querySelector("#status-uts").textContent = cekKesiapanUTS(mahasiswa);