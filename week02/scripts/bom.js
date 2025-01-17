const input = document.querySelector("#favchap");
const buttom = document.querySelector("button");
const list = document.querySelector("#list");

buttom.addEventListener("click", function(){
    if(input.value.trim() != "")
    {
        const li = document.createElement("li");
        const deleteButtom = document.createElement("button");
        li.textContent = input.value;
        deleteButtom.textContent = "❌";
        li.append(deleteButtom);
        list.append(li);

        deleteButtom.addEventListener("click", function()
        {
            list.removeChild(li);
            input.focus();
        });
        input.value = "";
    }
});