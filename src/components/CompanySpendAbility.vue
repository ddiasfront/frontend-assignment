<template>
  <div>
    <SpendInput inputName="spendabilityone" />
    <SpendInput inputName="spendabilitytwo" />
  </div>
</template>

<script>
import SpendInput from "./SpendInput.vue";
export default {
  components: { SpendInput },
  name: "CompanySpendAbility"
};
</script>
