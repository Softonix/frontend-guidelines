<template>
  <div class="wrap w-full max-w-[500px] mx-auto p-10 border border-gray-500 mt-20">
    <h2 class="balance text-lg font-medium">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem debitis expedita, nisi numquam
      perspiciatis sunt voluptates? Ad dolor, doloremque ea nesciunt omnis porro quasi quia
      recusandae rem reprehenderit, sit voluptate?
    </h2>
  </div>

  <div class="max-w-[800px] mt-40 mx-auto">
    <div class="circle w-[200px] h-[200px] mr-5 rounded-full bg-primary" />
    <p class="text-lg">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Asperiores nam obcaecati perferendis perspiciatis praesentium! Ab culpa debitis
      dicta dignissimos eius eum fuga necessitatibus, perferendis possimus quaerat rem velit voluptas.
      Ad culpa exercitationem impedit laborum, mollitia nam, natus, non obcaecati quod rerum saepe veniam
      veritatis vero? Accusamus beatae consequuntur dignissimos dolore doloribus eius eligendi, eos ex
      facilis fuga fugiat harum impedit in incidunt ipsa iure maxime minima non odio odit officia porro
      quaerat quam, quasi quidem quod quos rem reprehenderit repudiandae rerum sapiente similique sit soluta
      temporibus vel vitae voluptate. Alias amet animi fugiat obcaecati, omnis porro quas quia repellendus unde?
    </p>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  h2:first-of-type:first-letter {
    initial-letter: 4 4;
    font-weight: bold;
    margin-right: 8px;
    text-shadow: 0.25rem 0.15rem rgba(128, 128, 128, 0.4);
    color: #d75d3c;
  }
}

.circle {
  float: left;
  shape-outside: circle();
}

.balance {
  text-wrap: balance;
}
</style>
<!--https://codepen.io/web-dot-dev/pen/eYLwpRx-->
