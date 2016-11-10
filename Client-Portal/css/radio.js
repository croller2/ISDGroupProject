<script type="text/javascript">

var RadioCheckedImage = new Image();
var RadioUncheckedImage = new Image();



RadioCheckedImage.src = "/images/checked-radio.jpg";
RadioUncheckedImage.src = "/images/unchecked-radio.jpg";


function RadioClicked(radioid,radiosetname,formid) {
    
    var form = document.getElementById(formid);
    for( var i = 0; i < form.length; i++ ) {
        if(form[i].name == radiosetname) {
            document.getElementById(form[i].id).checked = false;
            document.getElementById("Image"+form[i].id).src = RadioUncheckedImage.src;
        }
    }
   
    document.getElementById(radioid).checked = true;
    document.getElementById("Image"+radioid).src = RadioCheckedImage.src;
    return false;
}
</script>


