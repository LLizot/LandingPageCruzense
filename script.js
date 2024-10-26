function redirectTo(platform) {
    const links = {
      instagram: "https://www.instagram.com/cruzense_servicos/profilecard/?igsh=MTRoazhkOWNoOG5uaA%3D%3D",
      whatsapp: "https://wa.me/5511930398666", // substitua pelo número do WhatsApp
      email: "mailto:contato@cruzense.com.br",
      facebook: "https://www.facebook.com/profile.php?id=100064729432294&mibextid=LQQJ4d&rdid=faXnkKnSskwrPbVX&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fw7TtKzb1MCZqtztS%2F%3Fmibextid%3DLQQJ4d",
      site: "https://www.cruzense.com.br"
    };
    
    // Redireciona para o link correspondente ao botão clicado
    window.location.href = links[platform];
  }
  