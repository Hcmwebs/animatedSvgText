anime({
  targets: "#awesome path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 3500,
  delay: function (el, i) {
    return i * 500;
  },
  direction: "alternate",
  loop: false,
});
