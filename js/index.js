document.write('<br>'); 
document.write(userName);

const a = Number(prompt('Input A'));
const b = Number(prompt('Input B'));
const c = Number(prompt('Input C'));
 

function solveQuadr(a, b, c) {
    if (a == 0) {
        return 'bx+c=0'; 
    }
    else if (b == 0) { 
        return 'ax+c=0'; }
    else if (c == 0) {
        return ''
    }
    
}
function disc(D) {
if (D > 0) {
    return 'x1,2 =(-b ± √D)/2a';
    } else if (D == 0) {
        return 'x = -b/2a';
    } else if (D < 0) {
        return 'x1,2 =(-b±i√-D)/2a'
    }
}