var author = 'wahyudioputra';
var today = new Date();
var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() + '.';
var dateTime = date;
var swals = Swal


async function mulai() {
    var {
        value: nama
    } = await swals.fire({
        title: 'Nama <u>kamu</u>?',
        input: 'text',
        confirmButtonText: 'Lanjut',
        imageUrl: 'https://wahyudioputra.github.io/bucin/halo.png',
        imageWidth: 200,
        imageHeight: 200,
        allowOutsideClick: false,
        showCancelButton: false,
        showCloseButton: false,
        focusConfirm: false
    });
    if (nama) {
        play();
        window.nama = nama;
        third_text = "Dari: " + author + ", untuk: " + window.nama + ".";
        fifth_text = "I Love U, " + window.nama + "!";
        await swals.fire({
            title: `Hai, ${nama}! &#10084;&#65039;`,
            confirmButtonText: 'Lanjut',
            imageUrl: 'https://wahyudioputra.github.io/bucin/Hai.gif',
            imageWidth: 200,
            imageHeight: 200,
            allowOutsideClick: false,
            focusConfirm: false
        });
        await swals.fire({
            title: `Sekarang lihat ini ya &#10084;&#65039;`,
            imageUrl: 'https://wahyudioputra.github.io/bucin/Sekarang.gif',
            imageWidth: 200,
            imageHeight: 200,
            allowOutsideClick: false,
            focusConfirm: false
        });
        typing_first();
        showDiv();
        showFt();
        document.getElementById("namamu").innerHTML = "Halo, " + nama + "!";
    } else {
        await swals.fire({
            title: 'Isi namanya ayanggg',
            imageUrl: 'https://wahyudioputra.github.io/bucin/namanya.gif',
            imageWidth: 200,
            imageHeight: 200,
            allowOutsideClick: false,
            focusConfirm: false
        });
        await swals.fire({
            title: 'Gak boleh kosong',
            imageUrl: 'https://wahyudioputra.github.io/bucin/kosong.jpg',
            imageWidth: 200,
            imageHeight: 200,
            allowOutsideClick: false,
            focusConfirm: false
        });
        mulai();
    }
}
mulai()
async function lanjutan() {
    var {
        value: sayang
    } = await swals.fire({
        title: `Sebelumnya, ${nama} sayang gak sama ${author} 🥺`,
        imageUrl: 'https://wahyudioputra.github.io/bucin/Sebelumnya.gif',
        imageWidth: 200,
        imageHeight: 200,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Sayang',
        denyButtonText: `Gak sayang`,
        allowOutsideClick: false,
        allowOutsideClick: false,
        focusConfirm: false
    }).then((result) => {
        if (result.isConfirmed) {
            window.sayang = "sayang";
            lanjutan2();
        } else if (result.isDenied) {
            window.sayang = "enggak sayang";
            window.persen = "%3A%2F";
            swals.fire({
                title: `Yaudah deh 😞`,
                confirmButtonText: 'dahlah',
                imageUrl: 'https://wahyudioputra.github.io/bucin/Yaudah.jpg',
                imageWidth: 200,
                imageHeight: 200,
                allowOutsideClick: false,
                focusConfirm: false
            });
            whs();
        }
    })
}

async function lanjutan2() {
    var {
        value: persen
    } = await swals.fire({
        title: 'Seberapa sayang?',
        icon: 'question',
        input: 'range',
        inputLabel: 'Antara 90-100% ya',
        inputAttributes: {
            min: 90,
            max: 100,
        },
        allowOutsideClick: false,
        inputValue: 90
    });
    if (persen) {
        window.persen = persen + '%25';
        await swals.fire({
            title: `Maacii udah sayang sama ${author} ${persen}% 🥰`,
            confirmButtonText: 'Ok ayang',
            imageUrl: 'https://wahyudioputra.github.io/bucin/Maacii.gif',
            imageWidth: 200,
            imageHeight: 200,
            allowOutsideClick: false,
            focusConfirm: false
        });
        lanjutan3();
    }
}

async function lanjutan3() {
    await swals.fire({
        title: `Banyakin istirhat, jangan begadang mulu!`,
        confirmButtonText: 'Love U',
        imageUrl: 'https://wahyudioputra.github.io/bucin/gws.gif',
        imageWidth: 200,
        imageHeight: 200,
        allowOutsideClick: false,
        focusConfirm: false
    });
    iloveu();
    siap();
    whs();
}

function WhatsApp() {
    window.location = "https://api.whatsapp.com/send?phone=6283809157951&text=Hai,%20" + "*" + nama + "*" + " udah bacain semuanya" + "%0A%0A" + "*" + nama + "*" + "%20" + window.sayang + " sama kamu " + "*" + window.persen + "*" + "%0A%0A" + dateTime;
}