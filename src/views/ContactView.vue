<template>
  <div class="container">
    <div class="py-5">
      <h2 class="text-center">Contact me</h2>
      <b-overlay
        :show="isShowLoader"
        rounded="sm"
        spinner-variant="primary"
        spinner-type="grow"
        spinner-small
      >
        <div class="mt-5">
          <form
            action=""
            class="form-wrap mx-auto"
            @submit.prevent="sendEmail($event)"
          >
            <div>
              <b-form-input
                v-model="email"
                placeholder="Your email here..."
                class="input-text"
              ></b-form-input>
            </div>
            <div class="mt-4">
              <b-form-input
                v-model="phone"
                placeholder="Your phone number..."
                class="input-text"
              ></b-form-input>
            </div>
            <div class="mt-4">
              <b-form-textarea
                v-model="message"
                id="textarea-rows"
                class="input-text"
                placeholder="Message..."
                rows="8"
              ></b-form-textarea>
            </div>
            <div class="d-grid">
              <b-button style="" variant="info" class="mt-4 btn-send"
                >Send</b-button
              >
            </div>
          </form>
        </div>
      </b-overlay>
    </div>
    <b-modal id="bv-modal-example" ref="altMessage" hide-footer>
      <div class="d-block text-center">
        <h3>{{ altMessage }}</h3>
      </div>
      <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')"
        >Close Me</b-button
      >
    </b-modal>
  </div>
</template>
<script>
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      email: "",
      phone: "",
      message: "",
      altMessage: "",
      isShowLoader: false,
    };
  },

  methods: {
    async sendEmail() {
      if (this.email && this.phone && this.message) {
        this.isShowLoader = true;
        console.log(this.isShowLoader);
        const templateParams = {
          from_email: this.email,
          message: this.message,
          phone: this.phone,
        };

        await emailjs
          .send(
            "service_7qgu4cl",
            "template_g3nsk5u",
            templateParams,
            "GLlcRL5iBkcRjfi0W"
          )
          .then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
              this.altMessage = "Email sent successfully!";
              this.$refs.altMessage.show();
            },
            (error) => {
              console.log("FAILED...", error);
              this.altMessage = "Failed to send email. Please try again later.";
              this.$refs.altMessage.show();
            }
          );
        this.isShowLoader = false;
        // Reset form field
        this.phone = "";
        this.email = "";
        this.message = "";
      }
    },
  },
};
</script>
<style scoped>
h2 {
  color: #6b9cff;
}
.input-text {
  border: 1px solid #6b9cff;
}
.btn-send {
  color: #033333;
  transition: 0.5s;
  font-weight: 600;
  background-color: #aee5ff;
  border: none;
}
.btn-send:hover {
  opacity: 0.9;
}
.form-wrap {
  width: 70%;
}
@media screen and (max-width: 978px) {
  .form-wrap {
    width: 100%;
  }
}
</style>
