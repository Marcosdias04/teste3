function obterHorarioAtual() {
    const agora = new Date();
    agora.setMinutes(agora.getMinutes() + 2); // Adianta 2 minutos
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    return `${horas}:${minutos}`;
}

function generateMessages() {
    document.getElementById("generateButton").disabled = true;

    setTimeout(function () {
        removeFirstMessage();
    }, 2000);

    setTimeout(function () {
        addMessage("Grandes chances de ganharmos com essa estratégia,");
    }, 2000);

    setTimeout(function () {
        addMessage("Escolha a seleção da " + obterTimeAleatorio());
    }, 5000);
    
    function obterTimeAleatorio() {
        var times = [
            { nome: "Austria", bandeiraURL: "https://cdn.discordapp.com/attachments/1090400001559109712/1187191419253837824/austria.png?ex=6595fd2b&is=6583882b&hm=ac9788c6b49d83d0f26a3a9cf48702e8e864a7453ca95ebb91965dfa305897b6&" },
            { nome: "Azerbaijão", bandeiraURL: "https://media.discordapp.net/attachments/1090400001559109712/1187191419526459422/azerbaijao.png?ex=6595fd2b&is=6583882b&hm=354721dfd01a6b8757d0b64eda996a22b3a688d88d0968c8bb2a404fbbca88f0&=&format=webp&quality=lossless" },
            { nome: "Bélgica", bandeiraURL: "https://media.discordapp.net/attachments/1090400001559109712/1187191419903950879/belgica.png?ex=6595fd2b&is=6583882b&hm=9690435bbd2a595c23e90b43389f30e1e24c08a880da0db2f3364fec062a61a5&=&format=webp&quality=lossless" },
            { nome: "Croácia", bandeiraURL: "https://media.discordapp.net/attachments/1090400001559109712/1187191420151418969/croacia.png?ex=6595fd2b&is=6583882b&hm=61c3822a2dd29aaaed34b374a5105d265a1d4bf30daeb5cb95de457a42e09584&=&format=webp&quality=lossless" },
            { nome: "República Checa", bandeiraURL: "https://media.discordapp.net/attachments/1090400001559109712/1187192129194311740/tcheco.png?ex=6595fdd4&is=658388d4&hm=ad13cdd8ba6b0ffbcc911e2d11f096079f62476fd11a508dc527ba37698e3bde&=&format=webp&quality=lossless" },
            { nome: "Dinamarca", bandeiraURL: "https://media.discordapp.net/attachments/1090400001559109712/1187191420432429167/dinamarca.png?ex=6595fd2b&is=6583882b&hm=31e6e254958a45bc04d4da67d0e9128f62814bf26b302ab1d73422ecc6037c76&=&format=webp&quality=lossless" },
            { nome: "Inglaterra", bandeiraURL: "https://media.discordapp.net/attachments/1090400001559109712/1187192129777307728/inglaterra.png?ex=6595fdd4&is=658388d4&hm=11f48efc9154561c0c2c9556a92346bbac778c534e11cf9d68a2eec5fc79ab88&=&format=webp&quality=lossless" },
            { nome: "Finlândia", bandeiraURL: "https://media.discordapp.net/attachments/1090400001559109712/1187191421359370250/finlandia.png?ex=6595fd2b&is=6583882b&hm=1af4199196ad2dc87b3d128814b0197e297b657095c4409b1e87ceeb1e0e6674&=&format=webp&quality=lossless" },
            { nome: "França", bandeiraURL: "https://media.discordapp.net/attachments/1090400001559109712/1187191421640392784/franca.png?ex=6595fd2b&is=6583882b&hm=2c71585f7d9d03c6a128ee45c7fda5634767fad022c434a964d33afe76d84dbe&=&format=webp&quality=lossless" },
            { nome: "Alemanha", bandeiraURL: "https://cdn.discordapp.com/attachments/1090400001559109712/1187191418997981184/alemanha.png?ex=6595fd2b&is=6583882b&hm=4ea78fa3e1e746646332cabad4b5c7ee1b1bf7d873d46e9ab65081cbcf4b1de1&" },
            { nome: "Itália", bandeiraURL: "https://media.discordapp.net/attachments/1090400001559109712/1187192130368712704/italia.png?ex=6595fdd4&is=658388d4&hm=f90394eac4c6ba2f90b57778af5c49abccf13c6d4352ef25ae6c9761bcad31a3&=&format=webp&quality=lossless" },
            { nome: "Holanda", bandeiraURL:"https://media.discordapp.net/attachments/1090400001559109712/1187192129475326022/holanda.png?ex=6595fdd4&is=658388d4&hm=edc27168b79748f32c2c467dbe4836c9a688203c7fc3f1ffd78824c455e0af57&=&format=webp&quality=lossless" },
            { nome: "Polônia", bandeiraURL: "https://media.discordapp.net/attachments/1090400001559109712/1187192130637140058/polonia.png?ex=6595fdd4&is=658388d4&hm=29837339ab140352ed2b0994684421eaeb8fa73135d321a3f2171eb992283d01&=&format=webp&quality=lossless" },
            { nome: "Portugal", bandeiraURL: "https://cdn.discordapp.com/attachments/1090400001559109712/1187192127894065246/portugal.png?ex=6595fdd4&is=658388d4&hm=fe4bb126086bcac4b8c1db0949e8d4b21819a412c431ab324a8a36e56f3a90dc&" },
            { nome: "Montenegro", bandeiraURL: "https://media.discordapp.net/attachments/1090400001559109712/1187192690123747388/montenegro.png?ex=6595fe5a&is=6583895a&hm=c05142f24528dbad34045ba8d9bc9862b08864cfc37acd32d8ac6256750a8211&=&format=webp&quality=lossless" },
            { nome: "Escócia", bandeiraURL: "https://media.discordapp.net/attachments/1090400001559109712/1187191420667314206/escocia.png?ex=6595fd2b&is=6583882b&hm=15af69e40f8c9df3a5e362a4b38ded4e26d7bcdc79086bc5fb7d562c8b1faec2&=&format=webp&quality=lossless" },
            { nome: "Servia", bandeiraURL: "https://cdn.discordapp.com/attachments/1090400001559109712/1187192128204455986/servia.png?ex=6595fdd4&is=658388d4&hm=9c021f14bf914e98b74b2d7c113b89656ddb558782c1ff004e22f188cde322e1&" },
            { nome: "Espanha", bandeiraURL: "https://media.discordapp.net/attachments/1090400001559109712/1187191421090942976/espanha.png?ex=6595fd2b&is=6583882b&hm=9f644aa9ca8a7f96e90a06923e3665b2bb7c4a143a2f2f56ccf9ced69fa37723&=&format=webp&quality=lossless" },
            { nome: "Suécia", bandeiraURL: "https://media.discordapp.net/attachments/1090400001559109712/1187192128485470250/suecia.png?ex=6595fdd4&is=658388d4&hm=90e476806a4c44ad4e45b96c61eef082d05062fbf414a0cd47b71f9dc7658c8b&=&format=webp&quality=lossless" },
            { nome: "Suíça", bandeiraURL: "https://cdn.discordapp.com/attachments/1090400001559109712/1187192128888115220/suica.png?ex=6595fdd4&is=658388d4&hm=fc151c42cea248aec4af003e76c02fb7226e82b6fd31239cc25469957e428d25&" },
            { nome: "Turquia", bandeiraURL: "https://media.discordapp.net/attachments/1090400001559109712/1187192690387992596/turquia.png?ex=6595fe5a&is=6583895a&hm=d273ce56a8a399177919a4c51b57920bcb4e978f73516e7c47ad618bda42dcbb&=&format=webp&quality=lossless" },
            { nome: "Ucrânia", bandeiraURL: "https://media.discordapp.net/attachments/1090400001559109712/1187192690648023081/ucrania.png?ex=6595fe5a&is=6583895a&hm=d00afcc8e2dad90be18f94878b0f43a0fa9bde09d931886ee84881f5db6b84ba&=&format=webp&quality=lossless" },
            { nome: "Uzbequistão", bandeiraURL: "https://cdn.discordapp.com/attachments/1090400001559109712/1187192689863688314/uzbequistao.png?ex=6595fe5a&is=6583895a&hm=f7326493833216efb14085b920656c53ae1c4d2ec8624aba64111f3bd7ec1c97&" }
            // Adicione as URLs para as bandeiras restantes
        ];
    
        var randomIndex = Math.floor(Math.random() * times.length);
        var timeAleatorio = times[randomIndex];
        return `${timeAleatorio.nome} <img src="${timeAleatorio.bandeiraURL}" alt="Bandeira" width="30" height="20">`;
    }

    // Gera e exibe tanto valorNormal quanto valorAutomatico2
    setTimeout(function () {
        var valorNormal = Math.floor(Math.random() * 7) + 1;
        var valorAutomatico2 = Math.floor(Math.random() * 7) + 1;
        addMessage(`Esta entrada é válida até as ${obterHorarioAtual()}, faça no máximo 3 tentativas!`);
        var chat = document.getElementById("chat");
        var imageDiv = document.createElement("div");
        var image = document.createElement("img")
        image.width = 150;
        image.height = 150;
        imageDiv.appendChild(image);;
        image.src = getRandomImageUrl();
        imageDiv.appendChild(image);
        imageDiv.classList.add('chat-image');
        chat.appendChild(imageDiv);
        startCountdown();
    }, 10000);
}

