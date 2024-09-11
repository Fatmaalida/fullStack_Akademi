using ff.Models.Abstracts;

namespace ff.Models
{
    public class Category : CommonProp
    {
        public string? Description { get; set; }
        public string? Image { get; set; }
        public int RestaurantId { get; set; }

        public string? ItemName { get; set; }
        public Restaurant? Restaurant { get; set; }

        public ICollection<FoodItem>? Foods { get; set; }
    }
}
