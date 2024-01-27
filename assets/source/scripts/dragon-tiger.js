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
        addMessage(`Faça no máximo 3 tentativas até ${obterHorarioAtual()}`);
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
        "https://cdn.discordapp.com/attachments/1090400001559109712/1189317966928551936/red.png?ex=659db9ab&is=658b44ab&hm=4e6190c817471505dcdc5f063f0ca1e0b90fdf39b6b120938089f7e1c41fd01b&",
        "https://cdn.discordapp.com/attachments/1090400001559109712/1189317967259893902/black.png?ex=659db9ab&is=658b44ab&hm=21e1fd658933f195568a0798b4d218693d8dcd46bbcc88dcaf3eef857849d73f&"
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