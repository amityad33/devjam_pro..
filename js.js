var i = 1;
var a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
var button = document.getElementById("button");
var que = document.getElementById("que");
let marks = 0
var c = 10;
var tr = null;
function  move() {
    if(i <= c)
    {
       a[i-1] = document.getElementById("txt").value;
       document.getElementById("txt").value = ""
       console.log(a)
        i = i + 1;
        var st = "'" + i + ".png" + "'";
        que.innerHTML = "<img src = "+ st +">"
        if (i == c)
       {
          clear(); 
       }

    }
    
};
function  previous() {
    if (i > 1 && i <= c + 1){
        i = i - 1;
        var st = "'" + i + ".png" + "'";
        que.innerHTML = "<img src = "+ st +">"
        if (i == c)
        {
           button.innerHTML = "submit"
        }
        if (i != c)
        {
            button.innerHTML = "next"
        }
        console.log(a)
    }
};

function clear(){
    console.log("clear")
    document.getElementById("button").style.visibility = "hidden";
    document.getElementById("sub").style.visibility = "visible";
}

function finish(){
    a[c - 1] = document.getElementById("txt").value;
    var count = 0
         for(count = 0;count < c;count++)
         {
             if(count != 4 && count != 5 && a[count] == 1)
             {
                marks++;
                console.log(marks);
             }
             if(count == 4 && a[count] == 4)
             {
                marks++;
                console.log(marks);
             }
             if(count == 5 && a[count] == 2)
             {
                marks++;
                console.log(marks);
             }
         }
        
        console.log(marks)

    tr = "marks : " + marks;
    document.getElementById("button").style.visibility = "hidden";
    document.getElementById("sub").style.visibility = "hidden";
    document.getElementById("txt").style.visibility = "hidden";
    document.getElementById("que").style.visibility = "hidden";
    document.getElementById("prev").style.visibility = "hidden";
    
    console.log(tr);
    document.getElementById("res").innerHTML = tr;
}
