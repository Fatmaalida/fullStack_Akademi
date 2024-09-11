using ff.Models;

namespace ff.Models
{
    public class IDViewModel
    {
        public int RestaurantID { get; set; }
        public int CategoryID { get; set; }
        public List<Category>? Categories { get; set; } // Kategoriler
        public List<FoodItem>? Foods { get; set; } // Yemekler
    }
}