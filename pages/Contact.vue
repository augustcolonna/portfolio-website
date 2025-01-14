<script setup lang="ts">
  import { ref, watch, onMounted } from 'vue';
  import emailjs from 'emailjs-com';

  const name = ref<string>('');
  const userEmail = ref<string>('');
  const message = ref<string>('');

  const successMessage = ref<string>('');
  const errorMessage = ref<string>('');

  const emailSent = ref<boolean>();

  const sendEmail = async () => {
    emailSent.value = false;
    const templateParams = {
      from_name: name.value,
      from_email: userEmail.value,
      message: message.value,
    };

    await emailjs.send('service_mfcg2es', 'template_b86pr4y', templateParams, 'pnwaGUZVCwK3-HyMX').then(
      (response) => {
        if (response.status === 200) {
          successMessage.value = 'Your email was sent successfully!';
          errorMessage.value = '';
          name.value = '';
          userEmail.value = '';
          message.value = '';
          emailSent.value = true;
          localStorage.removeItem('name');
          localStorage.removeItem('userEmail');
          localStorage.removeItem('message');
        } else {
          throw new Error('Failed to send email.');
        }
      },
      (error) => {
        successMessage.value = '';
        errorMessage.value = 'Something went wrong. Please try again later.';
        console.log('error:', error);
      }
    );
  };

  watch([name, userEmail, message], ([newName, newUserEmail, newMessage]) => {
    localStorage.setItem('name', newName);
    localStorage.setItem('userEmail', newUserEmail);
    localStorage.setItem('message', newMessage);
  });

  onMounted(() => {
    if (localStorage.getItem('name')) {
      name.value = localStorage.getItem('name') as string;
    }
    if (localStorage.getItem('userEmail')) {
      userEmail.value = localStorage.getItem('userEmail') as string;
    }
    if (localStorage.getItem('message')) {
      message.value = localStorage.getItem('message') as string;
    }
  });
</script>

<template>
  <div class="contact-container">
    <h1>Send me an email</h1>

    <form @submit.prevent="sendEmail">
      <label for="name">
        Name
        <input v-model="name" placeholder="Your Name" required />
      </label>

      <label for="userEmail">
        Email
        <input v-model="userEmail" type="email" placeholder="Your Email" required />
      </label>

      <label for="message">
        Message
        <textarea v-model="message" placeholder="Your Message" required></textarea>
      </label>
      <button v-if="!emailSent" type="submit">Send Email</button>
    </form>

    <p v-if="successMessage">{{ successMessage }}</p>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<style lang="scss" scoped>
  @use '/assets/style/colors.scss' as colors;

  .contact-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: colors.$forest-green;
    animation: fade-in 1s;

    h1 {
      font-size: 2.5rem;
      margin: 15px;
      font-weight: bold;
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;

      label {
        font-size: 1.2rem;
        margin: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        border-radius: 15px;

        input {
          background-color: colors.$accent;
          margin: 15px;
          border: none;
          padding: 12px;
          color: colors.$primary;
          border-radius: 5px;
          width: 300px;

          &::placeholder {
            color: colors.$primary;
            text-align: center;
          }
        }

        textarea {
          background-color: colors.$accent;
          margin: 15px;
          border: none;
          padding: 12px;
          color: colors.$primary;
          border-radius: 5px;
          height: 200px;
          width: 600px;
          resize: none;

          &::placeholder {
            color: colors.$accent;
            text-align: center;
          }
        }
      }

      button {
        background-color: colors.$accent;
        color: colors.$primary;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1.2rem;
        transition: background-color 0.3s;

        &:hover {
          background-color: colors.$secondary;
          color: black;
        }
      }
    }

    @media only screen and (max-width: 768px) {
      .contact-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        color: colors.$primary;
        animation: fade-in 0.8s;
        margin: 0 auto;

        textarea {
          background-color: colors.$accent;
          margin-left: 15px;
          margin-right: 15px;
          height: 200px;
          width: 40px;
        }
      }
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
