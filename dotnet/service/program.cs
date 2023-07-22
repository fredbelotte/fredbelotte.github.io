#region dependencies

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

#endregion

var app = builder.Build();

app.MapControllers();

await app.RunAsync();
