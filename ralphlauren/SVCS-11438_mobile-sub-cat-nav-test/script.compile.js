"use strict";

var menu = {
  "navItems": [{
    "navItemName": "Men",
    "subCats": [{
      "subCatName": "What's New",
      "link": "https://www.ralphlauren.com/men/whatsnew"
    }, {
      "subCatName": "Clothing",
      "link": "https://www.ralphlauren.com/men/clothing"
    }, {
      "subCatName": "Tailored Shop",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Accessories",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Shoes",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Big & Tall",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Sale",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Shop by Brand",
      "link": "https://www.ralphlauren.com"
    }]
  }, {
    "navItemName": "Women",
    "subCats": [{
      "subCatName": "What's New",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Clothing",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Accessories",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Shoes",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Special Sizes",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Sale",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Shop by Brand",
      "link": "https://www.ralphlauren.com"
    }]
  }, {
    "navItemName": "Kids",
    "subCats": [{
      "subCatName": "Shopy By Size",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Boys",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Girls",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Accessories",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Shoes",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Boys What's New",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Girls What's New",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Sale",
      "link": "https://www.ralphlauren.com"
    }]
  }, {
    "navItemName": "Baby",
    "subCats": [{
      "subCatName": "Baby Boy",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Baby Girl",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Accessories",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Shoes",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Baby Neutral",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "What's New",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Sale",
      "link": "https://www.ralphlauren.com"
    }]
  }, {
    "navItemName": "Home",
    "subCats": [{
      "subCatName": "Bedding",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Bath",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Décor",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Dining",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "The Coffee Shop",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "The Pup Shop",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "What's New",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Sale",
      "link": "https://www.ralphlauren.com"
    }]
  }, {
    "navItemName": "Customize",
    "subCats": [{
      "subCatName": "Men",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Women",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Kids",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Baby",
      "link": "https://www.ralphlauren.com"
    }]
  }, {
    "navItemName": "Sale",
    "subCats": [{
      "subCatName": "Men",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Women",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Boys",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Girls",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Baby",
      "link": "https://www.ralphlauren.com"
    }, {
      "subCatName": "Home",
      "link": "https://www.ralphlauren.com"
    }]
  }]
};
var mobileMenu = $('#navigation > .level-1.nav-menu');
var navItems = menu.navItems; // Loop through menu nav-items (.nav-item)

navItems.forEach(function (navItem) {
  var navItemName = navItem.navItemName;
  console.log(navItemName);
  var subCatMenu = mobileMenu.find('li.nav-item').has('.category-click-thru:contains(' + navItemName + ')');
  console.log(subCatMenu);

  if (subCatMenu) {
    var subCats = navItem.subCats;
    subCats.forEach(function (subCat) {
      var subCatName = subCat.subCatName;
      var subCatLink = subCat.link;
      console.log(subCatName); // Find subCat menu

      var level3Menu = subCatMenu.find('.top-sub-cat').has('.has-sub-menu:contains(' + subCatName + ')');
      console.log(level3Menu);

      if (level3Menu) {
        level3Menu.find('.cat-name:contains(' + subCatName + ')').attr('href', subCatLink);
      }
    });
  }
});

//# sourceMappingURL=script.compile.js.map
