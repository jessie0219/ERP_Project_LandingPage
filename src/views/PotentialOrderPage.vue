<template>
  <nav
    style="background-color: rgb(190, 190, 190)"
    class="navbar navbar-expand-lg navbar-light bg-light sticky-top"
  >
    <div class="container">
      <div>
        <a class="navbar-brand" href="#"
          ><img src="../assets/FORESII_logo_切圖-01.png" alt=""
        /></a>
      </div>
      <div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" aria-current="page" href="#">Home</a>
            <a class="nav-link" aria-current="page" @click="goAnchor('#top')"
              >潛在客戶訂單管理</a
            >
            <a class="nav-link" @click="goAnchor('#produce')">產品介紹</a>
            <a class="nav-link" @click="goAnchor('#product')">產品檢視</a>
            <a class="nav-link" @click="goAnchor('#team')">開發團隊</a>
            <!-- <a class="nav-link" @click="goAnchor('#conference')">CONFERENCE</a> -->
          </div>
        </div>
      </div>
    </div>
  </nav>
  <button class="icon" @click="goAnchor('#top')">Top</button>
  <section id="top" class="second section">
    <div class="banner">
      <video class="home" autoplay muted loop>
        <source src="../assets/Internet.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="container">
      <div class="text-center justbuy d-flex">
        <div class="container mt-5">
          <div class="row justify-content-center">
            <div class="col-12 col-md-4 text-center align-self-end">
              <div class="btn text-light mb-3">開始體驗</div>
            </div>
            <div class="col-12 col-md-8 text-center align-self-end">
              <!-- <div class="backGround"> -->
              <video class="demo" autoplay muted loop>
                <source src="../assets/訂單.mp4" type="video/mp4" />
              </video>
              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="produce" class="produce">
    <div class="container text-center">
      <div class="mt-5"><h2>產品介紹</h2></div>
      <div class="my-5">透過統計的方式，協助企業管理含金量高的潛在訂單。</div>
      <div class="d-flex flex-wrap mt-2 justify-content-center">
        <div class="col-12 my-4 col-sm-4">
          <div><i class="fa-solid fa-file-invoice"></i></div>
          <div class="mt-4">總潛在訂單數</div>
          <!-- <div>
            查看每個時間區間的 總潛在訂單數、可追業績金額、編輯訂單狀態。
          </div> -->
        </div>
        <div class="col-12 my-4 col-sm-4">
          <div><i class="fa-solid fa-money-bill-trend-up"></i></div>
          <div class="mt-4">可追業績金額</div>
          <!-- <div>
            查看每個時間區間的 總潛在訂單數、可追業績金額、編輯訂單狀態。
          </div> -->
        </div>
        <div class="col-12 my-4 col-sm-4">
          <div><i class="fa-solid fa-newspaper"></i></div>
          <div class="mt-4">編輯訂單狀態</div>
          <!-- <div>
            查看各TEAM總潛在訂單數、可追業績金額、各別業務產能、潛在利潤
          </div> -->
        </div>
        <div class="col-12 my-4 col-sm-4">
          <div><i class="fa-solid fa-warehouse"></i></div>
          <div class="mt-4">各別業務產能</div>
          <!-- <div>
            查看各TEAM總潛在訂單數、可追業績金額、各別業務產能、潛在利潤
          </div> -->
        </div>
        <div class="col-12 my-4 col-sm-4">
          <div><i class="fa-solid fa-hand-holding-dollar"></i></div>
          <div class="mt-4">潛在利潤</div>
          <!-- <div>
            查看各TEAM總潛在訂單數、可追業績金額、各別業務產能、潛在利潤
          </div> -->
        </div>
      </div>
    </div>
  </section>
  <section id="product" class="product">
    <div class="">
      <div class="container text-center">
        <div class="mt-5"><h2>產品檢閱</h2></div>
        <div class="container-fluid py-5">
          <div class="row justify-content-center">
            <div class="col-12 col-md-6 text-start align-self-center">
              <div class="new text-center">全新設計</div>
              <h3 class="mt-3">業務端 - 潛在訂單概況儀表板</h3>
              <p>
                查看每個時間區間的潛在訂單總數、可追業績金額、編輯訂單狀態。
              </p>
            </div>
            <img
              class="col-12 col-md-6 text-center align-self-center"
              src="../assets/業務.png"
              alt=""
            />
          </div>
        </div>
        <div class="container-fluid py-5">
          <div class="row justify-content-center">
            <div
              class="col-12 col-md-6 text-start align-self-center order-1 order-md-2"
            >
              <div class="new text-center mx-2">全新設計</div>
              <h3 class="mt-3 mx-2">業務組別主管 - 潛在利潤概況儀表板</h3>
              <p class="mx-2">
                查看各TEAM總潛在訂單數、可追業績金額、各別業務產能、潛在利潤。
              </p>
            </div>
            <img
              class="col-12 col-md-6 text-light order-2 order-sm-1 align-self-center"
              src="../assets/主管.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="team" class="team">
    <div class="">
      <div class="container text-center">
        <div class="mt-5"><h2>開發團隊</h2></div>
        <div class="container mt-3 d-flex justify-content-center flex-wrap">
          <div class="body pic m-2">
            <img src="../assets/Johnny_fn102.jpg" alt="" />
            <p href="#" class="mt-3">Johnny</p>
          </div>
          <div class="body pic m-2">
            <img src="../assets/Kayla_fn102.jpg" alt="" />
            <p href="#" class="mt-3">Kayla</p>
          </div>
        </div>
        <div class="container mt-3 d-flex justify-content-center flex-wrap">
          <div class="body pic m-2">
            <img src="../assets/Jesse_DV102.png" alt="" />
            <p href="#" class="mt-3">Jesse</p>
          </div>
          <div class="body pic m-2">
            <img src="../assets/Dudu_Se211.jpg" alt="" />
            <p href="#" class="mt-3">Dudu</p>
          </div>
          <div class="body pic m-2">
            <img src="../assets/Yuya_DV102.jpg" alt="" />
            <p href="#" class="mt-3">Yuya</p>
          </div>
          <div class="body pic m-2">
            <img src="../assets/Jeff_dv102.jpg" alt="" />
            <p href="#" class="mt-3">Sandy</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <section id="conference" class="conference">
    <div class="">
      <div class="container text-center">
        <div class="mt-5"><h2>近期活動</h2></div>
      </div>
    </div>
  </section> -->
  <Footer></Footer>
