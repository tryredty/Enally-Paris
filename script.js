document.addEventListener('DOMContentLoaded', function () {
  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');

      question.addEventListener('click', () => {
          answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      });
  });

  // Form Submission
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
});
