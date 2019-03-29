let count = 0;

function change1(){
    switch (count) {
        case 0:
            cat1.src="dog1.jpg";
            count++;
            break;
        case 1:
            cat1.src="chicken1.jpg";
            count++;
            break;
        case 2:
            cat1.src="turtle1.jpg";
            count++;
            break;
        case 3:
            cat1.src="cat1.jpg";
            count = 0;
            break;
    }
}

function change2(){
    switch (count) {
        case 0:
            cat2.src="dog2.jpg";
            count++;
            break;
        case 1:
            cat2.src="chicken2.jpg";
            count++;
            break;
        case 2:
            cat2.src="turtle2.jpg";
            count++;
            break;
        case 3:
            cat2.src="cat2.jpg";
            count = 0;
            break;
    }
}