function getRandomImageUrl() {
    var imageUrls = [
        "https://cdn.discordapp.com/attachments/1142743185127374898/1186307312919523338/1.png?ex=6592c5c7&is=658050c7&hm=b4e95ff6a4bc876ecd2539eb60ccddd2dbe39ae177598975563edfe073abb159&",
        "https://cdn.discordapp.com/attachments/1142743185127374898/1186307313255075890/2.png?ex=6592c5c8&is=658050c8&hm=8f1f40bb488f0434a2fc1a8d9750994bde9d2fa920b6f5b4a7b31ed1e4c8b998&",
        "https://cdn.discordapp.com/attachments/1142743185127374898/1186307313645129748/3.png?ex=6592c5c8&is=658050c8&hm=69edb32eb2435b6eab03f93e01a7fb00f1904c14b4f558a878b5dd3c9c460f7c&",
        "https://cdn.discordapp.com/attachments/1142743185127374898/1186307314010042389/4.png?ex=6592c5c8&is=658050c8&hm=01f99bf9aceb54c56d817c895dded19f17796a46a70bf3c56ff239faa67e93c1&",
        "https://cdn.discordapp.com/attachments/1142743185127374898/1186307314635001877/5.png?ex=6592c5c8&is=658050c8&hm=aef21d860da4e1f9ab95401b16741c3a3c69993e21ed8fe72481311775c7c1b7&",
        "https://cdn.discordapp.com/attachments/1142743185127374898/1186307315201216552/6.png?ex=6592c5c8&is=658050c8&hm=fbf3cdd05ad4a89387c137496de53b3c9dc57ed0f035b8f658c82810a0d84300&",
        "https://cdn.discordapp.com/attachments/1142743185127374898/1186307315540971680/7.png?ex=6592c5c8&is=658050c8&hm=d36810be3a835cec50b99b1eab13eddfca3b6a294ce77c2adc10fa663148bf7d&",
        "https://cdn.discordapp.com/attachments/1142743185127374898/1186307315876499476/8.png?ex=6592c5c8&is=658050c8&hm=f7fdeea608f819560b84d74510713a6517523eb5b2a8bf4c846e7e37c1e9f57e&",
        "https://cdn.discordapp.com/attachments/1142743185127374898/1186307316321112195/9.png?ex=6592c5c8&is=658050c8&hm=964101243592e3eee800a5a71f66cca30dc096a7cdfd092833c4f64f64dfb60d&"
    ];

    var randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
}

