const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
      const img = document.getElementById("person-img");
      const author = document.getElementById("author");
      const job = document.getElementById("job");
      const info = document.getElementById("info");
      
      const prevBtn = document.querySelector(".prev-btn");
      const nextBtn = document.querySelector(".next-btn");
      const randomBtn = document.querySelector(".random-btn");
    //   console.log(nextBtn);
  
      // 把数组的索引作为设置为要改变的量，通过改变索引达到切换内容的目的，而不是给
      //给按钮直接绑定单击事件来切换，点击按钮改变的只是索引的值，
      //把切换内容的步骤封装成一个函数方便调用
  
      // 给事件添加单击相应事件
      // prevBtn.addEventListener("click", function(){
      //     let index = 0;
      //     author.textContent = reviews[index].name;
      //     job.textContent = reviews[index].job;
      //     info.textContent = reviews[index].text;
      //     index++;
      // })
      let index = 0;
      // console.log(img.src);
  // 给window添加一个最先加载的事件,使页面在最开始打开时加载数组中的数据
      window.addEventListener("DOMContentLoaded", function(){
          showPerson();
      });
  
      function showPerson (){
          const item = reviews[index];
          img.src = item.img;
          author.textContent = item.name;
          job.textContent = item.job;
          info.textContent = item.text;
      }
      // 点击nextbtn按钮时就会改变index的值，从而达到切换的目的
      nextBtn.addEventListener("click", function(){
          index++;
          if(index > reviews.length-1){
              index = 0;
          }
          showPerson();/*调用showPerson函数来改变内容，类似于加载局部内容*/
      });
      prevBtn.addEventListener("click",function(){
          index--;
          if(index<0){index = reviews.length-1;}
          showPerson();
      });
  
      function fun(){
          return Math.floor(Math.random() * reviews.length);
      }
      randomBtn.addEventListener("click", function(){
          index = fun();
          showPerson();
      })