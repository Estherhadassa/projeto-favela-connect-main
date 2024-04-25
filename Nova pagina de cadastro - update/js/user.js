document.addEventListener("DOMContentLoaded", function() {
  // Espera até que o DOM esteja completamente carregado

  // Seleciona o formulário
  const form = document.querySelector('form');

  // Adiciona um evento de "submit" ao formulário
  form.addEventListener('submit', function(event) {
    // Previne o comportamento padrão do formulário de ser enviado
    event.preventDefault();

    // Chama a função de validação do formulário
    if (validateForm()) {
      // Se o formulário for válido, chama a função para enviar os dados
      sendData();
    }
  });

  // Função para validar o formulário
  function validateForm() {
    // Seleciona os campos do formulário
    const firstName = document.getElementById('firstname');
    const lastName = document.getElementById('lastname');
    const email = document.getElementById('email');
    const number = document.getElementById('number');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    // Verifica se todos os campos foram preenchidos
    if (firstName.value.trim() === '' || lastName.value.trim() === '' || email.value.trim() === '' || number.value.trim() === '' || password.value.trim() === '' || confirmPassword.value.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return false;
    }

    // Verifica se a senha e a confirmação de senha coincidem
    if (password.value !== confirmPassword.value) {
      alert('As senhas não coincidem.');
      return false;
    }

    // Se todas as validações passarem, retorna verdadeiro
    return true;
  }

  // Função para enviar os dados do formulário (simulação)
  function sendData() {
    // Aqui você pode adicionar o código para enviar os dados do formulário para o backend
    // Por enquanto, esta função apenas simula o envio
    alert('Dados enviados com sucesso!');
    // Você pode substituir o alert acima com uma chamada AJAX para enviar os dados para o servidor
  }
});
