<template>
    <!-- navbar start -->
  <header class = "bg-navy fixed top-0 left-0 w-full flex items-center z-10">
    <div class = "container">
      <div class="flex items-center justify between relative">
        <div class="px-4 flex py-2">
          <div></div>
          <img src="./assets/image/Vector.png" alt="error">
          <a href="#" class="px-1 text-xs text-white">search.. |</a>
          <img src="./assets/image/globe.png" alt="error">
          <p class="px-1 text-xs text-white">Bahasa</p>
          <img src="./assets/image/id.png" alt="error" class="w-4 h-3 pt-1 ps-1">
          <img src="./assets/image/bawah.png" alt="error" class="w-4 h-3 pt-1 ps-1">
        </div>
      </div>
      <nav class="py-5 bg-white shadow-lg fixed left-0 w-full flex items-center">
        <ul>
          <li class="text-black/50 font-bold text-xs text-center flex ">
            <a href="#" class="pl-16 pr-6 pt-2 hover:text-amber-600">Beranda</a>
            <p class="text-xl">|</p>
            <div class="relative group pt-2">
                <a href="#" class="px-5 pt-1 hover:text-amber-600 group-hover:text">Profil</a>
                <div class="hidden bg-white text-white group-hover:block mt-5 w-max p-2 rounded shadow-lg fixed" style="background-color: navy">
                    <NuxtLink :to="{ name: 'berita' }">Berita</NuxtLink><br>
                    <NuxtLink :to="{ name: 'berita' }">Sejarah Singkat</NuxtLink><br>
                    <NuxtLink :to="{ name: 'berita' }">Visi, Misi dan Sasaran</NuxtLink><br>
                </div>
            </div>
            <p class="text-xl">|</p>
            <div class="relative group pt-2">
                <a href="#" class="px-5 pt-2 hover:text-amber-600 group-hover:text">Akademik</a>
                <div class="hidden bg-white text-white group-hover:block mt-5 w-max p-2 rounded shadow-lg fixed" style="background-color: navy">
                    <NuxtLink :to="{ name: 'berita' }">Berita</NuxtLink><br>
                    <NuxtLink :to="{ name: 'sejarah' }">Sejarah Singkat</NuxtLink><br>
                    <NuxtLink :to="{ name: 'visimisi' }">Visi, Misi dan Sasaran</NuxtLink><br>
                </div>
            </div>
            <p class="text-xl">|</p>
            <div class="relative group pt-2">
                <a href="#" class="px-5 hover:text-amber-600 group-hover:text">Sumber Daya</a>
                <div class="hidden bg-white text-white group-hover:block mt-5 w-max p-2 rounded shadow-lg fixed" style="background-color: navy">
                    <NuxtLink :to="{ name: 'berita' }">Berita</NuxtLink><br>
                    <NuxtLink :to="{ name: 'berita' }">Sejarah Singkat</NuxtLink><br>
                    <NuxtLink :to="{ name: 'berita' }">Visi, Misi dan Sasaran</NuxtLink><br>
                </div>
            </div>
            <p class="text-xl">|</p>
            <div class="relative group pt-2">
                <a href="#" class="px-5 hover:text-amber-600 group-hover:text">K3</a>
                <div class="hidden bg-white text-white group-hover:block mt-5 w-max p-2 rounded shadow-lg fixed" style="background-color: navy">
                    <NuxtLink :to="{ name: 'berita' }">Berita</NuxtLink><br>
                    <NuxtLink :to="{ name: 'berita' }">Sejarah Singkat</NuxtLink><br>
                    <NuxtLink :to="{ name: 'berita' }">Visi, Misi dan Sasaran</NuxtLink><br>
                </div>
            </div>
            <p class="text-xl">|</p>
            <div class="relative group pt-2">
                <a href="#" class="px-5 hover:text-amber-600 group-hover:text">Kemahasiswaan</a>
                <div class="hidden bg-white text-white group-hover:block mt-5 w-max p-2 rounded shadow-lg fixed" style="background-color: navy">
                    <NuxtLink :to="{ name: 'berita' }">Berita</NuxtLink><br>
                    <NuxtLink :to="{ name: 'berita' }">Sejarah Singkat</NuxtLink><br>
                    <NuxtLink :to="{ name: 'berita' }">Visi, Misi dan Sasaran</NuxtLink><br>
                </div>
            </div>
            <p class="text-xl">|</p>
            <div class="relative group pt-2">
                <a href="#" class="px-5 hover:text-amber-600 group-hover:text">Riset dan Informasi</a>
                <div class="hidden bg-white text-white group-hover:block mt-5 w-max p-2 rounded shadow-lg fixed" style="background-color: navy">
                    <NuxtLink :to="{ name: 'berita' }">Berita</NuxtLink><br>
                    <NuxtLink :to="{ name: 'berita' }">Sejarah Singkat</NuxtLink><br>
                    <NuxtLink :to="{ name: 'berita' }">Visi, Misi dan Sasaran</NuxtLink><br>
                </div>
            </div>
            <p class="text-xl">|</p>
            <div class="relative group pt-2">
                <a href="#" class="px-5 hover:text-amber-600 group-hover:text">Kemitraan</a>
                <div class="hidden bg-white text-white group-hover:block mt-5 w-max p-2 rounded shadow-lg fixed" style="background-color: navy">
                    <NuxtLink :to="{ name: 'berita' }">Berita</NuxtLink><br>
                    <NuxtLink :to="{ name: 'berita' }">Sejarah Singkat</NuxtLink><br>
                    <NuxtLink :to="{ name: 'berita' }">Visi, Misi dan Sasaran</NuxtLink><br>
                </div>
            </div>
            <p class="text-xl">|</p>
            <div class="relative group pt-2">
                <a href="#" class="px-5 hover:text-amber-600 group-hover:text">GPM-PR</a>
                <div class="hidden bg-white text-white group-hover:block mt-5 w-max p-2 rounded shadow-lg fixed" style="background-color: navy">
                    <NuxtLink :to="{ name: 'berita' }">Berita</NuxtLink><br>
                    <NuxtLink :to="{ name: 'berita' }">Sejarah Singkat</NuxtLink><br>
                    <NuxtLink :to="{ name: 'berita' }">Visi, Misi dan Sasaran</NuxtLink><br>
                </div>
            </div>
            <p class="text-xl">|</p>
            <div class="relative group pt-2">
                <a href="#" class="px-5 hover:text-amber-600 group-hover:text">COT</a>
                <div class="hidden bg-white text-white group-hover:block mt-5 w-max p-2 rounded shadow-lg fixed" style="background-color: navy">
                    <NuxtLink :to="{ name: 'berita' }">Berita</NuxtLink><br>
                    <NuxtLink :to="{ name: 'berita' }">Sejarah Singkat</NuxtLink><br>
                    <NuxtLink :to="{ name: 'berita' }">Visi, Misi dan Sasaran</NuxtLink><br>
                </div>
            </div>
            <p class="text-xl">|</p>
            <div class="relative group pt-2">
                <a href="#" class="px-5 hover:text-amber-600 group-hover:text">Dharma Wanita</a>
                <div class="hidden bg-white text-white group-hover:block mt-5 w-max p-2 rounded shadow-lg fixed" style="background-color: navy">
                    <NuxtLink :to="{ name: 'berita' }">Berita</NuxtLink><br>
                    <NuxtLink :to="{ name: 'berita' }">Sejarah Singkat</NuxtLink><br>
                    <NuxtLink :to="{ name: 'berita' }">Visi, Misi dan Sasaran</NuxtLink><br>
                </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <!-- navbar end -->

  <div>
    <NuxtPage />
  </div>

  <!-- footer start -->
  <footer>
    <section class="bg-navy mt-5 w-full overscroll-x-none text-center">
      <div class="flex space-x-16 py-5">
      <div class="ml-6">
        <div class="mx-auto mt-10">
          <img src="./assets/image/unhas.png" alt="Unhas logo">
        </div>
        <div class="mt-6 mb-6 flex space-x-3 ml-28">
          <img src="./assets/image/youtube.png" alt="youtube">
          <img src="./assets/image/instagram.png" alt="ig">
          <img src="./assets/image/fb.png" alt="fb">
        </div>
      </div>
      <div class="">
        <p class="text-white mt-10 font-bold mb-3">Kontak</p>
        <div class="flex space-x-3 mb-3 text-xs">
          <img src="./assets/image/phone.png" alt="phone">
          <p class="text-white">+62 852-9999-9958</p>
        </div>
        <div class="flex space-x-3 text-xs">
          <img src="./assets/image/mail.png" alt="email">
          <p class="text-white">teknik@unhas.ac.id</p>
        </div>
        <div class="mt-16 bg-Site">
          <p class="text-gray-400">SITE STATISTICS</p>
          <img class="mt-3" src="./assets/image/site.png" alt="site">
        </div>
      </div>
        <div class="my-10">
          <p class="mb-10 font-semibold text-white">DIDUKUNG OLEH</p>
          <img class="mb-10 ml-5" src="./assets/image/sponsor1.png" alt="sponsor1">
          <img class="ml-5" src="./assets/image/sponsor2.png" alt="sponsor2">
        </div>
      <div class="mt-10">
        <div class="flex space-x-3 text-xs">
          <img src="./assets/image/maps.png" alt="titik">
          <p class="text-white">Jl.Poros Malino Km. 6 Bontomarannu <br>92171 Gowa, Sulawesi Selatan</p>
        </div>
        <img class="mt-5" src="./assets/image/maps2.png" alt="maps">
      </div>
    </div>
    </section>
    <section class="bg-navy2 pt-3 pb-3 max-w-full">
    <p class="text-white font-light text-xs text-center">Copyrights @2023 All Rights Reserved</p>
  </section>
  </footer>
  <!-- footer end -->
</template>