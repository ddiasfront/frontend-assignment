<template>
  <div>
    <input
      @blur="doneEdit"
      v-bind="inputName"
      :class="{
        error: !spend || !spend.length
      }"
      v-model="spend"
    />
    <p>aa {{ inputName }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SpendInput",
  props: ["inputName"],
  computed: {
    state: function() {
      return this.$store.state;
    },
    spend() {
      debugger;
      return (
        "$ " +
        parseFloat(this.$store.state[this.$props["inputName"]])
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
      );
    }
  },
  methods: {
    ...mapActions(["editSpend"]),
    doneEdit(e) {
      const letters = /[a-zA-Z]/;
      console.log(this.$store);
      let value = e.target.value;
      if (letters.test(value) || value < 1 || value.length < 1) {
        value = "0.00";
        this.editSpend({
          editingInputName: this.$props["inputName"],
          value
        });
      } else {
        debugger;
        var myfloatmatch = /[+-]?([0-9]*[.])?[0-9]+/g;
        value = value.match(myfloatmatch);
        if (value.length > 1) {
          var emptyarray = [];
          var mynewarray = value.forEach(val => {
            emptyarray = emptyarray + val;
          });
          value = emptyarray;
          this.editSpend({
            editingInputName: this.$props["inputName"],
            value
          });
        } else {
          value = value[0];
          this.editSpend({
            editingInputName: this.$props["inputName"],
            value
          });
        }
      }
    }
  }
};
</script>
