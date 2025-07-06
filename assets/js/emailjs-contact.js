// EmailJS contact form integration
// Substitua pelos seus IDs do painel EmailJS
const SERVICE_ID = 'service_krvuv5r';
const TEMPLATE_ID = 'template_p13gknm';
const PUBLIC_KEY = 'y9YqANNuiZ62yMWAc';

window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  // Garante campo oculto 'title' para o template do EmailJS
  let titleInput = form.querySelector('input[name="title"]');
  if (!titleInput) {
    titleInput = document.createElement('input');
    titleInput.type = 'hidden';
    titleInput.name = 'title';
    form.appendChild(titleInput);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Copia o valor de 'subject' para 'title'
    const subjectInput = form.querySelector('input[name="subject"]');
    if (subjectInput) {
      titleInput.value = subjectInput.value;
    }
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(function () {
        Swal.fire({
          icon: 'success',
          title: 'Mensagem enviada!',
          text: 'Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        });
        form.reset();
      }, function (error) {
        Swal.fire({
          icon: 'error',
          title: 'Erro ao enviar',
          text: 'Não foi possível enviar sua mensagem. Tente novamente.',
          confirmButtonColor: '#d33',
          confirmButtonText: 'OK'
        });
        console.error(error);
      });
  });
});
