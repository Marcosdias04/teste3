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
        addMessage(`Coloque 3 minas e faça no máximo 5 tentativas até ${obterHorarioAtual()}!`);
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
        "https://cdn.discordapp.com/attachments/1090400001559109712/1184335974126338108/image.png?ex=658b99d4&is=657924d4&hm=52fa31655a279b490ff8b21fac3901a577685f05079b816c73341cc324744fcc&",
        "https://cdn.discordapp.com/attachments/1090400001559109712/1184334918227071036/image.png?ex=658b98d8&is=657923d8&hm=abe24ad730b2a54772f97088b3854357c6049d6ee58f72099662b2cb2aa639ad&",
        "https://cdn.discordapp.com/attachments/1090400001559109712/1184333760859230349/image.png?ex=658b97c4&is=657922c4&hm=94d268963e830d9685f2fb0e4cec84f91efa6a7577fe4b6db720248a7b8b4659&",
        "https://cdn.discordapp.com/attachments/1090400001559109712/1184331561965985955/image.png?ex=658b95b8&is=657920b8&hm=796d447c221c48751624db17cc15f0c911ea26b4bf035890c71eed29d62072df&",
        "https://cdn.discordapp.com/attachments/1090400001559109712/1184330473216934039/image.png?ex=658b94b4&is=65791fb4&hm=bd7a0306e23df44e3b9518ed4ecd14f5095e4f3cb5896f3105dd9937340a73a8&",
        "https://cdn.discordapp.com/attachments/1090400001559109712/1184328296448659548/image.png?ex=658b92ad&is=65791dad&hm=dfbdc9e3d635804405e8a1fcf1cc7926352ab1b7c6dd320d61c0ed4a0252d04e&",
        "https://cdn.discordapp.com/attachments/1090400001559109712/1184327294920175657/image.png?ex=658b91be&is=65791cbe&hm=6833d78b7f5bb39d836c17e97304151b3b610da1b6269350b21467e6b523b3f2&",
        "https://cdn.discordapp.com/attachments/1090400001559109712/1184326442595647538/image.png?ex=658b90f3&is=65791bf3&hm=de7df5f10aad61dcad07829c1853ff64c95a041087fe34ce99f7c8f14dfe89dd&",
        "https://cdn.discordapp.com/attachments/1090400001559109712/1184325043115790496/image.png?ex=658b8fa5&is=65791aa5&hm=95ca7d5f4edf4504adcddbb0824e6d407459dc6985fdcc2fd88c78407dcc02b8&",
        "https://cdn.discordapp.com/attachments/1090400001559109712/1184323964781219910/image.png?ex=658b8ea4&is=657919a4&hm=199ffbd26ef12bcbe9667bda423507c48a9692821fd17472fd71d677df534959&",
        "https://cdn.discordapp.com/attachments/1090400001559109712/1184322902749880340/image.png?ex=658b8da7&is=657918a7&hm=cefb7b630e2104f6bd58c602368e610c865e6f965bcd50d4a90eb9e99ecad3c7&",
        "https://cdn.discordapp.com/attachments/1090400001559109712/1184321770916954112/image.png?ex=658b8c99&is=65791799&hm=6e4c06cb05fc7d6fa489d7b808f89eb11f32cc8f48397b633078216cbf1e90f8&",
        "https://cdn.discordapp.com/attachments/1090400001559109712/1184320656700096522/image.png?ex=658b8b90&is=65791690&hm=06dc6f9e21726916b3d3441b94e0093584204ae8f8b44dd8a97bc22b722dcc74&",
        "https://cdn.discordapp.com/attachments/1090400001559109712/1184319574246707201/image.png?ex=658b8a8e&is=6579158e&hm=12ab02ebfe4e80bcb81aebe1e0ff579a7631712a78ad47c9bafaf5fc4e41be00&",
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