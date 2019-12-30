<template>
  <div>
    <nav class="header">Header</nav>
    <aside>Menu</aside>
    <main>Content</main>
    <CompanyNameInput />
    <SpendInput inputName="spend" />
    <CompanySpendAbility />
  </div>
</template>

<script>
import CompanyNameInput from "./CompanyNameInput.vue";
import SpendInput from "./SpendInput.vue";
import CompanySpendAbility from "./CompanySpendAbility.vue";
export default {
  components: { CompanyNameInput, SpendInput, CompanySpendAbility }
};
</script>
a
