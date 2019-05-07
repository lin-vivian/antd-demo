export const useGet = (url, callback) => {
    var oAjax = new XMLHttpRequest();
    oAjax.open('GET', url, true);
    oAjax.onreadystatechange = function () {
        if (oAjax.readyState === 4 && oAjax.status == '200') {
            callback(oAjax.responseText);
        }
    }
    oAjax.send();
}