public static class MockData
{
    public static List<Car> Cars { get; set; } = new List<Car>
    {
        new Car { Id = 1, Make = "Toyota", Model = "Hilux", RegistrationExpiry = DateTime.Now.AddMinutes(1) },
        new Car { Id = 2, Make = "Mazda", Model = "MX-5", RegistrationExpiry = DateTime.Now.AddDays(-5) },
        new Car { Id = 3, Make = "Ford", Model = "Everest", RegistrationExpiry = DateTime.Now.AddDays(20) },
    };
}
