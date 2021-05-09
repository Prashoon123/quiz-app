import { atom } from "recoil";

const score = atom({
  key: "score",
  default: 0,
});

export { score };
