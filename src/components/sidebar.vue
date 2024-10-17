<template>
  <div class="container">
    <div id="modal-container" class="six">
      <div class="modal">
        <ul class="black-list">
          <routerLink class="link">{{ $t("about_us") }}</routerLink>
          <routerLink class="link">{{ $t("services") }}</routerLink>
          <routerLink class="link">{{ $t("portfolio") }}</routerLink>
          <routerLink class="link">{{ $t("vacancies") }}</routerLink>
          <routerLink class="link">{{ $t("blog") }}</routerLink>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#modal-container {
  position: fixed;
  display: table;
  height: 24%;
  width: 100%;
  top: 0;
  left: 0;
  transform: scale(0);
  transition: 1.3s ease;
  z-index: 8;
  overflow: hidden; /* Modal ichidagi elementlar ko'rinmasligi uchun */
  transition: transform 0.5s ease-in-out;

  &.six {
    transform: scale(1);

    .modal {
      background-color: transparent;
      animation: modalFadeIn 0.5s forwards;
    }
  }

  &.out {
    .modal {
      animation: modalFadeOut 0.5s forwards;
    }
  }

  .modal {
    width: 100%;
    background: var(--color-dark);
    display: inline-block;
    border-radius: 3px;
    font-weight: 300;
    position: absolute;
    top: -80px;
    z-index: 9;
    h2 {
      font-size: 25px;
      line-height: 25px;
      margin-bottom: 15px;
    }
    p {
      font-size: 18px;
      line-height: 22px;
    }
  }
}

.black-list {
  display: flex;
  align-items: center;
  list-style-type: none;
  justify-content: space-evenly;
  padding: 0;

  .link {
    color: inherit;
    font-size: small;
    cursor: pointer;
  }
}

@keyframes modalFadeIn {
  to {
    background-color: var(--color-dark);
    top: 80px;
  }
}

@keyframes modalFadeOut {
  to {
    background-color: var(--color-dark);
    top: -80px;
  }
}
</style>
