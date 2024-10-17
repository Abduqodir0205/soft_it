<template>
  <div class="aboutView">
    <div class="container">
      <div class="aboutView__content">
        <div class="aboutView__content__head">
          <h1>About SOFT IT</h1>
        </div>
        <div class="aboutView__content-section2">
          <div class="aboutView__content-section2-info">
            <h2>{{ $t("about_us") }}</h2>
            <p>
              {{ $t("aboutView.section2_text") }}
            </p>
          </div>
          <div class="aboutView__content-section2-sliderWrapper">
            <div class="aboutView__content-section2-sliderWrapper-sliderHead">
              <h3>Photos from our team</h3>
              <p>This is content</p>
            </div>
            <Slide />
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slide from '../components/slide.vue';
export default {
  components: {
    Slide,
  },
};
</script>

<style lang="scss" scoped>
.aboutView {
  &__content {
    &__head {
      padding: 6rem 0;
      text-align: center;
      h1 {
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: var(--color-white);
        -webkit-text-fill-color: var(--bg-primary);
        color: var(--color-dark);
        font-weight: 600;
        font-size: 3rem;
        font-family: sans-serif;
        text-transform: uppercase;
      }
    }

    &-section2 {
      &-sliderWrapper {
        background: var(--color-dark-secondary);
        border-radius: 2rem;
        padding: 0 0 2rem 0;
        &-sliderHead {
          p{
            margin-top: 0;
          }
          padding: 2.35rem;
          display: flex;
          flex-direction: column;
          row-gap: 1rem;
        }
      }
    }

    // &-section3{

    // }
  }
}
</style>
