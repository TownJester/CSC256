function ProcessForm(){

            let FlowerName = document.getElementById("FlorName");
            let Color = document.getElementById("FlorColor");
            let Area = document.getElementById("GrowthArea");
            let Petals = document.getElementById("PetalNum");

                let Output = "Flower Name : " + FlowerName.value + "<BR>" + "Color: " + Color.value + "<BR>" + "Environment: " + Area.value + "<BR>" + "Petal Numbers: " + Petals.value;


                document.getElementById("DisplayFlorInfo").style.display = "block";


                document.getElementById("DivOutput").innerHTML = Output;

                FlowerName.value = "";
                Color.value = "";
                Area.value = "";
                Petals.value = "";
        }

/*
6/18/2025
*/ 