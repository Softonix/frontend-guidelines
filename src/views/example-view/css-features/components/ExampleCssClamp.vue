<template>
  <p class="title">Font size changing example</p>
  <div class="flex items-center relative py-3 pr-16 md:px-3 mb-8">
    <p class="descriprion max-w-[475px] text-left bg-white z-10">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad, dicta dignissimos distinctio
      ducimus exercitationem facere natus neque nostrum obcaecati provident, quas quasi quidem quisquam rerum
      sequi similique sit?
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad, dicta dignissimos distinctio
      ducimus exercitationem facere natus neque nostrum obcaecati provident, quas quasi quidem quisquam rerum
      sequi similique sit?
    </p>

    <img
      class="avatar rounded-full sm:rounded"
      width="280px"
      src="@/assets/images/css-example/avatar-img.jpeg" alt=""
    >
  </div>

  <a href="https://min-max-calculator.9elements.com/" class="cursor-pointer underline" target="_blank">
    Calculate
  </a>
</template>

<!--Font-size dynamic https://min-max-calculator.9elements.com/-->
<style lang="scss" scoped>
.title {
  font-size: clamp(1.25rem, 0.577rem + 2.56vw, 2.5rem)
}

.descriprion {
  font-size: clamp(1rem, 0.698rem + 0.86vw, 1.25rem);
}
.avatar {
  width: clamp(3.125rem, -4.418rem + 21.55vw, 9.375rem);
  height: clamp(3.125rem, -4.418rem + 21.55vw, 9.375rem);
  background-color: cadetblue;
  border-radius: 50%;
  position: absolute;
  z-index: 20;
  top: clamp(1.25rem, 0.345rem + 2.59vw, 2rem);
  right: clamp(0rem, -13.672rem + 39.06vw, 15.625rem)
}
</style>
