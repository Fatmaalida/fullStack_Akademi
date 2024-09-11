using ff.Models.Abstracts;

namespace ff.Models
{
    public class User:CommonProp
    {
        public string? Username { get; set; }
        public string? Password { get; set; }
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public int CityId { get; set; }
        public City? City { get; set; }

        public ICollection<Order>? Orders { get; set; }
    }
}
