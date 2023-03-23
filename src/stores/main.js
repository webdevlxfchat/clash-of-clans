import { defineStore } from "pinia";
import clan from "../data/clan.json";

export const mainStore = defineStore("MainStore", {
  state: () => ({
    myBaseTag: "#92UR800RY",
    myClanTag: "#2LG00JQGQ",
    clanDataUpdateTime: "23-mart 12:00",
    clan,
  }),
  actions: {},
  getters: {},
});
