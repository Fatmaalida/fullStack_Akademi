using ff.Data;
using ff.Models;
using ff.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace ff.Controllers
{
    public class FoodsController : Controller
    {
        private readonly DataContext _context;

        public FoodsController(DataContext context)
        {
            _context = context;
        }

        
        public IActionResult Index(int restoranID, int kategoriID = 4)
        {
            var model = new IDViewModel
            {
                RestaurantID = restoranID,
                CategoryID = kategoriID
            };

            model.Categories = _context.Category.Where(c => c.RestaurantId == restoranID).ToList();

            model.Foods = _context.FoodItem.Where(f => f.Category.RestaurantId == restoranID).ToList();

            return View(model);
        }


        public IActionResult CategoryFoods(int categoryID)
        {
            var foods = _context.FoodItem.Where(x => x.CategoryId == categoryID).ToList();
            return PartialView("_CategoryFoods", foods);
        }

        public IActionResult RestaurantCategories(int restaurantID)
        {
            var categories = _context.Category.Where(x => x.RestaurantId == restaurantID).ToList();
            return PartialView("_RestaurantCategories", categories);
        }

        // Food order
        public IActionResult Order([FromQuery] string id)
        {
            ViewBag.Id = id;
            return View();
        }

        [HttpPost]
        public IActionResult ShowOrder(OrderFoodDetail orderFoodDetails)
        {
            return PartialView("_ShowOrder", orderFoodDetails);
        }
    }
}