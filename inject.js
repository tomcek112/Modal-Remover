// adapted with pride from http://stackoverflow.com/questions/1118198/how-can-you-figure-out-the-highest-z-index-in-your-document
// thanks a lot to http://stackoverflow.com/users/136852/flo
function findHighestZIndex(elem)
{
  var elems = document.getElementsByTagName(elem);
  var highest = 0;
  var ret;
  for (var i = 0; i < elems.length; i++)
  {
    var zindex=document.defaultView.getComputedStyle(elems[i],null).getPropertyValue("z-index");
    var obj = elems[i]
    if ((zindex > highest) && (zindex != 'auto'))
    {
      highest = zindex;
      ret = obj
    }
  }
  return ret;
}


(function() {

	var bla = findHighestZIndex('div');
	bla.remove();
	console.log(bla)



})();






