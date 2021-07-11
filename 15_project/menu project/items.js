const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id:10,
        title:"Steak Dinner",
        category:"dinner",
        price:39.99,
        img:"./images/item-10.jpeg",
        desc:`skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
  
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container")

  // const filterBtns = document.querySelectorAll(".filter-btn");

  window.addEventListener("DOMContentLoaded", function(){
      displayMenuItems(menu);

      // 让js动态的生成切换按钮
      displayMenuButtons();
  });
  
  function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        return `<article class="menu-item">
        <img src="${item.img}" class="photo" alt="${item.title}">
        <div class="item-info">
            <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
        </header>
            <p class="item-text">
            ${item.desc}</p>
        </div>
    </article>`
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
  }

  function displayMenuButtons(){
// 第一步，检查menu数组中有多少种category，并返回每种category的个数
    const categories = menu.reduce(/*利用reduce() */
      function(values, item){
        // 用includes()检查values中是否包含有当前元素的category属性值，没有就添加
        if(!values.includes(item.category)){
          values.push(item.category);
        }
        return values;/*一定要返回结果，否则下轮循环会报错*/
      }
    ,["all"]);/*指定从“all”开始*/
// 第二步在btn-container中添加按钮元素元素
    const categoryBtns = categories.map(function(category){
      return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
    }).join("");
    btnContainer.innerHTML = categoryBtns;

// 第三步，给每个按钮添加单击相应函数
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    // filter items
    filterBtns.forEach(function(btn){
      btn.addEventListener("click", function(e){
        //   获取当前btn上的data-id值
        const category = e.currentTarget.dataset.id;
        // console.log(category);
        // 获取数组中的category属性值
        const menuCategory = menu.filter(function(menuItem){
            // 如果跟当前btn的data-id值相等，则返回当前对象
            if(menuItem.category === category){
                return menuItem;
            }
        });
        // 如果category的值为“all”，则全部渲染，否则只渲染menuCategory中返回的值
        if(category === "all"){
            displayMenuItems(menu);
        }else{
            displayMenuItems(menuCategory);
        }
      });
    });
}