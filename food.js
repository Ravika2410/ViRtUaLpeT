class food{
    constructor(x,y,w,h)
    {
        this.ing=loadImage("Milk.png");
        this.foodStock=0;
    }

    display()
    {

        var a=1,b=140,c=60;

        db.ref("foodCount").on("value",(d)=>{this.foodStock=d.val()},function(){});

        if(this.foodStock!=0)
        {
            for(var i=0;i<this.foodStock;i++)
            {
                if(a==11)
                {
                    a=1;
                    b+=50;
                    c=60;
                }
                image(this.ing,c,b,50,50);
                a=a+1;
                c+=30;
            }
        }

    }
}