// credit for this JS goes to Chris Engram who got this from the millenials to snake people extension

var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/tent city/gi, 'Concentration Camp');
            var secondReplacedText = text.replace(/detention center/gi, 'Concentration Camp');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
            if (secondReplacedText !== text) {
              element.replaceChild(document.createTextNode(secondReplacedText), node);
            }
        }
    }
}
