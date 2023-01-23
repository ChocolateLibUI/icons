export let generateFunction = (name: string, icon: string) => {
    let svg: SVGSVGElement;
    return function (this: any) {
        if (svg) {
            return svg.cloneNode(true);
        } else {
            svg = <SVGSVGElement>(new DOMParser().parseFromString(icon, 'image/svg+xml')).firstChild;
            svg.setAttribute('icon', name);
            return svg.cloneNode(true);
        }
    }
}
