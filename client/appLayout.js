Session.set("resize", null);
Session.setDefault('appHeight', $(window).height());
Session.setDefault('appWidth', $(window).width());
Session.setDefault("glassOpacity", .96);



Meteor.startup(function () {
  window.addEventListener('resize', function(){
    Session.set("resize", new Date());
    Session.set("appHeight", $(window).height());
    Session.set("appWidth", $(window).width());
  });
  Session.set("companyName", "");
});




/*Session.setDefault('transparencyDivHeight', 100);
Session.setDefault('transparencyDivLeft', 0);
*/



//==================================================================================================

Template.appLayout.rendered = function(){
  Template.appLayout.layout();
}

Template.appLayout.helpers({
  resized: function () {
    Template.appLayout.layout();
  },
  getStyle: function () {
    return parseStyle({
      "left": Session.get('transparencyDivLeft') + "px;"
    });
  }
});


Template.appLayout.layout = function(){
  Session.set('transparencyDivHeight', $('#innerPanel').height() + 80);
  console.log('appWidth', Session.get('appWidth'));
  if(Session.get('appWidth') > 768){
    Session.set('transparencyDivLeft', (Session.get('appWidth') - 768) * 0.5);
  }else{
    Session.set('transparencyDivLeft', 0);
  }
}
Template.appLayout.delayedLayout = function(timeout){
  Meteor.setTimeout(function(){
    Template.appLayout.layout();
  }, timeout);
}

Template.registerHelper("getOpacity", function(){
  return "background: linear-gradient(225deg, transparent 28.28px, rgba(255,255,255," + Session.get('glassOpacity') + ") 0) top right;"
});







//==================================================================================================




parseStyle = function(json){
  var result = "";
  $.each(json, function(i, val){
    result = result + i + ":" + val + " ";
  });
  return result;
}
