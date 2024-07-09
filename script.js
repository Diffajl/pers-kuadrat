const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const hitung = document.getElementById("hitung");
const hasil = document.getElementById("hasil");

hitung.addEventListener("click", () => {
    const aValue = parseFloat(a.value);
    const bValue = parseFloat(b.value);
    const cValue = parseFloat(c.value);

    const discriminant = bValue * bValue - 4 * aValue * cValue;

    if (aValue === 0) {
        hasil.innerHTML = "Koefisien a tidak boleh nol.";
        return;
    }

    if (discriminant > 0) {
        const root1 = (-bValue + Math.sqrt(discriminant)) / (2 * aValue);
        const root2 = (-bValue - Math.sqrt(discriminant)) / (2 * aValue);
        hasil.innerHTML = `Akar-akar nyata dan berbeda. x1 = ${root1}, x2 = ${root2}`;
    } else if (discriminant === 0) {
        const root = -bValue / (2 * aValue);
        hasil.innerHTML = `Akar-akar kembar dan nyata. x = ${root}`;
    } else {
        hasil.innerHTML = "Akar-akar imajiner!, tidak ada solusi real";
    }
});
