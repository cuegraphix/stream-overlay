<template lang="jade">
  form
    .form__field
      label(for='title-form') Title
      .form__item
        label Shoulder text
        input#subtitle-form.form-ctl(type='text', name='shoulder', placeholder='Shoulder text', v-model='texts.shoulder')
      .form__item
        label Title
        input#title-form.form-ctl(type='text', name='title', placeholder='Title', v-model='texts.title')
    .form__field
      label(for='countdown-hh-form') Countdown Timer
      .form__group--inline
        .form__item
          label hh
          input#countdown-hh-form.form-ctl.form-ctl--time(type='text', name='countdown-hh', placeholder='hh', v-model='countdown.hh')
        .form__item
          span.form-ctl.form-ctl--static :
        .form__item
          label mm
          input#countdown-mm-form.form-ctl.form-ctl--time(type='text', name='countdown-mm', placeholder='mm', v-model='countdown.mm')
        .form__item
          span.form-ctl.form-ctl--static :
        .form__item
          label ss
          input#countdown-ss-form.form-ctl.form-ctl--time(type='text', name='countdown-ss', placeholder='ss', v-model='countdown.ss')
    hr
    .form__field
      input.btn.btn--fill(type='submit', value='Create overlay')
</template>
<style>
</style>
<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['texts', 'countdown'])
    }
  }
</script>
