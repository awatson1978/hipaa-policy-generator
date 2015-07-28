Session.setDefault("isRevealVisible", false);


Template.mainPage.events({
  "keyup #companyNameInput": function (){
    Session.set("companyName", $("#companyNameInput").val());
    if ($("#companyNameInput").val() === "") {
      Session.set("isRevealVisible", false);
    } else {
      Session.set("isRevealVisible", true);
    }
  }
});

Template.mainPage.helpers({
  getCompanyName: function (){
    return Session.get("companyName");
  },
  getRevealVisibility: function (){
    if (Session.get("isRevealVisible") ){
      return "revealVisible";
    } else {
      return "revealHidden";
    }
  }
});
