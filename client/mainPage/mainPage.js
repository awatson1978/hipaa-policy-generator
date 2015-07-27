Template.mainPage.events({
  "keyup #companyNameInput": function (){
    Session.set("companyName", $("#companyNameInput").val());

  }
});

Template.mainPage.helpers({
  getCompanyName: function (){
    return Session.get("companyName");
  }
});
