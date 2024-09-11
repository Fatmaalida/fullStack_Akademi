using ff.Data;
using ff.Models;
using Microsoft.AspNetCore.Mvc;

namespace ff.Controllers
{
    public class CartController : Controller
    {
        private readonly DataContext _context;

        public CartController(DataContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult AddToCart(int foodId)
        {
            var foodItem = _context.FoodItem.FirstOrDefault(f => f.Id == foodId);
            if (foodItem == null)
            {
                return NotFound();
            }

            var cartItem = new Cart
            {
                FoodId = foodItem.Id,
                Title = foodItem.FoodName,
                Description = foodItem.Description,
                Price = foodItem.Price,
                Quantity = 1,
                Image = foodItem.Image
            };

            _context.Cart.Add(cartItem);
            _context.SaveChanges();

            return RedirectToAction("Index", "Cart");
        }

        public IActionResult Index()
        {
            var cartItems = _context.Cart.ToList();
            return View(cartItems);
        }
    }
}
