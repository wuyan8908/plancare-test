using Microsoft.AspNetCore.SignalR;

public class RegistrationCheckerService : BackgroundService
{
    private readonly IHubContext<CarHub> _hubContext;

    public RegistrationCheckerService(IHubContext<CarHub> hubContext)
    {
        _hubContext = hubContext;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            var carStatuses = MockData.Cars.Select(car => new
            {
                car.Id,
                car.Make,
                car.Model,
                IsExpired = car.RegistrationExpiry < DateTime.Now
            }).ToList();

            await _hubContext.Clients.All.SendAsync("ReceiveCarStatuses", carStatuses);
            await Task.Delay(500, stoppingToken);
        }
    }
}
