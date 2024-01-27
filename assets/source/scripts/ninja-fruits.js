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
        addMessage("Utilizei a estratégia de probabilidade e concluí que podemos seguir esse padrão");
    }, 4000);

    setTimeout(function () {
        addMessage(`Espere aparecer os alimentos da imagem e corte todos, faça no máximo 3 tentativas ${obterHorarioAtual()}!`);
        var chat = document.getElementById("chat");
        var imageDiv = document.createElement("div");
        var image = document.createElement("img");
        image.src = getRandomImageUrl();
        image.width = 150;
        image.height = 150;
        imageDiv.appendChild(image);
        imageDiv.classList.add('chat-image');
        chat.appendChild(imageDiv);
        startCountdown();
    }, 8000);
}

function getRandomImageUrl() {
    var imageUrls = [
        "https://cdn.discordapp.com/attachments/1090400001559109712/1189750038109368411/image.png?ex=659f4c11&is=658cd711&hm=1a0fd11924c61ed05902ba64aa2c197105c0fc2db6b51c73b2e4a0002d23eac2&",
        "https://cdn.discordapp.com/attachments/1090400001559109712/1189750002839457792/image.png?ex=659f4c09&is=658cd709&hm=f23ea9c4244de6f55d82490ca8eefacba573da790ed6b82ac22cf8b189e0bc8c&",
        "https://cdn.discordapp.com/attachments/1090400001559109712/1189749856827342858/image.png?ex=659f4be6&is=658cd6e6&hm=074f294acbd43913ed8f4bed4f0d358aca79d4e1243a40fce566fb94cfd7fdda&",
        "https://cdn.discordapp.com/attachments/1090400001559109712/1189749822547316828/image.png?ex=659f4bde&is=658cd6de&hm=daaad19d7066467985f93da0791af5bf22391da73c737d404ac811753a5b7f76&",
        "https://cdn.discordapp.com/attachments/1090400001559109712/1189749782357491762/image.png?ex=659f4bd4&is=658cd6d4&hm=7faff409a5ecd0862322496885603f7fe8918702431391fb4297698223f10027&",
        "https://cdn.discordapp.com/attachments/1090400001559109712/1189749718679572550/image.png?ex=659f4bc5&is=658cd6c5&hm=974f5f97df7dd7cf6f1ae2085c09e57100e26f2ed57d410b853d465fd74f4c10&",
        "https://cdn.discordapp.com/attachments/1090400001559109712/1189749684781195316/image.png?ex=659f4bbd&is=658cd6bd&hm=681fc1347fddc26aee03ee6179434e15008023ccfb018b505924d4078ab0b840&",
        "https://cdn.discordapp.com/attachments/1090400001559109712/1189749649460953088/image.png?ex=659f4bb4&is=658cd6b4&hm=4e5bb51c9f21c26e31bd3888c09c313e539808e95f849115277c22d3d4640a1b&",
        "https://cdn.discordapp.com/attachments/1090400001559109712/1189749606444183625/image.png?ex=659f4baa&is=658cd6aa&hm=cd00d0e3947d71f059d2f4be98572d0b4608b2f22ac11cbb7ad2899105051153&",
        "https://cdn.discordapp.com/attachments/1090400001559109712/1189749578921160714/image.png?ex=659f4ba4&is=658cd6a4&hm=c17746b3a368a00d0e3b8afd2b62e31ea7b23701729a9c8bcc2f4da44e018939&",
        "https://cdn.discordapp.com/attachments/1090400001559109712/1189749552157315152/image.png?ex=659f4b9d&is=658cd69d&hm=d1fd896282319699f4937d09c90f09ce043e93394a80e38bce4ff54f86c9a744&",
        "https://cdn.discordapp.com/attachments/1090400001559109712/1189749518867111956/image.png?ex=659f4b95&is=658cd695&hm=2c288fb484a3d7a07ffa4143a52c4d0a6cfcd3b1eba7f7b09dce90aa1be372c5&",
        "https://cdn.discordapp.com/attachments/1090400001559109712/1189749492124225596/image.png?ex=659f4b8f&is=658cd68f&hm=38987524e20d2ddd110a0a71eba6d0cc840321d605e103d659276a74f55525ab&",
        "https://cdn.discordapp.com/attachments/1090400001559109712/1189749425208295455/image.png?ex=659f4b7f&is=658cd67f&hm=17529b48e500470c76cd08a8d70601e1afe49891878111b27761bcce0612f179&",
        "https://cdn.discordapp.com/attachments/1090400001559109712/1189749396569587832/image.png?ex=659f4b78&is=658cd678&hm=700ed133eed413449bf20c78a2c967bc85beb79aed4c356a02626d92165d4906&"
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
        if (text.toLowerCase() === "bora pra próxima? ✅") {
            // Mostrar o popup verde por 2 segundos
            showPopup("GREEN!!");
        } else if (text.toLowerCase() === "desanima não, bora pra próxima...") {
            // Mostrar o popup vermelho por 2 segundos
            showPopup("RED!!");
        }
    }
}

function showPopup(message) {
    // Adicione lógica aqui para exibir o pop-up
    alert(message); // Exemplo simples com alerta, você pode personalizar conforme necessário
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