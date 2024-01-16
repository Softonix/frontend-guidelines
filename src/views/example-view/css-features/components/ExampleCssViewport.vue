<template>
  <p class="text-2xl font-semibold mb-8">Dynamic viewport units</p>
  <p class="text-base mb-5">
    One common problem web developers face today is accurate and consistent full-viewport sizing,
    especially on mobile devices. As a developer you want 100vh (100% of the viewport height) to mean
    “be as tall as the viewport”, but the vh unit doesn’t account for things like retracting navigation bars on mobile,
    so sometimes it ends up too long and causes scroll.
  </p>
  <img src="@/assets/images/css-example/viewport-1.avif" alt="viewport" class="mx-auto block mb-20" width="700px">

  <p class="text-base font-medium mb-4">
    To resolve this issue, we now have new unit values on the web platform, including:
  </p>

  <ul class="pl-5">
    <li class="text-base mb-2">
      <span class="font-bold italic">Small</span>
      viewport height and width (or
      <span class="font-semibold">svh</span>and
      <span class="font-semibold">svw</span>), which represent the smallest active viewport size.
    </li>

    <li class="text-base mb-2">
      <span class="font-bold italic">Large</span>
      viewport height and width (
      <span class="font-semibold">lvh</span>and
      <span class="font-semibold">lvw</span>), which represent the largest size.
    </li>

    <li class="text-base mb-2">
      <span class="font-bold italic">Dynamic</span>
      viewport height and width (
      <span class="font-semibold">dvh</span>and
      <span class="font-semibold">dvw</span>).
    </li>
  </ul>

  <img
    src="@/assets/images/css-example/viewport-2.avif"
    alt="dynamic viewport"
    class="mx-auto block mb-20 mt-8"
    width="900px"
  >

  <p class="text-sm">
    For more information about these new units, read
    <a class="text-gray-800 italic hover:underline" href="https://web.dev/articles/viewport-units">The large, small, and dynamic viewport units.</a>
  </p>
</template>
