function checkStatus() {
    function checkStatus() {

        let attendance = document.getElementById("attendance").value;
        let assignments = document.getElementById("assignments").value;
        let sleep = document.getElementById("sleep").value;
        let exams = document.getElementById("exams").value;

        let stress = 0;

        if (attendance < 75) {
            stress += 25;
        }

        if (assignments > 5) {
            stress += 25;
        }

        if (sleep < 6) {
            stress += 25;
        }

        if (exams < 5) {
            stress += 25;
        }

        let status = "";

        if (stress <= 25) {
            status = "Stable ✅";
        }
        else if (stress <= 50) {
            status = "Heating Up ⚠️";
        }
        else if (stress <= 75) {
            status = "Critical 🚨";
        }
        else {
            status = "OVERCLOCKED ☠️";
        }

        document.getElementById("result").innerText = status;
    }
    let attendance = document.getElementById("attendance").value;
    let assignments = document.getElementById("assignments").value;
    let sleep = document.getElementById("sleep").value;
    let exams = document.getElementById("exams").value;

    let stress = 0;

    if (attendance < 75) {
        stress += 25;
    }

    if (assignments > 5) {
        stress += 25;
    }

    if (sleep < 6) {
        stress += 25;
    }

    if (exams < 5) {
        stress += 25;
    }

    let status = "";

    if (stress <= 25) {
        status = "Stable ✅";
    }
    else if (stress <= 50) {
        status = "Heating Up ⚠️";
    }
    else if (stress <= 75) {
        status = "Critical 🚨";
    }
    else {
        status = "OVERCLOCKED ☠️";
    }

    document.getElementById("result").innerText = status;
}