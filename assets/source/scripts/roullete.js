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
    }, 6000);

    // Gera e exibe tanto valorNormal quanto valorAutomatico2
    setTimeout(function () {
        // Gera um número aleatório para escolher entre "NÚMEROS ALTOS 19-36" ou "NÚMEROS BAIXOS 1-18"
        var escolhaAleatoria = Math.random() < 0.5 ? "NÚMEROS ALTOS 19-36" : "NÚMEROS BAIXOS 1-18";
    
        // Gera um valor aleatório com base na escolha anterior
        var valorNormal;
        var mensagemAdicional;
    
        if (escolhaAleatoria === "NÚMEROS ALTOS 19-36") {
            valorNormal = Math.floor(Math.random() * 18) + 19;
            mensagemAdicional = `Utilizei a estratégia de Quebra de repetição de baixos e concluí que podemos entrar após ${Math.floor(Math.random() * 18) + 1}, ${Math.floor(Math.random() * 18) + 1}, ${Math.floor(Math.random() * 18) + 1}, ${Math.floor(Math.random() * 18) + 1}`;
        } else {
            valorNormal = Math.floor(Math.random() * 18) + 1;
            mensagemAdicional = `Utilizei a estratégia de Quebra de repetição de altos e concluí que podemos entrar após ${Math.floor(Math.random() * 18) + 19}, ${Math.floor(Math.random() * 18) + 19}, ${Math.floor(Math.random() * 18) + 19}, ${Math.floor(Math.random() * 18) + 19}`;
        }
    
        var valorAutomatico2 = Math.floor(Math.random() * 7) + 1;
        addMessage(`APOSTE EM ${escolhaAleatoria}<br><br>\n${mensagemAdicional}<br><br>Faça no máximo 2 martin gales!<br><br>Válido até ${obterHorarioAtual()}`);
    
        // Move the image-related code here
        var imageDiv = document.createElement("div");
        var image = document.createElement("img");
        image.src = getRandomImageUrl();
        image.classList.add('chat-image'); // Add a class to the image
        imageDiv.appendChild(image);
        chat.appendChild(imageDiv);

        startCountdown();
    }, 10000);
}  

function getRandomImageUrl() {
    var imageUrls = [
        "https://cdn.discordapp.com/attachments/1142743185127374898/1186332973079998515/px.png?ex=6592ddad&is=658068ad&hm=542a1fc8e1a9f907a85a35f167450bd5d56b63750c94c5c32f33d99f4df24a67&"
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