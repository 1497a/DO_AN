const searchWrapper = document.querySelector("form");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".myUL");
let suggestions = [{
        id: "ban1",
        title: "Bàn Gỗ Đẹp",
        link: "../category/detail_item/Ban/ban1.html",
        image: "../../img/category/Ban/cafe-tron-go-dep.png",
        price: 4500000,
        inCart: 0
    },
    {
        id: "ban2",
        title: "Bàn Gỗ Đẹp 2",
        link: "../category/detail_item/Ban/ban2.html",
        image: "../../img/category/Ban/GTY-091.png",
        price: 3500000,
        inCart: 0
    },
    {
        id: "den2",
        title: "Netviet-NV-9005-2",
        link: "../category/detail_item/den_trang_tri/den2.html",
        image: "../../img/category/DenTrangTri/Netviet-NV-9005-2.png",
        price: 9700000,
        inCart: 0
    },
    {
        id: "ban3",
        title: "Bàn Gỗ tròn",
        link: "../category/detail_item/Ban/ban3.html",
        image: "../../img/category/Ban/tron-kinh.png",
        price: 23000000,
        inCart: 0
    },
    {
        id: "ban4",
        title: "Bàn Gỗ dài",
        link: "../category/detail_item/Ban/ban4.html",
        image: "../../img/category/Ban/go-dai.png",
        price: 1890000,
        inCart: 0
    },
    {
        id: "den1",
        title: "Netviet-NV-8825",
        link: "../category/detail_item/den_trang_tri/den1.html",
        image: "../../img/category/DenTrangTri/Netviet-NV-8825.png",
        price: 780000,
        inCart: 0
    },


    {
        id: "den3",
        title: "Netviet-NV-8205-1",
        link: "../category/detail_item/den_trang_tri/den4.html",
        image: "../../img/category/DenTrangTri/Netviet-NV-8205-1.png",
        price: 590000,
        inCart: 0
    },
    {
        id: "den4",
        title: "Composite-AP-B948",
        link: "../category/detail_item/den_trang_tri/den3.html",
        image: "../../img/category/DenTrangTri/Composite-AP-B948.png",
        price: 10000000,
        inCart: 0
    },
    {
        id: "giuong1",
        link: "../category/detail_item/giuong_ngu/giuong1.html",
        image: "../../img/category/GiuongNgu/Bellasofa-BS701.png",
        title: "Giường Bellasofa BS701",
        price: 11000000,
        inCart: 0
    },
    {
        id: "giuong2",
        link: "../category/detail_item/giuong_ngu/giuong2.html",
        image: "../../img/category/GiuongNgu/Furniland-01.png",
        title: "Giường ngủ FURNILAND - Jangin Haim (1.8m)",
        price: 5400000,
        inCart: 0

    },
    {
        id: "giuong3",
        link: "../category/detail_item/giuong_ngu/giuong3.html",
        image: "../../img/category/GiuongNgu/Furniland-02.png",
        title: "Giường ngủ FURNILAND - Jangin Christine (1m8)",
        price: 12000000,
        inCart: 0
    },
    {
        id: "giuong4",
        link: "../category/detail_item/giuong_ngu/giuong4.html",
        image: "../../img/category/GiuongNgu/Bellasofa-B1239.png",
        title: "Giường Bellasofa B1239",
        price: 9000000,
        inCart: 0
    },
    {
        id: "ke1",
        link: "../category/detail_item/ke_sach/ke1.html",
        image: "../../img/category/KeSach/go-4-tang-40.png",
        title: "Kệ sách gỗ 4 tầng 40",
        price: 510000,
        inCart: 0
    },
    {
        id: "ke2",
        link: "../category/detail_item/ke_sach/ke2.html",
        image: "../../img/category/KeSach/BOV-SPR-1980DK.png",
        title: "Kệ sách BIG ONE VIETNAM SPR-1980DK",
        price: 600000,
        inCart: 0
    },
    {
        id: "ke3",
        link: "../category/detail_item/ke_sach/ke3.html",
        image: "../../img/category/KeSach/RubikMH-1846.png",
        title: "Kệ trang trí Rubik Modulo Home 1846",
        price: 1100000,
        inCart: 0
    },
    {
        id: "ke4",
        link: "../category/detail_item/ke_sach/ke4.html",
        image: "../../img/category/KeSach/treo-Hurakids-2130-001.png",
        title: "Giá sách treo Hurakids 2130-001",
        price: 590000,
        inCart: 0
    },
    {
        id: "tam1",
        link: "../category/detail_item/phong_tam/tam1.html",
        image: "../../img/category/PhongTam/thanh-treo-giay.png",
        title: "Thanh treo giấy vệ sinh",
        price: 150000,
        inCart: 0
    },
    {
        id: "tam2",
        link: "../category/detail_item/phong_tam/tam2.html",
        image: "../../img/category/PhongTam/thanh-treo-khan.png",
        title: "Thanh sắt treo khăn",
        price: 109000,
        inCart: 0
    },
    {
        id: "tam3",
        link: "../category/detail_item/phong_tam/tam3.html",
        image: "../../img/category/PhongTam/ke-xa-phong.png",
        title: "Kệ chứa xà phòng",
        price: 190000,
        inCart: 0
    },
    {
        id: "tam4",
        link: "../category/detail_item/phong_tam/tam4.html",
        image: "../../img/category/PhongTam/den-DTY.png",
        title: "Bóng đèn DTY",
        price: 80000,
        inCart: 0
    },
    {
        id: "rem1",
        link: "../category/detail_item/rem_cua/rem1.html",
        image: "../../img/category/RemCua/num-01.png",
        title: "Rèm cửa 01",
        price: 900000,
        inCart: 0
    },
    {
        id: "rem2",
        link: "../category/detail_item/rem_cua/rem2.html",
        image: "../../img/category/RemCua/num-02.png",
        title: "Rèm cửa 02",
        price: 890000,
        inCart: 0
    },
    {
        id: "rem3",
        link: "../category/detail_item/rem_cua/rem3.html",
        image: "../../img/category/RemCua/num-03.png",
        title: "Rèm cửa 03",
        price: 750000,
        inCart: 0
    },
    {
        id: "rem4",
        link: "../category/detail_item/rem_cua/rem4.html",
        image: "../../img/category/RemCua/num-04.png",
        title: "Rèm cửa 04",
        price: 950000,
        inCart: 0
    },
    {
        id: "sofa1",
        link: "../category/detail_item/sofa/sofa1.html",
        image: "../../img/category/Sofa/kem.png",
        title: "Ghế sofa kem",
        price: 2500000,
        inCart: 0
    },
    {
        id: "sofa2",
        link: "../category/detail_item/sofa/sofa2.html",
        image: "../../img/category/Sofa/cafe.png",
        title: "Sofa cafe",
        price: 2300000,
        inCart: 0
    },
    {
        id: "sofa3",
        link: "../category/detail_item/sofa/sofa3.html",
        image: "../../img/category/Sofa/don-em-ai.png",
        title: "Ghế sofa đơn êm ái",
        price: 2600000,
        inCart: 0
    },
    {
        id: "sofa4",
        link: "../category/detail_item/sofa/sofa4.html",
        image: "../../img/category/Sofa/don-SFD18.png",
        title: "Sofa đơn SFD18",
        price: 5100000,
        inCart: 0
    },
    {
        id: "tu1",
        link: "../category/detail_item/tu_quan_ao/tu1.html",
        image: "../../img/category/TuQuanAo/BOV-WVR-1855L.png",
        title: "Tủ quần áo BIG ONE VIETNAM WVR-1855L",
        price: 4000000,
        inCart: 0
    },
    {
        id: "tu2",
        link: "../category/detail_item/tu_quan_ao/tu1.html",
        image: "../../img/category/TuQuanAo/B1241K.png",
        title: "Tủ áo B1241K",
        price: 5400000,
        inCart: 0
    },
    {
        id: "tu3",
        link: "../category/detail_item/tu_quan_ao/tu1.html",
        image: "../../img/category/TuQuanAo/Bellasofa-B1239.png",
        title: "Tủ Áo Bellasofa B1239",
        price: 3790000,
        inCart: 0
    },
    {
        id: "tu4",
        link: "../category/detail_item/tu_quan_ao/tu1.html",
        image: "../../img/category/TuQuanAo/B1238.png",
        title: "Tủ áo B1238",
        price: 5100000,
        inCart: 0
    },
];
inputBox.onkeyup = (e) => {
    let userData = e.target.value; //dữ liệu nhập
    let emptyArray = [];
    if (userData) {
        emptyArray = suggestions.filter((data) => {
            //chọn những title giống với dữ liệu nhập

            return data.title.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        })
        if (emptyArray.length != 0) {
            emptyArray = emptyArray.map((data) => {
                // thêm đường link và hiện thị
                return data = `<a href ="${data.link}"><li>${data.title}</li></a>`;
            });
            searchWrapper.classList.add("active"); //show các gợi ý
            showSuggestions(emptyArray);

        } else {
            searchWrapper.classList.remove("active"); //khong hiện gợi ý  khi không trùng khớp 
        }
    } else {
        searchWrapper.classList.remove("active"); //không hiện gợi ý khi không nhập gì
    }
}


function showSuggestions(list) {
    let listData;
    listData = list.join('');
    suggBox.innerHTML = listData;
}