document.addEventListener('DOMContentLoaded', function () {
    manipularPlataforma();
    manipularInstagram();
    manipularLogo();
    manipularLinkAfiliado();
    alterarTextoDireitosAutorais();
});

function manipularLogo() {
    const headerLogo = document.getElementById('header-logo');
    const novaUrl = 'https://cdn.discordapp.com/attachments/1090400001559109712/1190394687975084122/Ladroes_Marca_Dagua.png?ex=65a1a472&is=658f2f72&hm=4bd45490dc058814d3cf2115617b3bb90d2c464cee30b4a6a60e23077d9be7d1&';
    headerLogo.src = novaUrl;
}

function alterarTextoDireitosAutorais() {
    const direitosAutoraisElement = document.getElementById("direitos-autorais");
    
    if (direitosAutoraisElement) {
        direitosAutoraisElement.innerHTML = "&copy; developed by kkZ <br> All rights reserved";
    }
}

function manipularPlataforma() {
    const plataformaElement = document.getElementById("plataforma");
    
    if (plataformaElement) {
        plataformaElement.innerHTML = "Seja bem-vindo à nossa plataforma de sinais exclusivamente desenvolvida para os jogos da REALSBET e PLAYPIX.";
    }
}

function manipularInstagram() {
    const instagramLink = document.getElementById('instagram-link');
    
    if (instagramLink) {
        instagramLink.href = 'https://instagram.com/';
    }
}

function manipularLinkAfiliado() {
    const meuIframe = document.getElementById("meuIframe");
    const novoLink = "https://afiliado.realsbet.com/visit/?bta=51995&brand=realsbet&afp=kkZ";
    meuIframe.src = novoLink;
}