</template>

<script>
// import Navbar from "../components/PotentialOrderNavbar.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    // Navbar,
    Footer,
  },
  methods: {
    goAnchor(selector) {
      document.querySelector(selector).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
  mounted() {
    let lastPos = 0;
    const nav = document.querySelector("nav");
    const section1 = document.querySelector(".section1");

    // 1. 消失
    document.addEventListener("scroll", function () {
      let currentPos = window.scrollY;
      //   往下滑
      if (currentPos > lastPos) {
        nav.style.top = "-70px";
      } else {
        nav.style.top = "0px";
      }
      lastPos = currentPos;
    });
  },
};
</script>
<style scoped>
h2,
h3,
div {
  font-family: "Noto Serif TC", serif;
}
nav img {
  width: 5rem;
  height: auto;
}
nav .navbar-nav a {
  font-family: "Noto Serif TC", serif;
  font-size: 0.7rem;
}
section .banner {
  width: 100%;
  height: 100vh;
  position: relative;
}
section.second video.home {
  position: absolute;
  width: 100%;
  object-fit: cover;
  height: 100vh;
  background-size: contain;
  background-repeat: no-repeat;
}
section.second video.demo {
  /* position: absolute; */
  width: 100%;
  object-fit: cover;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 10px;
  border: 1px solid black;
}

section div .justbuy {
  position: absolute;
  bottom: 5%;
  text-align: center;
  left: 0;
  right: 0;
  list-style: none;
}
.justbuy .btn {
  border: 1px solid #fff;
  top: 75vh;
}
.justbuy .btn:hover {
  background-color: rgb(58, 163, 192);
}
.produce {
  height: 100%;
}
.product {
  height: 100%;
}
.product h3 {
  font-size: 1.5rem;
}
.product div {
  font-size: 0.8rem;
}
.product img {
  box-shadow: 3px 3px 12px gray;
  padding: 3px;
}
.team {
  height: 100%;
}
.pic img {
  transform: scale(1, 1);
  transition: all 1s ease-out;
}
.pic img:hover {
  transform: scale(1.2, 1.2);
}
.conference {
  height: 100vh;
}
.team img {
  width: 200px;
  height: 200px;
  border: 2px solid rgb(109, 109, 109);
  border-radius: 50%;
}
i {
  font-size: 3rem;
  transform: scale(1, 1);
  transition: all 1s ease-out;
}
i:hover {
  color: rgb(98, 165, 194);
  transform: scale(1.2, 1.2);
}
/* i:hover{
    fa-beat-fade
} */
.new {
  width: 18%;
  height: auto;
  color: #fff;
  border-radius: 5px;
  background-color: rgb(98, 165, 194);
}
.icon {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  position: fixed;
  right: 3%;
  bottom: 5%;
  background-color: rgba(185, 185, 185, 0.63);
  transform: scale(1, 1);
  transition: all 1s ease-out;
}
.icon:hover {
  color: #fff;
  background-color: rgb(98, 165, 194);
  transform: scale(1, 1);
}
</style>
