<template>
  <div class="w-full">
    <p class="title text-xl font-semibold mb-6">Css features: </p>

    <el-collapse v-model="activeName">
      <el-collapse-item title="Gradient" name="1">
        <ExampleCssGradient />
      </el-collapse-item>

      <el-collapse-item title="Nesting and binding" name="2">
        <ExampleCssNestingBind />
      </el-collapse-item>

      <el-collapse-item title="Scroll" name="3">
        <ExampleCssScroll />
      </el-collapse-item>

      <el-collapse-item title="Text wrap" name="4">
        <ExampleCssText />
      </el-collapse-item>

      <el-collapse-item title="Clamp" name="5">
        <ExampleCssClamp />
      </el-collapse-item>

      <el-collapse-item title="Container query" name="6">
        <ExampleCssContainerQuery />
      </el-collapse-item>

      <el-collapse-item title="Container style" name="7">
        <ExampleCssContainerStyle />
      </el-collapse-item>

      <el-collapse-item title="Pre-filtering selections" name="8">
        <ExampleCssSelectElement />
      </el-collapse-item>

      <el-collapse-item title="Viewport" name="9">
        <ExampleCssViewport />
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts" setup>
const activeName = ref(0)
</script>

<style lang="scss" scoped>
.title {
  display: inline-block;
  font-size: clamp(1.25rem, 0.647rem + 1.72vw, 1.75rem);
}
</style>

<!--https://positivethinking.tech/insights/the-10-new-css-features-in-2023/-->
<!--popover https://codepen.io/web-dot-dev/pen/mdzpGwq-->
<!--selectmenu https://css-tricks.com/the-selectmenu-element/-->
<!--timeline animation https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-timeline-->
