let arr = document.querySelectorAll(
  ".vs-link-text.vs-color-text.vs-max-width-100.ellipsis.d-block.pull-left"
);

let skillsArr = [];
arr.forEach((single) => skillsArr.push(single.innerHTML.trim()));
