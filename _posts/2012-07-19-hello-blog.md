--- 
layout: post
title: "Hello Blog"
author: "Manuel Grundner"
comments: false
---

```cs
namespace Delegate.Blog
{
    public class Program
    {
        bool IsAlive => true;

        [STAThread]
        static void Main(string[] args)
        {
            while(IsAlive)
                System.Console.WriteLine("Write Blog");
        }
    }
}
```