import { m as f, n as i, Q as u, p as o } from "./index-754231d5.js";
function p(r, t) {
  var a = [];
  return (
    f(r, function (e, s, n) {
      t(e, s, n) && a.push(e);
    }),
    a
  );
}
function c(r, t) {
  var a = i(r) ? u : p;
  return a(r, o(t));
}
export { c as f };
