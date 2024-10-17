<script>
export default {};
</script>

<template>
  <header>
    <div class="container"></div>
    <div class="hero">
      <div class="stars"></div>
      <div class="moon"></div>
      <div class="mountains"></div>
      <div class="container">
        <div class="illuminated-item">
          <h2 class="hero-heading">{{ $t("about_us") }}</h2>
        </div>
      </div>
      <div class="spotlight" ref="spotlight"></div>
      <div class="mouse_warn">
        <img src="../assets/images/png/mouse.png" alt="" />
        <p>{{ $t("scroll_down") }}</p>
      </div>
    </div>
  </header>
  <main>
    <div class="container">
      <section class="section1">
        <div class="section1__box">
          <h1>
            {{ $t("section1_h1") }}
          </h1>
          <p>{{ $t("section1_p") }}</p>
          <div>
            <button>
              <span
                ><img src="../assets/images/png/telephone.png" alt=""
              /></span>
              {{ $t("section1_phone") }}
            </button>
            <button>
              <span><img src="../assets/images/png/right.png" alt="" /></span>
              {{ $t("section1_acc") }}
            </button>
          </div>
        </div>
        <div class="section1__box2">
          <img src="../assets/images/png/section1_img.png" alt="" />
        </div>
      </section>
    </div>

    <div class="container">
      <section class="section2">
        <div class="section2__content">
          <h1>{{ $t("about_us") }}</h1>
          <p>{{ $t("about_us-label") }}</p>

          <div class="section2__content-imgCollection">
            <div class="section2__content-imgCollection-card">
              <img src="../assets/images/png/card1.png" alt="" />
            </div>
            <div class="section2__content-imgCollection-card">
              <img src="../assets/images/png/card2.png" alt="" />
            </div>
            <div class="section2__content-imgCollection-card">
              <img src="../assets/images/png/card3.png" alt="" />
            </div>
            <div class="section2__content-imgCollection-card">
              <img src="../assets/images/png/card4.png" alt="" />
            </div>

            <!-- tsikl -->
            <!-- <div v-for="(item, index) in cards" :key="index" class="section2__content-imgCollection-card">
              <img :src="getCardImage(item.url)" alt="">
            </div> -->
          </div>
        </div>
      </section>
    </div>

    <div class="container">
      <section class="section3">
        <h1>{{ $t("section3_portfolio") }}</h1>
        <div class="section3__portfolio-content">
          <div class="card" v-for="n in 7" :key="n">
            <!-- <img src="../assets/images/png/card1.png" alt="Card Image" /> -->
            <div class="card-info">
              <p>Card {{ n }} Information</p>
            </div>
            <div class="more">
              {{ $t("section3_more-txt") }}
              <span>
                <img src="../assets/images/png/right.png" alt="" />
              </span>
            </div>
          </div>
        </div>
        <button class="section3__btn">
          <span><img src="../assets/images/png/right.png" alt="" /></span>
          {{ $t("section3_btn-txt") }}
        </button>
      </section>
    </div>

    <div class="container">
      <section class="section4">
        <h1>{{ $t("Services_section4") }}</h1>
        <div class="section4__servic-content">
          <div
            v-for="(item, index) in 6"
            :key="index"
            class="section4__servic-content-ServiceCard"
          >
            <span class="span_parent">
              <span class="section4__servic-content-ServiceCard_cardTitle"
                ><h3>{{ $t("section4_card_title") }}</h3></span
              >
              <div class="section4__servic-content-ServiceCard-icon">
                <img src="../assets/images/png/right.png" alt="" />
              </div>
            </span>
            <p class="text">
              {{ $t("section4_card_label") }}
            </p>
          </div>
        </div>
      </section>
    </div>

    <div class="container">
      <section class="ourPartners">
        <h1>{{ $t("ourPartners_section5") }}</h1>
        <div class="ourPartners__content">
          <div
            class="ourPartners__content_card"
            v-for="(item, index) in 8"
            :key="index"
          >
            <img
              src="https://api.softit.uz/media/partner/images/Rectangle6.png"
              alt="Partner Image"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </section>
    </div>

    <div class="container">
      <section class="contact">
        <div class="contact__content">
          <h1>{{ $t("contact_title") }}</h1>
          <p>{{ $t("contact_label") }}</p>
          <span>
            <form class="contact__content_form">
              <div class="contact__content_form-inputGroup">
                <img src="../assets/images/png/user.png" alt="" />
                <input type="text" :placeholder="$t('contact_nameInput')" />
              </div>

              <div class="contact__content_form-inputGroup">
                <img
                  src="../assets/images/png/telephone.png"
                  style="width: 16px"
                  alt=""
                />
                <input type="text" placeholder="+998" />
              </div>

              <button>
                {{ $t("contact_form-btn") }}
              </button>
            </form>
            <div class="contact__content_moon">
              <img src="../assets/images/png/moon.png" alt="" />
            </div>
          </span>
        </div>
      </section>
    </div>

    <div class="container">
      <section class="bannerHiring">
        <div class="bannerHiring__content">
          <div>
            <h1>{{ $t("bannerHiring_title") }}</h1>
            <p>{{ $t("bannerHiring_label") }}</p>
          </div>
          <div>
            <ul class="bannerHiring__content_bannerTags">
              <li
                class="bannerHiring__content_bannerTags_tag"
                v-for="item in 6"
              >
                Fronrend Dasturchi
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped lang="scss">
header {
  // overflow: hidden;
  background-image: url("../assets/images/png/stars.png");
}
.hero {
  position: relative;
  width: 100%;
  // height: 90VH;
  height: calc(100vh - 70px);
  // overflow: hidden;
  .mouse_warn {
    text-align: center;
    position: absolute;
    bottom: 15px;
    left: 45%;
    z-index: 4;
    color: var(--color-white);
  }
  .moon {
    position: absolute;
    z-index: 2;
    width: 350px;
    height: 350px;
    background: url("../assets/images/png/moon.png") no-repeat center center /
      contain;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    animation: riseMoon 2.2s ease-out forwards,
      rotateMoon 8s linear infinite 0.4s;
    filter: drop-shadow(0 0 25px #ffffff4d);
  }

  .mountains {
    position: absolute;
    z-index: 3;
    bottom: -120px;
    left: 0;
    width: 100%;
    height: 390px;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 120%
      ),
      url("../assets/images/png/mountains.png") no-repeat bottom center / cover;
  }

  .illuminated-item {
    position: relative;
    overflow: hidden;
    text-align: center;
    z-index: 1;
    bottom: 60px;
    .hero-heading {
      color: inherit;
      font-family: "Georgia", serif;
      text-transform: uppercase;
      font-size: 110px;
      font-weight: bolder;
      letter-spacing: 1rem;
      padding: 0 3rem;
      transition: text-shadow 0.3s ease;
      position: relative;
      z-index: 4; // Make sure it is above the spotlight
    }
    .hero-heading {
      background: 50% 100% / 50% 50% no-repeat
        radial-gradient(ellipse at bottom, #ffffff62, transparent, transparent);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      // font-size: 10vw;
      font-family: "Source Sans Pro", sans-serif;
      animation: reveal 3000ms ease-in-out forwards 200ms,
        glow 2500ms linear infinite 2000ms;

      @keyframes reveal {
        80% {
          letter-spacing: 8px;
        }
        100% {
          background-size: 300% 300%;
        }
      }
    }
  }

  .hero-heading:hover ~ .spotlight {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.5);
  }
}

