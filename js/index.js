const a = Number(prompt(`Input A`));
const b = Number(prompt(`Input B`));
const c = Number(prompt(`Input C`));
 
function solveQuadr(a, b, c) {
    let x, x1, x2;
    const d = disc(a, b, c);
    if (d > 0) {
        const sqrd = Math.sqrt(d);
        return 'x1 = ' + (-b+sqrd)/(2*a) + ', x2 = ' + (-b-sqrd)/(2*a); }
        else if (d === 0) {
        return 'x = ' + -b/(2*a);
        }
        else if (d < 0) {
        return 'null';
        }
}
       
    function disc(a, b, c) {
    return b*b-4*a*c;
}

const result = solveQuadr(a, b, c);
document.write(result);
