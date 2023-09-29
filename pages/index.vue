<template>
  <div class="container">
    <h1 class="heading-1">Это главная страница. Воспользуйтесь навигацией для перехода на другие страницы.</h1>
    <p class="heading-2">Спасибо за проявленный интерес к моей кандидатуре! Буду благодарен за обратную связь!</p>
    <a class="heading-3" target="_blank" href="https://github.com/Vladimir2011/Vehicles-Test"
      >Ссылка проекта на гитхабе</a
    >
    <p class="text-2">
      Стек используемых технологий для этого проекта: HTML, CSS, SASS, Vue (Composition API), Nuxt, Pinia
    </p>
    <p class="text-3">
      Множество вещей пришлось упростить, так как не было четкого ТЗ и дизайна для некоторых элементов (к примеру
      локализация). В итоге основная цель была сверстать страницу, добавить базовый роутинг и написать функционал для
      страницы с машинами. Работает поиск, переключение страниц через пагинацию и получение списка машин через API.
      Помимо этого можно выбрать какое кол-во мы хотим отображать на странице. Была еще мысль прикрутить локализацию,
      так как все настройки для этого готовы, но передумал из-за причин выше.
    </p>
    <nuxt-img width="600" height="600" fit="contain" src="/images/welcome.png" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as *;

div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    color: $text_black;
    text-align: center;
  }

  a {
    margin-bottom: 20px;
  }

  p {
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>
