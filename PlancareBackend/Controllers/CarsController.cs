using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class CarsController : ControllerBase
{
    [HttpGet]
    public IActionResult GetCars([FromQuery] string? make)
    {
        var cars = MockData.Cars;
        if (!string.IsNullOrEmpty(make))
        {
            cars = cars.Where(c => c.Make?.Contains(make, StringComparison.OrdinalIgnoreCase) ?? false).ToList();
        }
        return Ok(cars);
    }
}
