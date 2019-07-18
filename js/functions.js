const solution = (pies, allpies) => {
  // Type your solution here 
  //return pies.length;
  piescount = pies.keys();
  previousnum = 0;
  piesums = [];
  //piescount -= 1;
  for (x of pies) {
    //piesums += x[1];
    //return x;
      if(x != "" || x == null){
          getpienum(x);
      }
    
  }
  return piesums;
  function getpienum(piename){
    //console.log(piename);
    //return
    for(p of allpies){
      if(p[0] == piename){
        piesums.push(p[1]+previousnum);
        previousnum = p[1]+previousnum;

      }

    }

  
  }
};

allpies = [["Cherry",1],["Blueberry",2],["Strawberry",3],["Raspberry",5],["Blackberry",-1],["Apple",13]];
searchpies = ["Cherry","Blueberry","Strawberry","Raspberry","Apple"];

console.log(solution(searchpies, allpies));








(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');        
      }, false);
    });
  }, false);
})();
function validateForm(pag){
    //document.getElementById("myForm").submit();
    //console.log("getAPI");
    var encodedURL = "https://api.github.com/users/mburbage";
    $.get(encodedURL, function(data, status){
        //console.log(data);
    });
    return false;//return form.classList.add('was-validated');
    
}
function getGithubBio(){

  var profileName = document.getElementById("userName").value;
  document.getElementById("bioForm").style.display = "none";
  var encodedURL = "https://api.github.com/users/" + profileName;
  $.get(encodedURL, function(data, status){
      //console.log(status);
      buildBioView(data);
  });
  return false;
}
function buildBioView(data){
  //document.getElementById("bioSpin").style.display = "none";
  var bioHTML = '';
  
  bioHTML += '<div id=\"gitAvatar\"><img class=\"avatarImg\" src=\"' + data.avatar_url + '\" alt="Open GitHub Profile" /></div>';
  bioHTML += '<div id=\"gitName\" class=\"gitValue\">' + data.login + '</div>';
  bioHTML += '<div id=\"gitLink\"><a class=\"avatarLink\" href=\"' + data.html_url + '\" title="Open GitHub Profile" target="_blank"><i class="fas fa-external-link-alt" size="2x"></i></a></div>';
  bioHTML += '<div id=\"gitRepo\" class=\"gitValueSml\"><strong>Public Repos:</strong> ' + data.public_repos + ' <br/><strong>Date Created:</strong> ' + jsdate(data.created_at) + '</div>';
  document.getElementById("bioData").innerHTML = bioHTML;
  document.getElementById("bioData").style.display = "block";

  console.log(data);
}
function jsdate(cdate){
  return $.format.date(cdate, "dd/MM/yyyy");
}
