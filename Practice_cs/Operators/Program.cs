using System;
using System.Net.Sockets;
namespace Operators;

class Program
{
    static void Main(string[] args)
    {
      //Assign

      int x=5;
      int y= 10;
      y+=2;
      x *=4;
      Console.WriteLine(x);

    //boolean operators (||, &&, !)
    bool isSuccess = true;
    bool isCompleted = false;
    if(isCompleted && isCompleted)
      Console.WriteLine("Good");
    
    if(isCompleted || !isCompleted){
      Console.WriteLine("Nice");
    }


    int a=4;
    int b=7;
    bool result = a<b;
    //operators (==,!=, <, >, >=,<=)
    Console.WriteLine(result);
    result=a<=b;
    Console.WriteLine(result);

    //Aritmetic Operators  (+, -, *, /, %, ++, --)
    int num1= 50;
    int num2= 10;
    int result1= num1/num2;
    Console.WriteLine(result1);
    result1= num1*num2;
    Console.WriteLine(result1);
    result1=num1%num2;
    Console.WriteLine(result1);
    
    }
}
