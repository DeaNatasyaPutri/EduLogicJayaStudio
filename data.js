/* ==========================================================================
   EduLogic Java Studio — Complete Curriculum Dataset (data.js)
   Berisi Pembahasan Materi Mendalam, Implementasi Java, dan Contoh Terbahas
   di Setiap Poin Sub-Bab (A, B, C, dst.) untuk Bab I, II, III, dan IV.
   ========================================================================== */

const CURRICULUM_DATA = [
  /* ========================================================================
     BAB I. LOGIKA DAN ANALITIKA (Sub-Bab A s/d H)
     ======================================================================== */
  {
    id: "bab-1",
    roman: "I",
    title: "Logika dan Analitika",
    description:
      "Materi ini menguji kemampuan peserta dalam memahami kondisi, menarik kesimpulan, dan menyelesaikan masalah secara logis serta implementasinya dalam pemrograman Java.",
    subtopics: [
      {
        id: "1-a",
        code: "A",
        title: "Logika Dasar",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>🧠 1. Pembahasan Materi: Konsep Logika Dasar</h3>
              <p><strong>Logika dasar</strong> adalah fondasi berpikir sistematis untuk menentukan apakah suatu argumen atau alur instruksi komputer bersifat <strong>sah (valid)</strong> berdasarkan fakta (premis) yang tersedia.</p>
              <ul>
                <li><strong>Premis (Fakta Awal):</strong> Pernyataan yang diketahui benar sebagai titik tolak penalaran (dalam Java berupa nilai awal variabel atau parameter input).</li>
                <li><strong>Inferensi (Proses Penalaran):</strong> Aturan menghubungkan premis satu dengan lainnya tanpa menambahkan asumsi di luar fakta.</li>
                <li><strong>Konklusi (Kesimpulan):</strong> Hasil akhir yang pasti bernilai benar apabila seluruh premisnya benar.</li>
              </ul>
            </div>
            <div class="info-card">
              <h3>☕ 2. Penerapan Logika Dasar pada Program Java</h3>
              <p>Dalam bahasa pemrograman <strong>Java</strong>, komputer tidak menebak-nebak, melainkan mengeksekusi instruksi secara ketat mengikuti logika biner (<code>true</code> atau <code>false</code>):</p>
              <ul>
                <li>Setiap keputusan di Java dievaluasi menggunakan tipe data primitif <code>boolean</code>.</li>
                <li>Urutan logis instruksi dari baris atas ke bawah menentukan perubahan status variabel di memori.</li>
              </ul>
            </div>
          </div>
          <div class="info-card">
            <h3>📖 3. Contoh Pembahasan Kasus &amp; Kode Java</h3>
            <p><strong>Kasus:</strong> Seorang pendaftar dinyatakan <em>Lolos Administrasi</em> apabila usianya minimal 18 tahun dan memiliki kartu identitas aktif.</p>
            <div class="code-snippet-box">
              <div class="code-box-header"><span class="code-lang-tag">JAVA • Pembahasan Logika Dasar</span></div>
              <pre class="code-pre" data-highlight="java">public class PembahasanLogikaDasar {
    public static void main(String[] args) {
        int usia = 20;
        boolean punyaKTP = true;

        // Premis 1: usia >= 18 (20 >= 18 -> true)
        // Premis 2: punyaKTP (true)
        boolean lolos = (usia >= 18) && punyaKTP;
        System.out.println("Lolos Administrasi: " + lolos); // Output: true
    }
}</pre>
            </div>
          </div>
        `
      },
      {
        id: "1-b",
        code: "B",
        title: "Pernyataan Benar dan Salah",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>⚖️ 1. Pembahasan Materi: Proposisi vs Kalimat Terbuka</h3>
              <p><strong>Pernyataan (Proposisi)</strong> adalah kalimat deklaratif yang dapat ditentukan nilai kebenarannya secara tegas: <strong>Benar (<code>true</code>)</strong> atau <strong>Salah (<code>false</code>)</strong>, namun tidak keduanya sekaligus.</p>
              <ul>
                <li><strong>Pernyataan Benar:</strong> "Hasil dari <code>15 % 4</code> di Java adalah <code>3</code>." (Bernilai <code>true</code>).</li>
                <li><strong>Pernyataan Salah:</strong> "Tipe data <code>int</code> di Java dapat menyimpan angka desimal <code>3.14</code>." (Bernilai <code>false</code>).</li>
                <li><strong>Bukan Pernyataan:</strong> Kalimat perintah atau tanya seperti <em>"Masukkan nilai x!"</em>.</li>
                <li><strong>Kalimat Terbuka:</strong> Kalimat yang memuat variabel (misal <code>x * 3 == 12</code>) yang baru menjadi proposisi setelah variabel <code>x</code> diberi nilai.</li>
              </ul>
            </div>
            <div class="info-card">
              <h3>☕ 2. Evaluasi Nilai Kebenaran di Java</h3>
              <p>Di Java, ekspresi perbandingan seperti <code>==</code>, <code>!=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, dan <code>&lt;=</code> secara otomatis mengubah kalimat terbuka menjadi nilai <code>boolean</code> (<code>true</code>/<code>false</code>).</p>
              <div class="code-snippet-box">
                <div class="code-box-header"><span class="code-lang-tag">JAVA • Evaluasi Pernyataan</span></div>
                <pre class="code-pre" data-highlight="java">int x = 4;
boolean p1 = (x * 3 == 12); // true (karena 4 * 3 adalah 12)
boolean p2 = (x > 10);      // false (karena 4 tidak lebih dari 10)
System.out.println(p1 + " dan " + p2); // Output: true dan false</pre>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "1-c",
        code: "C",
        title: "AND, OR, NOT",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>🔗 1. Pembahasan Materi: Tiga Operator Logika Fundamental</h3>
              <ul>
                <li><strong>Konjungsi (AND / <code>&amp;&amp;</code>):</strong> Menghasilkan nilai <strong><code>true</code></strong> HANYA JIKA kedua pernyataan bernilai <code>true</code>. Jika salah satu saja <code>false</code>, hasilnya pasti <code>false</code>.</li>
                <li><strong>Disjungsi (OR / <code>||</code>):</strong> Menghasilkan nilai <strong><code>true</code></strong> JIKA minimal salah satu pernyataan bernilai <code>true</code>. Hanya bernilai <code>false</code> jika keduanya <code>false</code>.</li>
                <li><strong>Negasi (NOT / <code>!</code>):</strong> Membalik nilai kebenaran: <code>!true</code> menjadi <code>false</code>, dan <code>!false</code> menjadi <code>true</code>.</li>
              </ul>
              <p><strong>Urutan Prioritas Evaluasi di Java:</strong> Operator <code>!</code> (NOT) dievaluasi paling dulu, kemudian <code>&amp;&amp;</code> (AND), dan terakhir <code>||</code> (OR), kecuali jika dikelompokkan dengan tanda kurung <code>( )</code>.</p>
            </div>
            <div class="info-card">
              <h3>📊 2. Tabel Kebenaran Lengkap &amp; Kode Java</h3>
              <div class="data-table-wrap">
                <table class="logic-table">
                  <thead>
                    <tr><th>P</th><th>Q</th><th>!P</th><th>P &amp;&amp; Q</th><th>P || Q</th></tr>
                  </thead>
                  <tbody>
                    <tr><td class="val-true">true</td><td class="val-true">true</td><td class="val-false">false</td><td class="val-true">true</td><td class="val-true">true</td></tr>
                    <tr><td class="val-true">true</td><td class="val-false">false</td><td class="val-false">false</td><td class="val-false">false</td><td class="val-true">true</td></tr>
                    <tr><td class="val-false">false</td><td class="val-true">true</td><td class="val-true">true</td><td class="val-false">false</td><td class="val-true">true</td></tr>
                    <tr><td class="val-false">false</td><td class="val-false">false</td><td class="val-true">true</td><td class="val-false">false</td><td class="val-false">false</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="code-snippet-box">
            <div class="code-box-header"><span class="code-lang-tag">JAVA • Prioritas !, &amp;&amp;, dan ||</span></div>
            <pre class="code-pre" data-highlight="java">boolean a = true, b = false, c = false;
// Tanpa kurung: && dikerjakan sebelum ||
boolean hasil1 = a || b && c;   // true || (false && false) -> true || false = true
// Dengan kurung:
boolean hasil2 = (a || b) && c; // (true || false) && false -> true && false = false
System.out.println(hasil1 + ", " + hasil2); // Output: true, false</pre>
          </div>
        `
      },
      {
        id: "1-d",
        code: "D",
        title: "Implikasi",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>➡️ 1. Pembahasan Materi: Implikasi (Jika P maka Q)</h3>
              <p><strong>Implikasi (<code>P → Q</code>)</strong> menyatakan hubungan janji atau syarat sebab-akibat antara anteseden/hipotesis (<code>P</code>) dan konsekuen/kesimpulan (<code>Q</code>).</p>
              <ul>
                <li><strong>Kapan Implikasi Bernilai SALAH?</strong> Hanya pada satu keadaan: ketika sebab <code>P</code> bernilai <strong><code>true</code></strong> tetapi akibat <code>Q</code> bernilai <strong><code>false</code></strong> (janji dilanggar).</li>
                <li>Jika <code>P</code> bernilai <code>false</code>, maka apa pun nilai <code>Q</code>, implikasi <code>P → Q</code> tetap dianggap <strong><code>true</code></strong> (<em>vacuously true</em>).</li>
                <li><strong>Bentuk Ekuivalen Penting:</strong>
                  <br>• Bentuk Disjungsi (dipakai di Java): <code>P → Q  ≡  !P || Q</code>
                  <br>• Bentuk Kontraposisi: <code>P → Q  ≡  !Q → !P</code>
                  <br>• Ingkaran/Negasi Implikasi: <code>!(P → Q)  ≡  P &amp;&amp; !Q</code>
                </li>
              </ul>
            </div>
            <div class="info-card">
              <h3>☕ 2. Implementasi Implikasi di Java</h3>
              <p>Karena Java tidak memiliki operator khusus <code>-&gt;</code> untuk boolean, rumus <code>(!P || Q)</code> digunakan untuk mengevaluasi kebenaran implikasi <code>P → Q</code>:</p>
              <div class="code-snippet-box">
                <div class="code-box-header"><span class="code-lang-tag">JAVA • Evaluasi Implikasi (!P || Q)</span></div>
                <pre class="code-pre" data-highlight="java">boolean hujan = true;        // P
boolean bawaPayung = false;  // Q
// Implikasi: Jika hujan maka bawa payung (!P || Q)
boolean tepatiJanji = !hujan || bawaPayung;
System.out.println(tepatiJanji); // Output: false (karena P=true tapi Q=false)</pre>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "1-e",
        code: "E",
        title: "Jika dan Hanya Jika (Biimplikasi / Iff)",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>↔️ 1. Pembahasan Materi: Biimplikasi (P ↔ Q)</h3>
              <p><strong>Biimplikasi ("Jika dan hanya jika" / <em>If and only if</em>)</strong> adalah penggabungan dua implikasi bolak-balik: <code>(P → Q) ∧ (Q → P)</code>.</p>
              <ul>
                <li><strong>Aturan Nilai Kebenaran:</strong> Biimplikasi <code>P ↔ Q</code> bernilai <strong><code>true</code></strong> apabila <code>P</code> dan <code>Q</code> memiliki <strong>nilai kebenaran yang kembar/sama</strong> (keduanya <code>true</code> atau keduanya <code>false</code>).</li>
                <li>Jika salah satu <code>true</code> dan satunya <code>false</code>, maka biimplikasi bernilai <strong><code>false</code></strong>.</li>
                <li><strong>Ingkaran Biimplikasi:</strong> <code>!(P ↔ Q) ≡ (P ↔ !Q)</code> atau operasi XOR (<code>P != Q</code> di Java).</li>
              </ul>
            </div>
            <div class="info-card">
              <h3>☕ 2. Representasi Biimplikasi di Java</h3>
              <p>Dalam kode program Java, biimplikasi antara dua ekspresi boolean <code>P</code> dan <code>Q</code> dievaluasi menggunakan operator kesamaan <code>(P == Q)</code>:</p>
              <div class="code-snippet-box">
                <div class="code-box-header"><span class="code-lang-tag">JAVA • Biimplikasi (P == Q)</span></div>
                <pre class="code-pre" data-highlight="java">int angka = 8;
boolean p = (angka % 2 == 0); // true (genap)
boolean q = (angka > 10);     // false (tidak > 10)
boolean biimplikasi = (p == q); // true == false -> false
System.out.println("Nilai P <-> Q: " + biimplikasi);</pre>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "1-f",
        code: "F",
        title: "Analisis Kondisi",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>🧩 1. Pembahasan Materi: Teknik Analisis Kondisi</h3>
              <p>Soal analisis kondisi menguji ketajaman membaca batasan (<em>constraints</em>) seperti posisi urutan, penjadwalan, seleksi anggota, maupun teka-teki jujur-bohong (interogasi saksi):</p>
              <ol>
                <li><strong>Catat Syarat Mutlak:</strong> Tulis syarat yang sudah pasti (misal: "Dua di antara mereka adalah pengacara" atau "M5 selalu di urutan pertama").</li>
                <li><strong>Bandingkan Klaim yang Saling Bertentangan:</strong> Jika terdapat kuota kebenaran (misal: "Hanya 1 pernyataan yang benar"), ujilah skenario pada kelompok pernyataan pertama untuk mengunci di mana letak 1 pernyataan yang benar tersebut.</li>
                <li><strong>Tarik Dampak ke Pernyataan Lain:</strong> Begitu kuota 1 pernyataan benar sudah terpakai, maka seluruh pernyataan sisanya otomatis bernilai <strong>Salah (<code>false</code>)</strong>, sehingga kebalikannya adalah fakta yang sebenarnya!</li>
              </ol>
            </div>
            <div class="info-card">
              <h3>🕵️ 2. Pembahasan Lengkap Kasus Pencurian Rumah Duduy</h3>
              <p><strong>Diketahui:</strong> Angga ($A_1$: pengacara, $A_2$: tidak terlibat), Bandi ($B_1$: bukan pengacara, $B_2$: tahu pencurinya), Cinta ($C_1$: pengacara, $C_2$: tidak tahu pencurinya). Hanya 1 pernyataan benar &amp; 2 orang adalah pengacara.</p>
              <ul>
                <li>Jika Angga &amp; Cinta pengacara: $A_1, B_1, C_1$ semuanya benar (3 benar → mustahil).</li>
                <li>Jika Angga &amp; Bandi pengacara: hanya $A_1$ benar (1 benar).</li>
                <li>Jika Bandi &amp; Cinta pengacara: hanya $C_1$ benar (1 benar).</li>
                <li>Artinya, 1 pernyataan benar pasti berada di antara $A_1$ atau $C_1$. Maka $A_2, B_2, C_2$ <strong>pasti SALAH</strong>. Karena $A_2$ ("Saya tidak terlibat") salah, maka <strong>Angga adalah pencurinya</strong>!</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "1-g",
        code: "G",
        title: "Induksi dan Deduksi",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>🔽 1. Pembahasan Materi: Penalaran Deduktif</h3>
              <p><strong>Deduksi</strong> menarik kesimpulan khusus yang pasti benar dari aturan umum yang telah terbukti:</p>
              <ul>
                <li><strong>Modus Ponens:</strong> Premis 1: <code>P → Q</code>, Premis 2: <code>P</code> benar. Kesimpulan: <strong><code>Q</code> benar</strong>.</li>
                <li><strong>Modus Tollens:</strong> Premis 1: <code>P → Q</code>, Premis 2: <code>¬Q</code> (Q salah). Kesimpulan: <strong><code>¬P</code> (P salah)</strong>.</li>
                <li><strong>Silogisme Hipotetis:</strong> Premis 1: <code>P → Q</code>, Premis 2: <code>Q → R</code>. Kesimpulan: <strong><code>P → R</code></strong>.</li>
                <li><strong>Silogisme Disjungtif:</strong> Premis 1: <code>P ∨ Q</code>, Premis 2: <code>¬P</code>. Kesimpulan: <strong><code>Q</code></strong>.</li>
              </ul>
            </div>
            <div class="info-card">
              <h3>🔼 2. Pembahasan Materi: Penalaran Induktif</h3>
              <p><strong>Induksi</strong> mengamati pola dari sejumlah kasus spesifik (misalnya hasil output untuk input $n = 1, 2, 3, 4$) lalu merumuskan formula umum untuk suku ke-$n$.</p>
              <div class="code-snippet-box">
                <div class="code-box-header"><span class="code-lang-tag">JAVA • Induksi Pola ke Rumus Method</span></div>
                <pre class="code-pre" data-highlight="java">// Observasi: n=1 -> 2, n=2 -> 6, n=3 -> 12, n=4 -> 20
// Pola: 1*2, 2*3, 3*4, 4*5 -> Rumus induktif: n * (n + 1)
static int rumusInduktif(int n) {
    return n * (n + 1);
}</pre>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "1-h",
        code: "H",
        title: "Problem Solving dan Penalaran Logis",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>🛠️ 1. Pembahasan Materi: Strategi Problem Solving</h3>
              <p>Untuk menyelesaikan soal penalaran logis kompleks maupun merancang algoritma Java:</p>
              <ol>
                <li><strong>Identifikasi Kuantor:</strong> Bedakan kuantor universal (<em>Semua / Setiap</em>) dan eksistensial (<em>Ada / Beberapa / Minimal satu</em>).</li>
                <li><strong>Ingkaran Kuantor:</strong>
                  <br>• Negasi dari <em>"Semua $x$ memenuhi $P$"</em> adalah <strong>"Ada minimal satu $x$ yang tidak memenuhi $P$"</strong>.
                  <br>• Negasi dari <em>"Ada $x$ yang memenuhi $P$"</em> adalah <strong>"Semua $x$ tidak memenuhi $P$"</strong>.
                </li>
                <li><strong>Metode Eliminasi &amp; Tabel Matriks:</strong> Gunakan tabel silang ($\checkmark$ / $\times$) untuk memetakan pasangan objek dan syaratnya.</li>
              </ol>
            </div>
            <div class="info-card">
              <h3>☕ 2. Penerapan Problem Solving di Java</h3>
              <div class="code-snippet-box">
                <div class="code-box-header"><span class="code-lang-tag">JAVA • Pengecekan Kuantor pada Array</span></div>
                <pre class="code-pre" data-highlight="java">int[] nilai = {80, 85, 90, 72, 88};
boolean semuaLulus = true;
for (int i = 0; i < nilai.length; i++) {
    if (nilai[i] < 75) { // Cukup 1 contoh penyangkal (72 < 75)
        semuaLulus = false;
        break;
    }
}
System.out.println("Semua lulus (>=75): " + semuaLulus); // false</pre>
              </div>
            </div>
          </div>
        `
      }
    ]
  },

  /* ========================================================================
     BAB II. ARITMATIKA DAN MATEMATIKA DASAR (Sub-Bab A s/d L)
     ======================================================================== */
  {
    id: "bab-2",
    roman: "II",
    title: "Aritmatika dan Matematika Dasar",
    description:
      "Materi ini menguji kemampuan menghitung sekaligus memahami pola dan hubungan antarbilangan serta penerapannya dalam komputasi program Java.",
    subtopics: [
      {
        id: "2-a",
        code: "A",
        title: "Operasi Dasar: Penjumlahan, Pengurangan, Perkalian, dan Pembagian",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>➕ 1. Pembahasan Materi: Empat Operasi Dasar &amp; Aturan Tanda</h3>
              <ul>
                <li><strong>Penjumlahan (<code>+</code>) &amp; Pengurangan (<code>-</code>):</strong>
                  <br>• Mengurangi dengan bilangan negatif sama dengan menjumlahkan: <code>a - (-b) = a + b</code> (Contoh: <code>12 - (-5) = 17</code>).
                </li>
                <li><strong>Perkalian (<code>*</code>) &amp; Pembagian (<code>/</code>):</strong>
                  <br>• Tanda sama menghasilkan positif: <code>(-) × (-) = (+)</code> dan <code>(-) ÷ (-) = (+)</code>.
                  <br>• Tanda berbeda menghasilkan negatif: <code>(+) × (-) = (-)</code>.
                </li>
                <li><strong>Sifat Distributif untuk Hitung Cepat:</strong> <code>a × (b + c) = (a × b) + (a × c)</code>. Misalnya <code>37 × 68 + 37 × 32 = 37 × (68 + 32) = 37 × 100 = 3700</code>.</li>
              </ul>
            </div>
            <div class="info-card">
              <h3>☕ 2. Operasi Dasar di Java (<code>int</code> vs <code>double</code>)</h3>
              <div class="code-snippet-box">
                <div class="code-box-header"><span class="code-lang-tag">JAVA • Operasi Aritmatika Dasar</span></div>
                <pre class="code-pre" data-highlight="java">int a = 12, b = -5;
int tambah = a - b;        // 12 - (-5) = 17
int kali = a * b;          // 12 * (-5) = -60
int bagiBulat = 19 / 4;    // 4 (desimal .75 dibuang pada int)
double bagiDesimal = 19.0 / 4.0; // 4.75
System.out.println(tambah + ", " + kali + ", " + bagiBulat + ", " + bagiDesimal);</pre>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "2-b",
        code: "B",
        title: "Operasi Bilangan",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>📐 1. Pembahasan Materi: Urutan Prioritas Operasi Bilangan</h3>
              <p>Dalam ekspresi campuran yang melibatkan banyak operator, urutan pengerjaan yang wajib dipatuhi (baik di matematika maupun di kompilator Java) adalah:</p>
              <ol>
                <li><strong>Tanda Kurung <code>( )</code>:</strong> Dikerjakan paling awal dari kurung paling dalam.</li>
                <li><strong>Pangkat &amp; Akar:</strong> Eksponen dievaluasi sebelum perkalian/pembagian.</li>
                <li><strong>Kali (<code>*</code>), Bagi (<code>/</code>), dan Modulo (<code>%</code>):</strong> Memiliki prioritas setara; wajib dikerjakan berurutan dari <strong>kiri ke kanan</strong>.</li>
                <li><strong>Tambah (<code>+</code>) dan Kurang (<code>-</code>):</strong> Prioritas paling akhir; dikerjakan dari <strong>kiri ke kanan</strong>.</li>
              </ol>
            </div>
            <div class="info-card">
              <h3>🧪 2. Contoh Pembahasan Langkah demi Langkah</h3>
              <p>Evaluasi ekspresi Java: <code>int x = 40 - 24 / 4 * 3 + (10 - 4) * 2;</code></p>
              <ul>
                <li>Langkah 1 (Kurung): <code>(10 - 4) = 6</code></li>
                <li>Langkah 2 (Bagi &amp; Kali dari kiri!): <code>24 / 4 = 6</code>, lalu <code>6 * 3 = 18</code> (hati-hati: jangan mengalikan <code>4 * 3</code> dulu!). Kemudian <code>6 * 2 = 12</code>.</li>
                <li>Langkah 3 (Kurang &amp; Tambah): <code>40 - 18 + 12 = 22 + 12 = 34</code>.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "2-c",
        code: "C",
        title: "Pecahan dan Persentase",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>🍰 1. Pembahasan Materi: Operasi Pecahan &amp; Persentase</h3>
              <ul>
                <li><strong>Penjumlahan &amp; Pengurangan Pecahan:</strong> Samakan penyebut dengan KPK: <code>a/b ± c/d = (ad ± bc) / bd</code>.</li>
                <li><strong>Perkalian &amp; Pembagian Pecahan:</strong> <code>(a/b) × (c/d) = (ac)/(bd)</code> dan <code>(a/b) ÷ (c/d) = (a/b) × (d/c)</code>.</li>
                <li><strong>Persentase:</strong> <code>p% = p / 100</code>.
                  <br>• <strong>Diskon Bertingkat (Ganda):</strong> Diskon 20% + 10% bukanlah 30%, melainkan bayar <code>80% × 90% = 72%</code> dari harga awal (total diskon efektif = <code>28%</code>).
                </li>
              </ul>
            </div>
            <div class="info-card">
              <h3>☕ 2. Perhitungan Persentase &amp; Pecahan di Java</h3>
              <div class="code-snippet-box">
                <div class="code-box-header"><span class="code-lang-tag">JAVA • Kalkulasi Diskon Bertingkat</span></div>
                <pre class="code-pre" data-highlight="java">double hargaAwal = 500000.0;
double setelahDiskon1 = hargaAwal * (1.0 - 0.20); // Diskon 20% -> 400000.0
double hargaAkhir = setelahDiskon1 * (1.0 - 0.10); // Diskon lagi 10% -> 360000.0
System.out.println("Harga Akhir: " + hargaAkhir);</pre>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "2-d",
        code: "D",
        title: "Pangkat dan Akar",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>🚀 1. Pembahasan Materi: Hukum Eksponen &amp; Bentuk Akar</h3>
              <ul>
                <li><strong>Perkalian &amp; Pembagian Basis Sama:</strong> <code>a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup></code> dan <code>a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m-n</sup></code>.</li>
                <li><strong>Pangkat Dipangkatkan:</strong> <code>(a<sup>m</sup>)<sup>n</sup> = a<sup>m·n</sup></code>.</li>
                <li><strong>Pangkat Nol &amp; Negatif:</strong> <code>a<sup>0</sup> = 1</code> (untuk <code>a ≠ 0</code>) dan <code>a<sup>-n</sup> = 1 / a<sup>n</sup></code>.</li>
                <li><strong>Sifat Bentuk Akar:</strong> <code>√(a × b) = √a × √b</code> dan <code>p√c ± q√c = (p ± q)√c</code>.</li>
              </ul>
            </div>
            <div class="info-card">
              <h3>☕ 2. Method <code>Math.pow()</code> dan <code>Math.sqrt()</code> di Java</h3>
              <div class="code-snippet-box">
                <div class="code-box-header"><span class="code-lang-tag">JAVA • Eksponen &amp; Akar</span></div>
                <pre class="code-pre" data-highlight="java">double pangkat = Math.pow(3, 4); // 3^4 = 81.0
double akar = Math.sqrt(196);    // akar kuadrat 196 = 14.0
int total = (int) (pangkat + akar);
System.out.println("Total: " + total); // Output: 95</pre>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "2-e",
        code: "E",
        title: "Sifat-Sifat Bilangan",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>🔢 1. Pembahasan Materi: Prima, Genap/Ganjil, FPB &amp; KPK</h3>
              <ul>
                <li><strong>Bilangan Prima:</strong> Bilangan asli &gt; 1 yang hanya habis dibagi 1 dan dirinya sendiri: <code>2, 3, 5, 7, 11, 13, 17, 19, 23, 29, ...</code> (Angka 1 bukan prima; angka 2 adalah satu-satunya prima genap).</li>
                <li><strong>Aturan Keterbagian Cepat:</strong>
                  <br>• Habis dibagi 3: jumlah digit-digitnya habis dibagi 3.
                  <br>• Habis dibagi 4: 2 digit terakhir habis dibagi 4.
                  <br>• Habis dibagi 9: jumlah digit-digitnya habis dibagi 9.
                </li>
                <li><strong>FPB vs KPK:</strong> FPB mencari pembagi bersama terbesar (untuk membagi paket sama rata); KPK mencari kelipatan bersama terkecil (untuk jadwal bertemu kembali).</li>
              </ul>
            </div>
            <div class="info-card">
              <h3>☕ 2. Cek Bilangan Prima &amp; Genap/Ganjil di Java</h3>
              <div class="code-snippet-box">
                <div class="code-box-header"><span class="code-lang-tag">JAVA • Algoritma Cek Bilangan Prima</span></div>
                <pre class="code-pre" data-highlight="java">int n = 17;
boolean isPrima = (n > 1);
for (int i = 2; i * i <= n; i++) {
    if (n % i == 0) {
        isPrima = false;
        break;
    }
}
System.out.println(n + " adalah prima: " + isPrima); // true</pre>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "2-f",
        code: "F",
        title: "Barisan dan Deret Sederhana",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>📈 1. Pembahasan Materi: Barisan Aritmatika &amp; Geometri</h3>
              <ul>
                <li><strong>Barisan Aritmatika (Selisih/Beda tetap <code>b</code>):</strong>
                  <br>• Rumus suku ke-$n$: <code>U<sub>n</sub> = a + (n - 1)b</code>
                  <br>• Rumus jumlah $n$ suku pertama: <code>S<sub>n</sub> = (n / 2) × (2a + (n - 1)b) = (n / 2) × (a + U<sub>n</sub>)</code>
                </li>
                <li><strong>Barisan Geometri (Rasio pengali tetap <code>r</code>):</strong>
                  <br>• Rumus suku ke-$n$: <code>U<sub>n</sub> = a × r<sup>n-1</sup></code>
                  <br>• Rumus jumlah $n$ suku pertama ($r &gt; 1$): <code>S<sub>n</sub> = a(r<sup>n</sup> - 1) / (r - 1)</code>
                </li>
              </ul>
            </div>
            <div class="info-card">
              <h3>☕ 2. Menghitung Deret dengan Perulangan Java</h3>
              <div class="code-snippet-box">
                <div class="code-box-header"><span class="code-lang-tag">JAVA • Akumulasi Deret Aritmatika</span></div>
                <pre class="code-pre" data-highlight="java">int a = 4, b = 3, n = 5;
int sn = 0;
for (int i = 0; i < n; i++) {
    int suku = a + (i * b); // 4, 7, 10, 13, 16
    sn = sn + suku;
}
System.out.println("Jumlah 5 suku pertama: " + sn); // Output: 50</pre>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "2-g",
        code: "G",
        title: "Pola Bilangan",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>🔍 1. Pembahasan Materi: Ragam Pola Bilangan</h3>
              <ul>
                <li><strong>Pola Selisih Bertingkat (Orde Dua):</strong> Contoh <code>2, 6, 12, 20, 30, 42</code> memiliki selisih tingkat pertama <code>+4, +6, +8, +10, +12</code> dan selisih tingkat kedua tetap <code>+2</code>.</li>
                <li><strong>Pola Fibonacci:</strong> Setiap suku merupakan jumlah dari 2 suku di depannya: <code>1, 1, 2, 3, 5, 8, 13, 21, 34, ...</code></li>
                <li><strong>Pola Bilangan Kuadrat &amp; Kubik:</strong>
                  <br>• Kuadrat ($n^2$): <code>1, 4, 9, 16, 25, 36, 49, 64, 81, 100</code>
                  <br>• Kubik ($n^3$): <code>1, 8, 27, 64, 125, 216</code>
                </li>
                <li><strong>Pola Larik Ganda (Berselang-seling):</strong> Suku ganjil ($U_1, U_3, U_5$) dan suku genap ($U_2, U_4, U_6$) berjalan mengikuti dua aturan berbeda.</li>
              </ul>
            </div>
            <div class="info-card">
              <h3>☕ 2. Implementasi Pola Bilangan di Java</h3>
              <div class="code-snippet-box">
                <div class="code-box-header"><span class="code-lang-tag">JAVA • Pembentukan Pola Bertingkat</span></div>
                <pre class="code-pre" data-highlight="java">int nilai = 2;
int selisih = 4;
for (int i = 1; i <= 5; i++) {
    System.out.print(nilai + " "); // Mencetak: 2 6 12 20 30
    nilai = nilai + selisih;
    selisih = selisih + 2;
}</pre>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "2-h",
        code: "H",
        title: "Penyusunan Model Matematika",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>📝 1. Pembahasan Materi: Transformasi Masalah ke Aljabar</h3>
              <p>Menyusun model matematika berarti mengubah narasi cerita menjadi sistem persamaan menggunakan variabel ($x, y, z$):</p>
              <ol>
                <li><strong>Tetapkan Variabel:</strong> Misalkan besaran yang belum diketahui sebagai $x$ dan $y$.</li>
                <li><strong>Terjemahkan Kata Kunci:</strong>
                  <br>• <em>"Selisih A dan B adalah 8"</em> → <code>A - B = 8</code>
                  <br>• <em>"Tiga kali bilangan pertama ditambah dua kali bilangan kedua adalah 34"</em> → <code>3x + 2y = 34</code>
                  <br>• <em>"Tiga bilangan ganjil berurutan"</em> → <code>x, (x + 2), (x + 4)</code>
                </li>
                <li><strong>Selesaikan dengan Eliminasi &amp; Substitusi.</strong></li>
              </ol>
            </div>
            <div class="info-card">
              <h3>🧪 2. Contoh Pembahasan SPLDV</h3>
              <p><strong>Soal:</strong> Harga 2 lisensi modul A dan 3 modul B adalah Rp190.000, sedangkan 1 modul A dan 2 modul B adalah Rp115.000. Berapa harga 1 modul A?</p>
              <ul>
                <li>Persamaan 1: <code>2A + 3B = 190.000</code></li>
                <li>Persamaan 2 (kali 2): <code>2A + 4B = 230.000</code></li>
                <li>Kurangkan: <code>B = 40.000</code>, maka <code>A = 115.000 - 2(40.000) = Rp35.000</code>.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "2-i",
        code: "I",
        title: "Himpunan",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>⭕ 1. Pembahasan Materi: Teori Himpunan &amp; Diagram Venn</h3>
              <ul>
                <li><strong>Irisan (<code>A ∩ B</code>):</strong> Anggota yang dimiliki bersama oleh himpunan A <em>dan</em> B.</li>
                <li><strong>Gabungan (<code>A ∪ B</code>):</strong> Seluruh anggota yang ada di A <em>atau</em> di B: <code>n(A ∪ B) = n(A) + n(B) - n(A ∩ B)</code>.</li>
                <li><strong>Selisih (<code>A - B</code>):</strong> Anggota yang <em>hanya</em> ada di A (tidak termasuk irisan): <code>n(A saja) = n(A) - n(A ∩ B)</code>.</li>
                <li><strong>Rumus Semesta:</strong> <code>n(S) = n(A) + n(B) - n(A ∩ B) + n(Tidak Keduanya)</code>.</li>
                <li><strong>Banyak Himpunan Bagian (Subset):</strong> Jika suatu himpunan memiliki $k$ anggota, maka banyak himpunan bagiannya adalah <code>2<sup>k</sup></code>.</li>
              </ul>
            </div>
            <div class="info-card">
              <h3>☕ 2. Himpunan &amp; Pencarian Irisan Array di Java</h3>
              <div class="code-snippet-box">
                <div class="code-box-header"><span class="code-lang-tag">JAVA • Mencari Irisan Dua Array (A ∩ B)</span></div>
                <pre class="code-pre" data-highlight="java">int[] A = {2, 4, 6, 8};
int[] B = {3, 4, 5, 8, 9};
int irisanCount = 0;
for (int i = 0; i < A.length; i++) {
    for (int j = 0; j < B.length; j++) {
        if (A[i] == B[j]) irisanCount++; // Menemukan 4 dan 8
    }
}
System.out.println("Jumlah anggota A irisan B: " + irisanCount); // 2</pre>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "2-j",
        code: "J",
        title: "Matematika Diskrit Dasar",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>🎲 1. Pembahasan Materi: Kombinatorika &amp; Aritmatika Modulo</h3>
              <ul>
                <li><strong>Kaidah Perkalian:</strong> Jika kejadian 1 dapat dilakukan dengan $m$ cara dan kejadian 2 dengan $n$ cara, maka keduanya dapat dilakukan bersama dalam <code>m × n</code> cara.</li>
                <li><strong>Permutasi (Urutan Diperhatikan, AB ≠ BA):</strong>
                  <br><code>P(n, r) = n! / (n - r)!</code> — digunakan untuk menyusun jabatan (Ketua, Wakil), PIN/Password, atau urutan duduk.
                </li>
                <li><strong>Kombinasi (Urutan Diabaikan, AB = BA):</strong>
                  <br><code>C(n, r) = n! / (r! × (n - r)!)</code> — digunakan untuk memilih anggota tim, memilih soal, atau jabat tangan.
                </li>
                <li><strong>Modulo (<code>a mod b</code> atau <code>a % b</code> di Java):</strong> Sisa pembagian bilangan bulat $a$ oleh $b$.</li>
              </ul>
            </div>
            <div class="info-card">
              <h3>☕ 2. Faktorial &amp; Modulo dalam Kode Java</h3>
              <div class="code-snippet-box">
                <div class="code-box-header"><span class="code-lang-tag">JAVA • Menghitung n! (Faktorial)</span></div>
                <pre class="code-pre" data-highlight="java">int n = 5;
int faktorial = 1;
for (int i = 1; i <= n; i++) {
    faktorial = faktorial * i; // 1 * 2 * 3 * 4 * 5 = 120
}
System.out.println("5! = " + faktorial); // Output: 120</pre>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "2-k",
        code: "K",
        title: "Aljabar Logika Sederhana",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>⚡ 1. Pembahasan Materi: Hukum Aljabar Boolean</h3>
              <ul>
                <li><strong>Hukum De Morgan:</strong>
                  <br>• <code>!(P &amp;&amp; Q) ≡ (!P) || (!Q)</code>
                  <br>• <code>!(P || Q) ≡ (!P) &amp;&amp; (!Q)</code>
                </li>
                <li><strong>Hukum Absorpsi &amp; Komplemen:</strong>
                  <br>• <code>P &amp;&amp; (!P) ≡ false</code> dan <code>P || (!P) ≡ true</code>
                  <br>• <code>P || (P &amp;&amp; Q) ≡ P</code>
                </li>
              </ul>
            </div>
            <div class="info-card">
              <h3>🔎 2. Pembahasan Soal Wajib Aljabar Logika</h3>
              <p>Agar <code>((P and Q) or (notR and S) and (notT or (R and Q)))</code> bernilai <strong>True</strong>:</p>
              <ul>
                <li>Jika <code>P = False, Q = True</code>, maka <code>(P and Q) = False</code>.</li>
                <li>Maka bagian kanan wajib bernilai <strong>True</strong>: <code>(notR and S) = True</code> mengharuskan <strong><code>R = False</code></strong> dan <strong><code>S = True</code></strong>.</li>
                <li>Selanjutnya <code>(notT or (R and Q))</code> menjadi <code>(notT or False)</code>. Agar bernilai <strong>True</strong>, maka <code>notT = True</code> sehingga <strong><code>T = False</code></strong>!</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "2-l",
        code: "L",
        title: "Perhitungan dan Analisis Masalah",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>🚗 1. Pembahasan Materi: Kecepatan, Pekerjaan &amp; Perbandingan</h3>
              <ul>
                <li><strong>Kecepatan, Jarak, Waktu:</strong> <code>s = v × t</code>, <code>v = s / t</code>, <code>t = s / v</code>.
                  <br>• <em>Waktu Berpapasan (berangkat bersamaan):</em> <code>t = Jarak Total / (v<sub>1</sub> + v<sub>2</sub>)</code>.
                  <br>• <em>Waktu Menyusul:</em> <code>t = Selisih Jarak / (v<sub>2</sub> - v<sub>1</sub>)</code>.
                </li>
                <li><strong>Produktivitas Kerja Gabungan:</strong> Jika pekerja A butuh $a$ hari dan pekerja B butuh $b$ hari, waktu selesai bersama adalah <code>t = (a × b) / (a + b)</code>.</li>
                <li><strong>Perbandingan Berbalik Nilai:</strong> Jika $P_1$ pekerja selesai dalam $H_1$ hari, maka untuk $P_2$ pekerja berlaku <code>P<sub>1</sub> × H<sub>1</sub> = P<sub>2</sub> × H<sub>2</sub></code>.</li>
              </ul>
            </div>
            <div class="info-card">
              <h3>☕ 2. Simulasi Perhitungan Masalah di Java</h3>
              <div class="code-snippet-box">
                <div class="code-box-header"><span class="code-lang-tag">JAVA • Waktu Kerja Bersama Dua Mesin</span></div>
                <pre class="code-pre" data-highlight="java">double waktuMesinA = 6.0; // 6 jam
double waktuMesinB = 3.0; // 3 jam
double waktuBersama = (waktuMesinA * waktuMesinB) / (waktuMesinA + waktuMesinB);
System.out.println("Selesai bersama dalam: " + waktuBersama + " jam"); // 2.0 jam</pre>
              </div>
            </div>
          </div>
        `
      }
    ]
  },

  /* ========================================================================
     BAB III. ALGORITMA DAN PEMROGRAMAN JAVA (Sub-Bab A s/d F)
     ======================================================================== */
  {
    id: "bab-3",
    roman: "III",
    title: "Algoritma dan Pemrograman Java",
    description:
      "Materi ini menguji kemampuan peserta dalam membaca, memahami, dan menentukan hasil dari suatu algoritma atau program sederhana menggunakan konsep dasar Java.",
    subtopics: [
      {
        id: "3-a",
        code: "A",
        title: "Dasar Java (Struktur, class, main, Variabel, Tipe Data, Inisialisasi)",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>☕ 1. Pembahasan Materi: Poin 1 s/d 6 Dasar Java</h3>
              <ol>
                <li><strong>Struktur Dasar Program Java:</strong> Terdiri dari deklarasi <code>class</code>, method utama <code>main()</code>, dan pernyataan (<em>statement</em>) yang wajib diakhiri tanda titik koma (<code>;</code>). Java bersifat <em>case-sensitive</em> (huruf besar/kecil dibedakan).</li>
                <li><strong><code>class</code>:</strong> Kerangka utama program, contoh: <code>public class Main { ... }</code>.</li>
                <li><strong><code>main()</code>:</strong> Titik awal eksekusi program oleh JVM: <code>public static void main(String[] args)</code>.</li>
                <li><strong>Variabel:</strong> Nama penampung nilai di memori (tidak boleh diawali angka atau memakai spasi).</li>
                <li><strong>Tipe Data Dasar:</strong> <code>int</code> (bilangan bulat), <code>double</code> (bilangan desimal), <code>char</code> (1 karakter dengan kutip tunggal <code>'A'</code>), <code>boolean</code> (<code>true</code>/<code>false</code>), dan <code>String</code> (teks dengan kutip ganda <code>"Halo"</code>).</li>
                <li><strong>Deklarasi &amp; Pemberian Nilai (Assignment):</strong> <code>int skor; skor = 95;</code> atau langsung <code>int skor = 95;</code>.</li>
              </ol>
            </div>
            <div class="info-card">
              <h3>💻 2. Contoh Lengkap Struktur &amp; Tipe Data Java</h3>
              <div class="code-snippet-box">
                <div class="code-box-header"><span class="code-lang-tag">JAVA • Keenam Poin Dasar Java</span></div>
                <pre class="code-pre" data-highlight="java">public class Main {
    public static void main(String[] args) {
        int nilaiBulat = 85;
        double rataRata = 87.5;
        char indeks = 'A';
        boolean aktif = true;
        String peserta = "Andi";

        System.out.println(peserta + " | " + indeks + " | " + rataRata + " | " + aktif);
    }
}</pre>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "3-b",
        code: "B",
        title: "Operator (Aritmatika, Perbandingan, Logika)",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>➗ 1. Pembahasan Materi: Tiga Kelompok Operator Java</h3>
              <ul>
                <li><strong>1. Operator Aritmatika (<code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>):</strong>
                  <br>• Pembagian dua <code>int</code> selalu membuang desimal (<code>10 / 4</code> menghasilkan <code>2</code>).
                  <br>• Operator <code>+</code> jika bertemu <code>String</code> akan berubah fungsi menjadi penggabung teks (<em>concatenation</em>).
                </li>
                <li><strong>2. Operator Perbandingan (<code>==</code>, <code>!=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>):</strong>
                  <br>• Membandingkan dua nilai dan selalu menghasilkan nilai bertipe <code>boolean</code> (<code>true</code> atau <code>false</code>).
                </li>
                <li><strong>3. Operator Logika (<code>&amp;&amp;</code>, <code>||</code>, <code>!</code>):</strong>
                  <br>• Menggabungkan ekspresi boolean. Memiliki fitur <em>short-circuit evaluation</em> (jika suku kiri pada <code>&amp;&amp;</code> sudah <code>false</code>, suku kanan tidak perlu dievaluasi lagi).</li>
              </ul>
            </div>
            <div class="info-card">
              <h3>💻 2. Contoh Pembahasan Kode Operator Java</h3>
              <div class="code-snippet-box">
                <div class="code-box-header"><span class="code-lang-tag">JAVA • Kombinasi Ketiga Operator</span></div>
                <pre class="code-pre" data-highlight="java">int x = 14, y = 4;
int hasilBagi = x / y;              // 3
int sisaBagi = x % y;               // 2
boolean banding = (hasilBagi == 3); // true
boolean logika = banding && !(sisaBagi > 5); // true && !false -> true
System.out.println("Output: " + hasilBagi + ", " + sisaBagi + ", " + logika);</pre>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "3-c",
        code: "C",
        title: "Percabangan (if-else, if-else if, switch-case, Bersarang)",
        simulator: {
          title: "Simulasi Percabangan Bersarang Java (int nilai = 80)",
          lines: [
            "int nilai = 80;",
            "if (nilai >= 75) {",
            "    if (nilai >= 90) {",
            "        System.out.println(\"Sangat Baik\");",
            "    } else {",
            "        System.out.println(\"Baik\");",
            "    }",
            "} else {",
            "    System.out.println(\"Kurang\");",
            "}"
          ],
          steps: [
            { line: 0, vars: { nilai: "80" }, explanation: "Inisialisasi variabel int nilai = 80.", output: "Menunggu..." },
            { line: 1, vars: { nilai: "80", "nilai >= 75": "true" }, explanation: "Cek kondisi if luar: 80 >= 75 bernilai true, masuk ke blok if luar.", output: "Menunggu..." },
            { line: 2, vars: { nilai: "80", "nilai >= 75": "true", "nilai >= 90": "false" }, explanation: "Cek kondisi if dalam: 80 >= 90 bernilai false, lompat ke blok else dalam.", output: "Menunggu..." },
            { line: 5, vars: { nilai: "80", Output: "Baik" }, explanation: "Mengeksekusi System.out.println(\"Baik\");.", output: "Baik" }
          ]
        },
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>🔀 1. Pembahasan Materi: Empat Bentuk Percabangan Java</h3>
              <ol>
                <li><strong><code>if-else</code>:</strong> Memilih satu dari dua jalur eksekusi berdasarkan syarat <code>boolean</code>.</li>
                <li><strong><code>if-else if-else</code>:</strong> Menguji syarat secara berjenjang dari atas ke bawah. Hanya cabang pertama yang bernilai <code>true</code> yang akan dijalankan.</li>
                <li><strong><code>switch-case</code>:</strong> Mencocokkan nilai variabel dengan daftar <code>case</code>. Jika sebuah <code>case</code> tidak diakhiri <code>break;</code>, maka program akan terus mengeksekusi <code>case</code> di bawahnya (<em>fall-through</em>) sampai menemukan <code>break;</code> atau akhir blok <code>switch</code>.</li>
                <li><strong>Percabangan Bersarang (<em>Nested If</em>):</strong> <code>if</code> di dalam <code>if</code> untuk menguji syarat berlapis.</li>
              </ol>
            </div>
            <div class="info-card">
              <h3>💻 2. Pembahasan Soal Wajib Percabangan Bersarang</h3>
              <p>Pada kode <code>int nilai = 80;</code>, kondisi pertama <code>if (nilai &gt;= 75)</code> bernilai <code>true</code> sehingga masuk ke blok luar. Di dalamnya, kondisi <code>if (nilai &gt;= 90)</code> bernilai <code>false</code> sehingga masuk ke cabang <code>else</code> dalam dan mencetak <strong><code>"Baik"</code></strong>.</p>
            </div>
          </div>
        `
      },
      {
        id: "3-d",
        code: "D",
        title: "Perulangan (for, do-while, Perulangan Bersarang)",
        simulator: {
          title: "Simulasi Perulangan for Java",
          lines: [
            "int total = 0;",
            "for (int i = 1; i <= 3; i++) {",
            "    total = total + (i * 2);",
            "}",
            "System.out.println(total);"
          ],
          steps: [
            { line: 0, vars: { total: "0" }, explanation: "Inisialisasi total = 0.", output: "Menunggu..." },
            { line: 1, vars: { total: "2", i: "1" }, explanation: "Iterasi 1 (i=1): total = 0 + 2 = 2.", output: "Menunggu..." },
            { line: 2, vars: { total: "6", i: "2" }, explanation: "Iterasi 2 (i=2): total = 2 + 4 = 6.", output: "Menunggu..." },
            { line: 2, vars: { total: "12", i: "3" }, explanation: "Iterasi 3 (i=3): total = 6 + 6 = 12.", output: "Menunggu..." },
            { line: 4, vars: { total: "12", i: "4 (Berhenti)" }, explanation: "Kondisi 4 <= 3 false, cetak 12.", output: "12" }
          ]
        },
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>🔄 1. Pembahasan Materi: Mekanisme Perulangan Java</h3>
              <ol>
                <li><strong>Perulangan <code>for (inisialisasi; kondisi; update)</code>:</strong> Mengecek kondisi di awal sebelum setiap putaran. Jumlah iterasi dapat dihitung secara presisi dari batas awal, batas akhir, dan perubahan nilai pencacah (misal <code>i++</code> atau <code>i += 2</code>).</li>
                <li><strong>Perulangan <code>do-while</code>:</strong> Menjalankan blok perintah di dalam <code>do { ... }</code> terlebih dahulu <strong>minimal 1 kali</strong>, baru mengevaluasi syarat <code>while (kondisi);</code> di bagian akhir.</li>
                <li><strong>Perulangan Bersarang (<em>Nested Loop</em>):</strong> Loop di dalam loop. Jika loop luar berputar $M$ kali dan loop dalam berputar $N$ kali tiap putaran luar, maka instruksi terdalam dieksekusi sebanyak $M \times N$ kali.</li>
              </ol>
            </div>
            <div class="info-card">
              <h3>💻 2. Contoh Perbandingan <code>for</code>, <code>do-while</code>, dan <em>Nested Loop</em></h3>
              <div class="code-snippet-box">
                <div class="code-box-header"><span class="code-lang-tag">JAVA • Perulangan Bersarang</span></div>
                <pre class="code-pre" data-highlight="java">int count = 0;
for (int i = 1; i <= 2; i++) {
    for (int j = 1; j <= 3; j++) {
        count++; // Dieksekusi 2 * 3 = 6 kali
    }
}
System.out.println("Total iterasi dalam: " + count); // Output: 6</pre>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "3-e",
        code: "E",
        title: "Method (void, return, Parameter & Argumen, Pemanggilan, Variabel Lokal)",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>🧩 1. Pembahasan Materi: Kelima Konsep Method di Java</h3>
              <ol>
                <li><strong>Method <code>void</code>:</strong> Method yang menjalankan serangkaian instruksi (seperti mencetak ke layar) tanpa mengembalikan nilai.</li>
                <li><strong>Method dengan Nilai Balik (<code>return</code>):</strong> Method yang mendeklarasikan tipe data kembalian (<code>int</code>, <code>double</code>, <code>boolean</code>, <code>String</code>) dan mengembalikan hasil dengan kata kunci <code>return</code>.</li>
                <li><strong>Parameter dan Argumen:</strong> <em>Parameter</em> adalah variabel formal di definisi method (misal <code>(int a, int b)</code>), sedangkan <em>argumen</em> adalah nilai aktual yang dikirim saat method dipanggil (misal <code>(5, 3)</code>).</li>
                <li><strong>Pemanggilan Method:</strong> Dapat dipanggil langsung maupun disimpan hasilnya ke variabel.</li>
                <li><strong>Variabel Lokal &amp; Parameter (<em>Pass-by-Value</em>):</strong> Variabel yang dibuat di dalam sebuah method hanya berlaku di dalam method tersebut. Mengubah nilai parameter tipe primitif di dalam method tidak mengubah variabel asli di <code>main()</code>.</li>
              </ol>
            </div>
            <div class="info-card">
              <h3>💻 2. Contoh Pembahasan Method &amp; Scope Variabel Lokal</h3>
              <div class="code-snippet-box">
                <div class="code-box-header"><span class="code-lang-tag">JAVA • Method Return &amp; Variabel Lokal</span></div>
                <pre class="code-pre" data-highlight="java">public class ContohMethodJava {
    static int hitungPoin(int skorAwal, int bonus) {
        int skorAwalLokal = skorAwal + (bonus * 2);
        return skorAwalLokal;
    }
    public static void main(String[] args) {
        int hasil = hitungPoin(70, 10);
        System.out.println("Hasil: " + hasil); // Output: 90
    }
}</pre>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "3-f",
        code: "F",
        title: "Membaca Algoritma dan Program (7 Kompetensi Penelusuran)",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>🔍 1. Pembahasan Materi: 7 Kompetensi Membaca Program Java</h3>
              <ol>
                <li><strong>Membaca pseudocode atau kode Java sederhana</strong> secara sekuensial.</li>
                <li><strong>Mengikuti perubahan nilai setiap variabel</strong> menggunakan tabel penelusuran (<em>trace table</em>).</li>
                <li><strong>Menentukan kondisi yang bernilai <code>true</code> atau <code>false</code></strong> pada setiap titik keputusan.</li>
                <li><strong>Menelusuri proses percabangan dan perulangan</strong> hingga selesai.</li>
                <li><strong>Menentukan output akhir program</strong> secara presisi.</li>
                <li><strong>Menemukan kesalahan sederhana pada algoritma (<em>debugging</em>)</strong> seperti salah tanda operator (<code>&lt;</code> vs <code>&gt;</code>), salah inisialisasi awal, atau <em>infinite loop</em>.</li>
                <li><strong>Menentukan hasil program berdasarkan input tertentu</strong> yang diberikan pada soal.</li>
              </ol>
            </div>
            <div class="info-card">
              <h3>💻 2. Contoh Studi Kasus Penelusuran Kode Java</h3>
              <div class="code-snippet-box">
                <div class="code-box-header"><span class="code-lang-tag">JAVA • Menelusuri Perubahan Variabel</span></div>
                <pre class="code-pre" data-highlight="java">int x = 3, y = 1;
while (x > 0) {
    y = y * 2 + x;
    x--;
}
System.out.println(y);
// Trace:
// x=3: y = 1*2 + 3 = 5, x jadi 2
// x=2: y = 5*2 + 2 = 12, x jadi 1
// x=1: y = 12*2 + 1 = 25, x jadi 0 (Loop berhenti -> Output: 25)</pre>
              </div>
            </div>
          </div>
        `
      }
    ]
  },

  /* ========================================================================
     BAB IV. PSEUDOCODE (Sub-Bab A dan B)
     ======================================================================== */
  {
    id: "bab-4",
    roman: "IV",
    title: "Pseudocode",
    description:
      "Peserta harus memahami cara kerja algoritma tanpa harus bergantung pada bahasa pemrograman tertentu, serta mampu menerjemahkannya ke dalam kode Java.",
    subtopics: [
      {
        id: "4-a",
        code: "A",
        title: "Konsep Dasar, Notasi & Translasi Pseudocode ke Java",
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>📄 1. Pembahasan Materi: Aturan Penulisan Pseudocode</h3>
              <p><strong>Pseudocode</strong> menyajikan logika algoritma secara terstruktur menggunakan kata kunci standar yang mudah dipahami manusia dan dapat langsung dikonversi menjadi program <strong>Java</strong>:</p>
              <ul>
                <li><strong>Assignment (Pemberian Nilai):</strong> Ditulis dengan panah kiri <code>&lt;-</code> (misal <code>x &lt;- 5</code>), yang berarti simpan nilai di sebelah kanan ke dalam variabel di sebelah kiri. Di Java ditulis <code>x = 5;</code>.</li>
                <li><strong>Struktur Sekuensial:</strong> Dieksekusi baris demi baris dari atas ke bawah.</li>
                <li><strong>Struktur Percabangan:</strong> Menggunakan <code>IF kondisi THEN ... ELSE ... END IF</code>.</li>
                <li><strong>Struktur Perulangan:</strong> Menggunakan <code>WHILE kondisi DO ... END WHILE</code> atau <code>FOR var &lt;- awal TO akhir DO ... END FOR</code>.</li>
              </ul>
            </div>
            <div class="info-card">
              <h3>🔄 2. Tabel Padanan Pseudocode dan Bahasa Java</h3>
              <div class="data-table-wrap">
                <table class="logic-table">
                  <thead>
                    <tr><th>Konsep</th><th>Pseudocode</th><th>Bahasa Java</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Assignment</td><td><code>x &lt;- 5</code></td><td><code>int x = 5;</code></td></tr>
                    <tr><td>Sisa Bagi</td><td><code>a MOD b</code></td><td><code>a % b</code></td></tr>
                    <tr><td>Logika</td><td><code>AND, OR, NOT</code></td><td><code>&amp;&amp;, ||, !</code></td></tr>
                    <tr><td>Percabangan</td><td><code>IF x &gt; 3 THEN</code></td><td><code>if (x &gt; 3) {</code></td></tr>
                    <tr><td>Output</td><td><code>OUTPUT x</code></td><td><code>System.out.println(x);</code></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "4-b",
        code: "B",
        title: "Studi Kasus & Penelusuran Pseudocode (x <- 5 hingga OUTPUT x = 7)",
        simulator: {
          title: "Simulasi Interaktif Pseudocode Wajib (x <- 5)",
          lines: [
            "x <- 5",
            "IF x > 3 THEN",
            "    x <- x + 2",
            "ELSE",
            "    x <- x - 2",
            "OUTPUT x"
          ],
          steps: [
            { line: 0, vars: { x: "5" }, explanation: "Langkah 1: Baris 'x <- 5' menginisialisasi variabel x dengan nilai 5.", output: "Menunggu..." },
            { line: 1, vars: { x: "5", "x > 3": "true (5 > 3)" }, explanation: "Langkah 2: Evaluasi kondisi 'IF x > 3 THEN'. Karena 5 > 3 bernilai BENAR, algoritma masuk ke cabang THEN.", output: "Menunggu..." },
            { line: 2, vars: { x: "7 (dari 5 + 2)" }, explanation: "Langkah 3: Eksekusi 'x <- x + 2' mengubah nilai x menjadi 5 + 2 = 7. Cabang ELSE dilewati.", output: "Menunggu..." },
            { line: 5, vars: { x: "7" }, explanation: "Langkah 4: Eksekusi 'OUTPUT x' mencetak nilai terakhir variabel x yaitu 7.", output: "7" }
          ]
        },
        content: `
          <div class="concept-grid">
            <div class="info-card">
              <h3>💻 1. Contoh Konsep Pseudocode Wajib &amp; Implementasi Java</h3>
              <div class="code-snippet-box">
                <div class="code-box-header"><span class="code-lang-tag">PSEUDOCODE • Contoh Konsep</span></div>
                <pre class="code-pre" data-highlight="pseudo">x &lt;- 5
IF x &gt; 3 THEN
    x &lt;- x + 2
ELSE
    x &lt;- x - 2
OUTPUT x</pre>
              </div>
              <div class="code-snippet-box" style="margin-top: 10px;">
                <div class="code-box-header"><span class="code-lang-tag">JAVA • Kode Program Setara</span></div>
                <pre class="code-pre" data-highlight="java">public class StudiKasusPseudocode {
    public static void main(String[] args) {
        int x = 5;
        if (x > 3) {
            x = x + 2;
        } else {
            x = x - 2;
        }
        System.out.println(x); // Output: 7
    }
}</pre>
              </div>
            </div>
            <div class="info-card">
              <h3>🔎 2. Pembahasan Mengapa Outputnya adalah 7</h3>
              <p>Dari kode pseudocode di samping, peserta harus dapat mengikuti setiap langkah secara runtut:</p>
              <ol>
                <li><strong>Langkah 1 (<code>x &lt;- 5</code>):</strong> Variabel <code>x</code> diberi nilai awal <strong>5</strong>.</li>
                <li><strong>Langkah 2 (<code>IF x &gt; 3 THEN</code>):</strong> Kondisi memeriksa apakah <code>x &gt; 3</code>. Karena <code>5 &gt; 3</code> bernilai <strong>Benar (<code>true</code>)</strong>, maka eksekusi masuk ke blok <code>THEN</code>.</li>
                <li><strong>Langkah 3 (<code>x &lt;- x + 2</code>):</strong> Nilai <code>x</code> yang semula 5 ditambah 2 menjadi <strong>7</strong>. Blok <code>ELSE</code> (<code>x &lt;- x - 2</code>) dilewati dan tidak dijalankan.</li>
                <li><strong>Langkah 4 (<code>OUTPUT x</code>):</strong> Menampilkan nilai akhir dari variabel <code>x</code>, sehingga diperoleh <strong>outputnya adalah 7</strong>.</li>
              </ol>
            </div>
          </div>
        `
      }
    ]
  }
];
