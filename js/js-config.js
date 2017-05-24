var elem = document.getElementById("select-slider").childNodes;
var count = 0;
var args = Array.prototype.slice.call(elem);
function getElemts(element){
    return element.classList !== undefined
}
var res = args.filter(getElemts);
var l = res.length;
function pushElement(itemDirection) {
    if(itemDirection === 1){
        if(count == l-1){
            res[count].classList.remove('show');
            count = 0;
            res[count].classList.add('show');
        }
        else {
            res[count].classList.remove('show');
            res[count+itemDirection].classList.add('show');
            count += 1
        }
    }
    if(itemDirection === -1){
        if(count == 0){
            res[count].classList.remove('show');
            count = l-1;
            res[count].classList.add('show');
        }
        else {
            res[count].classList.remove('show');
            res[count+itemDirection].classList.add('show');
            count -= 1
        }
    }

}
