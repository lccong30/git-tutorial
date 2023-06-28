const productForm = document.querySelector("#product__list-form")
const productItems = document.querySelector("#product-items")

const productName = document.getElementById("product__name")
const productQty = document.getElementById("product__qty")
const productPrice = document.getElementById("product__price")
const hiddenIdPrd = document.getElementById("hiddenIdPrd")
const searchText = document.getElementById("searchText")

const product__status = document.getElementsByName("product__status")


const arrProduct = [];

function reset() {
    productName.value = ''
    productQty.value = ''
    productPrice.value = ''
    hiddenIdPrd.value = ''
    product__status[0].checked = true;
}
productForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = hiddenIdPrd.value
    if (id === '') {
        const newProduct = {
            id: randomIdProduct(),
            name: productName.value,
            price: productPrice.value,
            qty: productQty.value
        }
        for (let i = 0; i < product__status.length; i++) {
            if (product__status[i].checked) {
                newProduct.status = product__status[i].value
            }
        }
        arrProduct.push(newProduct);
    } else {
        for (let i = 0; i < arrProduct.length; i++) {
            let item = arrProduct[i];
            if (item.id === id) {
                item.name = productName.value;
                item.price = productPrice.value;
                item.qty = productQty.value;
            }

            for (let i = 0; i < product__status.length; i++) {
                if (product__status[i].checked) {
                    item.status = product__status[i].value
                }
            }
        }

    }



    hienThiSanPham();
    reset();
})


function hienThiSanPham() {
    productItems.innerHTML = ''
    for (let i = 0; i < arrProduct.length; i++) {
        let item = arrProduct[i];
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.qty}</td>
        <td>${item.status == 1 ? 'Hiện' : 'Ẩn'}</td>
        <td>
            <button onclick="handleDelete('${item.id}')">Xoa</button>
            <button onclick="handleEdit('${item.id}')">Sua</button>
        </td>
        `
        productItems.appendChild(tr);
    }
}

const handleSearch = () => {
    for (let i = 0; i < arrProduct.length; i++) {
        let item = arrProduct[i];
        if (item.name.search(searchText.value)) {
            const tr = document.createElement('tr');

            tr.innerHTML = `
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.qty}</td>
        <td>${item.status == 1 ? 'Hiện' : 'Ẩn'}</td>
        <td>
            <button onclick="handleDelete('${item.id}')">Xoa</button>
            <button onclick="handleEdit('${item.id}')">Sua</button>
        </td>
        `
            productItems.appendChild(tr);
        }
    }

}


function randomIdProduct(a = 4) {
    let id = '';
    const characters = 'qazwsxedcrfvtgbyhnujmikolpQWERTYUIOPLKJHGFDSAZXCVBNM1234567890'
    for (let i = 0; i < a; i++) {
        let randomIdx = Math.floor(Math.random() * characters.length)
        id += characters.charAt(randomIdx);
    }
    return id;
}

function handleDelete(id) {
    for (let i = 0; i < arrProduct.length; i++) {
        if (arrProduct[i].id === id) {
            arrProduct.splice(i, 1);
        }
    }
    hienThiSanPham();
}
function handleEdit(id) {
    for (let i = 0; i < arrProduct.length; i++) {
        let item = arrProduct[i]
        if (item.id === id) {
            productName.value = item.name;
            productPrice.value = item.price;
            productQty.value = item.qty;
            hiddenIdPrd.value = item.id;
            for (let i = 0; i < product__status.length; i++) {
                if (product__status[i].value == item.status) {
                    product__status[i].checked = true;
                }
            }

        }
    }
}

function handle(a) {
    alert(a)
}

// ôn lại mãng và vòng lặp
// Tao mot mang so nguyen 10 phan tu phai co so 6
// 1a Lay gia tri tai vi tri index = 5 va gia tri phan tu cuoi cung
// 1b vi tri so 6 trong mang => tra ra index
// Mot mang hs [{name, age, country}] => 5 ptu 

let b = [1, 8]// thay d
// idx = 0, 1, 2, 3
// 4 
console.log(b[b.length - 1])

const students = [
    {
        id: Math.random(),
        name: "Lê Vân",
        age: "18",
        country: "Lâm Đồng"
    },
    {
        id: 2,
        name: "Lê Đạt",
        age: "16",
        country: "Lâm Đồng"
    },
    {
        id: Math.random(),
        name: "Lê Thái Anh",
        age: "20",
        country: "Huế"
    }, {
        id: Math.random(),
        name: "Lê Quang Huy",
        age: "20",
        country: "DN"
    }
    ,
    {
        id: Math.random(),
        name: "Lê Vân",
        age: "18",
        country: "Lâm Đồng"
    }

]

const countries = ["Lâm Đồng", "Đà Nẵng", "Huế", "HCM", "HN"]

function addStudent(hs = {}) {
    // id  Khong dc trung
    // name !== '', so ky tu  > 3,
    // age => phai la kieu number "12"
    // country nằm trong countries

    // Kiem tra que quan
    let quequan = false;
    let isValidId = true;

    for (let i = 0; i < countries.length; i++) {
        if (hs.country === countries[i])
            qq = true;
    }

    for (let i = 0; i < students.length; i++) {
        if (hs.id === students[i].id) {
            isValidId = false;
        }
    }

    if (!qq) {
        console.log("Ban khong thuoc vung dang ky")
    }
    else if (isValidId === false) {
        console.log("ID Trung")
    }
    else if (typeof hs.age !== 'number') {
        console.log("Tuoi khong dung dinh dang");
    } else {
        console.log('Oke')
    }
}



addStudent({ id: 2, name: "ABc", age: 10, country: "Lâm Đồng" })

// Tim hoc sinh theo id

//timHsTheoId(2) => { id: 2, name: "ABc", age: 10, country: "Lâm Đồng" }

let a = [1, 2, 6, 4, 5, 9]
for (let i = 0; i < a.length; i++) {
    // if (a[i] > a[i + 1]) {
    //     let temp = a[i]
    //     a[i] = a[i + 1];
    //     a[i + 1] = temp
    // }

}

function findNumber(ts) {
    let dem = 0;
    for (let i = 0; i < a.length; i++) {
        if (ts === a[i]) {
            console.log(a[i])
            console.log("Ton tai")
            dem++
        }

    }
    if (dem === 0) {
        console.log("So khong ton tai")
    }
}

console.log(a)

// 2.1 locHsTheoTuoi(12) => {id: 1, age: 13, country: "Thanh Hoa"},...
// 2.2 locHsTheoTuoiV2(12, a)// a = lon, b = nho, c =lon hon bang,d nho hon bang