import Vue from "vue";
import Vuex from "vuex";
import { mutations, STORAGE_KEY } from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]"),
    companyName: `w00t`,
    spend: 0,
    spendabilityone: 0,
    spendabilitytwo: 0,
    noteArea: ``
  },
  actions,
  mutations
});
