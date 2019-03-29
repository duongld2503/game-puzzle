let count1 = 0;
let count2 = 0;
function change1(){
    switch (count1) {
        case 0:
            cat1.src = "dog1.jpg";
            count1++;
            break;
        case 1:
            cat1.src = "chicken1.jpg";
            count1++;
            break;
        case 2:
            cat1.src = "turtle1.jpg";
            count1++;
            break;
        case 3:
            cat1.src = "cat1.jpg";
            count1 = 0;
            break;
    }
}

function change2(){
    switch (count2) {
        case 0:
            cat2.src="dog2.jpg";
            count2++;
            break;
        case 1:
            cat2.src="chicken2.jpg";
            count2++;
            break;
        case 2:
            cat2.src="turtle2.jpg";
            count2++;
            break;
        case 3:
            cat2.src="cat2.jpg";
            count2 = 0;
            break;
    }
}




