// Elementos da página
const timeline = document.getElementById("timeline");
const timelineScreen = document.getElementById("timeline-screen");
const momentScreen = document.getElementById("moment-screen");

// Dados dos momentos
const moments = [

    {
        data: "15/02 - Primeira noite juntos",
        imagem: "Primeira_Noite.jpeg",
        texto: "A primeira noite em que dormimos abraçadinhos 🛌❤️"
    },
    {
        data: "19/03 - Primeiro jantar romântico",
        imagem: "Primeiro_Jantar.jpeg",
        texto: "Nosso primeiro jantar à luz de velas, cheio de amor e carinho ✨"
    },
    {
        data: "02/05 - Aniversário dela",
        imagem: "Aniversario.jpeg",
        texto: "O primeiro aniversário que pude comemorar ao seu lado 🎂❤️"
    },
    {
        data: "31/05 - Encontro no parque",
        imagem: "Parque.jpeg",
        texto: "Um dia especial no parque, cheio de risadas, amor e bons momentos 🌳🥰"
    },

    {
        data: "14/06 - Dia dos Namorados",
        imagem: "Dias_do_Namorados.jpeg",
        texto: "Nosso primeiro Dia dos Namorados juntos 💘"
    }
];

// Controle de momento atual
let current = 0;

// Cria os pontos na linha do tempo
if (timeline) {
    moments.forEach((m, i) => {
        const point = document.createElement("div");
        point.classList.add("timeline-point");
        point.textContent = m.data;
        point.onclick = () => showMoment(i);
        timeline.appendChild(point);
    });
}

// Mostra o momento selecionado
function showMoment(index) {
    current = index;
    updateMoment();

    timelineScreen.classList.add("hidden");
    momentScreen.classList.remove("hidden");
}

// Atualiza os dados do momento atual
function updateMoment() {
    const m = moments[current];

    document.getElementById("moment-date").textContent = m.data;
    document.getElementById("moment-img").src = m.imagem;
    document.getElementById("moment-text").textContent = m.texto;

    // Se for o último momento, redireciona para a tela final após 6 segundos
    if (current === moments.length - 1) {
        setTimeout(() => {
            window.location.href = "final.html";
        }, 6000);
    }
}

// Próximo momento
function nextMoment() {
    if (current < moments.length - 1) {
        current++;
        updateMoment();
    }
}

// Momento anterior
function prevMoment() {
    if (current > 0) {
        current--;
        updateMoment();
    }
}
