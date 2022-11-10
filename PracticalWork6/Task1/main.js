function KebabCase() {
    let strOne = document.getElementById('kebab-case-first').value;
    let strTwo = document.getElementById('kebab-case-second').value;

    let elem = document.getElementById('block');

    function LowerCamеlCase(str) {
        let string = '';

        for (let i = 0; i < str.length; ++i) {
            if (str[i] != '-') { string += str.charAt(i); }
            else if (str[i] == '-') {
                string += str.charAt(i + 1).toUpperCase();
                ++i;
            }
        }
        return string;
    }
    elem.innerHTML = `${LowerCamеlCase(strOne)}<br>
                      ${LowerCamеlCase(strTwo)}`;
}