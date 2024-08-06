function newItem(){

        //1. Adding a new item to the list of items: 
    //    let li = document.createElement("li");
    //    let inputValue = document.getElementById("input").value;
    //    let text = document.createTextNode(inputValue);
    //    li.appendChild(text);

        let inputValue = $("#input").val();
        let li = $("<li></li>").append(inputValue);
    
       if (inputValue === '') {
         alert("You must write something!");
       } else {
         $("#list").append(li);
       }
    
     //2. Crossing out an item from the list of items: 
      //  function crossOut() {
      //        li.classList.toggle("strike");
      //    }
      //        li.addEventListener("dblclick",crossOut);

      li.on("dblclick", function(){
        $(this).toggleClass("strike");
      });
    
     //3(i). Adding the delete button "X": 
      //  let crossOutButton = document.createElement("crossOutButton");
      //    crossOutButton.appendChild(document.createTextNode("X"));
      //    li.appendChild(crossOutButton);
    
      //    crossOutButton.addEventListener("click", deleteListItem);

      let crossOutButton = $('<crossOutButton></crossOutButton>');
      crossOutButton.append(document.createTextNode('X'));
      li.append(crossOutButton);
      crossOutButton.on('click', deleteListItem);

     //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css: 
      //  function deleteListItem(){
      //        li.classList.add("delete")
      //    }

      crossOutButton.on('click', function() {
        li.addClass("delete");
      });

      // 4. Reordering the items: 
       $('#list').sortable();
    
    }
