import { defineStore } from "pinia";
import axios from "axios";

export const mainStore = defineStore("MainStore", {
  state: () => ({
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjEyMDcwNWQwLTMxNTUtNDA5Yy1iNDIzLThiMGVhOWM4NWIzOSIsImlhdCI6MTY2NTk4OTY2MCwic3ViIjoiZGV2ZWxvcGVyLzU4ODNkY2JkLTFmMWEtNjUwOS00MjQ4LWUyMmU1MmE0NTc3ZiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjIxMy4yMzAuMTAwLjE4OSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.dl_kvi51SgB6mHA-GT9dQzKXx7y0JhEAB9d5Wz784022_U7Ui4t_8K8ULVT4hGmPhHfYgaA3WtyEXClAr0zNZQ",
    myBaseTag: "#92UR800RY",
    myClanTag: "#2LG00JQGQ",
  }),
  actions: {
    getMyBaseInfo() {
      axios
        .get("https://api.clashofclans.com/v1/players/" + this.myBaseTag, {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          console.log(response);
        });
    },
  },
});
