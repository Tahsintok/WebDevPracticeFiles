//using System;

namespace consolepractice1;

class Program
{
    static void Main(string[] args)
    {
        /*
        Console.WriteLine("Enter your name :");
        string name = Console.ReadLine();
        Console.WriteLine("Enter your Surname :");
        string surname = Console.ReadLine();
        Console.WriteLine(name+" "+ surname);
        */
        int value=4;
        Console.WriteLine(value);
        string name= "test";
        Console.WriteLine(name);
        //Byte range 0-255 / 1 Byte
        byte b=5; 
        //sbyte range -128-127 / 1 Byte
        sbyte c=100;

        //2 byte
        short d= -40;
        ushort us=50;

        //2 byte
        Int16 i16=14;
        //4 byte
        int i=45;
        Int32 i32=8745;
        Int64 i64=452;

        uint ui=26;
        //8 byte
        long l=56;

        // Rational numbers
        float f=77.4f ;
        double ds=1.232 ;
        decimal de =8.2323M ; 

        char ch = 'e';
        string str = "name";

        bool b1= true;
        bool b2 = 10<1;
        
        //Print Date
        DateTime date= DateTime.Now;
        Console.WriteLine(date);

        //Object is assigned  every type of variables
        object o1= "a";

        //string methods

        //assign empty string
        string str1=string.Empty;
        str1 ="name surname";
        string str2= "44";
        string combine = str1+" "+ str2;

        //type conversion
        string s40= "40";
        int int20=20;

        string newValue= s40 + int20.ToString();

        Console.WriteLine(newValue);

        int int60=int20+ Convert.ToInt32(s40);
        int intt60=int20+ int.Parse(s40);

        Console.WriteLine(int60);

        //printing only date without hour
        string datetime = DateTime.Now.ToString("dd/MM/yyyy");
        Console.WriteLine(datetime);


    }
}
