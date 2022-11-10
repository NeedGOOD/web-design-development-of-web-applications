function LowerCamеlCase() {
    let strOne = document.getElementById('lower-camel-case-first').value;
    let strTwo = document.getElementById('lower-camel-case-second').value;

    let elem = document.getElementById('block');

    function KebabCase(str) {
        let string = '';

        for (let i = 0; i < str.length; ++i) {
            if (str[i] >= 'a' && str[i] <= 'z') { string += str.charAt(i); }
            else if (str[i] >= 'A' && str[i] <= 'Z') {
                let word = str.charAt(i).toLowerCase();
                string += '-';
                string += word;
            }
        }
        return string;
    }
    elem.innerHTML = `${KebabCase(strOne)}<br>
                      ${KebabCase(strTwo)}`;
}