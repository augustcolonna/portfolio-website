<script setup lang="ts">
  import { ref, watch, onMounted } from 'vue';
  import emailjs from 'emailjs-com';
  import resume from '@/assets/images/resume.pdf';

  const emailSelected = ref<boolean>(false);
  const toggleEmailSelected = () => {
    emailSelected.value = !emailSelected.value;
  };

  const userEmail = ref<string>('');
  const name = ref<string>('');
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
  <div class="contact-container flex flex-col p-4 md:p-8 lg:p-12">
    <div class="send-me-an-email p-4 md:p-8 lg:p-12">
      <button class="btn" v-if="!emailSelected" @click="toggleEmailSelected">Send me an Email</button>

      <form v-if="emailSelected === true" @submit.prevent="sendEmail">
        <label for="name" class="block">
          Name
          <input v-model="name" placeholder="Your Name" required class="w-full p-2 border rounded-md" />
        </label>

        <label for="userEmail" class="block">
          Email
          <input
            v-model="userEmail"
            type="email"
            placeholder="Your Email"
            required
            class="w-full p-2 border rounded-md"
          />
        </label>

        <label for="message" class="block">
          <textarea
            v-model="message"
            placeholder="Your Message"
            required
            class="w-full p-2 border rounded-md"
          ></textarea>
        </label>
        <button class="btn" v-if="!emailSent" type="submit">Send Email</button>
      </form>

      <p v-if="successMessage" class="text-green-500">{{ successMessage }}</p>
      <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
    </div>

    <div class="linkedin-connect p-4 md:p-8 lg:p-12 border-b-2 border-t-2 border-light" style="width: 60%">
      <a class="text-center" href="https://www.linkedin.com/in/august-colonna" target="_blank">
        <img class="w-10 h-10" src="/assets/images/linkedin-161-svgrepo-com.svg" alt="LinkedIn" />
        Connect with me
      </a>
    </div>
    <a :href="resume" download="resume.pdf" class="p-4 md:p-8 lg:p-12">
      <button class="btn w-full">Download my Resume</button>
    </a>
  </div>
</template>

<style scoped lang="scss">
  @use '/assets/style/colors.scss' as colors;

  .btn {
    background-color: colors.$light-brown;
    color: colors.$primary;
    border: none;
    padding: 10px 8px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
    transition: background-color 0.3s;
    color: black;
    margin-bottom: 5px;

    &:hover {
      background-color: colors.$secondary;
      color: colors.$primary;
    }
  }

  .contact-container {
    display: flex;
    justify-content: center;
    align-items: center;
    color: colors.$forest-green;
    animation: fade-in 1s;

    .send-me-an-email {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

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
        border-radius: 12px;
        padding: 5px;
        background-color: rgba(colors.$accent, 0.2);

        label {
          font-size: 1.2rem;
          margin: 8px;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          padding: 6px;
          border-radius: 15px;
          width: 100%;

          input,
          textarea {
            background-color: rgba(colors.$primary, 0.75);
            margin-left: 15px;
            border: none;
            padding: 12px;
            color: colors.$accent;
            border-radius: 5px;
            flex-grow: 1;

            &::placeholder {
              color: colors.$accent;
              text-align: center;
            }
          }

          textarea {
            height: 200px;
            resize: none;
          }
        }
      }
    }

    .linkedin-connect {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        text-decoration: none;
        transition: color 0.3s;
        background-color: colors.$light-brown;
        padding: 10px 8px;
        border-radius: 15px;
        color: black;

        &:hover {
          background-color: colors.$secondary;
          color: colors.$primary;
        }
      }
      img {
        margin-right: 10px;
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
