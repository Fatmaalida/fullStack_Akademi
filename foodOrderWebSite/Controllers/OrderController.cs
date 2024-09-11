using Microsoft.AspNetCore.Mvc;

namespace ff.Controllers
{
    public class OrderController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
