const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// create Data user

// async function user() {
//   await prisma.user.createMany({
//     data: [
//       { firstName: "Ismi", secondName: "azah" },
//     ],
//     skipDuplicates: true,
//   });
// }
// user();

// async function product() {
//   await prisma.product.createMany({
//     data: [
//       {
//         product_name: "Garam Himalaya ",
//         img_product:
//           "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/7/11/6f211ea6-1493-4df6-9568-23ae02c85710.jpg",
//         description_product:
//           "Garam Himalaya atau Himalayan Pink Salt adalah garam berwarna merah muda yang diekstrak dari Tambang Garam Khewra, yang terletak di dekat Himalaya di Pakistan. Garam Himalaya dipanen secara alami, sehingga garam Himalaya memiliki banyak kandungan mineral dan kandungan lain yang tidak ditemukan dalam garam laut.",
//       },
//       {
//         product_name: "Maknyuss Beras Premium 5 Kg",
//         img_product:
//           "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/1/14/a01229cf-39f3-479d-8720-52b6e5fa98c3.jpg",
//         description_product:
//           "Maknyuss adalah Beras Premium yang diproses dengan teknologi modern tanpa bahan kimia, tanpa pemutih, tanpa pengawet, dan tanpa pewangi sintetis.",
//       },
//       {
//         product_name: "ABC Kecap Manis Jerigen 6 kg",
//         img_product:
//           "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/10/18/b7bcc10d-016b-47bc-afd4-6a32022705c8.jpg",
//         description_product:
//           "Kecap Manis ABC dibuat dari sari kedelai terbanyak pilihan dan berkualitas yang diproduksi dengan standar mutu yang ketat, yang siap memberikan ekstrak rasa dan aroma maksimal pada beragam masakan anda, dalam rangka menghadirkan kepada keluarga Indonesia masakan yang lebih kaya rasa, siapapun yang masak.",
//       },
//     ],
//   });
// }
// user();
// product();

// async function product() {
//   await prisma.product.createMany({
//     data: [
//       {
//         product_name: "RINSO ANTI NODA",
//         img_product:
//           "https://th.bing.com/th/id/OIP.hl6pr-zM1vm4R1KNN1nN6wHaHa?rs=1&pid=ImgDetMain",
//         description_product:
//           "Dengan formulasi anti noda, menghilangkan noda dalam satu kali kucek Menyegarkan kembali pakaian dengan keharuman bunga melati dan mawar putih yang tahan lama Proteksi higienis melindungi pakaian dari bakteri dan bau tak sedap",
//       },
//       {
//         product_name: "RINSO MOLTO",
//         img_product:
//           "https://www.rinso.com/images/jw6al4qorxz1/5Kxf41PDRmwY1shdngn99e/9ef5a0c69ac35d3e236eff048f112952/TGlxdWlkX3Jvc2VfZnJlc2gucG5n/1080w-1080h/rinso-molto-deterjen-cair-rose-fresh-packshot.jpg",
//         description_product:
//           "Deskripsi Rinso Molto Royal Gold BARU! Nikmati keharuman memikat Orchid & Vanilla yang tahan hingga 21 hari.",
//       },
//       {
//         product_name: "BIMOLI 2 LT",
//         img_product:
//           "https://s3.bukalapak.com/img/3018806972/w-1000/IMG_20180630_001905_scaled.jpg",
//         description_product:
//           "Bimoli terbuat dari kelapa sawit Golden Grade yang diproses dengan Golden Refinery Technology dan Pemurnian Multi Proses. Hasilnya adalah minyak goreng berwarna kuning yang lebih tahan panas dan mengandung Omega 9 ",
//       },
//       {
//         product_name: "TROPICAL",
//         img_product:
//           "https://pasarsegar.co.id/wp-content/uploads/2020/07/images-10.jpeg",
//         description_product:
//           "Tropical Minyak Goreng merupakan minyak goreng atau minyak sayur dengan 2 kali proses pembuatan, sehingga menghasilkan kualitas yang jernih dan jernih.",
//       },
//       {
//         product_name: "SARI MURNI",
//         img_product:
//           "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/6/13/136af519-147b-4f29-9142-4c9a79685604.jpg",
//         description_product:
//           "SariWangi Teh SariMurni, teh hitam Indonesia dengan aroma khas dan rasa yang nikmat. Dibuat dari daun teh hitam Indonesia yang ditanam dan dirawat oleh para penghasil teh. ",
//       },
//       {
//         product_name: "MOLTO ULTRA BIRU",
//         img_product:
//           "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/6/10/6ba27fe4-3657-4856-b568-81a7e6949e8a.jpg",
//         description_product:
//           "Molto All in 1 sekali bilas tidak hanya memberikan wangi tahan lama yang Anda cintai, kini mengandung teknologi ULTRA CARE yang melapisi dan memperkuat pakaian hingga serat kain terdalam, melindungi pakaian dari warna pudar & kerusakan bentuk pakaian. Menjaganya tetap cantik bahkan setelah dicuci berulang kali.",
//       },
//       {
//         product_name: "PEPSODENT WHITENING",
//         img_product:
//           "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/8/10/a65b40e1-3bb0-4df0-bf64-da34a3a3d91a.png",
//         description_product:
//           "Pasta Gigi Pepsodent Complete 8 Plus Whitening adalah pasta gigi pemutih / teeth whitening dengan bahan efektif berupa perlite yang memiliki fungsi utama untuk menghilangkan noda. Gigi tampak lebih putih dalam 2 minggu.",
//       },
//       {
//         product_name: "CLOSE UP MILK CALSIUM",
//         img_product:
//           "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/1/27/522cb835-60a0-47c4-ae16-c75bd81e22c4.jpg",
//         description_product:
//           "CloseUp dengan kandungan formulasi anti-bacterial mouthwash dan micro shine crystals untuk memberikan nafas segar hingga serta gigi putih",
//       },
//       {
//         product_name: "INDOMIE GORENG",
//         img_product:
//           "https://images.tokopedia.net/img/cache/900/product-1/2020/4/8/7949744/7949744_1f0f447b-7f6e-4f5d-ae91-70468f9e40d3_979_979.jpg",
//         description_product:
//           "Indomie Goreng terbuat dari bahan utama tepung terigu, dan dikenal memiliki tekstur mie yang kenyal dan lembut, serta diperkaya dengan mineral, vitamin A, vitamin B1, vitamin B6, vitamin B12, niasin, asam folat, dan zat besi",
//       },
//       {
//         product_name: "SOSRO CELUP",
//         img_product:
//           "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/3/25/04d747e5-866d-42a6-8625-76a1d149bac9.jpg",
//         description_product:
//           "Teh celup yang diolah dari pegunungan sendiri, sehingga menghasilkan aroma, rasa dan warna teh yang alami.",
//       },
//       {
//         product_name: "KAPAL API SPESIAL",
//         img_product:
//           "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/10/22/6fa44f57-8a8a-47a1-8d86-bcef2b8d55fc.jpg",
//         description_product:
//           "Varian kopi bubuk instan dari Kapal Api yang diformulasi untuk memberi secangkir semangat dalam menjalani hari. Kopi Kapal Api Special dibuat dari biji kopi pilihan dan diolah menggunakan teknogi modern",
//       },
//     ],
//     skipDuplicates: true,
//   });
// }

