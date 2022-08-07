<template>
  <section class="page">
    <div class="container d-flex justify-content-center align-items-center">
      <div class="text-light">
        <div>
          <div class="text-center"><h2>E R P</h2></div>
          <div class="text-center">
            <h4>
              <span class="E">Enterprise</span><span class="R">Resource</span
              ><span class="P">Planning</span>
            </h4>
          </div>
          <div class="text-center">
            <span
              ><router-link
                class="mt-2 btn btn-secondary mx-2"
                to="/potential_order"
                >潛在客戶訂單管理</router-link
              >
            </span>
            <span
              ><router-link
                class="mt-2 btn btn-secondary mx-2"
                to="/punch_diary"
                >出勤分析報表 & 工作日誌</router-link
              ></span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.page {
  background-color: rgb(107, 173, 209);
}
.container {
  min-height: 100vh;
}
h2 {
  font-size: 5rem;
  font-weight: bolder;
  font-family: "Lobster", cursive;

  /* font-family: "Staatliches", cursive; */
  /* font-family: "Bangers", cursive; */
}
.E {
  font-family: "Lobster", cursive;
  /* font-family: "Bangers", cursive; */
  animation: 3s E infinite;
}
.R {
  font-family: "Lobster", cursive;
  /* font-family: "Bangers", cursive; */
  animation: 3s R infinite;
}
.P {
  font-family: "Lobster", cursive;
  /* font-family: "Bangers", cursive; */
  animation: 3s P infinite;
}
@keyframes E {
  0% {
    color: #fff;
  }
  50% {
    color: #fef73a;
  }
  100% {
    color: #fff;
  }
}
@keyframes R {
  0% {
    color: #fef73a;
  }
  50% {
    color: #fff;
  }
  100% {
    color: #fef73a;
  }
}
@keyframes P {
  0% {
    color: #fff;
  }
  50% {
    color: #fef73a;
  }
  100% {
    color: #fff;
  }
}
.btn {
  font-family: "Noto Serif TC", serif;
}
</style>
