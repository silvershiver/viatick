import images from '../res/images'
import strings from './strings'
import constantColors from 'constants/colors'

module.exports = {
    menus: [
        {
            name: strings.MENU_HOME,
            icon: images.menuHome,
        },
        {
            name: strings.MENU_ASSISTANCE,
            icon: images.menuAssistance,
        },
        {
            name: strings.MENU_REWARDS,
            icon: images.menuReward,
        },
        {
            name: strings.MENU_KIDS,
            icon: images.menuKids,
        },
        {
            name: strings.MENU_PROFILE,
            icon: images.menuProfile,
        },
        {
            name: strings.MENU_CART,
            icon: images.menuCart,
        },
    ],
    menuData: [
        {
            key: 1,
            name: strings.MENU_NOTIFICATION,
            noti: 16,
            dot: false,
        },
        {
            key: 2,
            name: strings.MENU_HISTORY,
            noti: 0,
            dot: true,
        },
        {
            key: 3,
            name: strings.MENU_ABOUT_US,
            noti: 0,
            dot: false,
        },
        {
            key: 4,
            name: strings.MENU_TERM,
            noti: 0,
            dot: false,
        },
    ],


    categoryData: [
        {
            key: 1,
            icon: images.icon21,
            name: 'Fashion',
        },
        {
            key: 2,
            icon: images.icon01,
            name: 'Handphone & Tablet',
        },
        {
            key: 3,
            icon: images.icon22,
            name: 'Kecantikan',
        },
        {
            key: 4,
            icon: images.icon25,
            name: 'Laptop & Aksesoris',
        },
        {
            key: 5,
            icon: images.icon23,
            name: 'Kesehatan',
        },
        {
            key: 6,
            icon: images.icon26,
            name: 'Komputer & Aksesoris',
        },
        {
            key: 7,
            icon: images.icon24,
            name: 'Kamera',
        },
        {
            key: 8,
            icon: images.icon27,
            name: 'Otomotif',
        },
        {
            key: 9,
            icon: images.icon28,
            name: 'Mainan & Hobi',
        },
        {
            key: 10,
            icon: images.icon31,
            name: 'Software',
        },
        {
            key: 11,
            icon: images.icon29,
            name: 'Souvenir, Kado & Hadiah',
        },
        {
            key: 12,
            icon: images.icon37,
            name: 'Peralatan Sekolah & Kantor',
        },
        {
            key: 13,
            icon: images.icon30,
            name: 'Olahraga',
        },
        {
            key: 14,
            icon: images.icon32,
            name: 'Film & Musik',
        },
        {
            key: 15,
            icon: images.icon33,
            name: 'Elektronik',
        },
        {
            key: 16,
            icon: images.icon35,
            name: 'Makanan & Minuman',
        },
        {
            key: 17,
            icon: images.icon34,
            name: 'Peralatan Rumah Tangga',
        },
    ],
    categoryGridData: [
        {
            key: 1,
            title: 'ATASAN',
        },
        {
            key: 2,
            title: 'CELANA',
        },
        {
            key: 3,
            title: 'OUTWEAR',
        },
        {
            key: 4,
            title: 'JAM TANGAN',
        },
        {
            key: 5,
            title: 'SEPATU',
        },
        {
            key: 6,
            title: 'TAS',
        },
        {
            key: 7,
            title: 'BATIK PRIA',
        },
        {
            key: 8,
            title: 'AKSESORIS',
        },
        {
            key: 9,
            title: 'PAKAIAN DALAM',
        }
    ],
    productData: [
        {
            key: 1,
            image: images.product1,
            title: 'Tas closin wanita',
            profit: '90% - 120%',
            stock: '10',
            price: 'Rp 55.000/pcs'
        },
        {
            key: 2,
            image: images.product2,
            title: 'Tas closin wanita',
            profit: '90% - 120%',
            stock: '1100',
            price: 'Rp 60.000/pcs'
        },
        {
            key: 3,
            image: images.product3,
            title: 'Tas closin wanita',
            profit: '90% - 120%',
            stock: '40',
            price: 'Rp 55.000/pcs'
        },
        {
            key: 4,
            image: images.product4,
            title: 'Tas closin wanita',
            profit: '90% - 120%',
            stock: '1100',
            price: 'Rp 45.000/pcs'
        },
    ],
    productInfoData: [
        {
            key: 1,
            title: 'Minimal order',
            value: '1 pc'
        },
        {
            key: 2,
            title: 'Stok produk',
            value: '2000 pcs'
        },
        {
            key: 3,
            title: 'Berat Item',
            value: '80 gram'
        },
        {
            key: 4,
            title: 'Variasi warna',
            value: '4 pcs'
        },
        {
            key: 5,
            title: 'Material',
            value: 'Polyester'
        },
        {
            key: 6,
            title: 'Pengiriman dari',
            value: 'Jelambar, Jakarta Barat'
        },
        {
            key: 7,
            title: 'Dimensi Produk',
            value: '30x30x30 cm'
        },
        {
            key: 8,
            title: 'Estimasi Untung',
            value: '90% - 120%'
        },
    ],
    productImagesData: [
        {
            key: 1,
        },
        {
            key: 2,
        },
    ],
    productOverviewData: [
        {
            key: 1,
            title: 'Brand Name',
            value: 'G-Shock'
        },
        {
            key: 2,
            title: 'Type',
            value: 'Sport Watch'
        },
        {
            key: 3,
            title: 'Gender',
            value: 'Male'
        },
        {
            key: 4,
            title: 'Material',
            value: 'Polyester'
        },
        {

            key: 5,
            title: 'Dimension',
            value: '30x30x30 cm'
        },
        {
            key: 6,
            title: 'Color',
            value: '4 colors'
        },
        {
            key: 7,
            title: 'Age',
            value: 'Newest'
        },
        {
            key: 8,
            title: 'Place of Origin',
            value: 'Jakarta'
        },
        {
            key: 9,
            title: 'Selling Units',
            value: 'Satuan'
        },
        {
            key: 10,
            title: 'Ukuran Kemansan',
            value: '40x40x40 cm'
        },
        {
            key: 11,
            title: 'Berat',
            value: '80 grams'
        },
        {
            key: 12,
            title: 'Jenis Kemasan',
            value: 'Export Carton'
        }
    ],
    productListData: [
        {
            key: 1,
            image: images.product1,
            buttonTitle: 'BELI',
            title: 'Tas closin wanita',
            quantity: 1,
        },
        {
            key: 2,
            image: images.product2,
            buttonTitle: 'RE-STOK',
            title: 'Tas closin wanita',
            quantity: 1,
        },
        {
            key: 3,
            image: images.product3,
            buttonTitle: 'BELI',
            title: 'Tas closin wanita',
            quantity: 1,
        },
        {
            key: 4,
            image: images.product4,
            buttonTitle: 'BELI',
            title: 'Tas closin wanita',
            quantity: 1,
        },
    ],
    surveyData: [
        {
            key: 1,
            description: 'Beberapa baju wanita terpopuler dalam bulan ini',
            backgroundColor: constantColors.GRAY_BG
        },
        {
            key: 2,
            description: 'Masalah yang dihadapi oleh para Reseller',
            backgroundColor: 'white'
        },
        {
            key: 3,
            description: 'Beberapa baju wanita terpopuler dalam bulan ini',
            backgroundColor: 'white'
        },
        {
            key: 4,
            description: 'Masalah yang dihadapi oleh para Reseller',
            backgroundColor: constantColors.GRAY_BG
        },
        {
            key: 5,
            description: 'Beberapa baju wanita terpopuler dalam bulan ini',
            backgroundColor: 'white'
        },
        {
            key: 6,
            description: 'Masalah yang dihadapi oleh para Reseller',
            backgroundColor: 'white'
        },
    ],
    popularNewsData: [
        {
            key: 1,
            title: '1. Pedagan Mangga Dua Mall Tuding Toko Online Jadi Penyebab Sepinya Pengunjung'
        },
        {
            key: 2,
            title: '2. Impor Barang Ke Jawa Barat Pecahkan Rekor Teringgi'
        },
        {
            key: 3,
            title: '3. Dinilai Terlalu Rendah, Batasan Bea Masuk Barang DIminta Revisi'
        },
        {
            key: 4,
            title: '4. Bea Cukai Akan Permudah Lzin Barang Impor'
        },
        {
            key: 5,
            title: '5. Bea Cukai Sabang Tegaskan Impor Berisiki Tinggi Akan Ditertibkan'
        },
        {
            key: 6,
            title: '6. Pengusaha Ini Jelaskan 4 Penyebab Suksesnya Pusat Perbelanjaan'
        },
        {
            key: 7,
            title: '7. Perlu Solusi Agar Barang Impor Tak Langka'
        },
        {
            key: 8,
            title: '8. Penyebab-penyebab Barang Impor Skukses Di Pasaran'
        },
        {
            key: 9,
            title: '9. Pedagang Mangga Dua Mall Tuding TOko Online Jadi Penyebab Sepinya Pengunjung'
        },
        {
            key: 10,
            title: '10. Bea Cukai Akan Permudah Lzin Barang Impor'
        },
    ],
    saldoSayaData: [ //balance data
        {
            key: 1,
            name: 'Transaksi Pembelian',
            date: '08 September 2017',
            time: '15:58 WIB',
            number: 'INV/20170916/XVII/ID/104417445',
            nominal: 'Rp. 200.001',
            saldo: 'Rp. 999.999'
        },
        {
            key: 2,
            name: 'Transaksi Penjualan',
            date: '08 September 2017',
            time: '15:58 WIB',
            number: 'INV/20170916/XVII/ID/104417445',
            nominal: 'Rp. 16.000',
            saldo: 'Rp. 1.015.999'
        },
        {
            key: 3,
            name: 'Transaksi Pembelian',
            date: '08 September 2017',
            time: '15:58 WIB',
            number: 'INV/20170916/XVII/ID/104417445',
            nominal: 'Rp. 16.000',
            saldo: 'Rp. 1.015.999'
        },
        {
            key: 4,
            name: 'Transaksi Pembelian',
            date: '08 September 2017',
            time: '15:58 WIB',
            number: 'INV/20170916/XVII/ID/104417445',
            nominal: 'Rp. 200.001',
            saldo: 'Rp. 999.999'
        },
        {
            key: 5,
            name: 'Transaksi Pembelian',
            date: '08 September 2017',
            time: '15:58 WIB',
            number: 'INV/20170916/XVII/ID/104417445',
            nominal: 'Rp. 200.001',
            saldo: 'Rp. 999.999'
        },
        {
            key: 6,
            name: 'Transaksi Pembelian',
            date: '08 September 2017',
            time: '15:58 WIB',
            number: 'INV/20170916/XVII/ID/104417445',
            nominal: 'Rp. 200.001',
            saldo: 'Rp. 999.999'
        }
    ],
    settingNotificationData: [
        {
            key: 1,
            name: 'Buletin',
            description: 'Setiap promosi, tips&trik, informasi update sekitar Tokodistributor'
        },
        {
            key: 2,
            name: 'Pembelian',
            description: 'Menerima pesan ke Email setiap melakukan pembelian'
        },
        {
            key: 3,
            name: 'Pembayaran',
            description: 'Menerima pesan ke Email setiap melakukan pembayaran di Tokodistributor'
        },
        {
            key: 4,
            name: 'Pengiriman',
            description: 'Menerima pesan ke Email setiap pesanan yang diterima'
        },
        {
            key: 5,
            name: 'Penerimaan',
            description: 'Menerima pesan ke Email setiap melakukan transaksi'
        },
        {
            key: 6,
            name: 'Pengiriman',
            description: 'Menerima pesan ke Email setiap pesanan yang diterima'
        },
        {
            key: 7,
            name: 'Buletin',
            description: 'Setiap promosi, tips&trik, informasi update sekitar Tokodistributor'
        }
    ],

    notificationData: [
        {
            key: 1,
            title: 'Account Security',
            content: 'Your account may have been compromized',
            read: true
        },
        {
            key: 2,
            title: 'Account Security',
            content: 'Your account may have been compromized',
            read: false
        },
        {
            key: 3,
            title: 'Account Security',
            content: 'Your account may have been compromized',
            read: false
        },
        {
            key: 4,
            title: 'Account Security',
            content: 'Your account may have been compromized',
            read: true
        },
        {
            key: 5,
            title: 'Account Security',
            content: 'Your account may have been compromized',
            read: true
        },
        {
            key: 6,
            title: 'Account Security',
            content: 'Your account may have been compromized',
            read: false
        },
        {
            key: 7,
            title: 'Account Security',
            content: 'Your account may have been compromized',
            read: true
        },
        {
            key: 8,
            title: 'Account Security',
            content: 'Your account may have been compromized',
            read: false
        },
        {
            key: 9,
            title: 'Account Security',
            content: 'Your account may have been compromized',
            read: true
        },
        {
            key: 10,
            title: 'Account Security',
            content: 'Your account may have been compromized',
            read: false
        }
    ],
    inboxData: [
        {
            key: 1,
            avatar: images.icon67,
            name: 'Admin',
            title: 'Account Security',
            content: 'Your account may have been compromized',
            time: '08.00'
        },
        {
            key: 2,
            avatar: images.icon67,
            name: 'Admin',
            title: 'Account Security',
            content: 'Your account may have been compromized',
            time: '08.00'
        },
        {
            key: 3,
            avatar: images.icon67,
            name: 'Admin',
            title: 'Account Security',
            content: 'Your account may have been compromized',
            time: '08.00'
        },
        {
            key: 4,
            avatar: images.icon67,
            name: 'Admin',
            title: 'Account Security',
            content: 'Your account may have been compromized',
            time: '08.00'
        },
        {
            key: 5,
            avatar: images.icon67,
            name: 'Admin',
            title: 'Account Security',
            content: 'Your account may have been compromized',
            time: '08.00'
        },
        {
            key: 6,
            avatar: images.icon67,
            name: 'Admin',
            title: 'Account Security',
            content: 'Your account may have been compromized',
            time: '08.00'
        },
        {
            key: 7,
            avatar: images.icon67,
            name: 'Admin',
            title: 'Account Security',
            content: 'Your account may have been compromized',
            time: '08.00'
        },
        {
            key: 8,
            avatar: images.icon67,
            name: 'Admin',
            title: 'Account Security',
            content: 'Your account may have been compromized',
            time: '08.00'
        },
        {
            key: 9,
            avatar: images.icon67,
            name: 'Admin',
            title: 'Account Security',
            content: 'Your account may have been compromized',
            time: '08.00'
        },
        {
            key: 10,
            avatar: images.icon67,
            name: 'Admin',
            title: 'Account Security',
            content: 'Your account may have been compromized',
            time: '08.00'
        },
        {
            key: 11,
            avatar: images.icon67,
            name: 'Admin',
            title: 'Account Security',
            content: 'Your account may have been compromized',
            time: '08.00'
        },
        {
            key: 12,
            avatar: images.icon67,
            name: 'Admin',
            title: 'Account Security',
            content: 'Your account may have been compromized',
            time: '08.00'
        },
        {
            key: 13,
            avatar: images.icon67,
            name: 'Admin',
            title: 'Account Security',
            content: 'Your account may have been compromized',
            time: '08.00'
        },
        {
            key: 14,
            avatar: images.icon67,
            name: 'Admin',
            title: 'Account Security',
            content: 'Your account may have been compromized',
            time: '08.00'
        },
    ],

    historyShoppingData: [
        {
            key: 1,
            avatar: images.icon67,
            name: 'Admin',
            orderNumber: 'INV/20170908/XVII/IX/102809987',
            date: '08 September 2017',
            sender: 'Tokodistributor',
            status: 'Transaksi selesai',
            recieptNumber: 'GK-36656240'
        },
        {
            key: 2,
            avatar: images.icon67,
            name: 'Admin',
            orderNumber: 'INV/20170908/XVII/IX/102809987',
            date: '08 September 2017',
            sender: 'Tokodistributor',
            status: 'Transaksi belumdibayar',
            recieptNumber: '-'
        },
        {
            key: 3,
            avatar: images.icon67,
            name: 'Admin',
            orderNumber: 'INV/20170908/XVII/IX/102809987',
            date: '08 September 2017',
            sender: 'Tokodistributor',
            status: 'Transaksi selesai',
            recieptNumber: 'GK-36656240'
        },
        {
            key: 4,
            avatar: images.icon67,
            name: 'Admin',
            orderNumber: 'INV/20170908/XVII/IX/102809987',
            date: '08 September 2017',
            sender: 'Tokodistributor',
            status: 'Transaksi belumdibayar',
            recieptNumber: '-'
        },
        {
            key: 5,
            avatar: images.icon67,
            name: 'Admin',
            orderNumber: 'INV/20170908/XVII/IX/102809987',
            date: '08 September 2017',
            sender: 'Tokodistributor',
            status: 'Transaksi selesai',
            recieptNumber: 'GK-36656240'
        },
        {
            key: 6,
            avatar: images.icon67,
            name: 'Admin',
            orderNumber: 'INV/20170908/XVII/IX/102809987',
            date: '08 September 2017',
            sender: 'Tokodistributor',
            status: 'Transaksi belumdibayar',
            recieptNumber: '-'
        },
        {
            key: 7,
            avatar: images.icon67,
            name: 'Admin',
            orderNumber: 'INV/20170908/XVII/IX/102809987',
            date: '08 September 2017',
            sender: 'Tokodistributor',
            status: 'Transaksi selesai',
            recieptNumber: 'GK-36656240'
        },
        {
            key: 8,
            avatar: images.icon67,
            name: 'Admin',
            orderNumber: 'INV/20170908/XVII/IX/102809987',
            date: '08 September 2017',
            sender: 'Tokodistributor',
            status: 'Transaksi belumdibayar',
            recieptNumber: '-'
        },
        {
            key: 9,
            avatar: images.icon67,
            name: 'Admin',
            orderNumber: 'INV/20170908/XVII/IX/102809987',
            date: '08 September 2017',
            sender: 'Tokodistributor',
            status: 'Transaksi selesai',
            recieptNumber: 'GK-36656240'
        },
        {
            key: 10,
            avatar: images.icon67,
            name: 'Admin',
            orderNumber: 'INV/20170908/XVII/IX/102809987',
            date: '08 September 2017',
            sender: 'Tokodistributor',
            status: 'Transaksi belumdibayar',
            recieptNumber: '-'
        },
        {
            key: 11,
            avatar: images.icon67,
            name: 'Admin',
            orderNumber: 'INV/20170908/XVII/IX/102809987',
            date: '08 September 2017',
            sender: 'Tokodistributor',
            status: 'Transaksi selesai',
            recieptNumber: 'GK-36656240'
        },
        {
            key: 12,
            avatar: images.icon67,
            name: 'Admin',
            orderNumber: 'INV/20170908/XVII/IX/102809987',
            date: '08 September 2017',
            sender: 'Tokodistributor',
            status: 'Transaksi belumdibayar',
            recieptNumber: '-'
        },
    ],

    directionsData: [
        {
            key: 1,
            status: 'Head north on JI. Taman Ratu Indah toward JI. Ratu Dahlia IV',
            datetime: '300 m     10 minutes',
            go: 'straight'
        },
        {
            key: 2,
            status: 'Turn left onto JI. Ratu Kamboja',
            datetime: '300 m     10 minutes',
            go: 'left'
        },
        {
            key: 3,
            status: 'Turn left onto Jalan Kedoya Pesing / JI. Kedoya Raya',
            datetime: '300 m     10 minutes',
            go: 'left'
        },
        {
            key: 4,
            status: 'Turn right after Hollan Bakery (on the right) (signs for Kb. Jeruk/Meruya)',
            datetime: '300 m     10 minutes',
            go: 'right'
        },
    ],
    statusDeliveryData: [
        {
            key: 1,
            status: 'Pesanan Dibuat',
            datetime: '08/09/2017 20.25',
        },
        {
            key: 2,
            status: 'Tokodistribuitor telah meneima rincian pesanan anda',
            datetime: '08/09/2017 10.28',
        },
        {
            key: 3,
            status: 'On Process ( KOTA TANGERANG )',
            datetime: '09/09/2017 17.56',
        },
        {
            key: 4,
            status: 'Delivery Time - ON PROCESS ( JAKARTA )',
            datetime: '10/09/2017 08.01',
        },
        {
            key: 5,
            status: 'PPOD Detail - DELIVERED ( JAKARTA BARAT )',
            datetime: '10/09/2017 10.25',
        },
    ],

    searchData: [
        {
            key: 1,
            key: 'Jam Tagan',
        },
        {
            key: 2,
            key: 'Otomotif',
        },
        {
            key: 3,
            key: 'SB253',
        },
    ],

    sortTitleList: [
        {
            key: 1,
            title: 'Paling sesuai',
        },
        {
            key: 2,
            title: 'Terbaru',
        },
        {
            key: 3,
            title: 'Harga Tertinggi',
        },
        {
            key: 4,
            title: 'Harga Terendah',
        },
        {
            key: 5,
            title: 'Promo',
        },
        {
            key: 6,
            title: 'Penjualan',
        },
        {
            key: 7,
            title: 'Ulasan',
        },
    ],
    filterLocationFull: [
        {
            key: 1,
            name: 'GREATER JAKARTA',
        },
        {
            key: 2,
            name: 'DKI KAKARTA',
        },
        {
            key: 3,
            name: 'BANTEN',
        },
        {
            key: 4,
            name: 'SUMATERA SELATAN',
        },
        {
            key: 5,
            name: 'JAWA BARAT',
        },
        {
            key: 6,
            name: 'JAWA TIMUR',
        },
        {
            key: 7,
            name: 'JAWA TENGAH',
        },
        {
            key: 8,
            name: 'KEPULAUAN RIAU',
        },
        {
            key: 9,
            name: 'SUMATERA UTARA',
        },
        {
            key: 10,
            name: 'YOGYAKARTA',
        },
    ],
    filterLocationShort: [
        {
            key: 1,
            name: 'GREATER JAKARTA',
        },
        {
            key: 2,
            name: 'DKI KAKARTA',
        },
        {
            key: 3,
            name: 'BANTEN',
        },
        {
            key: 4,
            name: 'SUMATERA SELATAN',
        },
        {
            key: 5,
            name: 'JAWA BARAT',
        },
        {
            key: 6,
            name: 'JAWA TIMUR',
        },
    ],
    filterTransportSupport: [
        {
            key: 1,
            name: 'JNE REGULAR',
        },
        {
            key: 2,
            name: 'JNE OKE',
        },
        {
            key: 3,
            name: 'J & T EXPRESS',
        },
        {
            key: 4,
            name: 'TIKI',
        },
        {
            key: 5,
            name: 'POS INDONESIA',
        },
    ],
    filterCondition: [
        {
            key: 1,
            name: 'BARU',
        },
        {
            key: 2,
            name: 'BEKAS',
        },
    ],
    bankList: [
        {
            key: 1,
            image: images.bankBCA,
        },
        {
            key: 2,
            image: images.bankBNI,
        },
        {
            key: 3,
            image: images.bankMandiri,
        },
        {
            key: 4,
            image: images.bankBRI,
        },
        {
            key: 5,
            image: images.bankMega,
        },
        {
            key: 6,
            image: images.bankUOB,
        },
        {
            key: 7,
            image: images.bankDanamon,
        },
        {
            key: 8,
            image: images.bankPermata,
        },
        {
            key: 9,
            image: images.bankCIMB,
        },
    ],
    homeTabsData: [
        {
            key: 1,
            name: 'FEATURED',
        },
        {
            key: 2,
            name: 'TOURS',
        },
        {
            key: 3,
            name: 'FREE & EASY',
        },
        {
            key: 4,
            name: 'CRUISE',
        },
        {
            key: 5,
            name: 'HOTELS',
        },
        {
            key: 6,
            name: 'FLIGHTS',
        },
    ],
    searchTabsData: [
        {
            key: 1,
            name: 'TOURS',
        },
        {
            key: 2,
            name: 'FREE & EASY',
        },
        {
            key: 3,
            name: 'CRUISE',
        },
        {
            key: 4,
            name: 'HOTELS',
        },
        {
            key: 5,
            name: 'FLIGHTS',
        },
    ],
    tourTabsData: [
        {
            key: 1,
            name: 'OVERVIEW',
        },
        {
            key: 2,
            name: 'ITINERARY',
        },
        {
            key: 3,
            name: 'BOOK',
        },
    ],
    freeTabsData: [
        {
            key: 1,
            name: 'OVERVIEW',
        },
        {
            key: 2,
            name: 'ITINERARY',
        },
        {
            key: 3,
            name: 'HIGHLIGHTS',
        },
    ],

    hotelTabsData: [
        {
            key: 1,
            name: 'OVERVIEW',
        },
        {
            key: 2,
            name: 'FACILITIES',
        },
        {
            key: 3,
            name: 'ROOMS',
        },
    ],

    cruiseTabsData: [
        {
            key: 1,
            name: 'OVERVIEW',
        },
        {
            key: 2,
            name: 'JOURNEY',
        },
        {
            key: 3,
            name: 'DEPARTURES',
        },
        {
            key: 4,
            name: 'CABIN',
        },
    ],

    homeRecommend: [
        {
            key: 1,
            image: images.trip1,
            name: 'Wild Wild Texas & New Orleans',
            duration: '13D9N',
            duration2: '13 days, 9 nights',
            price: '1418',
            taxes: '85',
            code: 'TLT006'
        },
        {
            key: 2,
            image: images.trip2,
            name: 'Finland Winter Spectacular',
            duration: '10D7N',
            duration2: '10 days, 7 nights',
            price: '5288',
            taxes: '122',
            code: 'TLT006'
        },
        {
            key: 3,
            image: images.trip3,
            name: 'Wild Wild Texas & New Orleans',
            duration: '13D9N',
            duration2: '13 days, 9 nights',
            price: '1418',
            taxes: '85',
            code: 'TLT006'
        },
        {
            key: 4,
            image: images.trip1,
            name: 'Wild Wild Texas & New Orleans',
            duration: '13D9N',
            duration2: '13 days, 9 nights',
            price: '1418',
            taxes: '85',
            code: 'TLT006'
        },
        {
            key: 5,
            image: images.trip2,
            name: 'Finland Winter Spectacular',
            duration: '10D7N',
            duration2: '10 days, 7 nights',
            price: '5288',
            taxes: '122',
            code: 'TLT006'
        },
        {
            key: 6,
            image: images.trip3,
            name: 'Wild Wild Texas & New Orleans',
            duration: '13D9N',
            duration2: '13 days, 9 nights',
            price: '1418',
            taxes: '85',
            code: 'TLT006'
        },
        {
            key: 7,
            image: images.trip1,
            name: 'Wild Wild Texas & New Orleans',
            duration: '13D9N',
            duration2: '13 days, 9 nights',
            price: '1418',
            taxes: '85',
            code: 'TLT006'
        },
        {
            key: 8,
            image: images.trip2,
            name: 'Finland Winter Spectacular',
            duration: '10D7N',
            duration2: '10 days, 7 nights',
            price: '5288',
            taxes: '122',
            code: 'TLT006'
        },
        {
            key: 9,
            image: images.trip3,
            name: 'Wild Wild Texas & New Orleans',
            duration: '13D9N',
            duration2: '13 days, 9 nights',
            price: '1418',
            taxes: '85',
            code: 'TLT006'
        },
    ],

    cruiseSearchResults: [
        {
            key: 1,
            shipName: 'Mariner of the Seas',
            image: images.cruise1,
            logo: images.cruiseLogo1,
            name: 'Thailand & Vietnam Cruise',
            duration: '7N',
            duration2: '7 Nights',
            price: '1418',
            taxes: '85',
            code: '(TLT006)'
        },
        {
            key: 2,
            shipName: 'Mariner of the Seas',
            image: images.cruise2,
            logo: images.cruiseLogo2,
            name: 'Finland Winter Spectacular',
            duration: '5N',
            duration2: '5 Nights',
            price: '5288',
            taxes: '122',
            code: '(TLT006)'
        },
        {
            key: 3,
            shipName: 'Mariner of the Seas',
            image: images.cruise3,
            logo: images.cruiseLogo2,
            name: 'Singapore Weekend Cruise',
            duration: '2N',
            duration2: '2 Nights',
            price: '1418',
            taxes: '85',
            code: '(TLT006)'
        },
        {
            key: 4,
            shipName: 'Mariner of the Seas',
            image: images.cruise4,
            logo: images.cruiseLogo1,
            name: 'Singapore Weekend Cruise',
            duration: '2N',
            duration2: '2 Nights',
            price: '1418',
            taxes: '85',
            code: '(TLT006)'
        },
        {
            key: 5,
            shipName: 'Mariner of the Seas',
            image: images.cruise1,
            logo: images.cruiseLogo1,
            name: 'Thailand & Vietnam Cruise',
            duration: '7N',
            duration2: '7 Nights',
            price: '1418',
            taxes: '85',
            code: '(TLT006)'
        },
        {
            key: 6,
            shipName: 'Mariner of the Seas',
            image: images.cruise2,
            logo: images.cruiseLogo2,
            name: 'Finland Winter Spectacular',
            duration: '5N',
            duration2: '5 Nights',
            price: '5288',
            taxes: '122',
            code: '(TLT006)'
        },
        {
            key: 7,
            shipName: 'Mariner of the Seas',
            image: images.cruise3,
            logo: images.cruiseLogo2,
            name: 'Singapore Weekend Cruise',
            duration: '2N',
            duration2: '2 Nights',
            price: '1418',
            taxes: '85',
            code: '(TLT006)'
        },
        {
            key: 8,
            shipName: 'Mariner of the Seas',
            image: images.cruise4,
            logo: images.cruiseLogo1,
            name: 'Singapore Weekend Cruise',
            duration: '2N',
            duration2: '2 Nights',
            price: '1418',
            taxes: '85',
            code: '(TLT006)'
        },
        {
            key: 9,
            shipName: 'Mariner of the Seas',
            image: images.cruise4,
            logo: images.cruiseLogo1,
            name: 'Singapore Weekend Cruise',
            duration: '2N',
            duration2: '2 Nights',
            price: '1418',
            taxes: '85',
            code: '(TLT006)'
        },
    ],

    hotelsSearchResults: [
        {
            key: 1,
            location: 'Taipei, Taiwan',
            stars: 4,
            name: 'Cho Hotel',
            price: '340',
            image: images.hotel1,
        },
        {
            key: 2,
            location: 'Taipei, Taiwan',
            stars: 2,
            name: 'The Sherwood Taipei',
            price: '230',
            image: images.hotel2,
        },
        {
            key: 3,
            location: 'Taipei, Taiwan',
            stars: 3,
            name: 'Grand Hyatt Taipei',
            price: '340',
            image: images.hotel3,
        },
        {
            key: 4,
            location: 'Taipei, Taiwan',
            stars: 5,
            name: 'Shangri-La\'s Far Eastern Plaza Hotels Eastern Plaza Hotels',
            price: '340',
            image: images.hotel4,
        },
        {
            key: 5,
            location: 'Taipei, Taiwan',
            stars: 4,
            name: 'Cho Hotel',
            price: '340',
            image: images.hotel1,
        },
        {
            key: 6,
            location: 'Taipei, Taiwan',
            stars: 2,
            name: 'The Sherwood Taipei',
            price: '230',
            image: images.hotel2,
        },
        {
            key: 7,
            location: 'Taipei, Taiwan',
            stars: 3,
            name: 'Grand Hyatt Taipei',
            price: '340',
            image: images.hotel3,
        },
        {
            key: 8,
            location: 'Taipei, Taiwan',
            stars: 5,
            name: 'Shangri-La\'s Far Eastern Plaza Hotels Eastern Plaza Hotels',
            price: '340',
            image: images.hotel4,
        },
    ],

    hotelsHomeData: [
        {
            key: 1,
            name: 'New York Hotel',
            location: 'New York, NY United States',
            price: '5288',
            stars: 4,
            image: images.hotelDes1,
        },
        {
            key: 2,
            name: 'Shanghai Hotel',
            location: 'Shanghai, China',
            price: '19418',
            stars: 4,
            image: images.hotelDes2,
        },
        {
            key: 3,
            name: 'Busan Hotel',
            location: 'Busan, South Korea',
            price: '5288',
            stars: 4,
            image: images.hotelDes3,
        },
        {
            key: 4,
            name: 'Barcelona Hotel',
            location: 'Barcelona, Spain',
            price: '19418',
            stars: 4,
            image: images.hotelDes4,
        },
    ],

    flightsHomeData: [
        {
            key: 1,
            location: 'New York, NY United States',
            price: '5288',
            image: images.hotelDes1,
            taxes: 122
        },
        {
            key: 2,
            location: 'Shanghai, China',
            price: '19418',
            image: images.hotelDes2,
            taxes: 550
        },
        {
            key: 3,
            location: 'Busan, South Korea',
            price: '5288',
            image: images.hotelDes3,
            taxes: 122
        },
        {
            key: 4,
            location: 'Barcelona, Spain',
            price: '19418',
            image: images.hotelDes4,
            taxes: 550
        },
    ],

    destinations: [
        {
            key: 1,
            shortName: 'Seoul',
            fullName: 'Seoul, Sounth Korea',
        },
        {
            key: 2,
            shortName: 'Tokyo',
            fullName: 'Tokyo, Japan',
        },
        {
            key: 3,
            shortName: 'Paris',
            fullName: 'Paris, France',
        },
        {
            key: 4,
            shortName: 'Singapore',
            fullName: 'Singapore, Singapore',
        },
        {
            key: 5,
            shortName: 'Hong Kong',
            fullName: 'Hong Kong, Hong Kong',
        },
    ],
    monthList: [
        {
            key: 1,
            name: 'Jan',
            upName: 'JAN',
        },
        {
            key: 2,
            name: 'Feb',
            upName: 'FEB',
        },
        {
            key: 3,
            name: 'Mar',
            upName: 'MAR',
        },
        {
            key: 4,
            name: 'Apr',
            upName: 'APR',
        },
        {
            key: 5,
            name: 'May',
            upName: 'MAY',
        },
        {
            key: 6,
            name: 'Jun',
            upName: 'JUN',
        },
        {
            key: 7,
            name: 'Jul',
            upName: 'JUL',
        },
        {
            key: 8,
            name: 'Aug',
            upName: 'AUG',
        },
        {
            key: 9,
            name: 'Sep',
            upName: 'SEP',
        },
        {
            key: 10,
            name: 'Oct',
            upName: 'OCT',
        },
        {
            key: 11,
            name: 'Nov',
            upName: 'NOV',
        },
        {
            key: 12,
            name: 'Dec',
            upName: 'DEC',
        },
    ],
    cruiseLineList: [
        {
            key: 1,
            name: 'Celebrity',
        },
        {
            key: 2,
            name: 'Royal Carribean',
        },
        {
            key: 3,
            name: 'Dream',
        },
        {
            key: 4,
            name: 'Seabourn',
        },
        {
            key: 5,
            name: 'Star',
        },
        {
            key: 6,
            name: 'Princess',
        },
        {
            key: 7,
            name: 'Aegean Odyssey',
        },
        {
            key: 8,
            name: 'Phoenix Reisen',
        },
        {
            key: 9,
            name: 'Carnival',
        },
        {
            key: 10,
            name: 'Clipper Group',
        },
        {
            key: 11,
            name: 'China Eastern',
        },
        {
            key: 12,
            name: 'Costa',
        },
        {
            key: 13,
            name: 'Crytal',
        },
        {
            key: 14,
            name: 'Cunard',
        },
        {
            key: 15,
            name: 'Orient Lines',
        },
        {
            key: 16,
            name: 'Black Sea',
        },
        {
            key: 17,
            name: 'Regent Seven Seas',
        },
        {
            key: 18,
            name: 'Silversea',
        },
    ],
    shipNames: [
        {
            key: 1,
            name: 'Constellation',
        },
        {
            key: 2,
            name: 'Silhouette',
        },
        {
            key: 3,
            name: 'Eclipse',
        },
        {
            key: 4,
            name: 'Solstice',
        },
        {
            key: 5,
            name: 'Edge',
        },
        {
            key: 6,
            name: 'Summit',
        },
        {
            key: 7,
            name: 'Equinox',
        },
        {
            key: 8,
            name: 'Xpedition',
        },
        {
            key: 9,
            name: 'Infinity',
        },
        {
            key: 10,
            name: 'Xperience',
        },
        {
            key: 11,
            name: 'Milennium',
        },
        {
            key: 12,
            name: 'Xploration',
        },
        {
            key: 13,
            name: 'Reflection',
        },
    ],

    hotelFacilities: [
        {
            key: 1,
            name: 'Internet Access',
            icon: images.internetaccessGrey,
        },
        {
            key: 2,
            name: 'Pet Friendly',
            icon: images.petfriendlyGrey,
        },
        {
            key: 3,
            name: 'Bar',
            icon: images.drinkingGrey,
        },
        {
            key: 4,
            name: 'Pool',
            icon: images.poolGrey,
        },
        {
            key: 5,
            name: 'Childcare',
            icon: images.childcareGrey,
        },
        {
            key: 6,
            name: 'Restaurant',
            icon: images.restaurantGrey,
        },
        {
            key: 7,
            name: 'Gym',
            icon: images.gymGrey,
        },
        {
            key: 8,
            name: 'Spa',
            icon: images.spaGrey,
        },
        {
            key: 9,
            name: 'Business Facilities',
            icon: images.freeBreakfastGrey,
        },
        {
            key: 10,
            name: 'Meeting Facilities',
            icon: images.meetingFacilitiesGrey,
        },
        {
            key: 11,
            name: 'Airport Transfer',
            icon: images.airporttransferGrey,
        },
        {
            key: 12,
            name: 'Parking Available',
            icon: images.parkingGrey,
        },
    ],

    hotelFacilities1: [
        {
            key: 1,
            name: 'Internet Access',
            icon: images.internetaccessGrey,
        },
        {
            key: 2,
            name: 'Bar',
            icon: images.drinkingGrey,
        },
        {
            key: 3,
            name: 'Pool',
            icon: images.poolGrey,
        },
        {
            key: 4,
            name: 'Restaurant',
            icon: images.restaurantGrey,
        },
        {
            key: 5,
            name: 'Business Facilities',
            icon: images.freeBreakfastGrey,
        },
        {
            key: 6,
            name: 'Meeting Facilities',
            icon: images.meetingFacilitiesGrey,
        },
        {
            key: 7,
            name: 'Airport Transfer',
            icon: images.airporttransferGrey,
        },
        {
            key: 8,
            name: 'Parking Available',
            icon: images.parkingGrey,
        },
    ],

    roomFacilities: [
        {
            key: 1,
            name: 'Bathtub',
            icon: images.bathtubGrey,
        },
        {
            key: 2,
            name: 'Kitchen',
            icon: images.kitchenGrey,
        },
        {
            key: 3,
            name: 'Connecting Rooms',
            icon: images.connectingroomsGrey,
        },
        {
            key: 4,
            name: 'Non-smoking',
            icon: images.nonsmokingGrey,
        },
        {
            key: 5,
            name: 'Free Breakfast',
            icon: images.freeBreakfastGrey,
        },
        {
            key: 6,
            name: 'Cribs Available',
            icon: images.cribsavailableGrey,
        },
        {
            key: 7,
            name: 'Free Parking',
            icon: images.parkingGrey,
        },
        {
            key: 8,
            name: 'Free Wifi',
            icon: images.wifiGrey,
        },
    ],
    stars: [
        {
            key: 1,
            starNumber: 5,
        },
        {
            key: 2,
            starNumber: 2,
        },
        {
            key: 3,
            starNumber: 4,
        },
        {
            key: 4,
            starNumber: 1,
        },
        {
            key: 5,
            starNumber: 3,
        },
    ],

    airlineList: [
        {
            key: 1,
            name: 'Air Asia',
        },
        {
            key: 2,
            name: 'Korean Air',
        },
        {
            key: 3,
            name: 'Air India',
        },
        {
            key: 4,
            name: 'Malaysia Airlines',
        },
        {
            key: 5,
            name: 'ANA',
        },
        {
            key: 6,
            name: 'Malindo Air',
        },
        {
            key: 7,
            name: 'Cathay Pacific',
        },
        {
            key: 8,
            name: 'Philippines Airlines',
        },
        {
            key: 9,
            name: 'China Airlines',
        },
        {
            key: 10,
            name: 'Scoot',
        },
        {
            key: 11,
            name: 'China Eastern',
        },
        {
            key: 12,
            name: 'Thai Airways Intl',
        },
        {
            key: 13,
            name: 'Cathay Pacific',
        },
        {
            key: 14,
            name: 'Vietnam Airlines',
        },
        {
            key: 15,
            name: 'Japan Airlines',
        },
        {
            key: 16,
            name: 'Xiamen Airlines',
        },
        {
            key: 17,
            name: 'Jetstar Asia',
        },
        {
            key: 18,
            name: 'Multiple Airlines',
        },
    ],

    cabinClasses: [
        {
            key: 1,
            name: 'Economy',
            fullName: 'Economy Class',
        },
        {
            key: 2,
            name: 'Business',
            fullName: 'Business Class',
        },
        {
            key: 3,
            name: 'Premium Economy',
            fullName: 'Premium Economy Class',
        },
        {
            key: 4,
            name: 'First Class',
            fullName: 'First Class',
        },
    ],

    flightWays: [
        {
            key: 1,
            name: 'Return Flight',
        },
        {
            key: 2,
            name: 'One-way Flight',
        },
    ],

    useMostList: [
        {
            key: 1,
            name: 'Group Tours',
        },
        {
            key: 2,
            name: 'Free & Easy',
        },
        {
            key: 3,
            name: 'Cruises',
        },
        {
            key: 4,
            name: 'Hotels',
        },
        {
            key: 5,
            name: 'Flights',
        },
    ],

    flightResults: [
        {
            key: 1,
            logo: images.singAirlines,
            stop: 1,
            price: 1680,
            priceInfo: 2568,
            tax: 60,
            flights:
                [
                    {
                        date: '22 Dec 2017',
                        start: 'SIN 00:45',
                        end: 'OOL 11:40',
                        duration: '10h 30m',
                        stop: '1 stops, SYD',
                        min: '',
                    },
                    {
                        date: '30 Dec 2017',
                        start: 'MEL 19:25',
                        end: 'SIN 00:05',
                        duration: '7h 40m',
                        stop: '',
                        min: '+1',
                    },
                ],
        },

        {
            key: 2,
            logo: images.singAirlines,
            stop: 1,
            price: 1680,
            priceInfo: 0,
            tax: 0,
            flights:
                [
                    {
                        date: '22 Dec 2017',
                        start: 'SIN 00:45',
                        end: 'OOL 11:40',
                        duration: '10h 30m',
                        stop: '1 stops, SYD',
                        min: '',
                    },
                    {
                        date: '30 Dec 2017',
                        start: 'MEL 19:25',
                        end: 'SIN 00:05',
                        duration: '7h 40m',
                        stop: '',
                        min: '+1',
                    },
                ],
        },
    ],

    flightTabs: [
        {
            key: 1,
            name: 'FEATURED',
        },
        {
            key: 2,
            name: 'TOURS',
        },
    ],

    tourItinerary: [
        {
            key: 1,
            name: 'Singapor - Taoyuan - Yilan',
            content: [
                'E-DA Theme Park - Greek Aegean Sea Style them park',
                'E-DA Outlet Mall - Shopping with over 300 well-known shops!',
                'Leo Ho Night Market - Famous for delicious seafood and wide variety of clothing and accessories!',
            ]
        },
        {
            key: 2,
            name: 'Yilan - Hualien - Taitung',
            content: [
                'E-DA Theme Park - Greek Aegean Sea Style them park',
                'E-DA Outlet Mall - Shopping with over 300 well-known shops!',
                'Leo Ho Night Market - Famous for delicious seafood and wide variety of clothing and accessories!',
            ]
        },
        {
            key: 3,
            name: 'Taitung - Kaosiung',
            content: [
                'E-DA Theme Park - Greek Aegean Sea Style them park',
                'E-DA Outlet Mall - Shopping with over 300 well-known shops!',
                'Leo Ho Night Market - Famous for delicious seafood and wide variety of clothing and accessories!',
            ]
        },
        {
            key: 4,
            name: 'Kaosiung - Tainan - Nantou',
            content: [
                'E-DA Theme Park - Greek Aegean Sea Style them park',
                'E-DA Outlet Mall - Shopping with over 300 well-known shops!',
                'Leo Ho Night Market - Famous for delicious seafood and wide variety of clothing and accessories!',
            ]
        },
        {
            key: 5,
            name: 'Natou - Taichung - Hsinchu',
            content: [
                'E-DA Theme Park - Greek Aegean Sea Style them park',
                'E-DA Outlet Mall - Shopping with over 300 well-known shops!',
                'Leo Ho Night Market - Famous for delicious seafood and wide variety of clothing and accessories!',
            ]
        },
        {
            key: 6,
            name: 'Hsinchu - Taipei',
            content: [
                'E-DA Theme Park - Greek Aegean Sea Style them park',
                'E-DA Outlet Mall - Shopping with over 300 well-known shops!',
                'Leo Ho Night Market - Famous for delicious seafood and wide variety of clothing and accessories!',
            ]
        },
        {
            key: 7,
            name: 'Taipei',
            content: [
                'E-DA Theme Park - Greek Aegean Sea Style them park',
                'E-DA Outlet Mall - Shopping with over 300 well-known shops!',
                'Leo Ho Night Market - Famous for delicious seafood and wide variety of clothing and accessories!',
            ]
        },
        {
            key: 8,
            name: 'Taipei - Taoyuan - Singapore',
            content: [
                'E-DA Theme Park - Greek Aegean Sea Style them park',
                'E-DA Outlet Mall - Shopping with over 300 well-known shops!',
                'Leo Ho Night Market - Famous for delicious seafood and wide variety of clothing and accessories!',
            ]
        },

    ],

    freeItinerary: [
        {
            key: 1,
            name: 'Adelaide City Highlights',
            content: [
                'Full Day Coach tour with expert commnetary by a local driver/guide',
                'Victor Harbour - Enjoy the esplanade dotted with local crafts and cafes',
                'McLaren Vale - Sample an array of local produce and wine tastings at nearby cellar door',
            ]
        },
        {
            key: 2,
            name: 'Adelaide Hills & Hahndorf Tour',
            content: [
                'Full Day Coach tour with expert commnetary by a local driver/guide',
                'Victor Harbour - Enjoy the esplanade dotted with local crafts and cafes',
                'McLaren Vale - Sample an array of local produce and wine tastings at nearby cellar door',
            ]
        },
        {
            key: 3,
            name: 'Victor Harbour & McLaren Highlights',
            content: [
                'Full Day Coach tour with expert commnetary by a local driver/guide',
                'Victor Harbour - Enjoy the esplanade dotted with local crafts and cafes',
                'McLaren Vale - Sample an array of local produce and wine tastings at nearby cellar door',
            ]
        },
        {
            key: 4,
            name: 'Barossa Food & Wine Experience',
            content: [
                'Full Day Coach tour with expert commnetary by a local driver/guide',
                'Victor Harbour - Enjoy the esplanade dotted with local crafts and cafes',
                'McLaren Vale - Sample an array of local produce and wine tastings at nearby cellar door',
            ]
        },
    ],

    packages: [
        {
            key: 1,
            month: 'OCT',
            day: '24 - 31',
            airline: 'Singapore Airlines',
            price: 1818,
            confirm: false,
        },
        {
            key: 2,
            month: 'OCT - NOV',
            day: '26 - 2',
            airline: 'China Airlines',
            price: 1955,
            confirm: false,
        },
        {
            key: 3,
            month: 'OCT - NOV',
            day: '27 - 3',
            airline: 'China Airlines',
            price: 1985,
            confirm: false,
        },
        {
            key: 4,
            month: 'OCT - NOV',
            day: '27 - 3',
            airline: 'China Airlines',
            price: 1985,
            confirm: true,
        },
        {
            key: 5,
            month: 'OCT - NOV',
            day: '27 - 3',
            airline: 'China Airlines',
            price: 1985,
            confirm: false,
        },
    ],
    calList: [
        "2018-05-01",
        "2018-06-01",
        "2018-07-01",
        "2018-08-01",
        "2018-09-01",
        "2018-10-01",
        "2018-11-01",
        "2018-12-01",
    ],

    highlights: [
        {
            key: 1,
            name: 'Audio Headsets fro flexible signtseeing',
        },
        {
            key: 1,
            name: 'Audio Headsets fro flexible signtseeing',
        },
        {
            key: 2,
            name: 'Daily breakfast and an average of 50% of evening meals',
        },
        {
            key: 3,
            name: 'Luxury air-conditioned coach with WIFI in most countries or alternative transportion (such ar rail journeys)',
        },
        {
            key: 4,
            name: 'Travel by luxury air - consitioned coach with reclining seats',
        },
        {
            key: 5,
            name: 'Cherry-picked hotels, all tried and trusted',
        },
        {
            key: 6,
            name: 'Hotel accomodation featuring twin rooms and private facilities',
        },
        {
            key: 7,
            name: 'Hand-picked Insider Experiences',
        },
        {
            key: 8,
            name: 'Optional Experiences and free time',
        },
        {
            key: 9,
            name: 'All porterage and restaurant grauilities',
        },
    ],

    freeAndEasyList: [
        {
            key: 1,
            image: images.free1,
            name: 'Tasmanian Food & Nature',
            duration: '13D9N',
            duration2: '13 days, 9 nights',
            price: '500',
            taxes: '122',
            code: 'TLT006'
        },
        {
            key: 2,
            image: images.free2,
            name: 'Adelaide Easy Pace',
            duration: '10D7N',
            duration2: '10 days, 7 nights',
            price: '200',
            taxes: '85',
            code: 'TLT006'
        },
        {
            key: 3,
            image: images.free3,
            name: 'Best Of Morocco',
            duration: '13D9N',
            duration2: '13 days, 9 nights',
            price: '912',
            taxes: '500',
            code: 'TLT006'
        },
        {
            key: 1,
            image: images.free1,
            name: 'Tasmanian Food & Nature',
            duration: '13D9N',
            duration2: '13 days, 9 nights',
            price: '500',
            taxes: '122',
            code: 'TLT006'
        },
        {
            key: 2,
            image: images.free2,
            name: 'Adelaide Easy Pace',
            duration: '10D7N',
            duration2: '10 days, 7 nights',
            price: '200',
            taxes: '85',
            code: 'TLT006'
        },
        {
            key: 3,
            image: images.free3,
            name: 'Best Of Morocco',
            duration: '13D9N',
            duration2: '13 days, 9 nights',
            price: '912',
            taxes: '500',
            code: 'TLT006'
        },
    ],

    roomList: [
        {
            key: 1,
            image: images.room1,
            name: 'Superior Room',
            window: 'No Window',
            info: '27 sq m',
            bed: '1 Double bed',
            adults: 2,
            children: 1,
            price: 236,
        },
        {
            key: 1,
            image: images.room1,
            name: 'Superior Room',
            window: 'No Window',
            info: '27 sq m',
            bed: '1 Double bed',
            adults: 2,
            children: 1,
            price: 236,
        },
        {
            key: 1,
            image: images.room1,
            name: 'Superior Room',
            window: 'No Window',
            info: '27 sq m',
            bed: '1 Double bed',
            adults: 2,
            children: 1,
            price: 236,
        },
        {
            key: 1,
            image: images.room1,
            name: 'Superior Room',
            window: 'No Window',
            info: '27 sq m',
            bed: '1 Double bed',
            adults: 2,
            children: 1,
            price: 236,
        },
    ],

    deckList: [
        {
            key: 1,
            image: images.ship1,
            name: 'Garden Penthouse',
            window: 'Room with View',
            info: '27 sq m',
            bed: '1 Queen bed',
            adults: 2,
            children: 1,
            price: 19818,
        },
        {
            key: 2,
            image: images.ship1,
            name: 'Garden Penthouse',
            window: 'Room with View',
            info: '27 sq m',
            bed: '1 Queen bed',
            adults: 2,
            children: 1,
            price: 19818,
        },
        {
            key: 3,
            image: images.ship1,
            name: 'Garden Penthouse',
            window: 'Room with View',
            info: '27 sq m',
            bed: '1 Queen bed',
            adults: 2,
            children: 1,
            price: 19818,
        },
        {
            key: 4,
            image: images.ship1,
            name: 'Garden Penthouse',
            window: 'Room with View',
            info: '27 sq m',
            bed: '1 Queen bed',
            adults: 2,
            children: 1,
            price: 19818,
        },
    ],

    addonsSim: [
        {
            key: 1,
            image: images.simImage1,
            name: 'Singtel',
            com: 'Autralia Travel Ready',
            call: 100,
            sms: 100,
            sim: 2,
            valid: 2,
            price: 28,
        },
        {
            key: 2,
            image: images.simImage2,
            name: 'M1',
            com: 'Autralia Travel Basic',
            call: 100,
            sms: 100,
            sim: 2,
            valid: 2,
            price: 35,
        },
    ],

    addonsTransfer: [
        {
            key: 1,
            image: images.transferImage1,
            name: 'Shared Shuttle',
            com: 'Taiwan Taoyuan International Airport',
            people: 2,
            luggage: 2,
            time: 45,
            valid: 2,
            price: 68,
        },
        {
            key: 2,
            image: images.transferImage2,
            name: 'Private Standard Car',
            com: 'Taiwan Taoyuan International Airport',
            people: 3,
            luggage: 4,
            time: 45,
            valid: 2,
            price: 68,
        },
    ],

    optTours: [
        {
            key: 1,
            image: images.opt1,
        },
        {
            key: 2,
            image: images.opt2,
        },
        {
            key: 3,
            image: images.opt1,
        },
        {
            key: 4,
            image: images.opt2,
        },
        {
            key: 5,
            image: images.opt1,
        },
    ],
    breifings: [
        {
            key: 1,
            image: images.breif1,
            name: 'Amazing Hong Kong, Shenzhen & Macau',
            duration: '15 Jun 2018 - 20 Jun 2018',
            pointStatus: 0,
        },
        {
            key: 2,
            image: images.breif2,
            name: 'Taiwan Family Fun',
            duration: '15 Jun 2018 - 20 Jun 2018',
            pointStatus: 1,
        },
        {
            key: 3,
            image: images.breif3,
            name: 'Finland Winter Spectacular',
            duration: '15 Jun 2018 - 20 Jun 2018',
            pointStatus: 2,
        },

    ],

    briefings2: [
        {
            key: 1,
            image: images.breif1,
            name: 'Amazing Hong Kong, Shenzhen & Macau',
            duration: '15 Jun 2018 - 20 Jun 2018'
        },
    ],

    valiList: [
        {
            key: 1,
            tagImage: images.luggageTag3,
            valiImage: images.vali1,
            valiOpenImage: images.valiOpen1,
        },
        {
            key: 2,
            tagImage: images.luggageTag5,
            valiImage: images.vali2,
            valiOpenImage: images.valiOpen2,
        },
        {
            key: 3,
            tagImage: images.luggageTag7,
            valiImage: images.vali3,
            valiOpenImage: images.valiOpen3,
        },
        {
            key: 4,
            tagImage: images.luggageTag3,
            valiImage: images.vali1,
            valiOpenImage: images.valiOpen1,
        },
        {
            key: 5,
            tagImage: images.luggageTag5,
            valiImage: images.vali2,
            valiOpenImage: images.valiOpen2,
        },
        {
            key: 6,
            tagImage: images.luggageTag7,
            valiImage: images.vali3,
            valiOpenImage: images.valiOpen3,
        },
    ],
    rewardTabsData: [
        {
            key: 1,
            name: 'REDEEM',
        },
        {
            key: 2,
            name: 'STORE',
        },
        {
            key: 3,
            name: 'HISTORY',
        },
    ],
    vouchers: [
        {
            key: 1,
            money: 10,
            points: 150,
        },
        {
            key: 1,
            money: 50,
            points: 100,
        },
        {
            key: 1,
            money: 10,
            points: 150,
        },
        {
            key: 1,
            money: 100,
            points: 50,
        },
        {
            key: 1,
            money: 200,
            points: 50,
        }, {
            key: 1,
            money: 10,
            points: 150,
        }
    ],
    cartdata: [
        {
            key: 1,
            type: 'Tours',
            image: images.cart1,
            title: 'Amazing Hong Kong, Shenzhen & Macau',
            date: '15 Jun 2018 - 20 Jun 2018',
            info: '6D5N: 1 pax, 1 room',
            price: 1830,
            deposit: 500,
            addons: [
                {
                    title: 'Travel Sim',
                    number: '1',
                    price: 28,
                    info: 'Singtel - Hongkong Travel Ready'
                },
                {
                    title: 'Travel Insurance',
                    number: '5 days',
                    price: 60,
                    info: 'Aviva - Travel Basic'
                }
            ],
            travellers: [
                {
                    name: 'Yugene Lee',
                    nationality: 'Singaporean',
                    birthday: '1 Feb 1980',
                    passportno: 'E1234567A',
                    country: 'Singapore',
                    passportexpire: '31 Dec 2018',
                },
            ]
        },
        {
            key: 2,
            type: 'Tours',
            image: images.cart2,
            title: 'Taiwan Family Fun',
            date: '3 Aug 2018 - 8 Aug 2018',
            info: '6D5N: 2 pax, 1 room',
            price: 1758,
            deposit: 400,
            travellers: [
                {
                    name: 'Yugene Lee',
                    nationality: 'Singaporean',
                    birthday: '1 Feb 1980',
                    passportno: 'E1234567A',
                    country: 'Singapore',
                    passportexpire: '31 Dec 2018',
                },
                {
                    name: 'Jodie Lee',
                    nationality: 'Singaporean',
                    birthday: '31 Aug 1993',
                    passportno: 'E1234523A',
                    country: 'Singapore',
                    passportexpire: '31 Dec 2018',
                },
            ]
        },
        {
            key: 3,
            type: 'Free & Easy',
            image: images.cart3,
            title: 'Adelaide Easy Pace',
            subTitle: 'Adelaide Australia',
            date: '10 Dec 2018 - 20 Dec 2018',
            info: '10D9N: 1 pax, 1 room',
            price: 19418,
            deposit: 100,
            travellers: [
                {
                    name: 'Yugene Lee',
                    nationality: 'Singaporean',
                    birthday: '1 Feb 1980',
                    passportno: 'E1234567A',
                    country: 'Singapore',
                    passportexpire: '31 Dec 2018',
                },
            ]
        },
    ],

    profileData: [
        {
            key: 1,
            title: "My Bookings",
            onoff: false,
            bottomLine: true,
            arrow: false,
            topSpace: false,
        },
        {
            key: 2,
            title: "Redemption History",
            onoff: false,
            bottomLine: true,
            arrow: false,
            topSpace: false,
        },
        {
            key: 3,
            title: "Insurance",
            onoff: false,
            bottomLine: true,
            arrow: false,
            topSpace: false,
        },
        {
            key: 4,
            title: "Feedback Survey",
            onoff: false,
            bottomLine: true,
            arrow: false,
            topSpace: false,
        },
        {
            key: 5,
            title: "App Notifications",
            onoff: true,
            bottomLine: false,
            arrow: false,
            topSpace: false,
        },
        {
            key: 6,
            title: "About",
            onoff: false,
            bottomLine: true,
            arrow: true,
            topSpace: true,
        },
        {
            key: 7,
            title: "Terms",
            onoff: false,
            bottomLine: false,
            arrow: true,
            topSpace: false,
        },
    ],

    profileLoginData: [
        {
            key: 0,
            title: "Edit Profile",
            onoff: false,
            bottomLine: true,
            arrow: false,
            topSpace: false,
        },
        {
            key: 1,
            title: "My Bookings",
            onoff: false,
            bottomLine: true,
            arrow: false,
            topSpace: false,
        },
        {
            key: 2,
            title: "Redemption History",
            onoff: false,
            bottomLine: true,
            arrow: false,
            topSpace: false,
        },
        {
            key: 3,
            title: "Insurance",
            onoff: false,
            bottomLine: true,
            arrow: false,
            topSpace: false,
        },
        {
            key: 4,
            title: "Feedback Survey",
            onoff: false,
            bottomLine: true,
            arrow: false,
            topSpace: false,
        },
        {
            key: 5,
            title: "App Notifications",
            onoff: true,
            bottomLine: false,
            arrow: false,
            topSpace: false,
        },
        {
            key: 6,
            title: "About",
            onoff: false,
            bottomLine: true,
            arrow: true,
            topSpace: true,
        },
        {
            key: 7,
            title: "Terms",
            onoff: false,
            bottomLine: true,
            arrow: true,
            topSpace: false,
        },
        {
            key: 8,
            title: "General Hel/Bug Report",
            onoff: false,
            bottomLine: false,
            arrow: false,
            topSpace: false,
        },
    ],
    genders: [
        {
            key: 0,
            title: 'Male',
        },
        {
            key: 1,
            title: 'Female',
        },
        {
            key: 2,
            title: 'Not Specified',
        }
    ],
    aboutData: [
        {
            key: 0,
            title: "About Us",
            onoff: false,
            bottomLine: true,
            arrow: true,
            topSpace: true,
            rightImage: false,
            imageSource : null,
        },
        {
            key: 1,
            title: "FAQs",
            onoff: false,
            bottomLine: true,
            arrow: true,
            topSpace: false,
            rightImage: false,
            imageSource: null,
        },
        {
            key: 2,
            title: "Like us on Facebook",
            onoff: false,
            bottomLine: true,
            arrow: false,
            topSpace: false,
            rightImage: true,
            imageSource: images.iconFacebook,
        },
        {
            key: 3,
            title: "Follow us on Instagram",
            onoff: false,
            bottomLine: true,
            arrow: false,
            topSpace: false,
            rightImage: true,
            imageSource: images.iconInstagram,
        }
    ],

    redemptionTabsData: [
        {
            key: 1,
            name: 'POINTS',
        },
        {
            key: 2,
            name: 'TOKENS',
        },
    ],

    zoneData: [
        {
            key: 1,
            title: 'Zone 1',
            content: 'Malaysia, Indonesia, Vietnam, Myanmar*, Cambodia, Philippines, Brunei, Laos',
        },
        {
            key: 2,
            title: 'Zone 2',
            content: 'Zone 1\n+\nChina, Hong Kong, Taiwan, Thailand, Macau, Maldives, Bangladesh, India, Mongolia, Pakistan, Sri Lanka, Bahrain, Kuwait, Qatar, Oman, United Arab Emirates, Argentina, Belize, Bolivia, Brazil, Chile, Colombia, Costa Rica, Ecuador, El Salvador, Guatemala, Guyana, Honduras, Mexico, Nicaragua, Panama, Paraguay, Peru, Suriname, Uruguay, Venezuela',
        },
        {
            key: 3,
            title: 'Zone 3',
            content: 'Zone 2\n+\nAustralia, Japan, Korea, New Zealand, Nepal, Tibet, and the rest of the world (excl. Afghanistan, Cuba, Democratic Republic of Congo, Iran, Iraq, Liberia, Sudan and Syria)',
        },
    ],

    apps: [
        {
            key: 0,
            title: 'APP 1',
        },
        {
            key: 1,
            title: 'APP 2',
        },
        {
            key: 2,
            title: 'APP 3',
        }
    ],
    deviceData: [
        {
            key: 0,
            title: 'BEACON-1',
            info: 'Lorem ipsum dolor',
            type: 'beacon',
        },
        {
            key: 1,
            title: 'BEACON-3',
            info: 'Lorem ipsum dolor',
            type: 'beacon',
        },
        {
            key: 2,
            title: 'READER-5',
            info: 'Lorem ipsum dolor',
            type: 'reader',
        },
        {
            key: 3,
            title: 'READER-9',
            info: 'Lorem ipsum dolor',
            type: 'reader',
        }

    ],
};