async function starProduct() {
  await prisma.starProduct.createMany({
    data: [
      // user 7
      { userId: 10, productId: 1, star: 3 },
      { userId: 10, productId: 2, star: 4 },
      { userId: 10, productId: 3, star: 4 },
      { userId: 10, productId: 12, star: 3 },
    ],
    skipDuplicates: true,
  });
}
starProduct();
// { firstName: "Hafid", secondName: "Nur" },
// { firstName: "Joni", secondName: "sumi" },
// { firstName: "Liam", secondName: "Sam" },
// { firstName: "Yuki", secondName: "Jono" },
// { firstName: "rahma", secondName: "nia" },
// {userId:1,productId:1,star:3},
//       {userId:1,productId:2,star:1},
//       {userId:1,productId:3,star:1},
//       // // user 2
//       {userId:2 ,productId:1,star:1},
//       {userId:2 ,productId:2,star:2},
//       {userId:2 ,productId:3,star:2},
//       {userId:2 ,productId:4,star:3},
//       {userId:2 ,productId:4,star:3},
//       {userId:2 ,productId:5,star:4},
//       {userId:2 ,productId:6,star:1},
//       {userId:2 ,productId:7,star:5},
//       {userId:2 ,productId:8,star:5},
//       {userId:2 ,productId:9,star:1},
//       {userId:2 ,productId:10,star:2},
//       {userId:2 ,productId:11,star:2},
//       // user 3
//       {userId:3 ,productId:1,star:5},
//       {userId:3 ,productId:2,star:2},
//       {userId:3 ,productId:3,star:3},
//       {userId:3 ,productId:4,star:2},
//       {userId:3 ,productId:5,star:4},
//       {userId:3 ,productId:6,star:5},
//       {userId:3 ,productId:7,star:1},
//       {userId:3 ,productId:8,star:1},
//       {userId:3 ,productId:9,star:1},
//       {userId:3 ,productId:10,star:3},
//       {userId:3 ,productId:11,star:4},

//       // user 4
//       {userId:4 ,productId:1,star:1},
//       {userId:4 ,productId:2,star:1},
//       {userId:4 ,productId:3,star:4},
//       {userId:4 ,productId:4,star:4},
//       {userId:4 ,productId:5,star:3},
//       {userId:4 ,productId:6,star:5},
//       {userId:4 ,productId:7,star:5},
//       {userId:4 ,productId:8,star:1},
//       {userId:4 ,productId:9,star:1},
//       {userId:4 ,productId:10,star:1},
//       {userId:4 ,productId:11,star:1},

//       // user 5
//       {userId:5 ,productId:1,star:5},
//       {userId:5 ,productId:2,star:1},
//       {userId:5 ,productId:3,star:4},
//       {userId:5 ,productId:4,star:4},
//       {userId:5 ,productId:5,star:4},
//       {userId:5 ,productId:6,star:2},
//       {userId:5 ,productId:7,star:2},
//       {userId:5 ,productId:8,star:2},
//       {userId:5 ,productId:9,star:3},
//       {userId:5 ,productId:10,star:1},
//       {userId:5 ,productId:11,star:1},