@keyframes riseMoon {
  to {
    bottom: 5%;
  }
}

@keyframes rotateMoon {
  from {
    transform: translateX(-50%) rotate(0deg);
  }
  to {
    transform: translateX(-50%) rotate(360deg);
  }
}

main {
  p{
    font-size: .9rem;
    font-weight: 100;
    opacity: .7;
  }
  margin-top: 10rem;

  .section1 {
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    &__box {
      width: 50vw;
      h1 {
        font-size: 2rem;
        font-weight: 600;
      }
      p {
        font-size: 1.4rem;
        color: inherit;
      }
      div {
        display: flex;
        align-items: center;
        gap: 1.6rem;
      }
    }
    &__box2 {
      width: 30vw;
      // height: 400  px;
      img {
        width: inherit;
        height: inherit;
      }
    }

    button {
      display: flex;
      align-items: center;
      gap: 0.7rem;
      border-radius: 10px;
      padding: 6px 15px;
      background-color: transparent;
      border: 1px solid var(--color-white);
      color: var(--color-white);
      font-size: 18px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      span {
        img {
          opacity: 0.5;
        }
      }
    }

    button:hover {
      background-color: var(--color-dark);
    }
  }

  .section2 {
    &__content {
      p{
        width: 40%;
      }
      &-imgCollection {
        display: flex;
        width: 100%;
        border-radius: 2rem;
        overflow-y: hidden;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &-card {
          height: 30rem;
          position: relative;
          width: 25%;
          // width: 300px;
          transition: all 0.3s ease;
          flex-shrink: 0;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        &-card:hover {
          width: 50%;
          transition: all 0.3s ease;
        }
      }
    }
  }

  .section3 {
    margin-top: 16rem;
    &__portfolio-content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 16.5vw;
      grid-gap: 1rem;
      gap: 1rem;
    }
    .card:first-child {
      grid-row: 1 / 3;
    }
    .card:last-child {
      grid-column: 2 / -1;
    }
    .card {
      font-size: 1.4rem;
      position: relative;
      // width: 200px;
      // height: 400px;
      border-radius: 1rem;
      overflow: hidden;
      transition: transform 0.3s ease;
      background: url("../assets/images/png/card1.png");
      cursor: pointer;
      transition: background 0.3s ease; /* Add transition for smooth gradient change */
      &:hover {
        background: linear-gradient(
            150deg,
            var(--color-pink-dark-hover),
            rgba(255, 192, 203, 0) 20% 80%,
            var(--color-pink-dark-hover)
          ),
          url("../assets/images/png/card1.png");
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .card-info {
        p{
        font-size: large;
        }
        position: absolute;
        // top: 1rem;
        left: 1rem;
        color: var(--color-white);
        // padding: 0.5rem 1rem;
        border-radius: 0.5rem;
      }
      .more {
        font-size: medium;
        display: flex;
        align-items: center;
        gap: 1rem;
        position: absolute;
        bottom: 1rem;
        right: -50%;
        color: var(--color-white);
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        transition: right 0.3s ease;
      }

      &:hover {
        .more {
          right: 1rem;
        }
      }
    }
    &__btn {
      cursor: pointer;
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .7rem;
      color: var(--color-white);
      background: var(--color-pink);
      border-radius: 0.75rem;
      border: 1px solid var(--bg-primary);
      padding: 0.2rem 0.6rem;
      transition: all 0.3s ease;
      margin-top: 2rem;
      span{
        img{
          width: 20px;
          height: 20px;
        }
      }
    }
    &__btn:hover {
      border: 1px solid var(--color-white);
      span{
        transform: rotate(-50deg);
      }
    }
  }

  .section4 {
    margin-top: 15rem;
    &__servic-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
      &-ServiceCard {
        padding: 2rem;
        border-radius: 1.75rem;
        border: 1px solid transparent;
        position: relative;
        transition: border-color 0.4s ease;
        background: #0d0d0d;

        &:hover {
          border-color: var(--color-white);
          img {
            transform: rotate(-40deg);
          }
        }
        .span_parent {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        &_cardTitle {
        }
        &-icon {
        }
        .text {
          // height: 20vh;
          // overflow-y: auto;
        }
      }
    }
  }

  .ourPartners {
    margin-top: 16rem;
    &__content {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 1rem;
      &_card {
        border-radius: 1.5rem;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        &:hover {
          img {
            transform: scale(1.1);
          }
        }

        img {
          object-fit: cover;
          transition: transform 0.3s ease;
        }
      }
    }
  }

  .contact {
    margin-top: 10rem;
    padding-bottom: 12rem;
    &__content {
      border-radius: 1.5rem;
      overflow: hidden;
      position: relative;
      padding: 2.5rem 2rem;
      background: #0d0d0d;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      p {
        margin-top: 0;
        font-size: 1rem;
        color: #c1c1c1;
        letter-spacing: 0.03em;
        line-height: 2.6rem;
      }
      &::after {
        content: "";
        background-image: url(../assets/images/png/Planet.png);
        position: absolute;
        background-repeat: no-repeat;
        background-position: bottom;
        top: 1rem;
        width: 100%;
        height: 100%;
        z-index: 2;
      }
      span {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      &_form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        &-inputGroup {
          &:hover {
            border-color: var(--color-white);
          }
          display: flex;
          align-items: center;
          gap: 1rem;
          border-radius: 0.5rem;
          position: relative;
          width: 100%;
          background: var(--color-dark);
          border: 1px solid rgb(46, 45, 45);
          padding: 0.7rem 1.3rem;
          // z-index: 12;
          input {
            cursor: pointer;
            background: transparent;
            border: none;
            position: relative;
            z-index: 11;
            color: var(--color-white);
            outline: none;
          }
        }
        button {
          margin-top: 1rem;
          position: relative;
          z-index: 4;
          border: none;
          padding: 0.7rem;
          width: 100px;
          color: var(--color-white);
          border-radius: 0.7rem;
          background-color: var(--color-pink);
          cursor: pointer;
        }
      }

      &_moon {
        position: absolute;
        right: 5rem;
        width: 20vw;
        height: auto;
        animation: 2.2s ease-out forwards, rotateMoonEl 8s linear infinite 0.4s;
        filter: drop-shadow(0 0 25px #ffffff4d);

        img {
          width: inherit;
          height: inherit;
        }
      }
    }

    @keyframes rotateMoonEl {
      to {
        transform: rotate(360deg);
      }
    }
  }

  .bannerHiring {
    &__content {
      padding: 3rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;  
      flex-wrap: wrap;
      background: var(--color-dark);
      border-radius: 1.5rem;
      gap: 2rem;
      div:first-child{
        max-width: 40%;
        h1{
          font-size: xx-large;
        }
        p{
          font-size: smaller;
        }
      }
      div:nth-child(2) {
        ul {
          list-style-type: none;
          display: grid;
          direction: rtl;
          grid-template-columns: 1fr 1fr;
          grid-gap: 1rem;
          gap: 1rem;
          li {
            cursor: pointer;
            padding: 1rem 1.5rem;
            border-color: #504f4f;
            color: var(--color-grey);
            border: 1px solid;
            border-radius: 0.75rem;
            padding: 0.75rem;
            transition: all 0.3s ease;
            &:hover {
              color: var(--color-white);
              border-color: var(--color-white);
              background-color: var(--color-dark);
            }
          }
        }
      }
    }
  }
}
</style>
