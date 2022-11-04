function IsProperty(obj) {
    for (let key in obj) { return false; }
    return true;
}

let obj = {};

alert(IsProperty(obj));

obj["la-la"] = "wow";

alert(IsProperty(obj));