let arr = document.querySelectorAll(
  ".visitor-accordion-content.d-md-block.d-none ul li a"
);

let skillsArr = [];
arr.forEach((single) => skillsArr.push(single.innerHTML.trim()));
