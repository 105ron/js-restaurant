"use strict";
const mainContainer = document.getElementById("content");
const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const buttons = [home, about, contact];
const aboutPage = "about";
const contactPage = "contact";
const homePage = '<ul class="menu-items">\
          <div class="banner"></div>\
          <li>\
            <h6>Lobster roulade</h6>\
            <div class="description">Crispy brick dough filled with fresh east coast lobster, pickled daikon and sautéed cabbage. Served with a rich pure lobster reduction and locally harvested micro greens.</div>\
            <div class="price">$492</div>\
            </li>\
          <li>\
            <h6>Carpaccio of Maldivian long line caugh yellow fin tuna</h6>\
            <span class="description">Fanning an island of Rio Grande avacado creme fraiche topped with young cocnut, with splash of Goan lime, coriander and sprinkled with toasted organic sesame seeds.</span>\
            <span class="price">$149</span>\
            </li>\
          </li>\
          <li>\
            <h6>Duo of beef</h6>\
            <span class="description">Braised black angus short ribs with carrot purée, chanterelles seared wagyu tenderloin with fava bean, bone marrow "Pommes Dauphines".</span>\
            <span class="price">$213</span>\
          </li>\
          </li>\
          <li>\
            <h6>Pacific Ocean black cod fillet</h6>\
            <span class="description">Hand-glazed with a Japanese tamari and manuka honey reduction. Delicately balanced on a sumptuous organic pearl barley risotto, hand in hand with a delightful English courgette flower beignet, teriyaki jus.</span>\
            <span class="price">$199</span>\
          </li>\
          <li>\
            <h6>Roasted fillet of Australian Kobe beef</h6>\
            <span class="description">Nestling in Kent garden pea puree, temptingly accompanied by a succulent spinach and onion compote, to die for triple-cooked Maris Piper chips and Indonesian long pepper sauce.</span>\
            <span class="price">$330</span>\
          </li>\
          <li>\
            <h6>Hereford organic blackcurrent souffle</h6>\
            <span class="description">Snuggled up with a swirl of Kentish apple and sorrel sorbet, Kentish apple blossoms perched on top, with crunchy Turkish hazelnut crumble.</span>\
            <span class="price">$110</span>\
          </li>\
        </ul>';
function changePage(newPage, button) {
  console.log("function here")
  let wrapper= document.createElement('div');
  wrapper.innerHTML = newPage;
  wrapper = wrapper.firstChild;
  mainContainer.innerHTML = ''; //Clear container
  mainContainer.appendChild(wrapper);
  //reset the button classes and change the colour of the clicked tab
  buttons.forEach(x => {x.className = "tab"});
  button.className += " active-tab";
}

home.addEventListener("mouseup", function(){changePage(homePage, home)}, false);
about.addEventListener("mouseup", function(){changePage(aboutPage, about)}, false)
contact.addEventListener("mouseup", function(){changePage(contactPage, contact)}, false)

changePage(homePage, home);