var ftimer = 7, fmin = 0, fsec = 0, eleInner, btnGo, logo;

function _(x){
    return document.getElementById(x);
}

function fendTimer(){

    eleInner = _("eleInner");
    btnGo = _("btnGo");

    logo =_("logo");

    logo.innerHTML = "<p class='logojs text-sm'>Jawe</p>" 


    eleInner.innerHTML =  "<div class='col-sm-12'>Promoting Easy Life.</div><div class='col-sm-12'>Creating a Better Living.</div> <div class='col-sm-12'>All Jawe Or Wah.</div> ";
    
    btnGo.innerHTML = "<div class='col-sm-12'><a href='paystack' routerLink='/paystack'><button class='btn btn-sm btn-def'> Let's go </button></a></div>";

    _("footer").style.display = "none";

}
function fstartTimer(){

    fmin = parseInt(ftimer/60);
    fsec = parseInt(ftimer%60);

    if (ftimer < 0){

        fendTimer()
    } 
    
    ftimer--;

    
    setTimeout(function(){
        fstartTimer();
    }, 1000);
}








 
    

