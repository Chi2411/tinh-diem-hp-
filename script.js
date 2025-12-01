function tinhDiem() {
    let cc = Number(document.getElementById("cc").value);
    let tc = Number(document.getElementById("tc").value);
    let fami = Number(document.getElementById("fami").value);
    let gk = Number(document.getElementById("gk").value);
    let ck = Number(document.getElementById("ck").value);

    if (![ -2, -1, 0, 1 ].includes(cc)) {
        alert("Điểm chuyên cần phải là -2, -1, 0 hoặc 1");
        return;
    }

    if (![0, 0.5, 1].includes(tc)) {
        alert("Điểm tích cực phải là 0, 0.5 hoặc 1");
        return;
    }

    if (fami < 0 || fami > 10) {
        alert("Số bài Fami phải từ 0 đến 10");
        return;
    }

    if (gk % 2 !== 0 || gk < 0 || gk > 30) {
        alert("Điểm giữa kỳ phải là bội số của 2 từ 0 đến 30");
        return;
    }

    if (![0,0.5,1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10].includes(ck)) {
        alert("Điểm cuối kỳ chỉ nhận .0 hoặc .5 từ 0 đến 10");
        return;
    }

    let famiScore = (fami / 10) * 2;
    let gkScore = gk * 0.2;

    let qt = cc + tc + famiScore + gkScore;
    qt = Math.round(qt * 100) / 100;

    if (qt < 4 || ck < 4) {
        document.getElementById("qt").innerText = qt;
        document.getElementById("ck_out").innerText = ck;
        document.getElementById("hp").innerText = "F";
        document.getElementById("dc").innerText = "F";
        document.getElementById("h4").innerText = 0;
        return;
    }

    let hp = (qt + ck) / 2;
    hp = Math.round(hp * 10) / 10;

    let diemChu = "";
    let diem4 = 0;

    if (hp < 4) { diemChu = "F"; diem4 = 0; }
    else if (hp < 5) { diemChu = "D"; diem4 = 1; }
    else if (hp < 5.5) { diemChu = "D+"; diem4 = 1.5; }
    else if (hp < 6.5) { diemChu = "C"; diem4 = 2; }
    else if (hp < 7) { diemChu = "C+"; diem4 = 2.5; }
    else if (hp < 8) { diemChu = "B"; diem4 = 3; }
    else if (hp < 8.5) { diemChu = "B+"; diem4 = 3.5; }
    else if (hp < 9.5) { diemChu = "A"; diem4 = 4; }
    else { diemChu = "A+"; diem4 = 4; }

    document.getElementById("qt").innerText = qt;
    document.getElementById("ck_out").innerText = ck;
    document.getElementById("hp").innerText = hp;
    document.getElementById("dc").innerText = diemChu;
    document.getElementById("h4").innerText = diem4;
}
