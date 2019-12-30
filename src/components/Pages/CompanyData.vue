<template>
  <div id="companydatapage">
    <h1>Company Data</h1>
    <CompanyNameInput />
    <SpendInput inputName="spend" />
    <CompanySpendAbility />
  </div>
</template>

<script>
import CompanyNameInput from "../CompanyNameInput.vue";
import SpendInput from "../SpendInput.vue";
import CompanySpendAbility from "../CompanySpendAbility.vue";
export default {
  components: { CompanyNameInput, SpendInput, CompanySpendAbility }
};
</script>
