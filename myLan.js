document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.getElementById("logout");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            window.location.href = "signlog.html";
        });
    }

    const userInfo = document.getElementById("userInfo");
    const qrCanvas = document.getElementById("qrCanvas");

    if (userInfo && qrCanvas) {
        const params = new URLSearchParams(window.location.search);
        const name = params.get('name');
        const grade = params.get('grade');
        const date = params.get('date');
        const adviser = params.get('adviser');
        const remark = params.get('remark');

        const content = `Name: ${name}\nGrade: ${grade}\nDate: ${date}\nAdviser: ${adviser}\nRemark: ${remark}`;

        userInfo.innerText = content;

        QRCode.toCanvas(qrCanvas, content, function (error) {
            if (error) console.error(error);
        });
    }
});

function handleSubmit() {
    let name = document.getElementById("qrText").value;
    let grade = document.getElementById("qrGrade").value;
    let date = document.getElementById("qrDate").value;
    let adviser = document.getElementById("qrAdviser").value;
    let remark = document.getElementById("qrRemark").value;

    const params = new URLSearchParams({
        name,
        grade,
        date,
        adviser,
        remark
    });

    window.location.href = "qrcode.html?" + params.toString();
    return false;
}

