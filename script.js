document.addEventListener("DOMContentLoaded", () => {
    const nomesInicio = ["Drako", "Azgalor", "Vermithrax", "Smaug", "Tiamat", "Falkor", "Alduin", "Bahamut"];
    const nomesMeio = ["chama", "sombra", "céu", "vento", "fúria", "gelo", "terra", "relâmpago"];
    const nomesFim = ["dourado", "mortal", "furioso", "das trevas", "supremo", "imortal", "da tempestade", "do abismo"];

    const btn = document.getElementById("btn");
    const resultado = document.getElementById("resultado");

    btn.addEventListener("click", () => {
        const parte1 = nomesInicio[Math.floor(Math.random() * nomesInicio.length)];
        const parte2 = nomesMeio[Math.floor(Math.random() * nomesMeio.length)];
        const parte3 = nomesFim[Math.floor(Math.random() * nomesFim.length)];
        resultado.textContent = `${parte1} ${parte2} ${parte3}`;
    });
});
