function Add(){
    const op1=+(document.getElementById('operand1').value)
    const op2=+(document.getElementById('operand2').value)
    //alert(op1+op2)
    const res=op1+op2
    document.getElementById('result').value=res
}
function Subtract(){
    const op1=+(document.getElementById('operand1').value)
    const op2=+(document.getElementById('operand2').value)
    //alert(op1-op2)
    const res=op1-op2
    document.getElementById('result').value=res
}
function Multipy(){
    const op1=+(document.getElementById('operand1').value)
    const op2=+(document.getElementById('operand2').value)
    const res=op1*op2
    document.getElementById('result').value=res
    // alert(op1*op2)
}
function Divide(){
    const op1=+(document.getElementById('operand1').value)
    const op2=+(document.getElementById('operand2').value)
    const res=op1/op2
    document.getElementById('result').value=res
    // alert(op1/op2)
}
function Power(){
    const op1=+(document.getElementById('operand1').value)
    const op2=+(document.getElementById('operand2').value)
    const res=op1**op2
    document.getElementById('result').value=res
    // alert(op1**op2)
}