function removeFirstMessage() {
    var chat = document.getElementById("chat");
    chat.innerHTML = "";
}

// CODE
function addMessage(text) {
    var chat = document.getElementById("chat");
    var messages = chat.getElementsByClassName("message");

    if (messages.length > 0) {
        // Substituir o conteúdo do último elemento
        messages[messages.length - 1].innerHTML = text;
    } else {
        // Se não houver mensagens, criar um novo elemento
        var messageDiv = document.createElement("div");
        messageDiv.className = "message";
        messageDiv.innerHTML = text;
        chat.appendChild(messageDiv);

        // Verificar o conteúdo da mensagem para decidir sobre o popup
        if (text === "Bora pra próxima? ✅") {
            // Mostrar o popup verde por 2 segundos
            showPopup("GREEN!!");
        } else if (text === "Desanima não, bora pra próxima...") {
            // Mostrar o popup vermelho por 2 segundos
            showPopup("RED!!");
        }
    }
}

var squareCount = 0;

function showPopup(content) {
    // ... (existing code)

    if (content === "RED!!" || content === "GREEN!!") {
        createSquareDiv(content === "RED!!" ? "red" : "green");
        squareCount++; // Increment the square count

        if (squareCount >= 10) {
            clearSquares();
            squareCount = 0;
        }

        if (content === "GREEN!!") {
            playNotificationSound();
        }
    }

    // Remove popup after 2 seconds
    setTimeout(function () {
        document.body.removeChild(popup);
    }, 5000);
}

