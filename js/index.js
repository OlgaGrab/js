const a = Number(prompt(`Input A`));
const b = Number(prompt(`Input B`));
const c = Number(prompt(`Input C`));
 
function solveQuadr(a, b, c) {
     let x, x1, x2;
    if (d > 0) {
        return 'x1 = (-b+sqrd)/(2*a)',
        'x2 = (-b-sqrd)/(2*a)'; }
        else if (d = 0) {
        return 'x = -b/(2*a)';
        }
        else if (d < 0) {
        return 'null';
        }
        const d = disc(a, b, c);
        const sqrd = Math.sqrt(d);
       

function disc(a, b, c) {
return d = b*b-(4*a*c);
}


const result = solveQuadr(a, b, c);
document.write(result);
