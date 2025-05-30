function validate()
{
    var username=document.getElementById('username').value
    var email=document.getElementById('email').value
    var password=document.getElementById('password').value
    var cpassword=document.getElementById('cpassword').value
    
    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkcpassword(password,cpassword)
}

function checkusername(username)
{
    if(username.length > 7)
    {
        document.getElementById('username').classList.replace('error','success')
        document.getElementById('username').classList.add('success')
        document.getElementById('username_error').innerText=''
    }
    else
    {
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerText='username must contain atleast 8 charecters'
    }
}
function checkemail(email)
{
    if(email.includes('@gmail.com'))
    {
        document.getElementById('email').classList.replace('error','success')
        document.getElementById('email').classList.add('success')
        document.getElementById('email_error').innerText=''
    }
    else
    {
        document.getElementById('email').classList.add('error')
        document.getElementById('email_error').innerText='enter valid email'
    }
}
function checkpassword(password)
{
    if(password.length>8)
    {
        document.getElementById('password').classList.replace('error','success')
        document.getElementById('password').classList.add('success')
        document.getElementById('password_error').innerText=''
    }
    else
    {
        document.getElementById('password').classList.add('error')
        document.getElementById('password_error').innerText='password must be atleast 8 charecters long'
    }
}
function checkcpassword(password,cpassword)
{
    if(password==cpassword && password!='' && cpassword!='')
    {
        document.getElementById('cpassword').classList.replace('error','success')
        document.getElementById('cpassword').classList.add('success')
        document.getElementById('cpassword_error').innerText=''
    }
    else
    {
        document.getElementById('cpassword').classList.add('error')
        document.getElementById('cpassword_error').innerText="passwords don't match"
    }
}