function playNotificationSound() {
    var audio = document.getElementById("notificationSound");
    audio.play();
}

function startCountdown() {
    setTimeout(function () {
        displayCountdown(120);
    },);
}

function clearSquares() {
    var historyDiv = document.querySelector(".history-green-red");
    historyDiv.innerHTML = "";
}


function createSquareDiv(color) {
    var squareDiv = document.createElement("div");
    squareDiv.className = "square";
    squareDiv.style.backgroundColor = color;

    var historyDiv = document.querySelector(".history-green-red");
    historyDiv.appendChild(squareDiv);
}

function displayCountdown(seconds) {
    var countdownContainer = document.getElementById("countdown-container");

    function updateCountdown() {
        var minutes = Math.floor(seconds / 60);
        var remainingSeconds = seconds % 60;

        countdownContainer.innerHTML = "" + formatTime(minutes) + ":" + (remainingSeconds < 10 ? '0' : '') + remainingSeconds;

        if (seconds <= 0) {
            clearInterval(countdownInterval);
            countdownContainer.innerHTML = "Disponível";
            clearChat();

            var randomValue = Math.random();

            if (randomValue <= 0.98) {
                addMessage("Bora pra próxima? ✅");
            } else {
                addMessage("Desanima não, bora pra próxima...");
            }

            document.getElementById("generateButton").disabled = false;
        }
        seconds--;
    }

    function formatTime(time) {
        return time < 10 ? '0' + time : time;
    }

    updateCountdown();
    var countdownInterval = setInterval(updateCountdown, 1000);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

updateCountdown();
var countdownInterval = setInterval(updateCountdown, 1000);

function clearChat() {
    var chat = document.getElementById("chat");
    chat.innerHTML = "";
}

generateMessages();

document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
      e.preventDefault();
    }
  });
  
  document.addEventListener('keydown', function (e) {
  
    if (e.key === 'F12') {
      e.preventDefault();
    }
  });
  
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  
  });