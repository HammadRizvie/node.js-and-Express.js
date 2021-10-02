var arr = [{name:"raffay",class:4},{name:"hammad",class:3},{name:"ali",class:2},{name:"mustafa",class:1},{name:"haziq",class:0}]

 for (var i=0;i<=4;i++) // For pick 1st item
    {
    for(var j=i+1;j<=4;j++) // For pick another remaining items and compare them one by one with 1st item
    {
        var item1 = arr[i] // For 1st item
        var name1 = arr[i].name // For 1st item's name
        var ch = name1.charAt(0); // For 1st item'name's 1st char
        var item2 = arr[j] // For 2nd item
        var name2 = arr[j].name // For 2nd item's name
        var newCh = name2.charAt(0); // For 2nd item'name's char
        if(ch > newCh) // compare 1st item's name's char with another item's name's char
        {
            arr[i] = item2 // if 1st item's name's char is greater then 2nd item's name's char then set 2nd item to 1st position
            arr[j] = item1 // set greater item to 2nd position
        }
    }
}
console.log(arr);

// var arr = [9,6,7,4,5,3]

//  for (var i=0;i<=5;i++)
//     {
       
//     for(var j=i+1;j<=5;j++)
//     {
//         var item = arr[i]
//         var nextItem = arr[j]
//         if(item > nextItem)
//         {
//             arr[i] = nextItem
//             arr[j] = item
//         }
//     }
// }
// console.log(arr);