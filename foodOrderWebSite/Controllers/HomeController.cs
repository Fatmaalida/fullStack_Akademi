using ff.Data;
using ff.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace ff.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly DataContext db;
        public HomeController(ILogger<HomeController> logger,DataContext db)
        {
            _logger = logger;
            this.db = db;
        }

        public IActionResult Index()
        {
            var list = db.City.ToList();
            return View(list);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
