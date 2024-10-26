function redirectTo(platform) {
    const links = {
      instagram: "https://www.instagram.com",
      whatsapp: "https://wa.me/1234567890", // substitua pelo número do WhatsApp
      email: "mailto:email@exemplo.com",
      facebook: "https://www.facebook.com",
      site: "https://www.seusite.com"
    };
    
    // Redireciona para o link correspondente ao botão clicado
    window.location.href = links[platform];
  }
  