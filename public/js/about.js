var slideIndex= 1;
        showDivs(slideIndex);

        function plusDivs(n){
            showDivs(slideIndex+=n);
        }
        function showDivs(n){
            var i=0;
            var x= document.getElementsByClassName("mySlide");
            if(n>x.length){slideIndex = 1}
            if(n<1){slideIndex= x.length}
            while(i<x.length){
                x[i].style.display = "none";
                i++;
            }
            x[slideIndex-1].style.display= "block";
            
        }