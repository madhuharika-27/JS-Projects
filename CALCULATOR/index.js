function display(value)
{
    document.getElementById('textarea').value+=value

}   
function calculate()
{
    var value = document.getElementById('textarea').value
    var answer=eval(value)
    document.getElementById('textarea').value=answer
}
function clr()
{
    document.getElementById('textarea').value=''
}