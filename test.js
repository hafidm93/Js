/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * @fileoverview
 * Initial DOM must contain a button#hello. Other elemenst are optional.
 */

let mutationCount = 0;
let incrementMutationCount = () => {};
const mutationCountLabel = document.getElementById('mutationCount');
if (mutationCountLabel) {
  incrementMutationCount = () => {
    mutationCount++;
    mutationCountLabel.textContent = mutationCount;
  };
}

const hello = document.getElementById('hello');
if (hello) {
  hello.addEventListener('click', () => {
    incrementMutationCount();

    const el = document.createElement('h1');
    el.textContent = 'Hello World!';
    document.body.appendChild(el);
  });
}

// Long task.
const long = document.getElementById('long');
if (long) {
  long.addEventListener('click', () => {
    incrementMutationCount();

    fetch('http://localhost:8000/examples/amp-script/hello-world-data.json')
        .then(response => response.json())
        .then(json => {
          const el = document.createElement('h1');
          el.textContent = 'Hello ' + json.year + ' World!';
          document.body.appendChild(el);
        });
  });
}

// <amp-img> should be allowed.
const ampImg = document.getElementById('amp-img');
if (ampImg) {
  ampImg.addEventListener('click', () => {
    incrementMutationCount();

    const el = document.createElement('amp-img');
    el.setAttribute('width', '300');
    el.setAttribute('height', '200');
    el.setAttribute('src', 'https://1.bp.blogspot.com/-Hj95kZrXbr4/XSDK2XQphqI/AAAAAAAAB4c/isCv92Dx0RUBfwjY05DEYm1AJa142ET3QCLcBGAs/s1600/Google%2BFonts.jpg')
    document.body.appendChild(el);
  });
}

// <script> should be sanitized.
const script = document.getElementById('script');
if (script) {
  script.addEventListener('click', () => {
    incrementMutationCount();

    const el = document.createElement('script');
    document.body.appendChild(el);
  });
}

// <img> should be sanitized.
const img = document.getElementById('img');
if (img) {
  img.addEventListener('click', () => {
    incrementMutationCount();

    const el = document.createElement('img');
    document.body.appendChild(el);
  });
}
// my-script.js
const p = document.createElement('p');
p.textContent = 'I am added to the body!';
document.body.appendChild(p);

const p = document.createElement('amp-img');
p.textContent = 'src='https://4.bp.blogspot.com/-D-ZBY99MsSI/XNp0MuEATOI/AAAAAAAAGPo/oHpsnOuJGYYhDDd7GnOf5nq8gywSLuuagCLcBGAs/s400-rw/AM%2BFOR%2BBLOGGER%2BLOGO%2B%25281%2529.png'';
document.body.appendChild(p);

var pre = document.getElementsByTagName("PRE");
Object.values(pre).forEach(e => {
    var t = document.createAttribute("class");
    t.value = "notranslate language-markup", e.setAttributeNode(t)
});
var code = document.getElementsByTagName("CODE");
Object.values(code).forEach(e => {
    var t = document.createAttribute("class");
    t.value = "language-markup language-html language-css language-javascript notranslate", e.setAttributeNode(t)
});
var prevScrollpos = window.pageYOffset;

function myFunction() {
    var e;
    "none" === (e = document.getElementById("adSticky")).style.display ? e.style.display = "block" : e.style.display = "none", "none" === (e = document.getElementById("closeme")).style.display ? e.style.display = "block" : e.style.display = "none"
}
