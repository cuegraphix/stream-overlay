<template lang="jade">
  #app
    router-view

</template>

<script>
  export default {
    name: 'stream-overlay'
  }
</script>

<style lang="stylus">
  @import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css');
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  html
    background-color transparent
    background-image: none
    box-sizing border-box
    font-size 62.5% // 10px

  *, *:before, *:after
    box-sizing inherit

  html, body
    margin 0
    padding 15px
    background-color #222
    color #eee

  body
    font-family: 'Roboto', sans-serif
    font-size 14px

  hr
    margin-top 1em
    margin-bottom 1em
    border 0
    border-top 1px solid #333

  label
    display inline-block
    max-width 100%
    margin-bottom .5rem
    font-weight bold
    cursor pointer

  .form-ctl
    display block
    width 100%
    font-size 18px
    padding 8px 8px
    background-color #111
    color #fff
    border 1px solid #333

    &[disabled]
    &[readonly]
      background-color #666

    &[disabled]
      cursor not-allowed
      color #555

    &:focus
      border-color #00bcd4
      outline 0

    &--time
      width 4em

    &--static
      background-color transparent
      border none

  .form__field
    margin-bottom 2em
    label
      margin-left 1px

  .form__item
    margin-bottom .5em
    label
      font-size 1em
      color #999
      text-transform uppercase
      display block
      margin-bottom 0
      margin-left 1px

  .form__group
    &--inline
      display table

      .form__item
        display table-cell
        margin 0
        padding 0.25em
        vertical-align bottom
        &:first-child
          padding-left 0
        &:last-child
          padding-right 0

  .btn
    display inline-block
    margin-bottom 0
    font-weight normal
    font-size 18px
    line-height normal
    text-align center
    vertical-align middle
    letter-spacing .5px
    text-decoration none
    padding 8px 14px
    border 1px solid #333
    border-radius 0
    background-color #111
    color #fff
    white-space nowrap
    transition background-color .5s ease

    &:hover
    &:focus
    &.focus
      text-decoration none
      color #fff
      background-color #00bcd4
      outline 0

    &--fill
      width 100%

</style>
