using ff.Data;
using ff.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ff.Controllers
{
    public class RestaurantController : Controller
    {
        private readonly DataContext _context;

        public RestaurantController(DataContext context)
        {
            _context = context;
        }


        public IActionResult Index()
        {
            var dataliste = GetAllRestaurants(); 
            return View(dataliste);
        }
        
        public List<Restaurant> GetAllRestaurants()
        {
            try
            {
                var restoranlar = _context.Restaurant.ToList();

                
                Console.WriteLine($"Toplam {restoranlar.Count} restoran alındı");

                return restoranlar;
            }
            catch (Exception ex)
            {
                
                Console.WriteLine($"Hata: {ex.Message}");
                return new List<Restaurant>(); 
            }
        }
    }
}
