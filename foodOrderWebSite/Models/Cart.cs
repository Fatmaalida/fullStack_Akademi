// Cart.cs
namespace ff.Models
{
    public class Cart
    {
        public int Id { get; set; }
        public int FoodId { get; set; }
        public string? Image { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
    }
}


