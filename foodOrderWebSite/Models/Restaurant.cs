using ff.Models.Abstracts;

namespace ff.Models
{
    public class Restaurant:CommonProp
    {
        public int CityId { get; set; }
        public City? City { get; set; }
        public string? Address { get; set; }
        public string? Phone { get; set; }
        public string? Image { get; set; }

        public ICollection<FoodItem>? Foods { get; set; }
        public ICollection<Order>? Orders { get; set; }
    }
}
