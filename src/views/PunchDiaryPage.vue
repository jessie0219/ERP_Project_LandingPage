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
              >出勤分析報表 & 工作日誌</a
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
      <video autoplay muted loop>
        <source src="../assets/laptop.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="container">
      <div class="text-center justbuy d-flex">
        <div class="container mt-5">
          <div class="row justify-content-center">
            <div class="col-12 col-md-4 text-center align-self-end">
              <div class="btn text-light">開始體驗</div>
            </div>
            <div class="col-12 col-md-8 text-start align-self-end">
              <img class="my-2 backGround" src="../assets/109-1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="produce" class="produce">
    <div class="container text-center">
      <div class="mt-5"><h2>產品介紹</h2></div>
      <div class="mt-4">
        落實智能、互動式的人才管理及個人化的培訓系統，整合式ERP，<br />
        不僅簡化架構與維護管理作業，全體員工也能更方便工作。
      </div>
      <div class="d-flex flex-wrap mt-2 justify-content-center">
        <div class="col-12 mt-5 col-sm-4">
          <div><i class="fa-solid fa-users"></i></div>
          <div class="mt-4">明確的權限分級</div>
          <div>
            針對各層級的使用者，提供<br />
            不同的搜尋範圍與操作功能
          </div>
        </div>
        <div class="col-12 mt-5 col-sm-4">
          <div><i class="fa-solid fa-arrow-right-arrow-left"></i></div>
          <div class="mt-4">分群管理，橫向對比</div>
          <div>針對不同的部門做群組分析</div>
        </div>
        <div class="col-12 mt-5 col-sm-4">
          <div><i class="fa-solid fa-chart-pie"></i></div>
          <div class="mt-4">視覺化</div>
          <div>直覺、清晰的即時視覺化呈現</div>
        </div>
        <div class="col-12 mt-5 col-sm-4">
          <div><i class="fa-solid fa-magnifying-glass-chart"></i></div>
          <div class="mt-4">客製化智能分析</div>
          <div>
            自動推薦個人客製化的<br />
            學習資源及參考職缺
          </div>
        </div>
        <div class="col-12 mt-5 col-sm-4">
          <div><i class="fa-solid fa-gears"></i></div>
          <div class="mt-4">互動式系統</div>
          <div>
            用戶與管理者、企業，三方向構通<br />
            每個員工、每個問題都要關心!
          </div>
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
              <h3 class="mt-3">用戶端 - 簡約輕便的作業系統</h3>
              <p>
                簡化架構與整合作業系統，不再為雜亂的分頁所煩惱，一個系統即可達成所有需求。
              </p>
            </div>
            <img
              class="col-12 col-md-6 text-center align-self-center"
              src="../assets/106.png"
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
              <h3 class="mt-3 mx-2">管理、企業端 - 一目了然的核心資訊</h3>
              <p class="mx-2">
                大幅提升作業效率，即時取得關鍵資料，全局清晰呈現，一切都在掌握之中。
              </p>
            </div>
            <img
              class="col-12 col-md-6 text-light order-2 order-sm-1 align-self-center"
              src="../assets/螢幕擷取畫面 (112).png"
              alt=""
            />
          </div>
        </div>
        <div class="container-fluid py-5">
          <div class="row justify-content-center">
            <div class="col-12 col-md-6 text-start align-self-center">
              <div class="new text-center">全新設計</div>
              <h3 class="mt-3">智能分析相關資訊</h3>
              <p>
                依據課程、日誌登打內容，智能分析相關線上資源及職缺，更有效率的精進自己。
              </p>
            </div>
            <img
              class="col-12 col-md-6 text-center align-self-center"
              src="../assets/20220808_024543.gif"
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
          <div class="body-container">
            <div class="body pic m-2">
              <img src="../assets/Ryan_fn102.png" alt="" />
              <p href="#" class="mt-3">Ryan</p>
            </div>
          </div>
          <div class="body pic m-2">
            <img src="../assets/Hank_fn102.jpg" alt="" />
            <p href="#" class="mt-3">Hank</p>
          </div>
          <div class="body pic m-2">
            <img src="../assets/Jessie_fn102.jpg" alt="" />
            <p href="#" class="mt-3">Jessie</p>
          </div>
          <div class="body pic m-2">
            <img src="../assets/Jenny_fn102.jpg" alt="" />
            <p href="#" class="mt-3">Jenny</p>
          </div>
        </div>
        <div class="container mt-3 d-flex justify-content-center flex-wrap">
          <div class="body pic m-2">
            <img src="../assets/Albee_DV102.jpg" alt="" />
            <p href="#" class="mt-3">Albee</p>
          </div>
          <div class="body pic m-2">
            <img src="../assets/Jeff_dv102.jpg" alt="" />
            <p href="#" class="mt-3">Jeff</p>
          </div>
          <div class="body pic m-2">
            <img src="../assets/Howard_dv102.jpg" alt="" />
            <p href="#" class="mt-3">Howard</p>
          </div>
          <div class="body pic m-2">
            <img src="../assets/TzuChing_dv102.jpg" alt="" />
            <p href="#" class="mt-3">TzuChing</p>
          </div>
        </div>
        <div class="container mt-3 d-flex justify-content-center flex-wrap">
          <div class="body pic m-2">
            <img src="../assets/Jimmy_dv102.png" alt="" />
            <p href="#" class="mt-3">Jimmy</p>
          </div>
          <div class="body pic m-2">
            <img src="../assets/Sherlin_dv102.jpg" alt="" />
            <p href="#" class="mt-3">Sherlin</p>
          </div>
          <div class="body pic m-2">
            <img src="../assets/Betty_DV102.jpg" alt="" />
            <p href="#" class="mt-3">Betty</p>
          </div>
          <div class="body pic m-2">
            <img src="../assets/Elsa_DV102.png" alt="" />
            <p href="#" class="mt-3">Elsa</p>
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
// import Navbar from "../components/PunchDiaryNavbar.vue";
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
  font-size: 0.7rem;
}
section .banner {
  width: 100%;
  height: 100vh;
  position: relative;
}
section.second video {
  /* top: -300; */
  position: absolute;
  width: 100%;
  object-fit: cover;
  height: 100vh;
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://picsum.photos/600/300?random=8); */
  /* background-size: 100vw 100vh; */
  background-size: contain;
  background-repeat: no-repeat;
}
section div .justbuy {
  position: absolute;
  bottom: 10vh;
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
/* . {
  width: 300px;
  height: 400px;
  border-radius: 10px;
  background-color: #fff;
} */
section.second .backGround {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid rgb(133, 133, 133);
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
.conference {
  height: 100vh;
}
.team img {
  width: 200px;
  height: 200px;
  border: 1px solid black;
  border-radius: 50%;
}
.pic img {
  transform: scale(1, 1);
  transition: all 1s ease-out;
}
.pic img:hover {
  transform: scale(1.2, 1.2);
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
.new {
  width: 18%;
  height: auto;
  color: rgb(255, 255, 255);
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
