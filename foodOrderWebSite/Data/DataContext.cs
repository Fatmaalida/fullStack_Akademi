using ff.Models;
using Microsoft.EntityFrameworkCore;
namespace ff.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<City> City { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<Restaurant> Restaurant { get; set; }
        public DbSet<Category> Category { get; set; }
        public DbSet<FoodItem> FoodItem { get; set; }
        public DbSet<Order> Order { get; set; }
        public DbSet<OrderFoodDetail> OrderFoodDetail { get; set; }
        public DbSet<Payment> Payment { get; set; }
        public DbSet<Cart> Cart { get; set; }
    }
    
}
