function calculate() {
    let x1 = parseInt(document.getElementById("x1").value);
    let x2 = parseInt(document.getElementById("x2").value);
    let y1 = parseInt(document.getElementById("y1").value);
    let y2 = parseInt(document.getElementById("y2").value);
    let z1 = parseInt(document.getElementById("z1").value);
    let z2 = parseInt(document.getElementById("z2").value);
    let x = (y1 * z2) - (z1 * y2);
    let y = -((x1 * z2) - (z1 * x2));
    let z = (x1 * y2) - (y1 * x2);
    if (isNaN(x) || isNaN(y) || isNaN(z)) {
        document.getElementById("result").innerHTML = `أدخل أرقاماً فقط`;
    } else {
        document.getElementById("result").innerHTML = `(${x}, ${y}, ${z})`;
    }
}
