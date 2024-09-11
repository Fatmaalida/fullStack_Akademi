using ff.Models.Abstracts;

namespace ff.Models
{
    public class FoodItem:CommonProp
    {
        public int CategoryId { get; set; }
        public Category? Category { get; set; }
        public string? FoodName { get; set; }
        public decimal Price { get; set; }
        public string? Image { get; set; }
        public string? Description { get; set; }
        public int RestaurantId { get; set; }
        public Restaurant? Restaurant { get; set; }
    }
}
