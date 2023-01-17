using BlazorAppWasmPWALottieRive;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.Extensions.Logging;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System.ComponentModel;
using System.Numerics;
using System.Reflection.Emit;
using System.Runtime.Intrinsics.X86;
using System.Security.Cryptography.X509Certificates;
using System.Xml.Linq;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");
builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });
builder.Services.AddSingleton<NumberingHelper>();
string rootpath = System.IO.Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "wwwroot");
var b = $"Physical location {AppDomain.CurrentDomain.BaseDirectory}";
var c = $"AppContext.BaseDir {AppContext.BaseDirectory}";
System.Console.WriteLine(b);
System.Console.WriteLine(c);
System.Console.WriteLine(rootpath);


await builder.Build().RunAsync();

//Copyright � 2021 Design Barn Inc.

//Permission is hereby granted, free of charge, to any person obtaining a copy of the public animation files available for download at the LottieFiles site(�Files�) to download, reproduce, modify, publish, distribute, publicly display, and publicly digitally perform such Files, including for commercial purposes, provided that any display, publication, performance, or distribution of Files must contain(and be subject to) the same terms and conditions of this license.Modifications to Files are deemed derivative works and must also be expressly distributed under the same terms and conditions of this license.You may not purport to impose any additional or different terms or conditions on, or apply any technical measures that restrict exercise of, the rights granted under this license.This license does not include the right to collect or compile Files from LottieFiles to replicate or develop a similar or competing service.

//Use of Files without attributing the creator(s) of the Files is permitted under this license, though attribution is strongly encouraged. If attributions are included, such attributions should be visible to the end user.

//FILES ARE PROVIDED �AS IS�, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.EXCEPT TO THE EXTENT REQUIRED BY APPLICABLE LAW, IN NO EVENT WILL THE CREATOR(S) OF FILES OR DESIGN BARN, INC.BE LIABLE ON ANY LEGAL THEORY FOR ANY SPECIAL, INCIDENTAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES ARISING OUT OF THIS LICENSE OR THE USE OF SUCH FILES.