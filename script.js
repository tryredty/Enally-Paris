document.getElementById('eventForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const form = this;
  
    emailjs.sendForm('service_909lj8l', 'template_i20co0r', form)
      .then(() => {
        alert('Merci ! Votre demande a bien été envoyée.');
        form.reset();
      }, (error) => {
        console.error('Erreur :', error);
        alert('Une erreur est survenue. Veuillez réessayer.');
      });
  });
  