<template>
  <div>
    <input
      @blur="doneEdit"
      id="companyName"
      type="text"
      name="name"
      :class="{
        error: !companyName || !companyName.length
      }"
    />
    <p>{{ companyName }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["CompanyNameInput"],
  computed: {
    companyName() {
      return this.$store.state.companyName;
    }
  },
  methods: {
    ...mapActions(["editCompanyName"]),
    doneEdit(e) {
      console.log(this.$store);
      const value = e.target.value;
      this.editCompanyName({
        value
      });
    }
  }
};
</script>
