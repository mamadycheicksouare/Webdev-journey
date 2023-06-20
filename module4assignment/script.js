var names = new Array();
names[0] = "Hilary" ;
names[1] = "jack" ;
names[2] = "Nestor" ;
names[3] = "Jonas" ;
names[4] = "Emily" ;
names[5] = "Jack" ;
names[6] = "junior" ;
names[7] = "Paul" ;


for(var i =0; i< names.length; i++)
{
    if(names[i].charAt(0) === 'j'|| names[i].charAt(0) === 'J')
    {
        console.log("Goodbye" + names[i]);
    }
     else
    {
        console.log("Hello" + names[i]);
    }
}
