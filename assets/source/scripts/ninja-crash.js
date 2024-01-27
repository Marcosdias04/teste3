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
        "https://cdn.discordapp.com/attachments/1142743185127374898/1185902661854302339/10.png?ex=65914ceb&is=657ed7eb&hm=0c50e2de8f658715e1d1ee4cfb31836607ca9f77dd3f7f115f709fd10e774e86&",
        "https://cdn.discordapp.com/attachments/1142743185127374898/1185902662550568981/1.png?ex=65914ceb&is=657ed7eb&hm=ca91eaa802b49f853f3eef66d2d64ff6de193f2f09aa38295a36536a764a9e20&",
        "https://cdn.discordapp.com/attachments/1142743185127374898/1185902663049678938/2.png?ex=65914ceb&is=657ed7eb&hm=f1be465c58ec57b263598f401e30624d007c4276e90a440ffeb2c31e3676c523&",
        "https://cdn.discordapp.com/attachments/1142743185127374898/1185902663443955802/3.png?ex=65914ceb&is=657ed7eb&hm=f16a1767369e65023831774b275e3f53a638e0c2306a22bc09bd359f524c5dc3&",
        "https://cdn.discordapp.com/attachments/1142743185127374898/1185902663745941554/4.png?ex=65914cec&is=657ed7ec&hm=f26aa17e5f82f4461592b749d4e270b8cc0e62540dddbbb6a0a7296bef2c17fd&",
        "https://cdn.discordapp.com/attachments/1142743185127374898/1185902664119226388/5.png?ex=65914cec&is=657ed7ec&hm=91ddd4c7633c98dae461b9a10553a273ff511a7fe69367d5ceb6f917a6ee7444&",
        "https://cdn.discordapp.com/attachments/1142743185127374898/1185902664500920422/6.png?ex=65914cec&is=657ed7ec&hm=442c19435758fa33be74c8229bf2f8645ad72af41d40dd846bf2affb0410c3b2&",
        "https://cdn.discordapp.com/attachments/1142743185127374898/1185902664861626418/7.png?ex=65914cec&is=657ed7ec&hm=2e584b852305e8f6e8ec455ea8e7e7d5ccbafe26491470d75cb431ee8e199f88&",
        "https://cdn.discordapp.com/attachments/1142743185127374898/1185902665230716928/8.png?ex=65914cec&is=657ed7ec&hm=6f3c408d68f211d3f4cbd6f040c34401b3c78d8ca7d4306611e573d444fe439b&",
        "https://cdn.discordapp.com/attachments/1142743185127374898/1185902665566269540/9.png?ex=65914cec&is=657ed7ec&hm=6179b16fdffbc114d565a14cf07ce12efcd60391a5d2e4b044c915161724a590&",
        "https://cdn.discordapp.com/attachments/1142743185127374898/1185903240848613505/11.png?ex=65914d75&is=657ed875&hm=bcd6e9f73bcc89ee9229ec19f0516f52bf98930f7f870ebe3fddcbf25cc19705&",
        "https://cdn.discordapp.com/attachments/1142743185127374898/1185903241255469126/12.png?ex=65914d75&is=657ed875&hm=52cefec091730b8667f4b4f15931c9105b062d0f465fecb685f1db1eb7033217&",
        "https://cdn.discordapp.com/attachments/1142743185127374898/1185903241679085618/13.png?ex=65914d75&is=657ed875&hm=ee79977e1b6968b00f3a03d8a89e05ffd316f3da1c93481bb0a2a728464370b7&",
        "https://cdn.discordapp.com/attachments/1142743185127374898/1185903242090135562/14.png?ex=65914d75&is=657ed875&hm=9705f924084780be510e83413d40a7431a780c887f7b5cbe86fadd41e7b5c132&",
        "https://cdn.discordapp.com/attachments/1142743185127374898/1185903242425663519/15.png?ex=65914d76&is=657ed876&hm=6dc5e84e39bb619553d4aef7cb5bcb60bcbc4d41b5d9fe0f7a42bfb023cd7040&"
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