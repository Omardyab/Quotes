alert("for better experince please dont use Chrome, eg use IE, Edge or others :) ")
var userName=prompt("We have many steps in order to check you are real lets start with, what is your Name :) ? ")
let age=prompt('Welcome '+userName+', what is your birth year ?' );
age=parseInt(2021-age); 
alert('you are  '+ age )
let value1=prompt('Now Lets make sure you are not a robot, ' +userName +' please provide 2 INPUTS (A+B) and calculate the summation of both, PLEASE enter A ')
value1=parseInt(value1);
let value2=prompt('PLEASE enter B ')
value2=parseInt(value2);
let value3=prompt('Now calculate C=A+B')
value3=parseInt(value3);
let summ=value1+value2;
if (summ=== value3)
{
     alert('Oh wow, finally a human being :), got sick of robots here!')
     gpass();
     gvlaue();
}
//list of functions 
function gpass()
{
    let passx=prompt('Now, try to guess the password, hint(our instructor name is ) ' + userName );
    while (passx != 'bashar')
{ 
    passx = prompt('Password is incorrect, Please try again')
}
}
function gvlaue()
{    
   if (age >=18 && age < 36)
    { 
        alert('You are doing well so far :). Welcome to my website, ' + userName)
        showimg();
    }
    else if (age <18 || age > 35 )
    { 
        alert('Hello Robot , you can only view our basic content :) you are not a real person :) !! ' + userName) 
    }
    else { alert('have a nice day, ' + userName) }
}
function showimg()
{
    var fav = prompt('Now let us know what your is your favourte Quotee 1-4 ?' , '1-Nelson Mandela,2-Walt Disney,3-Eleanor Roosevelt,4-Oprah Winfrey');
    var h=prompt('how many times you would like to see it before downloading it')
    
    if (fav == 1)
    {  
        document.write('<h3>' +'Nelson Mandela: The greatest glory in living lies not in never falling, but in rising every time we fall'+'</h3>')
        alert('You have choosen a fantastic one, scroll down to see it, ' +userName)
        for (var i=0;i<h;i++)
        {
            document.write('<img src ="data:image/jpeg;base64,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">')
        }
    }
    else if (fav == 2)
    {
        
        alert('You have choosen a fantastic one, scroll down to see it, ' +userName)
        document.write('<h3>' +'Walt Disney : The way to get started is to quit talking and begin doing. -Walt Disney'+'</h3>')
        document.write('The way to get started is to quit talking and begin doing. -Walt Disney');
        for (var i=0;i<h;i++)
        {  
             document.write('<img src ="https://d23.com/app/uploads/2013/04/1180-x-600-About-Walt-Disney-1180x600.jpg">' )
        } 
    
    }
    else if (fav == 3)
   {  
        
        alert('You have choosen a fantastic one, scroll down to see it, ' +userName)
        document.write('<h3>' +'Eleanor Roosevelt: If life were predictable it would cease to be life, and be without flavor." '+'</h3>')
        document.write('')
        for (var i=0;i<h;i++)
        {
            document.write('<img src="https://i.pinimg.com/originals/09/ce/68/09ce680199854d6174ca95f40d4bd10f.jpg">')
        }
   }
   else if (fav == 4)
   {    
       alert('You have choosen a fantastic one, scroll down to see it, ' +userName)
       document.write('<h3>' +'Oprah Winfrey: If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough -Oprah Winfrey" '+'</h3>')
       
        for (var i=0;i<h;i++)
        {
            document.write('<img src="https://i0.wp.com/i.dailymail.co.uk/1s/2021/03/12/17/40389808-9355601-image-a-1_1615569911871.jpg?ssl=1">')
        }
   }
}


