const brackets = (exp) => {
    let bracketArr = [];
    for (let b in exp){
        if(exp[b] == '(' || exp[b] == '[' || exp[b] == '{'){
            bracketArr.push(exp[b]);
        }
        else{
            switch(exp[b]){
                case ')':
                    if(bracketArr[bracketArr.length - 1] == '(')
                        bracketArr.pop();
                    else
                        bracketArr.unshift(')');
                    break;
                case '}':
                    if(bracketArr[bracketArr.length - 1] == '{')
                        bracketArr.pop();
                    else
                        bracketArr.unshift('}');
                    break;
                case ']':
                    if(bracketArr[bracketArr.length - 1] == '[')
                        bracketArr.pop();
                    else
                        bracketArr.unshift(']');
                    break;
            }
        }
    }
    return bracketArr;
}

const res = brackets("(){[]()}");
if(res.length === 0)
    console.log("Brackets Matches");
else{
    console.log("Brackets does not Matches");
}