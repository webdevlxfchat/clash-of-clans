import { defineStore } from "pinia";
import clan from "../data/clan.json";
import axios from "axios";

export const mainStore = defineStore("MainStore", {
  state: () => ({
    myBaseTag: "#92UR800RY",
    myClanTag: "#2LG00JQGQ",
    clan,
    clanDataUpdateTime: "22-oktyabr 16:30",
  }),
  actions: {
    getData() {
      axios
        .get("https://api.clashofclans.com/v1/clans/%232LG00JQGQ", {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjNmMzZkMjJjLWZiMGQtNDIyZS1hZmRkLTU4YmVkYTgyZDhhNiIsImlhdCI6MTY2NjU4OTIxNSwic3ViIjoiZGV2ZWxvcGVyLzU4ODNkY2JkLTFmMWEtNjUwOS00MjQ4LWUyMmU1MmE0NTc3ZiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjIxMy4yMzAuODAuMTY0Il0sInR5cGUiOiJjbGllbnQifV19.0TZ_Vtelj2eb8kRRlv6CNJY99hvjw1DDja2VVhJ8_FZnfwoHGnteJL4foj8U1x57-SMUXtNJSAdVAJwgRD7nRQ",
          },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
