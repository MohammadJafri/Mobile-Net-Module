Webcam.set({

width:310,
height:300,
image_format:'png',
image_quality:90,

constraints:
{
    facingMode:"environment"
}
});

camera=document.getElementById("camera");

Webcam.attach("#camera");


  function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML= '<image id="captured_image" src"'+data_uri+'"/>';
  
    });

}


console.log("ml5 version:", ml5.version)

classifier = ml5.imageClassifier('MobileNet',modelLoaded);

function modelLoaded()
{
console.log("ModelLoaded!");
}

function check()
{
    img=document.getElementById('captured_image');
    classifier.classify(img, gotresults);
}

function gotresults(results , error)
{
  if (error) 
  {
    console.error(error);
  }
    else
{
     console.log(reslts);
     document.getElementById("Object_name").innerHTML = results[0].label;
}
}


    
