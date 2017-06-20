(function (window, document, undefined) {  
  "use strict";
  const mainContainer = document.getElementById("content");
  const home = document.getElementById("home");
  const about = document.getElementById("about");
  const contact = document.getElementById("contact");
  const buttons = [home, about, contact];
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
  const aboutPage = '<h3 class="tab-heading">About Us</h3>\
          <p>JavaScript restaurant was created in 1995 using inspiration from other eateries in the area to cater to a niche in the market. Since it\'s inception it has undergone several overhauls and is continually improved to satisfy our customers.</p>\
          <p>We pride ourselves on having the best food and the finest chefs, having served some of Australia\'s finest celebrities including Hugh Jackman, Russell Crowe, Danny Im and international megastars like Tommy Wiseau.</p>\
          <p>Why not join us for lunch or dinner seven days a week at 11 Marine Parade, Watsons Bay NSW 2030</p>\
          <div class="bottom-margin"></div>';
  const contactPage = '<h3 class="tab-heading">Contact Us</h3>\
        <div class="contact-bar">Send Message</div>\
        <div class="form-container">\
          <form>\
            <label><span class="mandatory">*</span> Subject</label>\
            <input type="text" name="subject">\
            <label class="message-label"><span class="mandatory">*</span> Message</label>\
            <input type="text" name="body" class="message">\
            <label><span class="mandatory">*</span> Name</label>\
            <input type="text" name="name">\
            <label><span class="mandatory">*</span> Email</label>\
            <input type="email" name="email">\
            <input type="submit" class="submit" value="Submit">\
          </form>';
  function changePage(newPage, button) {
    console.log(newPage)
    let wrapper= document.createElement('div');
    wrapper.innerHTML = newPage;
    console.log("first wrapper" + wrapper);
    //wrapper = wrapper.firstChild; //to remove the outer div tags
    console.log("second wrapper " + wrapper);
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

})(window, document);