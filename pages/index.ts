import * as icon from "../src";


for (const key in icon) {
    console.log(key.split('_'));

    document.body.appendChild(icon[key]());
}
