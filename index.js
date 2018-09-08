function getFirstSelector(selector) {
return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {

  for (let i = 0; i <lis.length; i++) {
    const lis = document.querySelector('ul.ranked-list li');
    lis[i].innerHTML = (parseInt(lis[i].innerHTML)+n)
  }
}